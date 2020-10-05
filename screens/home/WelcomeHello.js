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
    db.collection("users")
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
  };
  return (
    <SafeAreaView style={styles.outerContainer}>
      <Header></Header>
      <View style={styles.container}>
        <Text style={styles.text}>{textToSpeak}</Text>
        <Image
          style={styles.image}
          source={require("../../assets/speaker.png")}
        />
      </View>
      <Speaker text={textToSpeak}></Speaker>
      <View style={styles.textInputContainer}>
        <TextInput style={styles.textInput} placeholder="Insert Name Here" />
      </View>
      <View style={styles.appButtonView}>
        <TouchableOpacity
          onPress={() => next()}
          style={styles.appButtonContainer}
        >
          <Text style={styles.appButtonText}>Next</Text>
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
    position: "absolute",
    top: "20%",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 80,
  },
  image: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "112%",
    width: 121,
    height: 98,
  },
  textInputContainer: {
    top: "60%",
    position: "relative",
    height: "7%",
    width: "100%",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    top: "65%",
    height: "100%",
    width: "80%",
    borderColor: "black",
    borderWidth: 3,
    fontSize: 80,
    textAlign: "center",
  },
  appButtonView: {
    width: "100%",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  appButtonContainer: {
    top: "1020%",
    position: "relative",
    width: "45%",
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

export default WelcomeHello;
