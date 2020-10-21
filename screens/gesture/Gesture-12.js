import { StatusBar } from "expo-status-bar";
import React from "react";
import { Component } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Speaker from "../../components/Speaker";
import AutoReadText from "../../components/AutoReadText";
import BottomButton from "../../components/BottomButtons";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";

var textToSpeak = "You can also search for an app with the name.";

const Gesture12 = ({ route, navigation }) => {
  AutoReadText(route.params.readText, textToSpeak);
  return (
    <SafeAreaView style={styles.outerContainer}>
      <Header navigation={navigation}></Header>
      <View style={styles.container}>
        <Text style={styles.text}>{textToSpeak}</Text>
      </View>
      <View style={styles.speakerContainer}>
        <Speaker text={textToSpeak} style={styles.textButton}></Speaker>
      </View>
      <Image
        style={styles.image}
        source={require("../../assets/firescreenshot.png")}
        resizeMode="stretch"
      />
      <BottomButton
        next={"Gesture13"}
        back={"Gesture11"}
        navigation={navigation}
        readText={route.params.readText}
      ></BottomButton>
      <Footer></Footer>
    </SafeAreaView>
  );
};

export default Gesture12;
const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    position: "relative",
    width: "100%",
  },
  container: {
    width: "100%",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  text: {
    textAlign: "center",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    fontSize: 55,
  },
  speakerContainer: {
    marginBottom: "5%",
    position: "relative",
  },
  textButton: {
    flexDirection: "row",
    width: "100%",
    flex: 1,
    position: "relative",
    justifyContent: "flex-end",
    alignItems: "center",
    textAlign: "center",
    paddingRight: 200,
  },
  appButtonView: {
    width: "100%",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    // flex: 1,
    width: "50%",
    height: "50%",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    left: "25%",
    top: "5%",
    marginBottom: "7%",
  },
});
