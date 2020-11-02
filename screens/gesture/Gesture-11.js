import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Speaker from "../../components/Speaker";
import AutoReadText from "../../components/AutoReadText";
import BottomButton from "../../components/BottomButtons";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";

import React, { useEffect, useState } from "react";
import { firestore} from "../../config/firebase";
import * as firebase from "firebase"
import AsyncStorage from "@react-native-community/async-storage";


const Gesture11 = ({ route, navigation }) => {
  var textToSpeak = "Click on an app icon to open the app.\n";
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
        ref.update({ gesture11 :increment }).catch(e=>{console.log(e)});
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
        <Text style={styles.text}>{textToSpeak}</Text>
      </View>
      <Image
        style={styles.image}
        source={require("../../assets/appIconScreenshot.png")}
        resizeMode="stretch"
      />
      <View style={styles.speakerContainer}>
        <Speaker text={textToSpeak} style={styles.textButton}></Speaker>
      </View>
      <BottomButton
        next={"Gesture12"}
        back={"Gesture10"}
        navigation={navigation}
        readText={route.params.readText}
      ></BottomButton>
      <Footer></Footer>
    </SafeAreaView>
  );
};

export default Gesture11;
const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    position: "relative",
    width: "100%",
  },
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  text: {
    textAlign: "center",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    fontSize: 60,
    marginTop: "10%",
  },
  image: {
    width: "47%",
    height: "47%",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    left: "28%",
    top: "0%",
  },
  speakerContainer: {
    position: "relative",
    marginBottom: "8%",
  },
});
