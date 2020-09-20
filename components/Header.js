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
} from "react-native";

function Header() {
  return (
    <View style={styles.header}>
      <Image style={styles.image} source={require("../assets/keck.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    marginRight: "65%",
    marginTop: "3%",
    //marginLeft: "20%",
    resizeMode: "contain",
  },
  header: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    height: "10%",
    position: "absolute",
    // left: 0,
    // right: 0,
    // bottom: 0,
    // top: 50,
    // height: 90,
    // float: "left",
    backgroundColor: "#990000",
    // flexDirection: "row",
    // width: "100%",
    // height: "10%",
    // flex: 1,
    // height: 20,
    // justifyContent: "flex-start",
    // backgroundColor: "#990000",
  },
});

export default Header;
