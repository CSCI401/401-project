import { StatusBar } from "expo-status-bar";
import React from "react";

import { Component } from "react";
import Wifi2 from "./wifi-2.js";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
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

const Wifi1 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.outerContainer}>
      <Header></Header>
      <View style={styles.container}>
        <Text style={styles.text}>
          Hello, Bob. Welcome to the wifi tutorial!
        </Text>
        <Button
          title="Next"
          color="#f194ff"
          onPress={() => navigation.navigate("Wifi2")}
        />
      </View>
      <Footer></Footer>
    </SafeAreaView>
  );
};

export default Wifi1;
// <Image source={require("./speaker.png")} />
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
    top: "70%",
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
  },
});