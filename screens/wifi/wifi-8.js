import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import Speaker from "../../components/Speaker";
import AutoReadText from "../../components/AutoReadText";

const Wifi8 = ({ route, navigation }) => {
  var textToSpeak =
    "Your router might look similar to these. Can you find your router?";
  AutoReadText(route.params.readText, textToSpeak);
  return (
    <SafeAreaView style={styles.outerContainer}>
      <Header navigation={navigation}></Header>
      <View style={styles.container}>
        <Text style={styles.text}>{textToSpeak}</Text>
        <Image
          style={styles.image}
          source={require("../../assets/router.jpg")}
        />
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Wifi9", { readText: route.params.readText })
          }
          style={styles.YesButtonContainer}
        >
          <Text style={styles.YesButtonText}>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Wifi10", { readText: route.params.readText })
          }
          style={styles.NoButtonContainer}
        >
          <Text style={styles.NoButtonText}>No</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.speaker}>
          <Speaker text={textToSpeak}></Speaker>
        </View>
      <Footer></Footer>
    </SafeAreaView>
  );
};

export default Wifi8;
// <Image source={require("./speaker.png")} />
const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    position: "relative",
  },
  container: {
    flexDirection: "row",
    width: "100%",
    flex: 1,
    bottom: "10%",
    paddingHorizontal: "4%",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  image: {
    alignItems: "center",
    position: "absolute",
    top: "60%",
    margin: "10%",
    width: 500,
    height: 300,
  },
  text: {
    textAlign: "center",
    fontSize: 40,
  },
  speaker: {
    bottom: "27%"
  },
  buttonView: {
    top: "15%",
    width: "100%",
    flex: 1,
    position: "relative",
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "2%",
  },
  YesButtonContainer: {
    width: "25%",
    borderWidth: 3,
    borderRadius: 20,
    borderColor: "black",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    margin: "2%",
  },
  YesButtonText: {
    fontSize: 60,
  },
  NoButtonContainer: {
    width: "25%",
    borderWidth: 3,
    borderRadius: 20,
    borderColor: "black",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    margin: "2%",
    marginLeft: "10%",
  },
  NoButtonText: {
    fontSize: 60,
  },
});
