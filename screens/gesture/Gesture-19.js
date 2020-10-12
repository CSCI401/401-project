import { View, Button, StyleSheet } from "react-native";
import React from "react";
import ZoomInPractice from "./ZoomInPractice";

const Gesture19 = ({  route, navigation }) => {
  return <ZoomInPractice navigation={navigation, {readText: route.params.readText}}></ZoomInPractice>;
};
export default Gesture19;
