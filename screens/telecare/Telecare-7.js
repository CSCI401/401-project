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
import { firestore} from "../../config/firebase";
import * as firebase from "firebase"
import AsyncStorage from "@react-native-community/async-storage";

const Telecare7 = ({ route, navigation }) => {
  var textToSpeak = "Click on the check-in button to join the waiting room.\n";
  const [id, setID] = useState("x");
  const prepare = async () => {
    AutoReadText(route.params.readText, textToSpeak);

    try {
      const getID = await AsyncStorage.getItem("id");
      if (getID != null) {
        setID(getID);
        console.log(id);
        const ref = firestore.collection('ScreenVisits').doc(getID);
        const increment = firebase.firestore.FieldValue.increment(1);
        ref.update({ telecare7:increment }).catch(e=>{console.log(e)});
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

      <View style={styles.image1}>
        <Image
          style={styles.image2}
          source={require("../../assets/keckcheckin.png")}
        />
      </View>

      <View style={styles.container}>
        <Text style={styles.text}>{textToSpeak}</Text>
      </View>

      <View style={styles.speaker}>
        <Speaker style={styles.speakerInner} text={textToSpeak}></Speaker>
      </View>

      <BottomButton
        next={"Telecare8"}
        back={"Telecare6"}
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
    marginTop: "8%",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 50,
  },
  speaker: {
    position: "relative",
    bottom: "8%",
  },
  image1: {
    marginTop: "15%",
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
    resizeMode: "contain",
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

export default Telecare7;
