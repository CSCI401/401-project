import * as Speech from "expo-speech";

function TTS(text) {
  console.log("speaking " + text);
  var voices = Speech.getAvailableVoicesAsync();
  for (i = 0; i < voices.length; i++) {
    console.log(voices[i]);
  }
  console.log("done");
  var options = { rate: 0.75 };
  Speech.speak(text, options);
}

export default TTS;
