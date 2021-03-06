// import React from "react";
import { StatusBar } from "expo-status-bar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Speaker from "../../components/Speaker";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-community/async-storage";
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

import { firestore} from "../../config/firebase";
import * as firebase from "firebase"

const WelcomeSpeech = ({ navigation }) => {
  
  const [name, setName] = useState("");
  const [id, setID] = useState("x");
  var textToSpeak =`Hi ${name}, would you like to be\nread the tutorial?`

  const prepare = async () => {
    try {
      const getName = await AsyncStorage.getItem("name");
      const getID = await AsyncStorage.getItem("id");
      if (getName != null && getID != null) {
        setName(getName);
        setID(getID);
        console.log(id);
        const ref = firestore.collection('ScreenVisits').doc(getID);
        const increment = firebase.firestore.FieldValue.increment(1);
        ref.update({ wifi3 :increment }).catch(e=>{console.log(e)});
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
      
      <View style={styles.speaker}>
        <Speaker text={textToSpeak}></Speaker>
     
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity
          onPress={() =>{
            navigation.navigate("WelcomeSpeech2", { readText: true })
          }
            
          }
          style={styles.YesButtonContainer}
        >
          <Text style={styles.YesButtonText}>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("WelcomeSpeech2", { readText: false })
          }
          style={styles.NoButtonContainer}
        >
          <Text style={styles.NoButtonText}>No</Text>
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
    top:"2%",
    bottom: "10%",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 60,
  },
  speaker: {
    position: "relative",
    bottom: "1%",
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
    width: "25%",
    borderWidth: 3,
    borderRadius: 20,
    borderColor: "black",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    margin: "2%",
  },
  YesButtonText: {
    fontSize: 60,
  },
  NoButtonContainer: {
    //top: "25%",
    width: "25%",
    borderWidth: 3,
    borderRadius: 20,
    borderColor: "black",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    margin: "2%",
  },
  NoButtonText: {
    fontSize: 60,
  },
});

export default WelcomeSpeech;
