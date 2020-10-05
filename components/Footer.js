import React from "react";
import { StatusBar } from "expo-status-bar";
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

function Footer() {
  return <View style={styles.footer}></View>;
}

const styles = StyleSheet.create({
  footer: {
    // flexDirection: "row",
    // justifyContent: "flex-start",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "5%",
    backgroundColor: "#990000",
    // alignSelf: "stretch",
    color: "#2F80ED",
  },
});

export default Footer;
