import React, { useState } from "react";
import { motion } from "framer-motion";

const questions = [
  {
    question:
      "Which of these conditions is often referred to as the silent killer due to its asymptomatic nature?",
    options: [
      "Diabetes",
      "High blood pressure (Hypertension)",
      "Asthma",
      "Migraine",
    ],
    correctAnswer: "High blood pressure (Hypertension)",
  },
  {
    question:
      "What is the recommended duration for washing your hands to effectively remove germs?",
    options: ["5 sec", "20 sec", "1 min", "3 min"],
    correctAnswer: "20 sec",
  },
  {
    question: "Which vitamin is commonly known as the sunshine vitamin?",
    options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin E"],
    correctAnswer: "Vitamin D",
  },
  {
    question: "Which of the following foods is a good source of protein?",
    options: ["Broccoli", "Rice", "Chicken", "Watermelon"],
    correctAnswer: "Chicken",
  },
  {
    question:
      "What is the primary way to prevent the spread of respiratory infections like COVID-19?",
    options: [
      "Taking antibiotics",
      "Covering your mouth with your hand when coughing",
      "Wearing a mask",
      "Washing hands frequently",
    ],
    correctAnswer: "Washing hands frequently",
  },
  {
    question: "What is the main benefit of a diet rich in fiber?",
    options: [
      "Weight gain",
      " Improved digestion",
      "Reduced risk of heart disease",
      "Increased blood pressure",
    ],
    correctAnswer: "Improved digestion",
  },
  {
    question:
      "Which exercise is commonly recommended for improving cardiovascular health?",
    options: ["Weightlifting", "Yoga", "Running", "Meditation"],
    correctAnswer: "Running",
  },
  {
    question: "What is the recommended daily water intake for an average adult",
    options: [
      "1 cup (8 ounces)",
      "2 liters (about 8 cups)",
      "5 gallons",
      "No specific requirement",
    ],
    correctAnswer: "2 liters (about 8 cups)",
  },
  {
    question: "Which type of fat is considered the healthiest for your heart?",
    options: [
      "Saturated fat",
      "Trans fat",
      "Monounsaturated fat",
      "Cholesterol",
    ],
    correctAnswer: "Monounsaturated fat",
  },
  {
    question: "Which of the following is a symptom of a migraine headache?",
    options: ["Nausea", "Fever", "Joint pain", "Watery eyes"],
    correctAnswer: "Nausea",
  },
  {
    question: "ow can you reduce the risk of developing osteoporosis?",
    options: [
      "Consuming a diet rich in calcium and vitamin D",
      "Avoiding all dairy producs",
      "Smoking regulary",
      "Staying sedentary",
    ],
    correctAnswer: "Consuming a diet rich in calcium and vitamin D",
  },
  {
    question:
      "Which of the following activities can help manage stress effectively?",
    options: [
      "Overworking and not taking breaks",
      "Deep breathing exercises",
      "Consuming caffeine and sugar",
      "Avoiding social interactions",
    ],
    correctAnswer: " Deep breathing exercises",
  },
  {
    question: "Which organ is primarily responsible for detoxifying the body?",
    options: ["Liver", "Stomach", "Heart", "Lungs"],
    correctAnswer: "Liver",
  },
  {
    question:
      "What is the recommended daily amount of fruits and vegetables for a balanced diet?",
    options: [
      "1 serving",
      "5 serving",
      "10 serving",
      "No specific recommendation",
    ],
    correctAnswer: "5 serving",
  },
  {
    question: "Which of the following activities can help improve flexibility?",
    options: ["Weightlifting", "Swimming", "Yoga", "Cycling"],
    correctAnswer: "Yoga",
  },
];

export default function Game1() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showError, setShowError] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer); // Store the selected answer
    if (answer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    } else {
      setShowError(true); // Show error if the answer is wrong
    }
  };

  const nextQuestion = () => {
    setShowError(false); // Reset error message
    setSelectedAnswer(null); // Reset the selected answer
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Game over
      if (
        showError ||
        (currentQuestion === questions.length - 1 &&
          selectedAnswer !== questions[currentQuestion].correctAnswer)
      ) {
        // Show error before alert and update score if the last question's answer is correct
        setScore(score + 1);
        alert(
          "Incorrect answer. Game Over! Your score: " +
            score +
            "/" +
            questions.length
        );
      } else {
        alert("Game Over! Your score: " + score + "/" + questions.length);
      }
      setCurrentQuestion(0);
      setScore(0);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className="bg-gray-200 p-4 rounded-lg shadow-md"
    >
      <div className="flex justify-center">
        <h2 className="text-2xl font-semibold text-c4 mb-4">Quiz Game</h2>
      </div>
      <div className="flex justify-center mb-2">
        <p>Question {currentQuestion + 1}:</p>
        <p>{questions[currentQuestion].question}</p>
      </div>

      <div className="text-center">
        {questions[currentQuestion].options.map((option, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className={`bg-transparent border-2 border-black
        rounded-lg p-2 m-2 hover:bg-black text-black
         font-semibold py-2 px-4 hover:text-white 
         hover:border-transparent transition-transform 
         transform hover:-translate-y-2 focus:outline-none
          focus:shadow-outline ${
            selectedAnswer === option ? " bg-c4 text-purple-400" : " "
          }`}
            onClick={() => handleAnswerClick(option)}
          >
            {option}
          </motion.div>
        ))}
      </div>
      {showError && (
        <div className="flex justify-center">
          <p className="text-red-500">
            Incorrect answer. Try again or click "Next" to proceed.
          </p>
        </div>
      )}
      <div className="flex justify-center mt-2">
        <p>Correct answers: {score}</p>
      </div>
      {currentQuestion === questions.length - 1 && (
        <div className="flex justify-center">
          <button
            onClick={nextQuestion}
            className=" hover:bg-t4 text-white font-bold py-2 px-4 hover:text-c4 
hover:outline-double rounded-2xl
focus:outline-none focus:shadow-outline bg-c5"
          >
            Summit
          </button>
        </div>
      )}

      <div className="flex justify-center">
        <button
          onClick={nextQuestion}
          className=" hover-bg-t4 text-white font-bold py-2 px-4 hover:text-c4 
hover-outline-double rounded-2xl
focus-outline-none focus-shadow-outline bg-c5 mt-5"
        >
          Next
        </button>
      </div>
    </motion.div>
  );
}
