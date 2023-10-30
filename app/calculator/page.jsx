"use client";
import React from "react";
import { useState } from "react";
import Bmi from "../(components)/(calculator)/bmi";
import Calorie from "../(components)/(calculator)/calorie";
import BodyFat from "../(components)/(calculator)/bodyfat";

export default Calc;
function Calc() {
  const [calculatorType, setCalculatorType] = useState("bmi");

  return (
    <div className="w-full max-w-2xl mx-auto mt-5">
      <div className="mb-4">
        <button
          className={`mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
            calculatorType === "bmi" ? "bg-blue-700" : ""
          }`}
          onClick={() => setCalculatorType("bmi")}
        >
          BMI Calculator
        </button>
        <button
          className={`mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
            calculatorType === "calorie" ? "bg-blue-700" : ""
          }`}
          onClick={() => setCalculatorType("calorie")}
        >
          Calorie Calculator
        </button>
        <button
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
            calculatorType === "bodyfat" ? "bg-blue-700" : ""
          }`}
          onClick={() => setCalculatorType("bodyfat")}
        >
          Body Fat Calculator
        </button>
      </div>
      {calculatorType === "bmi" && <Bmi />}
      {calculatorType === "calorie" && <Calorie />}
      {calculatorType === "bodyfat" && <BodyFat />}
    </div>
  );
}
