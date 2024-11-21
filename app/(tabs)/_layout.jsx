import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";

const quizzes = [
  { id: "1", name: "Math Quiz" },
  { id: "2", name: "Science Quiz" },
  { id: "3", name: "History Quiz" },
  { id: "4", name: "Geography Quiz" },
];

export default function TabLayout() {
  const handleQuizSelect = (quizName) => {
    router.push(`/quizScreen?quizName=${encodeURIComponent(quizName)}`);
  };

  const renderItem = ({ item }) => (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        { backgroundColor: pressed ? "#E0F7FA" : "#ffffff" },
      ]}
      onPress={() => handleQuizSelect(item.name)}
    >
      <Text style={styles.quizName}>{item.name}</Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
          marginBottom: 20,
          justifyContent: "center",
        }}
      >
        <Text style={styles.title}>Choose a Quiz</Text>
        <Pressable
          onPress={() => {
            Alert.alert("Logout", "Are you sure you want to logout?", [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel",
              },
              {
                text: "Logout",
                onPress: () => {
                  router.replace("(root)");
                },
              },
            ]);
          }}
        >
          <Entypo
            // style={{ left: 50, top: 5 }}*9*9*9*9*9
            name="log-out"
            size={24}
            color="tomato"
          />
        </Pressable>
      </View>
      <FlatList
        data={quizzes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
    paddingTop: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
    // marginBottom: 20,
    fontFamily: "SpaceMono",
  },
  listContainer: {
    paddingHorizontal: 10,
  },
  card: {
    padding: 20,
    borderRadius: 12,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    backgroundColor: "#fff",
  },
  quizName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#FFA500",
    textAlign: "center",
    fontFamily: "SpaceMono",
  },
});
