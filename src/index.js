import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "./styles";

export default class index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightBg,
    alignItems: "center",
    justifyContent: "center",
  },
});
