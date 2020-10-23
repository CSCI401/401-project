import {
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
import ScrollPractice from "./ScrollPractice";
import { SafeAreaView } from "react-native-safe-area-context";
import Constants from "expo-constants";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import React, { useEffect, useState } from "react";
import { firestore} from "../../config/firebase";
import * as firebase from "firebase"
import AsyncStorage from "@react-native-community/async-storage";

const Gesture22 = ({ route, navigation }) => {
  const [id, setID] = useState("x");
  const prepare = async () => {
    try {
      const getID = await AsyncStorage.getItem("id");
      if (getID != null) {
        setID(getID);
        console.log(id);
        const ref = firestore.collection('ScreenVisits').doc(getID);
        const increment = firebase.firestore.FieldValue.increment(1);
        ref.update({ gesture22 :increment }).catch(e=>{console.log(e)});
      }

    } catch (error) {
      console.log("error in prepare");
    }
  };
  useEffect(() => {
    prepare();
  },[]);

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation}></Header>
      <ScrollView style={styles.scrollView}>
        <ScrollPractice navigation={navigation} route={route}></ScrollPractice>
        <View style={styles.appButtonView}>
          <TouchableOpacity
            onPress={() => navigation.navigate("WelcomeTutorials")}
            style={styles.appButtonContainer}
          >
            <Text style={styles.appButtonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Footer></Footer>
    </SafeAreaView>
  );
  // const Gesture22 = ({ route, navigation }) => {
  //   return <ScrollPractice navigation={navigation} route={route}></ScrollPractice>;
};
const styles = StyleSheet.create({
  scrollView: {
    marginHorizontal: 20,
    marginTop: "5%",
  },
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  appButtonText: {
    fontSize: 60,
  },
  appButtonContainer: {
    padding: 50,
    width: "45%",
    marginBottom: "25%",
    borderWidth: 3,
    borderRadius: 20,
    borderColor: "black",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  speakerContainer: {
    marginTop: "15%",
    width: "100%",
    position: "relative",
    alignItems: "center",
    textAlign: "center",
  },
  appButtonView: {
    width: "100%",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Gesture22;
