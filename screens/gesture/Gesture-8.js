import { StatusBar } from "expo-status-bar";
import { Component } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Speaker from "../../components/Speaker";
import AutoReadText from "../../components/AutoReadText";
import BottomButton from "../../components/BottomButtons";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React, { useEffect, useState } from "react";
import { firestore} from "../../config/firebase";
import * as firebase from "firebase"
import AsyncStorage from "@react-native-community/async-storage";


const Gesture8 = ({ route, navigation }) => {
  var textToSpeak = "Tap this button to flip between open apps.\n";
  
  const [id, setID] = useState("x");
  const prepare = async () => {
    AutoReadText(route.params.readText, textToSpeak);
    try {
      const getID = await AsyncStorage.getItem("id");
      if (getID != null) {
        setID(getID);
        console.log(id);
        const ref = firestore.collection('ScreenVisits').doc(getID);
        const increment = firebase.firestore.FieldValue.increment(1);
        ref.update({ gesture8 :increment }).catch(e=>{console.log(e)});
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
        <View style={styles.container1}>
          <Image
            style={styles.image}
            source={require("../../assets/switchPagesButtonScreenshot.png")}
            resizeMode="stretch"
          />
          <Text style={styles.text}>{textToSpeak}</Text>
        </View>
        <View style={styles.container2}>
          <Image
            style={styles.backimage}
            source={require("../../assets/squarebutton.png")}
            resizeMode="stretch"
          />
        </View>
      </View>
      <View style={styles.speaker}>
        <Speaker text={textToSpeak}></Speaker>
      </View>
      <BottomButton
        next={"Gesture9"}
        back={"Gesture7"}
        navigation={navigation}
        readText={route.params.readText}
      ></BottomButton>
      <Footer></Footer>
    </SafeAreaView>
  );
};

export default Gesture8;
const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    position: "relative",
    width: "100%",
  },
  container: {
    flexDirection: "row",
    width: "100%",
    flex: 1,
    top: "2%",
    alignItems: "center",
    flexWrap: "wrap",
  },
  container1: {
    width: "90%",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  container2: {
    width: "10%",
  },
  text: {
    justifyContent: "flex-start",
    top: "0%",
    marginLeft: "5%",
    fontSize: 50,
  },
  appButtonView: {
    width: "100%",
    position: "relative",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  appButtonContainer: {
    width: "25%",
    bottom: "70%",
    borderWidth: 3,
    borderRadius: 20,
    borderColor: "black",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  appButtonText: {
    fontSize: 60,
  },
  imageContainer: {
    width: "100%",
    position: "relative",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "50%",
    height: "65%",
    position: "relative",
    top: "0%",
  },
  speaker: {
    position: "relative",
    bottom: "9%",
  },
  backimage: {
    width: "100%",
    height: "7%",
    position: "relative",
    top: "26%",
    right: "30%",
  },
});
