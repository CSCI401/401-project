import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
//import HeaderFooter from "./components/HeaderFooter";
import WelcomeHello from "./screens/home/WelcomeHello.js";
import WelcomeSpeech from "./screens/home/WelcomeSpeech.js";

export default function App() {
  return <WelcomeHello />;
  //return <WelcomeSpeech />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
