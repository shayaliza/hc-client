"use client";
import React, { useState } from "react";

function Bodyfat() {
  const [weight, setWeight] = useState(0);
  const [waist, setWaist] = useState(0);
  const [neck, setNeck] = useState(0);
  const [height, setHeight] = useState(0);
  const [bodyFat, setBodyFat] = useState(0);
  const [message, setMessage] = useState("");

  const calculateBodyFat = () => {
    if (weight > 0 && waist > 0 && neck > 0 && height > 0) {
      // Calculate body fat percentage using the U.S. Navy Method
      const fatWeight =
        0.29288 * weight +
        0.15745 * waist -
        0.13318 * neck -
        0.1044 * height -
        9.129;
      const calculatedBodyFat = (fatWeight / weight) * 100;

      setBodyFat(calculatedBodyFat.toFixed(2));
      setMessage(getMessage(calculatedBodyFat));
    } else {
      setBodyFat(0);
      setMessage("");
    }
  };

  const getMessage = (bodyFatPercentage) => {
    if (bodyFatPercentage < 8) {
      return "You have very low body fat. Ensure it is a healthy level for your age and gender.";
    } else if (bodyFatPercentage >= 8 && bodyFatPercentage < 20) {
      return "Your body fat level is within the healthy range for most adults.";
    } else {
      return "You may want to consider reducing body fat through a balanced diet and exercise.";
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
          htmlFor="waist"
        >
          Waist Circumference (cm):
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="waist"
          type="number"
          placeholder="Enter your waist circumference"
          value={waist}
          onChange={(e) => setWaist(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="neck"
        >
          Neck Circumference (cm):
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="neck"
          type="number"
          placeholder="Enter your neck circumference"
          value={neck}
          onChange={(e) => setNeck(e.target.value)}
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

      <div className="flex justify-center">
        <button
          onClick={calculateBodyFat}
          className=" hover:bg-t4 text-white font-bold py-2 px-4 hover:text-c4 
          hover:outline-double rounded-2xl
        focus:outline-none focus:shadow-outline bg-c5"
        >
          Generate Diet Plan
        </button>
      </div>

      <div className="mt-4">
        <strong>Your Body Fat Percentage: {bodyFat}%</strong>
      </div>
      {message && (
        <div className="mt-4">
          <strong>{message}</strong>
        </div>
      )}
    </div>
  );
}

export default Bodyfat;
