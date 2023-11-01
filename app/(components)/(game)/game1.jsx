import React, { useState } from "react";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    correctAnswer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Venus", "Jupiter"],
    correctAnswer: "Mars",
  },
  {
    question: "Which p",
    options: ["Earth", "Mars", "Venus", "Jupiter"],
    correctAnswer: "Mars",
  },
  {
    question: "Which s",
    options: ["Earth", "Mars", "Venus", "Jupiter"],
    correctAnswer: "Mars",
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
    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
      <div className="flex justify-center">
        {" "}
        <h2 className="text-2xl font-semibold text-c4 mb-4">Quiz Game</h2>
      </div>
      <div className="flex justify-center mb-2">
        {" "}
        <p>Question {currentQuestion + 1}:</p>
        <p>{questions[currentQuestion].question}</p>
      </div>

      <div className="text-center">
        {questions[currentQuestion].options.map((option, index) => (
          <div key={index}>
            <button
              className={`bg-transparent border-2 border-black
              rounded-lg p-2 m-2 hover:bg-black text-black
               font-semibold py-2 px-4 hover:text-white 
               hover:border-transparent transition-transform 
               transform hover:-translate-y-2 focus:outline-none
                focus:shadow-outline ${
                  selectedAnswer === option ? " bg-c4 text-c1" : " "
                }`}
              onClick={() => handleAnswerClick(option)}
            >
              {option}
            </button>
          </div>
        ))}
      </div>
      {showError && (
        <div className="flex justify-center">
          {" "}
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
          className=" hover:bg-t4 text-white font-bold py-2 px-4 hover:text-c4 
  hover:outline-double rounded-2xl
focus:outline-none focus:shadow-outline bg-c5 mt-5"
        >
          Next
        </button>
      </div>
    </div>
  );
}
