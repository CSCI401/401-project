import { StatusBar } from "expo-status-bar";
import React from "react";

import { Component } from "react";
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
import Wifi3 from "./wifi-3.js";

const Wifi2 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.outerContainer}>
      <Header></Header>
      <View style={styles.container}>
        <Text style={styles.text}>
          First Glory,{"\n"} you need to swipe down {"\n"}from the top.
        </Text>
        <Image
          style={styles.image}
          source={require("../../assets/wifi2.png")}
        />
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Wifi3")}
          style={styles.YesButtonContainer}
        >
          <Text style={styles.YesButtonText}>Next</Text>
        </TouchableOpacity>
      </View>

      <Footer></Footer>
    </SafeAreaView>
  );
};

export default Wifi2;
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
    bottom: "10%",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },

  image: {
    alignItems: "center",
    position: "absolute",
    top: "70%",
    width: 200,
    height: 300,
  },

  text: {
    textAlign: "center",
    fontSize: 40,
  },
  speaker: {
    position: "relative",
    bottom: "5%",
  },
  buttonView: {
    width: "100%",
    flex: 1,
    position: "relative",
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "2%",
  },
  YesButtonContainer: {
    //top: "25%",
    width: "25%",
    borderWidth: 3,
    borderRadius: 20,
    borderColor: "black",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    margin: "2%",
  },
  YesButtonText: {
    fontSize: 60,
  },
  NoButtonContainer: {
    //top: "25%",
    width: "25%",
    borderWidth: 3,
    borderRadius: 20,
    borderColor: "black",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    margin: "2%",
  },
  NoButtonText: {
    fontSize: 60,
  },
});
