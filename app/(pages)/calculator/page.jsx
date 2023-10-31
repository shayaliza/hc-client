"use client";
import React from "react";
import { useState } from "react";
import Bmi from "../../(components)/(calculator)/bmi";
import Calorie from "../../(components)/(calculator)/calorie";
import BodyFat from "../../(components)/(calculator)/bodyfat";

export default Calc;
function Calc() {
  const [calculatorType, setCalculatorType] = useState("bmi");

  return (
    <div className="max-w-full mx-5 mr-5 mt-5">
      <div className="mb-4 flex justify-center space-x-5">
        <button
          className={`mr-2 bg-t2 border border-solid border-t3
           rounded-lg  hover:bg-c2 hover:text-t3
           font-semibold py-4 px-6 focus:outline-none focus:shadow-outline 
           transition duration-100 ease-in-out shadow-md select-none ${
             calculatorType === "bmi" ? " text-c4 bg-t3" : " text-c3"
           }`}
          onClick={() => setCalculatorType("bmi")}
        >
          Bmi Calculator
        </button>
        <button
          className={`mr-2 bg-t2 border border-solid border-t3
           rounded-lg  hover:bg-c2 hover:text-t3
           font-semibold py-4 px-6 focus:outline-none focus:shadow-outline 
           transition duration-100 ease-in-out shadow-md select-none ${
             calculatorType === "calorie" ? " text-c4 bg-t3" : " text-c3"
           }`}
          onClick={() => setCalculatorType("calorie")}
        >
          Calorie Calculator
        </button>
        <button
          className={`mr-2 bg-t2 border border-solid border-t3
           rounded-lg  hover:bg-c2 hover:text-t3
           font-semibold py-4 px-6 focus:outline-none focus:shadow-outline 
           transition duration-100 ease-in-out shadow-md select-none ${
             calculatorType === "bodyfat" ? " text-c4 bg-t3" : " text-c3"
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
