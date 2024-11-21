import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Add your login logic here
    const correctEmail = "admin@mti.com";
    const correctPassword = "password";

    if (email === correctEmail && password === correctPassword) {
      alert("Login successful!");
      router.replace("/(tabs)");
    } else {
      alert("Invalid email or password.");
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Login</Text>
      <TextInput
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#FFB84D"
      />
      <TextInput
        onChangeText={(text) => setPassword(text)}
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#FFB84D"
        secureTextEntry
      />
      <TouchableOpacity
        onPress={handleLogin}
        activeOpacity={0.8}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FF8C00",
    marginBottom: 40,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#FF8C00",
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginVertical: 10,
    color: "#000",
    fontSize: 16,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#FF8C00",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFF",
  },
  forgotText: {
    fontSize: 16,
    color: "#FFB84D",
    textDecorationLine: "underline",
  },
});
