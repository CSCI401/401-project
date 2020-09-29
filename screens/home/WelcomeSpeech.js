import React from "react";
import { StatusBar } from "expo-status-bar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
// import Speaker from "../../components/Speaker";

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

const WelcomeSpeech = ({ navigation }) => {
  var textToSpeak = "Would you like to be\nread the tutorial?";
  return (
    <SafeAreaView style={styles.outerContainer}>
      <Header></Header>
      <View style={styles.container}>
        <Text style={styles.text}>{textToSpeak}</Text>
        <Image
          style={styles.image}
          source={require("../../assets/speaker.png")}
        />
      </View>
      {/* <Speaker text={textToSpeak}></Speaker> */}
      <View style={styles.buttonView}>
        <TouchableOpacity
          onPress={() => navigation.navigate("WelcomeSpeech2")}
          style={styles.YesButtonContainer}
        >
          <Text style={styles.YesButtonText}>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("WelcomeSpeech2")}
          style={styles.NoButtonContainer}
        >
          <Text style={styles.NoButtonText}>No</Text>
        </TouchableOpacity>
      </View>
      <Footer></Footer>
    </SafeAreaView>
  );
};

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
    top: "170%",
    width: 121,
    height: 98,
  },
  buttonView: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "2%",
  },
  YesButtonContainer: {
    top: "25%",
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
    top: "25%",
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

export default WelcomeSpeech;
