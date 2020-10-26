import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
} from "react-native";
import Speaker from "../../components/Speaker";
import AutoReadText from "../../components/AutoReadText";
import BottomButton from "../../components/BottomButtons";
import React, { useEffect, useState } from "react";
import { firestore} from "../../config/firebase";
import * as firebase from "firebase"
import AsyncStorage from "@react-native-community/async-storage";

const Wifi4 = ({ route, navigation }) => {
  var textToSpeak = "Next, click on the setting icon.";
  AutoReadText(route.params.readText, textToSpeak);
  const [id, setID] = useState("x");
  const prepare = async () => {
    try {
      const getID = await AsyncStorage.getItem("id");
      if (getID != null) {
       
        setID(getID);
        console.log(id);
        const ref = firestore.collection('ScreenVisits').doc(getID);
        const increment = firebase.firestore.FieldValue.increment(1);
        ref.update({ wifi4 :increment }).catch(e=>{console.log(e)});
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
        <Image
          style={styles.image2}
          source={require("../../assets/wifi4-1.png")}
        />
        <Image
          style={styles.image1}
          source={require("../../assets/wifi4new.png")}
        />
      </View>
      <View style={styles.speaker}>
          <Speaker text={textToSpeak}></Speaker>
        </View>
      <BottomButton
        next={"Wifi5"}
        back={"Wifi3"}
        navigation={navigation}
        readText={route.params.readText}
      ></BottomButton>
      <Footer></Footer>
    </SafeAreaView>
  );
};

export default Wifi4;
const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    position: "relative",
  },
  container: {
    width: "100%",
    top: "5%",
    flex: 1,
    alignItems: "center",
    textAlign: "center",
  },
  image1: {
    alignItems: "center",
    position: "absolute",
    top: "10%",
    width: 400,
    height: 450,
  },
  image2: {
    position: "absolute",
    right: "5%",
    top: "40%",
    width: 70,
    height: 70,
  },

  text: {
    textAlign: "center",
    fontSize: 40,
  },
  speaker: {
    bottom: "10%",
  },
});
