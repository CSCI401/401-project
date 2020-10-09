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

var textToSpeak =
  "Touch the screen and unpinch your fingers to zoom in\n Watch the demonstration below \n";

const Gesture17 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.outerContainer}>
      <Header></Header>
      <View style={styles.container}>
        <Text style={styles.text}>
          Touch the screen and unpinch your fingers to zoom out. Watch the
          demonstration below
        </Text>

        <View style={styles.speaker}>
          <Speaker text={textToSpeak} style={styles.textButton}></Speaker>
        </View>
        <Image
          style={styles.image}
          source={{
            uri:
              "https://cdn.gadgetguideonline.com/s10/wp-content/uploads/sites/10/2019/03/galaxy_s10_touchscreen_gestures_7_spread.gif",
          }}
        />
      </View>
      <View style={styles.appButtonView}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Gesture18")}
          style={styles.appButtonContainer}
        >
          <Text style={styles.appButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
      <Footer></Footer>
    </SafeAreaView>
  );
};

export default Gesture17;
const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    position: "relative",
    width: "100%",
  },
  container: {
    width: "100%",
    flex: 1,
    position: "relative",
    bottom: "10%",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  text: {
    textAlign: "center",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    fontSize: 55,
    marginTop: "45%",
  },
  speaker: {
    marginTop: "3%",
    //bottom: "5%",
    width: "100%",
    position: "relative",
    alignItems: "center",
    textAlign: "center",
    //width: 100,
  },
  appButtonText: {
    fontSize: 80,
  },
  appButtonContainer: {
    width: "25%",
    marginBottom: "25%",
    borderWidth: 3,
    borderRadius: 20,
    borderColor: "black",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    flexDirection: "row",
    width: "100%",
    flex: 1,
    position: "absolute",
    top: "20%",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  appButtonView: {
    top: "10%",
    width: "100%",
    position: "relative",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  appButtonText: {
    fontSize: 60,
  },
  image: {
    width: 300,
    height: 200,
    marginTop: "15%",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
});
