import { StatusBar } from "expo-status-bar";
import React from "react";
import { Component } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Speaker from "../../components/Speaker";
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

var textToSpeak =
  "Touch the screen and pinch your fingers to zoom out. Watch the demonstration below. \n";

const Gesture14 = ({ route, navigation }) => {
  AutoReadText(route.params.readText, textToSpeak);
  return (
    <SafeAreaView style={styles.outerContainer}>
      <Header navigation={navigation}></Header>
      <View style={styles.container}>
        <Text style={styles.text}>{textToSpeak}</Text>
        <View style={styles.speakerContainer}>
          <Speaker text={textToSpeak}></Speaker>
        </View>
        <Image
          style={styles.image}
          source={{
            uri:
              "https://cdn.gadgetguideonline.com/s10/wp-content/uploads/sites/10/2019/03/galaxy_s10_touchscreen_gestures_6_pinch.gif",
          }}
        />
      </View>
      <View style={styles.appButtonView}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Gesture15", {
              readText: route.params.readText,
            })
          }
          style={styles.appButtonContainer}
        >
          <Text style={styles.appButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
      <Footer></Footer>
    </SafeAreaView>
  );
};

export default Gesture14;
const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    position: "relative",
    width: "100%",
  },
  container: {
    width: "100%",
    //flex: 1,
    position: "relative",
    //bottom: "10%",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  text: {
    textAlign: "center",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    fontSize: 60,
  },
  appButtonContainer: {
    width: "25%",
    marginTop: "5%",
    //bottom: "60%",
    //marginBottom: "15%",
    borderWidth: 3,
    borderRadius: 20,
    borderColor: "black",
    position: "relative",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  speakerContainer: {
    //top: "0%",
    bottom: "5%",
    width: "100%",
    position: "relative",
    alignItems: "center",
    textAlign: "center",
  },
  appButtonView: {
    width: "100%",
    position: "relative",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  appButtonText: {
    fontSize: 60,
  },
  image: {
    width: 300,
    height: 200,
    marginTop: "10%",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
});
