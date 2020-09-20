import React from "react";
import { StatusBar } from "expo-status-bar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Button,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

function WelcomeSpeech() {
  return (
    <SafeAreaView style={styles.outerContainer}>
      <Header></Header>
      <View style={styles.container}>
        <Text style={styles.text}>
          Would you like to be{"\n"}read the tutorial?
        </Text>
        <Image
          style={styles.image}
          source={require("../../assets/speaker.png")}
        />
      </View>
      <Footer></Footer>
    </SafeAreaView>
  );
}

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
});

export default WelcomeSpeech;
