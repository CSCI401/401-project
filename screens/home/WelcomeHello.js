import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Speaker from "../../components/Speaker";
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
import TTS from "../../components/TextToSpeech";

import { LogBox } from "react-native";
LogBox.ignoreWarnings(["Setting a timer"]);

const WelcomeHello = ({ navigation }) => {
  var textToSpeak = "Hello,\nI am Daisy.\n \nWhat's your name?";

  useEffect(() => {
    console.log("inside the useEffect");
    firestore
      .collection("users")
      .doc("jw8xAngn4rGMyfEv6VTr")
      .get()
      .then((doc) => {
        console.log(doc.id);
        console.log(doc.data());
      });
  }, []);
  //the above will only render the first time component mount
  useEffect(() => {
    console.log("inside the useEffect");
  });
  //the above will only render the everytine

  const next = () => {
    firestore
      .collection("users")
      .doc()
      .set({
        name: "Los Angeles",
        state: "CA",
        country: "USA",
      })
      .then(function () {
        console.log("Document successfully written!");
        navigation.navigate("WelcomeSpeech");
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
    navigation.navigate("WelcomeSpeech");
  };

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
          onPress={() => next()}
          style={styles.appButtonContainer}
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
    bottom: "24%",
    //width: 100,
  },
  textInputContainer: {
    bottom: "15%",
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
    bottom: "8%",
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
