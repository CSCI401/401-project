import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

function HeaderFooter() {
  return (
    <View>
      <Text>yo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: "#60798C",
    color: "white",
    // alignItems: "center",
    // justifyContent: "center",
  },
  myStudents: {
    color: "white",
    fontSize: 30,
  },
  studentElem: {
    // width: 100,
    // flex: 1,
    height: 100,
    backgroundColor: "white",
    flexDirection: "row",
  },
  classSubject: {
    //flex: 1,
    // flexDirection: "row",
    marginLeft: "5%",
    paddingLeft: "10%",
    paddingTop: "10%",
    fontSize: 20,
    justifyContent: "center",

    // justifyContent: "flex-start",
  },
  timeInfo: {
    marginLeft: "5%",
    paddingLeft: "10%",
    paddingTop: "1%",

    //alignItems: "stretch",
  },
  numOfStudents: {
    //paddingTop: "15%",
    borderWidth: 1,
    borderColor: "black",
    padding: "3%",
    paddingTop: "3%",
    //paddingBottom: "3%",
    marginTop: "10%",
    height: 50,
  },
});

export default HeaderFooter;
