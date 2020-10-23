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
  "Touch the screen and pinch your fingers to zoom out. Watch the demonstration below. \n";

const Gesture14 = ({ route, navigation }) => {
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
              "https://cdn.gadgetguideonline.com/s10/wp-content/uploads/sites/10/2019/03/galaxy_s10_touchscreen_gestures_6_pinch.gif",
          }}
        />
        <View style={styles.speaker}>
          <Speaker text={textToSpeak}></Speaker>
        </View>
      </View>
      <BottomButton
        next={"Gesture15"}
        back={"Gesture13"}
        navigation={navigation}
        readText={route.params.readText}
      ></BottomButton>
      <Footer></Footer>
    </SafeAreaView>
  );
};

export default Gesture14;
const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    position: "relative",
    width: "100%",
  },
  container: {
    //flexDirection: "row",
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
  image: {
    width: 300,
    height: 200,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "13%",
  },
});
