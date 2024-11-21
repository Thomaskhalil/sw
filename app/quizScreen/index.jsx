import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function Index({ route, navigation }) {
  const { quizName } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>{quizName}</Text>
      <Text style={styles.description}>
        Ready to test your knowledge? Start the {quizName} now!
      </Text>
      <Pressable
        style={styles.startButton}
        onPress={() => {
          alert("Starting Quiz...");
          router.push(`/quizView`);
        }}
      >
        <Text style={[styles.buttonText, { color: "#fff" }]}>Start Quiz</Text>
      </Pressable>
      <Pressable style={styles.backButton} onPress={() => router.back()}>
        <Text style={[styles.buttonText, { color: "#FFA500" }]}>Go Back</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 32,
    fontWeight: "600",
    color: "#000",
    marginBottom: 10,
    fontFamily: "SpaceMono",
  },
  description: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginBottom: 30,
    fontFamily: "SpaceMono",
  },
  startButton: {
    paddingVertical: 15,
    paddingHorizontal: 40,
    backgroundColor: "#FFA500",
    borderRadius: 25,
    marginBottom: 10,
  },
  backButton: {
    paddingVertical: 15,
    paddingHorizontal: 40,
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#FFA500",
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    fontFamily: "SpaceMono",
  },
});
