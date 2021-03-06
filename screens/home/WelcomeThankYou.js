import { StatusBar } from "expo-status-bar";
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
import { firestore } from "../../config/firebase";
import * as firebase from "firebase";
import AsyncStorage from "@react-native-community/async-storage";

const WelcomeThankYou = ({ route, navigation }) => {
  var textToSpeak =
    "Thanks for watching the video.\n\nNow we will go to the home screen.";
  
  const [id, setID] = useState("x");
  const prepare = async () => {
    AutoReadText(route.params.readText, textToSpeak);
    try {
      const getID = await AsyncStorage.getItem("id");
      if (getID != null) {
        setID(getID);
        console.log(id);
        const ref = firestore.collection("ScreenVisits").doc(getID);
        const increment = firebase.firestore.FieldValue.increment(1);
        ref.update({ home5: increment }).catch((e) => {
          console.log(e);
        });
      }
    } catch (error) {
      console.log("error in prepare");
    }
  };
  useEffect(() => {
    prepare();
  }, []);

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
        next={"WelcomeTutorials"}
        back={"WelcomeIntroductoryVideo"}
        navigation={navigation}
        readText={route.params.readText}
      ></BottomButton>
      <Footer></Footer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    position: "relative",
  },
  container: {
    flexDirection: "row",
    width: "100%",
    flex: 1,
    marginBottom: "10%",
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
    marginBottom: "15%",
    //width: 100,
  },
});

export default WelcomeThankYou;
