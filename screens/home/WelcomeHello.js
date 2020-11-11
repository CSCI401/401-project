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
  ToastAndroid,
} from "react-native";
import TTS from "../../components/TextToSpeech";

//import { LogBox } from "react-native";
//LogBox.ignoreWarnings(["Setting a timer"]);
// import { LogBox } from "react-native";
// LogBox.ignoreWarnings(["Setting a timer"]);

const WelcomeHello = ({ navigation }) => {
  const [name, setName] = useState("");
  var textToSpeak = "Hello,\nI am Daisy.\n \nWhat would you like to be called?";

  // const [user_id, setID] = useState("x");
  // var test_user_id = "x";
  // const createTable = () => {
  //   // set up the screen visit data for the new users
  //   // console.log("inside create table, id value is ", user_id);
  //   // console.log("inside create table, test user id is ", test_user_id);
  //   firestore
  //     .collection("ScreenVisits")
  //     .doc(test_user_id)
  //     .set({
  //       home1: 1,
  //       home2: 0,
  //       home3: 0,
  //       home4: 0,
  //       home5: 0,
  //       home6: 0,

  //       telecare1: 0,
  //       telecare2: 0,
  //       telecare3: 0,
  //       telecare4: 0,
  //       telecare5: 0,
  //       telecare6: 0,
  //       telecare7: 0,
  //       telecare8: 0,
  //       telecare9: 0,
  //       telecare10: 0,
  //       telecare11: 0,
  //       telecare12: 0,

  //       wifi1: 0,
  //       wifi2: 0,
  //       wifi3: 0,
  //       wifi4: 0,
  //       wifi5: 0,
  //       wifi6: 0,
  //       wifi7: 0,
  //       wifi8: 0,
  //       wifi9: 0,
  //       wifi10: 0,
  //       wifi11: 0,
  //       wifi12: 0,
  //       wifi13: 0,
  //       wifi14: 0,

  //       email1: 0,
  //       email2: 0,
  //       email3: 0,
  //       email4: 0,
  //       email5: 0,
  //       email6: 0,

  //       gesture1: 0,
  //       gesture2: 0,
  //       gesture3: 0,
  //       gesture4: 0,
  //       gesture5: 0,
  //       gesture6: 0,
  //       gesture7: 0,
  //       gesture8: 0,
  //       gesture9: 0,
  //       gesture10: 0,
  //       gesture11: 0,
  //       gesture12: 0,
  //       gesture13: 0,
  //       gesture14: 0,
  //       gesture15: 0,
  //       gesture16: 0,
  //       gesture17: 0,
  //       gesture18: 0,
  //       gesture19: 0,
  //       gesture20: 0,
  //       gesture21: 0,
  //       gesture22: 0,
  //     })
  //     .catch(function (error) {
  //       console.error("Error writing document: ", error);
  //     });
  //   navigation.navigate("WelcomeIntroductoryVideo");
  //   WelcomeIntroductoryVideo;
  // };

  // const createUser = () => {
  //   //initialize the user, store the id in AsyncStorage
  //   firestore
  //     .collection("newUsers")
  //     .add({
  //       name: name,
  //     })
  //     .then((user) => {
  //       user
  //         .get()
  //         .then((doc) => {
  //           AsyncStorage.setItem("id", doc.id);
  //           console.log("line 62, doc.id is ", doc.id); //change to user_id and try
  //           setID(doc.id);
  //           console.log("line 62, set userID to ", user_id);
  //           test_user_id = doc.id;
  //           console.log("line 68, test user id is  ", test_user_id);
  //           AsyncStorage.setItem("name", doc.data().name);
  //           AsyncStorage.setItem("state", doc.data().state);
  //           createTable();
  //         })
  //         .catch((error) => {
  //           console.error("Error adding document: ", error);
  //         });
  //     })
  //     .catch((error) => {
  //       console.error("Error adding document: ", error);
  //     });
  // };

  // checkNameLength = (name) => {
  //   console.log(name);
  //   if (name.name.length < 20) {
  //     createUser();
  //   } else {
  //     ToastAndroid.show(
  //       "Please enter a shorter name",
  //       ToastAndroid.LONG,
  //       ToastAndroid.CENTER
  //     );
  //   }
  // };

  // useEffect(() => {
  //   (async () => {
  //     let id = await AsyncStorage.getItem("id");
  //     console.log("line 96 the ID is: ", id);
  //     if (id !== null) {
  //       firestore
  //         .collection("newUsers")
  //         .doc(id)
  //         .get()
  //         .then((doc) => {
  //           navigation.navigate("WelcomeSpeech");
  //         })
  //         .catch((error) => {
  //           console.log(error);
  //         });
  //     }
  //   })();
  // }, []);

  //Code for data clearance

  const clearAll = async () => {
    try {
      await AsyncStorage.clear()
    } catch(e) {
      // clear error
    }

    console.log('Done.')
  }
  useEffect(() => {
    clearAll();
  });

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
        <TextInput
          style={styles.textInput}
          value={name}
          onChangeText={(input) => setName(input)}
          placeholder="Insert Name Here"
        />
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity
          onPress={() => checkNameLength({ name })}
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
