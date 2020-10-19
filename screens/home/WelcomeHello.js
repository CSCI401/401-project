import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Speaker from "../../components/Speaker";
import { firestore } from "../../config/firebase";
import AsyncStorage from "@react-native-community/async-storage";

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
import TTS from "../../components/TextToSpeech";

//import { LogBox } from "react-native";
//LogBox.ignoreWarnings(["Setting a timer"]);
// import { LogBox } from "react-native";
// LogBox.ignoreWarnings(["Setting a timer"]);

const WelcomeHello = ({ navigation }) => {
  const [name, setName] = useState('')
  var textToSpeak = "Hello,\nI am Daisy.\n \nWhat would you like to be called?";

  const createUser = () => {
    
    firestore
      .collection("newUsers")
      .add({
        name: name
      })
      .then((user) => {

          user
          .get()
          .then(doc => {
            
            AsyncStorage.setItem('id', doc.id);
            AsyncStorage.setItem('name', doc.data().name);
            AsyncStorage.setItem('state', doc.data().state);
            
            
            navigation.navigate("WelcomeSpeech");
            console.log("Document written with ID: ", user.id);

          })
          .catch(error => {
            console.error("Error adding document: ", error);
          })

      })
      .catch( (error) => {
        console.error("Error adding document: ", error);
      });

  } 

  useEffect(() => {
    (async () => {
    let id =  await AsyncStorage.getItem('id');
    console.log("the ID is: ", id);
      if (id !== null) {
        firestore
          .collection('newUsers')
          .doc(id)
          .get()
          .then(doc => {
            navigation.navigate("WelcomeSpeech");
        })
          .catch(error => {
          console.log(error)
        })
      }

    })()
  }, []);

  // Code for data clearance

  // const clearAll = async () => {
  //   try {
  //     await AsyncStorage.clear()
  //   } catch(e) {
  //     // clear error
  //   }
  
  //   console.log('Done.')
  // }
  // useEffect(() => {
  //   clearAll();
  // });

  return (
    <SafeAreaView style={styles.outerContainer}>
      <Header navigation={navigation}></Header>
      <View style={styles.container}>
        <Text style={styles.text}>{textToSpeak}</Text>
      </View>
      <View style={styles.speaker}>
        <Speaker text={textToSpeak}></Speaker>
      </View>
      <View style={styles.textInputContainer}>
        <TextInput style={styles.textInput} value={name} onChangeText={ input => setName(input) } placeholder="Insert Name Here" />
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity
          onPress={() => createUser()}
          style={styles.appButtonContainer}
        >
          <Text style={styles.YesButtonText}>Next</Text>
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
    bottom: "20%",
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
    bottom: "20%",
    //width: 100,
  },
  textInputContainer: {
    bottom: "10%",
    position: "relative",
    height: "10%",
    width: "100%",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    width: "80%",
    borderColor: "black",
    borderWidth: 3,
    fontSize: 60,
    textAlign: "center",
  },
  buttonView: {
    bottom: "8%",
    width: "100%",
    position: "relative",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  appButtonContainer: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    //top: "20%",
  },
  YesButtonContainer: {
    width: "25%",
    //marginBottom: "70%",
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

export default WelcomeHello;
