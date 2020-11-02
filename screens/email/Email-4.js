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

const Email4 = ({ route, navigation }) => {
  var textToSpeak2 = "Next, click on the email app.";
  const [id, setID] = useState("x");
  const prepare = async () => {
    AutoReadText(route.params.readText, textToSpeak2);
    try {
      const getID = await AsyncStorage.getItem("id");
      if (getID != null) {
        setID(getID);
        console.log(id);
        const ref = firestore.collection('ScreenVisits').doc(getID);
        const increment = firebase.firestore.FieldValue.increment(1);
        ref.update({ email4:increment }).catch(e=>{console.log(e)});
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
      <View style={styles.bigContainer}>
        <View style={styles.container1}>
          <Text style={styles.text2}>{textToSpeak2}</Text>
          <Image
            style={styles.image2}
            source={require("../../assets/gmailApp.png")}
          />
          <View style={styles.speaker}>
            <Speaker text={textToSpeak2}></Speaker>
          </View>
        </View>
        <View style={styles.container2}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require("../../assets/emailAppScreenshot.png")}
              resizeMode="stretch"
            />
          </View>
        </View>
      </View>
      <BottomButton
        next={"Email5"}
        back={"Email3"}
        navigation={navigation}
        readText={route.params.readText}
      ></BottomButton>
      <Footer></Footer>
    </SafeAreaView>
  );
};

export default Email4;
const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    position: "relative",
  },
  bigContainer: {
    flexDirection: "row",
    width: "100%",
    flex: 1,
    top: "5%",
    alignItems: "center",
    flexWrap: "wrap",
  },
  text1: {
    textAlign: "center",
    fontSize: 50,
  },
  container1: {
    width: "30%",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  container2: {
    width: "70%",
  },
  text2: {
    textAlign: "center",
    fontSize: 50,
    //marginBottom: "100%",
  },
  speaker: {
    position: "relative",
    top: "5%",
  },
  image2: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    width: "75%",
    height: "25%",
  },
  imageContainer: {
    width: "100%",
    position: "relative",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    top: "0%",
    width: "70%",
    height: "90%",
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
    marginBottom: "10%",
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
});
