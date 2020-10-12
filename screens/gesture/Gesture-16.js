import { View, Button, StyleSheet } from "react-native";
import React from "react";
import ZoomOutPractice from "./ZoomOutPractice";

const Gesture16 = ({ route, navigation }) => {
  return <ZoomOutPractice navigation={navigation, {readText: route.params.readText}}></ZoomOutPractice>;
};
export default Gesture16;
