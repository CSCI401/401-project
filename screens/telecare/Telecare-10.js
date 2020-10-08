import React from "react";
import { StatusBar } from "expo-status-bar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Speaker from "../../components/Speaker";

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

const Telecare10 = ({ navigation }) => {
  var textToSpeak =
    "To sign the consent form,\nuse your finger to draw your\nsingature on the dotted line.";
  return (
    <SafeAreaView style={styles.outerContainer}>
      <Header></Header>

      <View style={styles.image1}>
        <Image
          style={styles.image2}
          source={require("../../assets/keckvirtualsign.png")}
        />
      </View>

      <View style={styles.container}>
        <Text style={styles.text}>{textToSpeak}</Text>
      </View>

      <View style={styles.speaker}>
        <Speaker style={styles.speakerInner} text={textToSpeak}></Speaker>
      </View>

      <View style={styles.buttonView}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Telecare11")}
          style={styles.YesButtonContainer}
        >
          <Text style={styles.YesButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
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
    bottom: "10%",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 40,
  },
  speaker: {
    position: "relative",
    bottom: "8%",
  },
  image1: {
    marginTop: "20%",
    width: "100%",
    position: "relative",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  image2: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    bottom: "20%",
    width: 500,
    height: 300,
  },
  buttonView: {
    width: "100%",
    position: "relative",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  YesButtonContainer: {
    width: "25%",
    marginBottom: "15%",
    borderWidth: 3,
    borderRadius: 20,
    borderColor: "black",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  YesButtonText: {
    fontSize: 60,
  },
});

export default Telecare10;
