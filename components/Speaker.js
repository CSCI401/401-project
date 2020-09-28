import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import TTS from "./TextToSpeech";

function Speaker(textToSpeak) {
  console.log(textToSpeak.text);
  return (
    <View style={styles.speakerContainer}>
      <TouchableOpacity onPress={() => TTS(textToSpeak.text)}>
        <Image source={require("../assets/speaker.png")} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  speakerContainer: {
    top: "58%",
    alignSelf: "center",
    position: "absolute",
  },
});

export default Speaker;
