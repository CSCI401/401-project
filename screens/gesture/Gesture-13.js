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

var textToSpeak = "Now we will go through screen gestures\n";

const Gesture13 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.outerContainer}>
      <Header></Header>
      <View style={styles.container}>
        <Text style={styles.text}>Now we will go through screen gestures</Text>
      </View>
      <View style={styles.speakerContainer}>
        <Speaker text={textToSpeak} style={styles.textButton}></Speaker>
      </View>
      <View style={styles.appButtonView}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Gesture14")}
          style={styles.appButtonContainer}
        >
          <Text style={styles.appButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
      <Footer></Footer>
    </SafeAreaView>
  );
};

export default Gesture13;
const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    position: "relative",
    width: "100%",
  },
  container: {
    width: "100%",
    //flex: 1,
    position: "relative",
    top: "10%",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  text: {
    textAlign: "center",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    fontSize: 60,
  },
  appButtonText: {
    fontSize: 80,
  },
  appButtonContainer: {
    top: "65%",
    //position: "absolute",
    //padding: "1%",
    width: "45%",
    borderWidth: 3,
    borderRadius: 20,
    borderColor: "black",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  speakerContainer: {
    width: "100%",
    position: "relative",
    alignItems: "center",
    textAlign: "center",
    marginTop: "30%",
  },
  appButtonView: {
    marginTop: "15%",
    width: "100%",
    textAlign: "center",
    // justifyContent: "center",
    alignItems: "center",
  },
  appButtonText: {
    fontSize: 60,
  },
});
