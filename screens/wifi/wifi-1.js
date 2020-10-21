import { StatusBar } from "expo-status-bar";
import { Component } from "react";
import Wifi2 from "./wifi-2.js";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Speaker from "../../components/Speaker";
import AutoReadText from "../../components/AutoReadText";
import BottomButton from "../../components/BottomButtons";
import AsyncStorage from "@react-native-community/async-storage";
import React, { useEffect, useState } from "react";
import { firestore } from "../../config/firebase";

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

const Wifi1 = ({ route, navigation }) => {
  AutoReadText(route.params.readText, textToSpeak);

  const [name, setName] = useState("friend");
  const [id, setID] = useState("x");
  var textToSpeak = `Hello ${name}, would you like to be\nread the tutorial?`;

  const prepare = async () => {
    try {
      const getName = await AsyncStorage.getItem("name");
      const getID = await AsyncStorage.getItem("id");
      if (getName != null && getID != null) {
        setName(getName);
        setID(getID);
      }
    } catch (error) {
      console.log("error in prepare");
    }
  };

  useEffect(() => {
    prepare();
    var number = 0;
    var docRef = firestore.collection("ScreenVisits").doc(id);
    docRef
      .get()
      .then(function (doc) {
        if (doc.exists) {
          const data = doc.data();
          number = data.wifi1;
          console.log("line 57 number is ", number);
        } else {
          console.log("No such document!");
        }
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });

    //need to figure out why it's not updating firestore
    var setWithMerge = docRef.set({ wifi1: number + 1 }, { merge: true });
  });

  return (
    <SafeAreaView style={styles.outerContainer}>
      <Header navigation={navigation}></Header>
      <View style={styles.container}>
        <Text style={styles.text}>{textToSpeak}</Text>
      </View>
      <View style={styles.speaker}>
        <Speaker text={textToSpeak}></Speaker>
      </View>
      <BottomButton
        next={"Wifi2"}
        back={"WelcomeTutorials"}
        navigation={navigation}
        readText={route.params.readText}
      ></BottomButton>
      <Footer></Footer>
    </SafeAreaView>
  );
};

export default Wifi1;
// <Image source={require("./speaker.png")} />
const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    position: "relative",
  },
  container: {
    flexDirection: "row",
    width: "100%",
    flex: 1,
    bottom: "10%",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },

  text: {
    textAlign: "center",
    fontSize: 60,
  },
  speaker: {
    position: "relative",
    bottom: "5%",
  },
  buttonView: {
    width: "100%",
    flex: 1,
    position: "relative",
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "2%",
  },
  YesButtonContainer: {
    //top: "25%",
    width: "25%",
    borderWidth: 3,
    borderRadius: 20,
    borderColor: "black",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    margin: "2%",
  },
  YesButtonText: {
    fontSize: 60,
  },
  NoButtonContainer: {
    //top: "25%",
    width: "25%",
    borderWidth: 3,
    borderRadius: 20,
    borderColor: "black",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    margin: "2%",
  },
  NoButtonText: {
    fontSize: 60,
  },
  speaker: {
    position: "relative",
    bottom: "10%",
    //width: 100,
  },
});
