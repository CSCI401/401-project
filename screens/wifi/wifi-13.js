import { StatusBar } from "expo-status-bar";
import { Component } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WelcomeTutorials from "../home/WelcomeTutorials.js";
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
import AutoReadText from "../../components/AutoReadText";
import AsyncStorage from "@react-native-community/async-storage";
import React, { useEffect, useState } from "react";

const Wifi13 = ({ route, navigation }) => {
   AutoReadText(route.params.readText, textToSpeak);
   const [name, setName] = useState("friend");
   var textToSpeak =`Congratulations ${name}! You are done setting up the WiFi!`
   const readName = async () => {
     try {
       const value = await AsyncStorage.getItem('name');
       if (value!== null) {
         setName(value);
       }else{
         console.log("value is null");
       }
     } catch (error) {
       console.log("error in readName");
     }
   };
   useEffect(() => {
     readName();
   });


  return (
    <SafeAreaView style={styles.outerContainer}>
      <Header navigation={navigation}></Header>
      <View style={styles.container}>
        <Text style={styles.text}>{textToSpeak}</Text>
        <Image
          style={styles.image1}
          source={require("../../assets/wifi_ok.jpg")}
        />
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("WelcomeTutorials", {
              readText: route.params.readText,
            })
          }
          style={styles.YesButtonContainer}
        >
          <Text style={styles.YesButtonText}>Home</Text>
        </TouchableOpacity>
      </View>
      <Footer></Footer>
    </SafeAreaView>
  );
};

export default Wifi13;
// <Image source={require("./speaker.png")} />
const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    position: "relative",
  },
  container: {
    flexDirection: "row",
    width: "90%",
    left: "4%",
    flex: 1,
    bottom: "10%",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  image1: {
    alignItems: "center",
    position: "absolute",
    top: "80%",
    left: "21%",
    width: 300,
    height: 260,
  },
  text: {
    textAlign: "center",
    fontSize: 40,
  },
  speaker: {
    position: "relative",
    bottom: "5%",
  },
  buttonView: {
    width: "100%",
    flex: 1,
    position: "relative",
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "2%",
  },
  YesButtonContainer: {
    //top: "25%",
    width: "40%",
    borderWidth: 3,
    borderRadius: 20,
    borderColor: "black",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    margin: "2%",
  },
  YesButtonText: {
    fontSize: 40,
  },
});
