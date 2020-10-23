import { StatusBar } from "expo-status-bar";
import React from "react";
import { Component } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Speaker from "../../components/Speaker";
import AutoReadText from "../../components/AutoReadText";
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

var textToSpeak2 = "First, press the home button to go home.";

const Email2 = ({ route, navigation }) => {
  AutoReadText(route.params.readText, textToSpeak2);
  return (
    <SafeAreaView style={styles.outerContainer}>
      <Header navigation={navigation}></Header>
      <View style={styles.bigContainer}>
        <View style={styles.container1}>
          <Text style={styles.text2}>{textToSpeak2}</Text>
          <View style={styles.speaker}>
            <Speaker text={textToSpeak2}></Speaker>
          </View>
        </View>
        <View style={styles.container2}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require("../../assets/firescreenshot.png")}
              resizeMode="stretch"
            />
          </View>
        </View>
      </View>
      <View style={styles.appButtonView}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Email3", { readText: route.params.readText })
          }
          style={styles.appButtonContainer}
        >
          <Text style={styles.appButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
      <Footer></Footer>
    </SafeAreaView>
  );
};

export default Email2;
const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    position: "relative",
  },
  bigContainer: {
    flexDirection: "row",
    width: "100%",
    flex: 1,
    top: "5%",
    alignItems: "center",
    flexWrap: "wrap",
  },
  text1: {
    textAlign: "center",
    fontSize: 50,
  },
  container1: {
    width: "30%",
  },
  container2: {
    width: "70%",
  },
  text2: {
    textAlign: "center",
    fontSize: 50,
  },
  speaker: {
    position: "relative",
    top: "5%",
  },
  imageContainer: {
    width: "100%",
    position: "relative",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    top: "0%",
    width: "70%",
    height: "90%",
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
    marginBottom: "10%",
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
