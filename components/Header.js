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

function Header(props) {
  return (
    <View style={styles.header}>
      <Image style={styles.image} source={require("../assets/keck.png")} />
      <TouchableHighlight
        onPress={
          () =>
            props.navigation.navigate("WelcomeTutorials", {
              readText: props.readText
            })
          //console.log("Something")
        }
        style={styles.homebutton}
        activeOpacity={0.5}
      >
        <Image
          style={styles.imagehome}
          source={require("../assets/iconhome.png")}
          resizeMode="stretch"
        />
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    marginTop: "6%",
    //top: "6%",
    //marginLeft: "20%",
    resizeMode: "contain",
  },
  header: {
    flexDirection: "row",
    height: "12%",
    // position: "relative",
    backgroundColor: "#990000",
  },
  homebutton: {
    flex: 1,
    height: 70,
    margin: 5,
    marginTop: "6%",
    //top: "6%",
    alignItems: "flex-end",
  },
  imagehome: {
    height: "100%",
    width: "20%",
    marginRight: "0%",
    //right: "0%",
    alignItems: "flex-end",
  },
});

export default Header;
