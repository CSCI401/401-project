import { StatusBar } from "expo-status-bar";
import React from "react";

import { Component } from "react";
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

const Wifi3 = ({ navigation }) => {
  var textToSpeak = "You should be able to see this page.";

  return (
    <SafeAreaView style={styles.outerContainer}>
      <Header></Header>
      <View style={styles.container}>
        <Text style={styles.text}>{textToSpeak}</Text>
        <Image
          style={styles.image}
          source={require("../../assets/wifi3.png")}
        />
        <View style={styles.speaker}>
          <Speaker text={textToSpeak}></Speaker>
        </View>
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Wifi4")}
          style={styles.YesButtonContainer}
        >
          <Text style={styles.YesButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
      <Footer></Footer>
    </SafeAreaView>
  );
};

export default Wifi3;
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

  image: {
    alignItems: "center",
    position: "absolute",
    top: "70%",
    width: 200,
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
    top: "30%",
    right: "20%",
  },
});
