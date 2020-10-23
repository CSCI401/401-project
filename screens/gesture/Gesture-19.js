import ZoomInPractice from "./ZoomInPractice";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Component } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Speaker from "../../components/Speaker";
import AutoReadText from "../../components/AutoReadText";
import BottomButton from "../../components/BottomButtons";
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
var textToSpeak = "Practice Zoom in here.";
const Gesture19 = ({ route, navigation }) => {
  AutoReadText(route.params.readText, textToSpeak);
  return (
    <View>
      <Header navigation={navigation}></Header>
      <View style={styles.container}></View>
      <View style={styles.zoomPracticeContainer}>
        <ZoomInPractice navigation={navigation} route={route}></ZoomInPractice>
      </View>
      <View style={styles.speaker}>
        <Speaker text={textToSpeak} style={styles.textButton}></Speaker>
      </View>
      <BottomButton
        next={"Gesture20"}
        back={"Gesture18"}
        navigation={navigation}
        readText={route.params.readText}
      ></BottomButton>
      <Footer></Footer>
    </View>
  );
};
export default Gesture19;
const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    position: "relative",
    width: "100%",
  },
  container: {
    flexDirection: "row",
    width: "100%",
    flex: 1,
    //bottom: "15%",
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
    width: "25%",
    marginBottom: "13%",
    marginTop: "13%",
    borderWidth: 3,
    borderRadius: 20,
    borderColor: "black",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  speaker: {
    position: "relative",
    bottom: "9%",
  },
  appButtonView: {
    width: "100%",
    position: "relative",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  appButtonText: {
    //marginTop: "15%",
    fontSize: 60,
  },
  appButtonText: {
    fontSize: 60,
  },
  zoomPracticeContainer: {
    position: "relative",
    marginBottom: "17%",
  },
});
