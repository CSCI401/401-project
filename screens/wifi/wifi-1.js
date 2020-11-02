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
import { firestore} from "../../config/firebase";
import * as firebase from "firebase"

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from "react-native";

const Wifi1 = ({ route, navigation }) => {
  const [name, setName] = useState("friend");
  const [id, setID] = useState("x");
  var textToSpeak = `Hello ${name}, welcome to the \nWifi tutorial!`;

  const prepare = async () => {
    AutoReadText(route.params.readText, textToSpeak);
    try {
      const getName = await AsyncStorage.getItem("name");
      const getID = await AsyncStorage.getItem("id");
      if (getName != null && getID != null) {
        setName(getName);
        setID(getID);
        console.log(id);
        const ref = firestore.collection('ScreenVisits').doc(getID);
        const increment = firebase.firestore.FieldValue.increment(1);
        ref.update({ wifi1 :increment }).catch(e=>{console.log(e)});
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
    bottom: "10%",
  },
});
