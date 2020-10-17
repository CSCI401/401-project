import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import * as Speech from "expo-speech";
import AutoReadText from "../../components/AutoReadText";

export default class App extends React.Component {
  speak() {
    var textToSpeak =
      "Drag your finger from the bottom of the screen to the top to scroll!";
    Speech.speak(textToSpeak);
  }
  render() {
    var textToSpeak =
      "Drag your finger from the bottom of the screen to the top to scroll!";
    AutoReadText(
      this.props.navigation.readText,
      this.props.route.params.readText
    );
    return (
      // <SafeAreaView style={styles.container}>
      <View>
        {/* <Button title="Press to hear some words" onPress={this.speak} /> */}

        <Text style={styles.text}>
          Drag your finger from the bottom of the screen to the top to scroll!{" "}
          {"\n"}
          {"\n"}
          {"\n"}
          {"\n"}
          {"\n"}
          Keep scrolling.... {"\n"}
          {"\n"}
          {"\n"}
          {"\n"}
          {"\n"}
          {"\n"}
          {"\n"}Keep scrolling.... {"\n"}
          {"\n"}
          {"\n"}
          {"\n"}
          {"\n"}
          {"\n"}Keep scrolling.... {"\n"}
          {"\n"}
          {"\n"}
          {"\n"}
          {"\n"}
          {"\n"}Almost there.... {"\n"}
          {"\n"}
          {"\n"}
          {"\n"}
          {"\n"}Nice work! This is the hidden message :) have a great day!{" "}
          {"\n"}
        </Text>
        {/* <View style={styles.appButtonView}>
            <TouchableOpacity
              onPress={() => navigation.navigate("WelcomeTutorials")}
              style={styles.appButtonContainer}
            >
              <Text style={styles.appButtonText}>Next</Text>
            </TouchableOpacity>
          </View> */}
        {/* </ScrollView> */}
      </View>
      // </SafeAreaView>
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
