import { StatusBar } from "expo-status-bar";
import React from "react";
import { Component } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Speaker from "../../components/Speaker";
import TTS from "../../components/TextToSpeech";
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

var textToSpeak1 = "Here is the power button";
var textToSpeak2 = "Here are\n the \nvolume buttons";

const Gesture3 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.outerContainer}>
      <Header></Header>
      <View style={styles.bigContainer}>
        <View style={styles.container1}>
          <Text style={styles.text2}>{textToSpeak2}</Text>
          <View style={styles.speaker}>
            <Speaker text={textToSpeak1 + textToSpeak2}></Speaker>
          </View>
        </View>
        <View style={styles.container2}>
          <Text style={styles.text1}>{textToSpeak1}</Text>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require("../../assets/firescreenshot.png")}
              resizeMode="stretch"
            />
          </View>
        </View>
      </View>
      <View style={styles.appButtonView}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Gesture4")}
          style={styles.appButtonContainer}
        >
          <Text style={styles.appButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
      <Footer></Footer>
    </SafeAreaView>
  );
};

export default Gesture3;
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
  },
  container2: {
    width: "70%",
  },
  text2: {
    textAlign: "center",
    fontSize: 50,
  },
  speaker: {
    position: "relative",
    top: "5%",
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
    width: "64%",
    height: "80%",
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
