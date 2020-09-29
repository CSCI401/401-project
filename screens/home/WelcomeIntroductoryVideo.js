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

const WelcomeIntroductoryVideo = ({ navigation }) => {
  var textToSpeak = "Let's explain this app\n";
  return (
    <SafeAreaView style={styles.outerContainer}>
      <Header></Header>
      <View style={styles.container}>
        <Text style={styles.text}>{textToSpeak}</Text>
        <Image
          style={styles.image}
          source={require("../../assets/speaker.png")}
        />
        <Image
          style={styles.image2}
          source={require("../../assets/IntroductoryVideoScreenshot.png")}
        />
      </View>
      {/* <Speaker text={textToSpeak}></Speaker> */}
      <View style={styles.appButtonView}>
        <TouchableOpacity
          onPress={() => navigation.navigate("WelcomeThankYou")}
          style={styles.appButtonContainer}
        >
          <Text style={styles.appButtonText}>Next</Text>
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
  container2: {
    flexDirection: "row",
    width: "100%",
    flex: 1,
    position: "absolute",
    top: "50%",
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
    top: "70%",
    width: 121,
    height: 98,
  },
  image2: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "130%",
    width: 670,
    height: 370,
  },
  appButtonView: {
    width: "100%",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  appButtonContainer: {
    top: "1150%",
    position: "relative",
    width: "45%",
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

export default WelcomeIntroductoryVideo;
