import React from "react";
import { StatusBar } from "expo-status-bar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

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

const WelcomeTutorials = ({ route, navigation }) => {
  return (
    <SafeAreaView style={styles.outerContainer}>
      <Header></Header>
      <View style={styles.container}>
        <Text style={styles.text}>Tutorials{"\n"}</Text>
      </View>
      <View style={styles.appButtonView}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Telecare1", {readText: route.params.readText})}
          style={styles.appButtonContainer}
        >
          <Text style={styles.appButtonText}>Telecare</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.wifiButtonView}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Wifi1", {readText: route.params.readText})}
          style={styles.wifiButtonContainer}
        >
          <Text style={styles.wifiButtonText}>Setup my Wifi</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.gestureButtonView}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Gesture1", {readText: route.params.readText})}
          style={styles.gestureButtonContainer}
        >
          <Text style={styles.gestureButtonText}>Learn Gestures</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.emailButtonView}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Email1", {readText: route.params.readText})}
          style={styles.emailButtonContainer}
        >
          <Text style={styles.emailButtonText}>Emails</Text>
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
    position: "absolute",
    top: "15%",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 80,
  },
  appButtonView: {
    width: "100%",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  appButtonContainer: {
    top: "50%",
    position: "relative",
    width: "75%",
    height: "30%",
    borderWidth: 3,
    borderRadius: 20,
    borderColor: "black",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  appButtonText: {
    fontSize: 60,
  },
  wifiButtonView: {
    width: "100%",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  wifiButtonContainer: {
    top: "0%",
    position: "relative",
    width: "75%",
    height: "30%",
    borderWidth: 3,
    borderRadius: 20,
    borderColor: "black",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  wifiButtonText: {
    fontSize: 60,
  },
  gestureButtonView: {
    width: "100%",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  gestureButtonContainer: {
    bottom: "50%",
    position: "relative",
    width: "75%",
    height: "30%",
    borderWidth: 3,
    borderRadius: 20,
    borderColor: "black",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  gestureButtonText: {
    fontSize: 60,
  },
  emailButtonView: {
    width: "100%",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  emailButtonContainer: {
    bottom: "105%",
    position: "relative",
    width: "75%",
    height: "30%",
    borderWidth: 3,
    borderRadius: 20,
    borderColor: "black",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  emailButtonText: {
    fontSize: 60,
  },
});

export default WelcomeTutorials;
