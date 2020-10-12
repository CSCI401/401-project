import { View, Button, StyleSheet } from "react-native";
import React from "react";
import ScrollPractice from "./ScrollPractice";

const Gesture22 = ({ route, navigation }) => {
  return <ScrollPractice navigation={navigation, {readText: route.params.readText}}></ScrollPractice>;
};
export default Gesture22;
