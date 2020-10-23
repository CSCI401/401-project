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

var textToSpeak = "This is the home button.\n";

const Gesture6 = ({ route, navigation }) => {
  AutoReadText(route.params.readText, textToSpeak);
  return (
    <SafeAreaView style={styles.outerContainer}>
      <Header navigation={navigation}></Header>
      <View style={styles.container}>
        <View style={styles.container1}>
          <Image
            style={styles.image}
            source={require("../../assets/firescreenshot.png")}
            resizeMode="stretch"
          />
          <Text style={styles.text}>{textToSpeak}</Text>
        </View>
        <View style={styles.container2}>
          <Image
            style={styles.backimage}
            source={require("../../assets/homebutton.png")}
            resizeMode="stretch"
          />
        </View>
      </View>
      <View style={styles.speaker}>
        <Speaker text={textToSpeak}></Speaker>
      </View>
      <BottomButton
        next={"Gesture7"}
        back={"Gesture5"}
        navigation={navigation}
        readText={route.params.readText}
      ></BottomButton>
      <Footer></Footer>
    </SafeAreaView>
  );
};

export default Gesture6;
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
    top: "10%",
    alignItems: "center",
    flexWrap: "wrap",
  },
  container1: {
    width: "90%",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  container2: {
    width: "10%",
  },
  text: {
    justifyContent: "flex-start",
    top: "1%",
    fontSize: 48,
  },
  appButtonView: {
    width: "100%",
    position: "relative",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  appButtonContainer: {
    width: "25%",
    bottom: "70%",
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
  imageContainer: {
    width: "100%",
    position: "relative",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "55%",
    height: "60%",
    position: "relative",
    top: "0%",
  },
  speaker: {
    position: "relative",
    bottom: "15%",
  },
  backimage: {
    width: "100%",
    height: "7%",
    position: "relative",
    top: "27%",
  },
});
