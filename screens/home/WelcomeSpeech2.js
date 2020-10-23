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
import React, { useEffect, useState } from "react";
import { firestore} from "../../config/firebase";
import * as firebase from "firebase"
import AsyncStorage from "@react-native-community/async-storage";

const WelcomeSpeech2 = ({ route, navigation }) => {
  var textToSpeak1 = "At any point click\nthe speaker icon\n";
  var textToSpeak2 = "to have the text read out loud.";
  AutoReadText(route.params.readText, textToSpeak1 + textToSpeak2);

  const [id, setID] = useState("x");
  const prepare = async () => {
    try {
      const getID = await AsyncStorage.getItem("id");
      if (getID != null) {
        setID(getID);
        console.log(id);
        const ref = firestore.collection('ScreenVisits').doc(getID);
        const increment = firebase.firestore.FieldValue.increment(1);
        ref.update({ home4 :increment }).catch(e=>{console.log(e)});
      }

    } catch (error) {
      console.log("error in prepare");
    }
  };
  useEffect(() => {
    prepare();
  },[]);

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
