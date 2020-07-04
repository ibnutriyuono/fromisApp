import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { colors, sizes } from "../../styles";
import {
  TextInputEmail,
  TextInputPassword,
  Button,
} from "../../components/atoms";
import { StatusBar } from "expo-status-bar";

export default class RegisterScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../../assets/icons/fromisFavicon.png")}
          />
        </View>
        <View styles={styles.loginView}>
          <View style={styles.loginContainer}>
            <TextInputEmail placeholder="username or email" />
          </View>
          <View style={styles.loginContainer}>
            <TextInputPassword placeholder="password" />
          </View>
          <View style={styles.loginContainer}>
            <TextInputPassword placeholder="confirm password" />
          </View>
          <View style={styles.forgotPasswordContainer}>
            <Text style={styles.forgotPasswordText}>Forgot password ?</Text>
            <Text style={styles.registerText}>
              Already have an account ? Log in.
            </Text>
          </View>
          <Button buttonText="REGISTER" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightBg,
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
    marginTop: 50,
  },
  logo: {
    width: 250,
    height: 250,
  },
  loginView: {
    flex: 1,
  },
  loginContainer: {
    marginBottom: 20,
  },
  forgotPasswordContainer: {
    justifyContent: "flex-start",
    alignItems: "flex-end",
    marginRight: 25,
  },
  forgotPasswordText: {
    color: colors.purple,
    marginBottom: 15,
  },
  registerText: {
    color: colors.purple,
    marginBottom: 10,
  },
});
