import { StatusBar } from "expo-status-bar";
import React from "react";
import { Component } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WelcomeTutorials from "../home/WelcomeTutorials.js";
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

const Wifi14 = ({ navigation }) => {
  const textToSpeech =
    "You might have select the wrong wifi or enterd a wrong password. Please go back to previous steps and try again. If it still doesn't work, please call a family member or technician to help you.";
  return (
    <SafeAreaView style={styles.outerContainer}>
      <Header></Header>
      <View style={styles.container}>
        <Text style={styles.text}>{textToSpeech}</Text>
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity
          onPress={() => navigation.navigate("WelcomeTutorials")}
          style={styles.YesButtonContainer}
        >
          <Text style={styles.YesButtonText}>Go back to home page</Text>
        </TouchableOpacity>
      </View>
      <Footer></Footer>
    </SafeAreaView>
  );
};

export default Wifi14;
// <Image source={require("./speaker.png")} />
const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    position: "relative",
  },
  container: {
    flexDirection: "row",
    top: "5%",
    width: "90%",
    left: "4%",
    flex: 1,
    bottom: "10%",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },

  image1: {
    alignItems: "center",
    position: "absolute",
    top: "80%",
    left: "10%",
    width: 400,
    height: 300,
  },
  text: {
    textAlign: "center",
    fontSize: 40,
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
    width: "40%",
    borderWidth: 3,
    borderRadius: 20,
    borderColor: "black",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    margin: "2%",
  },
  YesButtonText: {
    fontSize: 40,
  },
});