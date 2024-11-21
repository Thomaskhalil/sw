import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";

const Quiz = ({}) => {
  // Mock data for questions based on subject
  const subject = "Math";
  const questionsData = {
    Math: [
      {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4",
      },
      {
        question: "What is 10 / 2?",
        options: ["3", "4", "5", "10"],
        answer: "5",
      },
    ],
    Science: [
      {
        question: "What planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars",
      },
      {
        question: "What is the boiling point of water?",
        options: ["50°C", "100°C", "150°C", "200°C"],
        answer: "100°C",
      },
    ],
    History: [
      {
        question: "Who was the first President of the United States?",
        options: [
          "George Washington",
          "Abraham Lincoln",
          "John Adams",
          "Thomas Jefferson",
        ],
        answer: "George Washington",
      },
      {
        question: "In what year did World War II end?",
        options: ["1945", "1944", "1943", "1942"],
        answer: "1945",
      },
    ],
  };

  // Get questions for the subject
  const questions = questionsData[subject] || [];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(null);

  // Function to handle answer selection
  const handleAnswerSelection = (selectedOption) => {
    setSelectedAnswers((prev) => {
      const newAnswers = { ...prev, [currentQuestionIndex]: selectedOption };
      // Move to the next question or finish the quiz
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setTimeout(() => {
          calculateScore(newAnswers); // Pass updated answers after all state changes
        }, 0);
      }
      return newAnswers;
    });
  };

  // Function to calculate the score
  const calculateScore = (finalAnswers) => {
    let correctAnswers = 0;

    questions.forEach((question, index) => {
      if (finalAnswers[index] === question.answer) {
        correctAnswers++;
      }
    });
    setScore(correctAnswers);
  };

  if (score !== null) {
    return (
      <View style={styles.container}>
        <Text style={styles.scoreText}>
          Your Score: {score} / {questions.length}
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>
        {questions[currentQuestionIndex]?.question}
      </Text>

      <FlatList
        style={styles.optionList}
        data={questions[currentQuestionIndex]?.options}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.optionButton}
            onPress={() => handleAnswerSelection(item)}
          >
            <Text style={styles.optionText}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default Quiz;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#ffffff",
  },

  questionText: {
    marginTop: 50,
    fontFamily: "SpaceMono",
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 24,
    textAlign: "center",
    color: "#333333",
  },

  optionList: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
  optionButton: {
    backgroundColor: "#FFB84D", // Modern vibrant purple
    alignSelf: "center",
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    width: "90%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
  },
  optionText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
  },
  scoreText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#4caf50", // Vibrant green for success
    textAlign: "center",
    // flex: 1,
  },
});
