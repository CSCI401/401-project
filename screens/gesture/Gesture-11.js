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

var textToSpeak = "Click on an app icon to open the app\n";

const Gesture11 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.outerContainer}>
      <Header></Header>
      <View style={styles.container}>
        <Text style={styles.text}>Click on an app icon to open the app</Text>
      </View>
      <View style={styles.speakerContainer}>
        <Speaker text={textToSpeak} style={styles.textButton}></Speaker>
      </View>
      <Image
        style={styles.image}
        source={require("../../assets/firescreenshot.png")}
        resizeMode="stretch"
      />
      {/* <Button
        title="Next gesture page"
        onPress={() => navigation.navigate("Gesture12")}
      /> */}
      <View style={styles.appButtonView}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Gesture12")}
          style={styles.appButtonContainer}
        >
          <Text style={styles.appButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
      <Footer></Footer>
    </SafeAreaView>
  );
};

export default Gesture11;
const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    position: "relative",
    width: "100%",
  },
  container: {
    width: "100%",
    flex: 1,
    position: "absolute",
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
    marginTop: "5%",
  },
  appButtonText: {
    fontSize: 50,
  },
  appButtonView: {
    width: "100%",
    textAlign: "center",
    // justifyContent: "center",
    alignItems: "center",
  },
  appButtonContainer: {
    top: "90%",
    //position: "relative",
    width: "45%",
    borderWidth: 3,
    borderRadius: 20,
    borderColor: "black",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: "47%",
    height: "47%",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    left: "28%",
    top: "7%",
  },
  speakerContainer: {
    //flexDirection: "row",
    width: "100%",
    //paddingLeft: "10%",
    //flex: 1,
    position: "relative",
    marginTop: "27%",
    //marginLeft: "90%",
    //top: "30%",
    //left: "80%",
    //paddingLeft: "70%",
    //justifyContent: "flex-end",
    //paddingLeft: "90%",
    alignItems: "center",
    textAlign: "center",
    //paddingRight: 200,
  },
});
