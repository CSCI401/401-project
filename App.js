import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HeaderFooter from "./components/HeaderFooter";
import TextToSpeech from "./components/TextToSpeech";

export default function App() {
  return <TextToSpeech />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
