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

const WelcomeTutorials = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.outerContainer}>
      <Header></Header>
      <View style={styles.container}>
        <Text style={styles.text}>Tutorials{"\n"}</Text>
      </View>
      <View style={styles.appButtonView}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Wifi1")}
          style={styles.appButtonContainer}
        >
          <Text style={styles.appButtonText}>Telecare</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.wifiButtonView}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Wifi1")}
          style={styles.wifiButtonContainer}
        >
          <Text style={styles.wifiButtonText}>Setup my Wifi</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.emailsButtonView}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Gesture1")}
          style={styles.emailsButtonContainer}
        >
          <Text style={styles.emailsButtonText}>Learn Gestures</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.gesturesButtonView}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Wifi1")}
          style={styles.gesturesButtonContainer}
        >
          <Text style={styles.gesturesButtonText}>Emails</Text>
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
  emailsButtonView: {
    width: "100%",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  emailsButtonContainer: {
    top: "-50%",
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
  emailsButtonText: {
    fontSize: 60,
  },
  gesturesButtonView: {
    width: "100%",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  gesturesButtonContainer: {
    top: "-100%",
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
  gesturesButtonText: {
    fontSize: 60,
  },
});

export default WelcomeTutorials;
