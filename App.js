import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
//import HeaderFooter from "./components/HeaderFooter";
import WelcomeHello from "./screens/home/WelcomeHello.js";
import WelcomeSpeech from "./screens/home/WelcomeSpeech.js";
import Wifi1 from "./screens/wifi/wifi-1.js";
import Wifi2 from "./screens/wifi/wifi-2.js";
import Wifi3 from "./screens/wifi/wifi-3.js";
import Wifi4 from "./screens/wifi/wifi-4.js";
import Wifi5 from "./screens/wifi/wifi-5.js";
import Wifi6 from "./screens/wifi/wifi-6.js";
import Wifi7 from "./screens/wifi/wifi-7.js";
import Wifi8 from "./screens/wifi/wifi-8.js";
import Wifi9 from "./screens/wifi/wifi-9.js";
import Wifi10 from "./screens/wifi/wifi-10.js";
import Wifi11 from "./screens/wifi/wifi-11.js";
import Wifi12 from "./screens/wifi/wifi-12.js";
import Wifi13 from "./screens/wifi/wifi-13.js";
import Wifi14 from "./screens/wifi/wifi-14.js";
import Email1 from "./screens/email/Email-1.js";
import Email2 from "./screens/email/Email-2";
import Email3 from "./screens/email/Email-3";
import Email4 from "./screens/email/Email-4";
import Email5 from "./screens/email/Email-5";
import Email6 from "./screens/email/Email-6";
import ZoomInPractice from "./screens/gesture/ZoomInPractice.js";
import ZoomOutPractice from "./screens/gesture/ZoomOutPractice.js";
import ScrollPractice from "./screens/gesture/ScrollPractice.js";
import Gesture1 from "./screens/gesture/Gesture-1";
import Gesture2 from "./screens/gesture/Gesture-2";
import Gesture3 from "./screens/gesture/Gesture-3";
import Gesture4 from "./screens/gesture/Gesture-4";
import Gesture5 from "./screens/gesture/Gesture-5";
import Gesture6 from "./screens/gesture/Gesture-6";
import Gesture7 from "./screens/gesture/Gesture-7";
import Gesture8 from "./screens/gesture/Gesture-8";
import Gesture9 from "./screens/gesture/Gesture-9";
import Gesture10 from "./screens/gesture/Gesture-10";
import Gesture11 from "./screens/gesture/Gesture-11";
import Gesture12 from "./screens/gesture/Gesture-12";
import Gesture13 from "./screens/gesture/Gesture-13";
import Gesture14 from "./screens/gesture/Gesture-14";
import Gesture15 from "./screens/gesture/Gesture-15";
import Gesture16 from "./screens/gesture/Gesture-16";
import Gesture17 from "./screens/gesture/Gesture-17";
import Gesture18 from "./screens/gesture/Gesture-18";
import Gesture19 from "./screens/gesture/Gesture-19";
import Gesture20 from "./screens/gesture/Gesture-20";
import Gesture21 from "./screens/gesture/Gesture-21";
import Gesture22 from "./screens/gesture/Gesture-22";
import Telecare1 from "./screens/telecare/Telecare-1";
import Telecare2 from "./screens/telecare/Telecare-2";
import Telecare3 from "./screens/telecare/Telecare-3";
import Telecare4 from "./screens/telecare/Telecare-4";
import Telecare5 from "./screens/telecare/Telecare-5";
import Telecare6 from "./screens/telecare/Telecare-6";
import Telecare7 from "./screens/telecare/Telecare-7";
import Telecare8 from "./screens/telecare/Telecare-8";
import Telecare9 from "./screens/telecare/Telecare-9";
import Telecare10 from "./screens/telecare/Telecare-10";
import Telecare11 from "./screens/telecare/Telecare-11";
import Telecare12 from "./screens/telecare/Telecare-12";

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeSpeech2 from "./screens/home/WelcomeSpeech2.js";
import WelcomeIntroductoryVideo from "./screens/home/WelcomeIntroductoryVideo.js";
import WelcomeThankYou from "./screens/home/WelcomeThankYou.js";
import WelcomeTutorials from "./screens/home/WelcomeTutorials.js";
import { YellowBox } from 'react-native';
const Stack = createStackNavigator();

export default function App() {

  YellowBox.ignoreWarnings(['Setting a timer']);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomeHello">
        <Stack.Screen
          name="WelcomeHello"
          component={WelcomeHello}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="WelcomeSpeech"
          component={WelcomeSpeech}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="WelcomeSpeech2"
          component={WelcomeSpeech2}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="WelcomeIntroductoryVideo"
          component={WelcomeIntroductoryVideo}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="WelcomeThankYou"
          component={WelcomeThankYou}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="WelcomeTutorials"
          component={WelcomeTutorials}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Wifi1"
          component={Wifi1}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Wifi2"
          component={Wifi2}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Wifi3"
          component={Wifi3}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Wifi4"
          component={Wifi4}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Wifi5"
          component={Wifi5}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Wifi6"
          component={Wifi6}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Wifi7"
          component={Wifi7}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Wifi8"
          component={Wifi8}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Wifi9"
          component={Wifi9}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Wifi10"
          component={Wifi10}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Wifi11"
          component={Wifi11}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Wifi12"
          component={Wifi12}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Wifi13"
          component={Wifi13}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Wifi14"
          component={Wifi14}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Email1"
          component={Email1}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Email2"
          component={Email2}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Email3"
          component={Email3}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Email4"
          component={Email4}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Email5"
          component={Email5}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Email6"
          component={Email6}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="ZoomIn"
          component={ZoomInPractice}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="ZoomOutPractice"
          component={ZoomOutPractice}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Scroll"
          component={ScrollPractice}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Gesture1"
          component={Gesture1}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Gesture2"
          component={Gesture2}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Gesture3"
          component={Gesture3}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Gesture4"
          component={Gesture4}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Gesture5"
          component={Gesture5}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Gesture6"
          component={Gesture6}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Gesture7"
          component={Gesture7}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Gesture8"
          component={Gesture8}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Gesture9"
          component={Gesture9}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Gesture10"
          component={Gesture10}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Gesture11"
          component={Gesture11}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Gesture12"
          component={Gesture12}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Gesture13"
          component={Gesture13}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Gesture14"
          component={Gesture14}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Gesture15"
          component={Gesture15}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Gesture16"
          component={Gesture16}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Gesture17"
          component={Gesture17}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Gesture18"
          component={Gesture18}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Gesture19"
          component={Gesture19}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Gesture20"
          component={Gesture20}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Gesture21"
          component={Gesture21}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Gesture22"
          component={Gesture22}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Telecare1"
          component={Telecare1}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Telecare2"
          component={Telecare2}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Telecare3"
          component={Telecare3}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Telecare4"
          component={Telecare4}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Telecare5"
          component={Telecare5}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Telecare6"
          component={Telecare6}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Telecare7"
          component={Telecare7}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Telecare8"
          component={Telecare8}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Telecare9"
          component={Telecare9}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Telecare10"
          component={Telecare10}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Telecare11"
          component={Telecare11}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Telecare12"
          component={Telecare12}
          options={{ header: () => null }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
