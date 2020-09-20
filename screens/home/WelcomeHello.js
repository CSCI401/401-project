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
  TextInput,
  Button,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

function WelcomeHello() {
  return (
    <SafeAreaView style={styles.outerContainer}>
      <Header></Header>
      <View style={styles.container}>
        <Text style={styles.text}>
          Hello,{"\n"}I am Daisy.{"\n"}
          {"\n"}What's your name?
        </Text>
        <Image
          style={styles.image}
          source={require("../../assets/speaker.png")}
        />
      </View>
      <View style={styles.textInputContainer}>
        <TextInput style={styles.textInput} />
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

export default WelcomeHello;
