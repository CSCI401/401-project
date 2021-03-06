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

const Wifi2 = ({ route, navigation }) => {
  var textToSpeak = "First, you need to \n swipe down from the top.";
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
        ref.update({ wifi2 :increment }).catch(e=>{console.log(e)});
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
          style={styles.image}
          source={require("../../assets/wifi2.png")}
        />
      </View>
      <View style={styles.speaker}>
        <Speaker text={textToSpeak}></Speaker>
      </View>
      <BottomButton
        next={"Wifi3"}
        back={"Wifi1"}
        navigation={navigation}
        readText={route.params.readText}
      ></BottomButton>
      <Footer></Footer>
    </SafeAreaView>
  );
};

export default Wifi2;
const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    position: "relative",
  },
  container: {
    width: "100%",
    top: "1%",
    flex: 1,
    alignItems: "center",
    textAlign: "center",
  },
  image: {
    alignItems: "center",
    position: "absolute",
    top: "20%",
    width: 300,
    height: 450,
  },
  text: {
    textAlign: "center",
    fontSize: 40,
  },
  speaker: {
    bottom: "5%",
  },
});
