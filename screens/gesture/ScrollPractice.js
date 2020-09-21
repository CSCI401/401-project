import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  SafeAreaView,
} from "react-native";
import Constants from "expo-constants";

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.text}>
            Drag your finger from the bottom of the screen to the top to scroll!{" "}
            {"\n"}
            {"\n"}
            {"\n"}
            Keep scrolling.... {"\n"}
            {"\n"}
            {"\n"}Keep scrolling.... {"\n"}
            {"\n"}
            {"\n"}Keep scrolling.... {"\n"}
            {"\n"}
            {"\n"}Almost there.... {"\n"}
            {"\n"}
            {"\n"}Nice work! This is the hidden message :) have a great day!{" "}
            {"\n"}
          </Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  text: {
    fontSize: 45,
  },
});
