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

var textToSpeak =
  "Touch the screen and unpinch your fingers to zoom in.\n Watch the demonstration below.";

const Gesture17 = ({ route, navigation }) => {
  console.log(navigation);
  AutoReadText(route.params.readText, textToSpeak);
  return (
    <SafeAreaView style={styles.outerContainer}>
      <Header navigation={navigation}></Header>
      <View style={styles.container}>
        <Text style={styles.text}>{textToSpeak}</Text>
        <Image
          style={styles.image}
          source={{
            uri:
              "https://cdn.gadgetguideonline.com/s10/wp-content/uploads/sites/10/2019/03/galaxy_s10_touchscreen_gestures_7_spread.gif",
          }}
        />
      </View>
      <View style={styles.speaker}>
        <Speaker text={textToSpeak} style={styles.textButton}></Speaker>
      </View>
      <BottomButton
        next={"Gesture18"}
        back={"Gesture16"}
        navigation={navigation}
        readText={route.params.readText}
      ></BottomButton>
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
    marginBottom: "13%",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  text: {
    textAlign: "center",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    fontSize: 55,
    //marginTop: "45%",
  },
  speaker: {
    position: "relative",
    bottom: "9%",
  },
  image: {
    width: 300,
    height: 200,
    //marginTop: "15%",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
});
