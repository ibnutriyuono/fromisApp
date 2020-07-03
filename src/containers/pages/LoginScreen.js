import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { colors, sizes } from "../../styles";
import { TextInputEmail, TextInputPassword } from "../../components/atoms";
import { StatusBar } from "expo-status-bar";

export default class LoginScreen extends Component {
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
          <View style={styles.forgotPasswordContainer}>
            <Text style={styles.forgotPasswordText}>Forgot password ?</Text>
            <Text style={styles.registerText}>
              Don't have an account ? Sign Up.
            </Text>
          </View>
          <View style={styles.loginButtonContainer}>
            <Text style={styles.loginButtonText}>LOGIN</Text>
          </View>
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
  loginButtonContainer: {
    backgroundColor: colors.lightHl,
    margin: 10,
    paddingVertical: 20,
    borderRadius: 14,
  },
  loginButtonText: {
    textAlign: "center",
    color: "white",
    fontWeight: "700",
  },
});
