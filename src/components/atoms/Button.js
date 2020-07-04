import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { colors } from "../../styles";

export default class Button extends Component {
  render() {
    return (
      <View style={styles.loginButtonContainer}>
        <Text style={styles.loginButtonText}>{this.props.buttonText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginButtonContainer: {
    backgroundColor: colors.lightHl,
    margin: 10,
    paddingVertical: 20,
    borderRadius: 14,
    marginBottom: 20,
  },
  loginButtonText: {
    textAlign: "center",
    color: "white",
    fontWeight: "700",
  },
});
