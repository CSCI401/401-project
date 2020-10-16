import {
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
import React from "react";
import ScrollPractice from "./ScrollPractice";
import { SafeAreaView } from "react-native-safe-area-context";
import Constants from "expo-constants";

const Gesture22 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <ScrollPractice navigation={navigation}></ScrollPractice>
        <View style={styles.appButtonView}>
          <TouchableOpacity
            onPress={() => navigation.navigate("WelcomeTutorials")}
            style={styles.appButtonContainer}
          >
            <Text style={styles.appButtonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  scrollView: {
    marginHorizontal: 20,
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
    width: "50%",
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
