import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "./styles";

import LoginScreen from "./containers/pages/LoginScreen";

export default class index extends Component {
  render() {
    return <LoginScreen />;
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
