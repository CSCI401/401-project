import { StatusBar } from "expo-status-bar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Speaker from "../../components/Speaker";
import AutoReadText from "../../components/AutoReadText";
import BottomButton from "../../components/BottomButtons";

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
import React, { useEffect, useState } from "react";
import { firestore } from "../../config/firebase";
import * as firebase from "firebase";
import AsyncStorage from "@react-native-community/async-storage";

const WelcomeIntroductoryVideo = ({ route, navigation }) => {
  var textToSpeak = "Let's explain this app.\n";
  AutoReadText(route.params.readText, textToSpeak);

  const [id, setID] = useState("x");
  const prepare = async () => {
    try {
      const getID = await AsyncStorage.getItem("id");
      if (getID != null) {
        setID(getID);
        console.log(id);
        const ref = firestore.collection("ScreenVisits").doc(getID);
        const increment = firebase.firestore.FieldValue.increment(1);
        ref.update({ home2: increment }).catch((e) => {
          console.log(e);
        });
      }
    } catch (error) {
      console.log("error in prepare");
    }
  };
  useEffect(() => {
    prepare();
  }, []);

  return (
    <SafeAreaView style={styles.outerContainer}>
      <Header navigation={navigation}></Header>
      <View style={styles.container}>
        <Text style={styles.text}>{textToSpeak}</Text>
      </View>
      <View style={styles.speaker}>
        <Speaker style={styles.speakerInner} text={textToSpeak}></Speaker>
      </View>
      <View style={styles.image1}>
        <Image
          style={styles.image2}
          source={require("../../assets/IntroductoryVideoScreenshot.png")}
        />
      </View>
      <BottomButton
        next={"WelcomeThankYou"}
        back={"WelcomeSpeech2"}
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
    bottom: "10%",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 60,
    marginBottom: "-33%",
  },
  speaker: {
    position: "relative",
    marginBottom: "15%",
  },
  image1: {
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
    marginBottom: "20%",
    width: 500,
    height: 300,
  },
});

export default WelcomeIntroductoryVideo;
