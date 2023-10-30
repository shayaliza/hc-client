"use client";
import React, { useState } from "react";

function Bmi() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [message, setMessage] = useState("");

  const calculateBMI = () => {
    if (weight > 0 && height > 0) {
      const bmiValue = (weight / (height * height)) * 10000;
      setBmi(bmiValue.toFixed(2));
      setMessage(getMessage(bmiValue));
    } else {
      setBmi(0);
      setMessage("");
    }
  };

  const getMessage = (bmiValue) => {
    if (bmiValue < 18.5) {
      return "Underweight";
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      return "Normal Weight";
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      return "Overweight";
    } else {
      return "Obese";
    }
  };

  const getAdvice = (bmiValue) => {
    if (bmiValue < 18.5) {
      return "You should consider gaining weight in a healthy way.";
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      return "You are within the healthy weight range. Keep up the good work!";
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      return "You may want to consider losing some weight through a balanced diet and regular exercise.";
    } else {
      return "You are in the obese range. It's important to consult a healthcare professional for advice.";
    }
  };

  return (
    <div className="w-full max-w-xs mx-auto mt-5">
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="weight"
        >
          Weight (kg):
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="weight"
          type="number"
          placeholder="Enter your weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="height"
        >
          Height (cm):
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="height"
          type="number"
          placeholder="Enter your height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={calculateBMI}
      >
        Calculate BMI
      </button>
      <div className="mt-4">
        <strong>Your BMI: {bmi}</strong>
      </div>
      {message && (
        <div className="mt-4">
          <strong>You are {message}</strong>
          <p>{getAdvice(parseFloat(bmi))}</p>
        </div>
      )}
    </div>
  );
}

export default Bmi;
