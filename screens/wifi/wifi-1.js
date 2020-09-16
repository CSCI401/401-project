import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HeaderFooter from "./components/HeaderFooter";

export default class Wifi1 extends Component {
  render() {
    const { userName } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Hello, {userName}. Welcome to the wifi tutorial
        </Text>

        <Image source={require("./speaker.png")} />

        <Button
          title="Next"
          color="#f194ff"
          onPress={() => Alert.alert("Next Button pressed")}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    justifyContent: "center",
  },
});
