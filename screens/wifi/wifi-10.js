import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import AutoReadText from "../../components/AutoReadText";
import Speaker from "../../components/Speaker";

const Wifi10 = ({ route, navigation }) => {
  const textToSpeak =
    "You might want to call a family member or your internet provider to find out more about the Wifi name and password.";
  AutoReadText(route.params.readText, textToSpeak);
  return (
    <SafeAreaView style={styles.outerContainer}>
      <Header navigation={navigation}></Header>
      <View style={styles.container}>
        <Text style={styles.text}>{textToSpeak}</Text>
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("WelcomeTutorials", {
              readText: route.params.readText,
            })
          }
          style={styles.YesButtonContainer}
        >
          <Text style={styles.YesButtonText}>Home</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.speaker}>
          <Speaker text={textToSpeak}></Speaker>
        </View>
      <Footer></Footer>
    </SafeAreaView>
  );
};

export default Wifi10;
const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    position: "relative",
  },
  container: {
    flexDirection: "row",
    width: "100%",
    flex: 1,
    paddingHorizontal: "4%",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  image: {
    alignItems: "center",
    position: "absolute",
    top: "80%",
    margin: "10%",
    width: 500,
    height: 300,
  },
  text: {
    textAlign: "center",
    fontSize: 40,
  },
  speaker: {
    position: "relative",
    bottom: "27%",
  },
  buttonView: {
    top: "15%",
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
    width: "35%",
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
});
