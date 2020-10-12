import React from "react";
import { View, Image, Text, StyleSheet, Button } from "react-native";
import ReactNativeZoomableView from "@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Next"
          onPress={() => this.props.navigation.navigate("Gesture17", {readText: this.route.params.readText})}
        />
        <Text style={styles.textWrapper}>Practice Zoom out here </Text>
        <View style={styles.zoomWrapper}>
          <ReactNativeZoomableView
            zoomEnabled={true}
            maxZoom={5}
            minZoom={1}
            // zoomStep={0.25}
            initialZoom={2}
            bindToBorders={true}
            onZoomAfter={this.logOutZoomState}
            style={styles.zoomableView}
          >
            <Image
              style={styles.image}
              source={require("../../assets/daisy.png")}
              resizeMode="stretch"
            />
          </ReactNativeZoomableView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 30,
  },
  textWrapper: {
    height: 100,
    fontSize: 30,
    paddingTop: 30,
  },
  zoomWrapper: {
    // flex: 1,
    width: 400,
    height: 400,
    // paddingTop: 200,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  zoomableView: {
    width: 500,
    height: 500,
    // flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    // flex: 1,
    width: "100%",
    height: "124%",
  },
});
