import { StatusBar } from "expo-status-bar";
import React from "react";
import { Component } from "react";
import Wifi7 from "./wifi-7.js";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
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
import Speaker from "../../components/Speaker";

const Wifi6 = ({ navigation }) => {
  var textToSpeak =
    "Next, you need to select your wifi \nand enter the passwords.\n \nDo you know what they are?";
  return (
    <SafeAreaView style={styles.outerContainer}>
      <Header></Header>
      <View style={styles.container}>
        <Text style={styles.text}>{textToSpeak}</Text>
        <View style={styles.speaker}>
          <Speaker text={textToSpeak}></Speaker>
        </View>
      </View>

      <View style={styles.buttonView}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Wifi11")}
          style={styles.YesButtonContainer}
        >
          <Text style={styles.YesButtonText}>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Wifi7")}
          style={styles.NoButtonContainer}
        >
          <Text style={styles.NoButtonText}>No</Text>
        </TouchableOpacity>
      </View>
      <Footer></Footer>
    </SafeAreaView>
  );
};

export default Wifi6;
// <Image source={require("./speaker.png")} />
const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    position: "relative",
  },
  container: {
    flexDirection: "row",
    width: "70%",
    flex: 1,
    top: "20%",
    bottom: "10%",
    left: "10%",
    right: "10%",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },

  image1: {
    alignItems: "center",
    position: "absolute",
    top: "55%",
    width: 200,
    height: 300,
  },
  image2: {
    position: "absolute",
    left: 400,
    top: 250,
    width: 70,
    height: 70,
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
    top: "15%",
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
    top: "15%",
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
    right: "20%",
  },
});
