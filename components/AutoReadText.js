import * as Speech from "expo-speech";
import TTS from "./TextToSpeech";

function AutoReadText(autoReadText, text) {
    if(autoReadText) {
        console.log("Autoreading text: " + text)
        TTS(text);
      }
}

export default AutoReadText;
