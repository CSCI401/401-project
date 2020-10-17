import ZoomOutPractice from "./ZoomOutPractice";
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

const Gesture16 = ({ route, navigation }) => {
  return (
    <View>
      <Header navigation={navigation}></Header>
      <View style={styles.container}>
        {/* <Text style={styles.text}>{textToSpeak}</Text> */}
      </View>
      {/* <View style={styles.speaker}>
        <Speaker text={textToSpeak} style={styles.textButton}></Speaker>
      </View> */}
      <View style={styles.zoomPracticeContainer}>
        <ZoomOutPractice
          navigation={navigation}
          route={route}
        ></ZoomOutPractice>
      </View>
      <View style={styles.appButtonView}>
        <TouchableOpacity
          // onPress={() =>
          //   this.props.navigation.navigate("Gesture17", {
          //     readText: this.props.route.params.readText,
          //   })
          // }
          onPress={() =>
            navigation.navigate("Gesture17", {
              readText: route.params.readText,
            })
          }
          // navigation.navigate("Gesture16", {
          //   readText: route.params.readText,
          // })
          // onPress={() =>
          // this.props.navigation.navigate("Gesture17", {
          //   readText: this.props.route.params.readText,
          // })
          style={styles.appButtonContainer}
        >
          <Text style={styles.appButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
      <Footer></Footer>
    </View>
  );
};
export default Gesture16;

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
    bottom: "15%",
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
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    bottom: "15%",
    //width: 100,
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
  },
});
