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

var textToSpeak = "Clicking the square will look like this.";

const Gesture9 = ({ route, navigation }) => {
  AutoReadText(route.params.readText, textToSpeak);
  return (
    <SafeAreaView style={styles.outerContainer}>
      <Header navigation={navigation}></Header>
      <View style={styles.container}>
        <Text style={styles.text}>{textToSpeak}</Text>
        <View style={styles.speakerContainer}>
          <Speaker text={textToSpeak} style={styles.textButton}></Speaker>
        </View>
      </View>

      <Image
        style={styles.image}
        source={require("../../assets/tabscreenshot.png")}
        resizeMode="stretch"
      />

      <View style={styles.appButtonView}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Gesture10", {
              readText: route.params.readText,
            })
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

export default Gesture9;
const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    position: "relative",
    width: "100%",
  },
  container: {
    width: "100%",
    //flex: 1,
    position: "relative",
    //top: "0%",
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
    //padding: "1%",
  },
  appButtonContainer: {
    //top: "65%",
    marginTop: "10%",
    //position: "absolute",
    //padding: "1%",
    width: "25%",
    borderWidth: 3,
    borderRadius: 20,
    borderColor: "black",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  speakerContainer: {
    width: "100%",
    position: "relative",
    alignItems: "center",
    textAlign: "center",
  },
  appButtonView: {
    width: "100%",
    textAlign: "center",
    // justifyContent: "center",
    alignItems: "center",
  },
  appButtonText: {
    fontSize: 60,
  },
  image: {
    // flex: 1,
    width: "50%",
    height: "50%",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    left: "23%",
    top: "6%",
    // left: 150,
  },
});
