import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Button,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ImageBackground,
  TouchableHighlight,
} from "react-native";

function BottomButtons(props) {
  return (
    <View style={styles.buttonContainer}>
      <View style={styles.backButtonView}>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate(props.back, {
              readText: props.readText,
            })
          }
          style={styles.backButtonContainer}
        >
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate(props.next, {
              readText: props.readText,
            })
          }
          style={styles.YesButtonContainer}
        >
          <Text style={styles.YesButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
  },
  buttonView: {
    width: "50%",
    position: "relative",
    marginLeft: "-10%",
  },
  backButtonView: {
    width: "50%",
    marginLeft: "20%",
    position: "relative",
  },
  YesButtonContainer: {
    width: "50%",
    marginBottom: "20%",
    borderWidth: 3,
    borderRadius: 20,
    borderColor: "black",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  backButtonContainer: {
    width: "50%",
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
  backButtonText: {
    fontSize: 60,
  },
});

export default BottomButtons;
