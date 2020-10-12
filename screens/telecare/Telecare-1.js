import React from "react";
import { StatusBar } from "expo-status-bar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Speaker from "../../components/Speaker";

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
import { WebView } from 'react-native-webview';
import AutoReadText from "../../components/AutoReadText";

const Telecare1 = ({ route, navigation }) => {
  var textToSpeak = "Telecare Introduction\n";
  AutoReadText(route.params.readText, textToSpeak);
  return (
    
    <SafeAreaView style={styles.outerContainer}>
      <Header></Header>
      <View style={styles.container}>
        <Text style={styles.text}>{textToSpeak}</Text>
      </View>
      <View style={styles.speaker}>
        <Speaker style={styles.speakerInner} text={textToSpeak}></Speaker>
      </View>
      <WebView
            style={styles.image2}
            source={{uri: 'https://www.youtube.com/embed/eERe0-E4Zpg' }}
        />
      <View style={styles.buttonView}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Telecare2", {readText: route.params.readText})}
          style={styles.YesButtonContainer}
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
    bottom: "10%",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  text: {
    textAlign: "center",
    // justifyContent: "center",
    // alignItems: "center",
    fontSize: 60,
  },
  speaker: {
    position: "relative",
    bottom: "15%",
  },
  image1: {
    width: "100%",
    position: "relative",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  image2: {
    position: "relative",
  },
  buttonView: {
    top: "5%",
    width: "100%",
    position: "relative",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  YesButtonContainer: {
    width: "25%",
    marginBottom: "20%",
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

export default Telecare1;
