import React, { Component } from "react";
import { TextInput, StyleSheet, View } from "react-native";
import { colors } from "../../styles";

export default class Form extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          keyboardType="email-address"
          style={styles.input}
          placeholder={this.props.placeholder}
          placeholderTextColor={colors.purpleLight}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
  },
  input: {
    height: 40,
    backgroundColor: "white",
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 14,
  },
});
