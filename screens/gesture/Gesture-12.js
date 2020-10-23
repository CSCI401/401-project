import { StatusBar } from "expo-status-bar";
import { Component } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Speaker from "../../components/Speaker";
import AutoReadText from "../../components/AutoReadText";
import BottomButton from "../../components/BottomButtons";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";

import React, { useEffect, useState } from "react";
import { firestore} from "../../config/firebase";
import * as firebase from "firebase"
import AsyncStorage from "@react-native-community/async-storage";


const Gesture12 = ({ route, navigation }) => {
  var textToSpeak = "You can also search for an app with the name.";
  AutoReadText(route.params.readText, textToSpeak);

  const [id, setID] = useState("x");
  const prepare = async () => {
    try {
      const getID = await AsyncStorage.getItem("id");
      if (getID != null) {
        setID(getID);
        console.log(id);
        const ref = firestore.collection('ScreenVisits').doc(getID);
        const increment = firebase.firestore.FieldValue.increment(1);
        ref.update({ gesture12 :increment }).catch(e=>{console.log(e)});
      }

    } catch (error) {
      console.log("error in prepare");
    }
  };
  useEffect(() => {
    prepare();
  },[]);
  
  return (
    <SafeAreaView style={styles.outerContainer}>
      <Header navigation={navigation}></Header>
      <View style={styles.container}>
        <Text style={styles.text}>{textToSpeak}</Text>
      </View>
      <Image
        style={styles.image}
        source={require("../../assets/searchBarScreenshot.png")}
        resizeMode="stretch"
      />
      <View style={styles.speakerContainer}>
        <Speaker text={textToSpeak} style={styles.textButton}></Speaker>
      </View>
      <BottomButton
        next={"Gesture13"}
        back={"Gesture11"}
        navigation={navigation}
        readText={route.params.readText}
      ></BottomButton>
      <Footer></Footer>
    </SafeAreaView>
  );
};

export default Gesture12;
const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    position: "relative",
    width: "100%",
  },
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  text: {
    textAlign: "center",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    fontSize: 50,
    marginTop: "10%",
  },
  image: {
    width: "47%",
    height: "47%",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    left: "28%",
    top: "0%",
  },
  speakerContainer: {
    position: "relative",
    marginBottom: "10%",
  },
});
