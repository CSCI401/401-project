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

var textToSpeak = "Clicking the square will look like this.";

const Gesture9 = ({ route, navigation }) => {
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
        source={require("../../assets/tabscreenshot.png")}
        resizeMode="stretch"
      />
      <BottomButton
        next={"Gesture10"}
        back={"Gesture8"}
        navigation={navigation}
        readText={route.params.readText}
      ></BottomButton>
      <Footer></Footer>
    </SafeAreaView>
  );
};

export default Gesture9;
const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    position: "relative",
    width: "100%",
  },
  container: {
    width: "100%",
    position: "relative",
    top: "1%",
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
  speakerContainer: {
    position: "relative",
    marginBottom: "2%",
    marginTop: "2%",
  },
  image: {
    width: "50%",
    height: "50%",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    left: "23%",
    top: "4%",
    marginBottom: "6%",
  },
});
