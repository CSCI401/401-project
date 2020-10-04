import React from "react";
import { StatusBar } from "expo-status-bar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Speaker from "../../components/Speaker";

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
import TTS from "../../components/TextToSpeech";

const WelcomeHello = ({ navigation }) => {
  var textToSpeak = "Hello,\nI am Daisy.\n\nWhat's your name?";
  return (
    <SafeAreaView style={styles.outerContainer}>
      <Header></Header>
      <View style={styles.container}>
        <Text style={styles.text}>{textToSpeak}</Text>
      </View>
      <View style={styles.speaker}>
        <Speaker text={textToSpeak}></Speaker>
      </View>
      <View style={styles.textInputContainer}>
        <TextInput style={styles.textInput} placeholder="Insert Name Here" />
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity
          onPress={() => navigation.navigate("WelcomeSpeech")}
          style={styles.YesButtonContainer}
        >
          <Text style={styles.YesButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
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
    bottom: "15%",
    //width: 100,
  },
  textInputContainer: {
    bottom: "4%",
    position: "relative",
    height: "10%",
    width: "100%",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    width: "80%",
    borderColor: "black",
    borderWidth: 3,
    fontSize: 60,
    textAlign: "center",
  },
  buttonView: {
    width: "100%",
    position: "relative",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  YesButtonContainer: {
    width: "25%",
    marginBottom: "15%",
    borderWidth: 3,
    borderRadius: 20,
    borderColor: "black",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  YesButtonText: {
    fontSize: 60,
  },
});

export default WelcomeHello;
