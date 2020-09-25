import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
//import HeaderFooter from "./components/HeaderFooter";
import WelcomeHello from "./screens/home/WelcomeHello.js";
import WelcomeSpeech from "./screens/home/WelcomeSpeech.js";
import Wifi1 from "./screens/wifi/wifi-1.js";
import Wifi2 from "./screens/wifi/wifi-2.js";

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeSpeech2 from "./screens/home/WelcomeSpeech2.js";
import WelcomeIntroductoryVideo from "./screens/home/WelcomeIntroductoryVideo.js";
import WelcomeThankYou from "./screens/home/WelcomeThankYou.js";
import WelcomeTutorials from "./screens/home/WelcomeTutorials.js";

const Stack = createStackNavigator();

export default function App() {
  // return <WelcomeHello />;
  //return <WelcomeSpeech />;

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
