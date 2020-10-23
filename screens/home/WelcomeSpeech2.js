import React from "react";
import { StatusBar } from "expo-status-bar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Speaker from "../../components/Speaker";
import BottomButton from "../../components/BottomButtons";
import AutoReadText from "../../components/AutoReadText";

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

const WelcomeSpeech2 = ({ route, navigation }) => {
  var textToSpeak1 = "At any point click\nthe speaker icon\n";
  var textToSpeak2 = "to have the text read out loud.";
  AutoReadText(route.params.readText, textToSpeak1 + textToSpeak2);
  return (
    <SafeAreaView style={styles.outerContainer}>
      <Header navigation={navigation}></Header>
      <View style={styles.container}>
        <Text style={styles.text}>{textToSpeak1}</Text>
      </View>
      <View style={styles.speaker}>
        <Speaker text={textToSpeak1 + textToSpeak2}></Speaker>
      </View>
      <View style={styles.container2}>
        <Text style={styles.text2}>{textToSpeak2}</Text>
      </View>
      <BottomButton
        next={"WelcomeIntroductoryVideo"}
        back={"WelcomeSpeech"}
        navigation={navigation}
        readText={route.params.readText}
      ></BottomButton>
      <Footer></Footer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    position: "relative",
  },
  container: {
    flexDirection: "row",
    width: "100%",
    flex: 1,
    bottom: "5%",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  container2: {
    flexDirection: "row",
    width: "100%",
    flex: 1,
    bottom: "10%",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 60,
  },
  text2: {
    textAlign: "center",
    fontSize: 60,
  },
  speaker: {
    position: "relative",
    bottom: "10%",
  },
});

export default WelcomeSpeech2;
