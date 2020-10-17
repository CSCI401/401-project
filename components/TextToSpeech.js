import * as Speech from "expo-speech";

function TTS(text) {
  text = text.replace(/\n/gm, " ");
  console.log("speaking " + text);
  var options = { rate: 0.75 };
  Speech.speak(text, options);
}

export default TTS;
