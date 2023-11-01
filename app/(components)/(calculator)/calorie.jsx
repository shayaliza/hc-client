"use client";
import React, { useState } from "react";

function Calorie() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("male");
  const [activityLevel, setActivityLevel] = useState("sedentary");
  const [calories, setCalories] = useState(0);
  const [message, setMessage] = useState("");

  const calculateCalories = () => {
    if (weight > 0 && height > 0 && age > 0) {
      let bmr = 0;
      if (gender === "male") {
        bmr = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
      } else {
        bmr = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
      }

      let tdee = 0;
      switch (activityLevel) {
        case "sedentary":
          tdee = bmr * 1.2;
          break;
        case "lightlyActive":
          tdee = bmr * 1.375;
          break;
        case "moderatelyActive":
          tdee = bmr * 1.55;
          break;
        case "veryActive":
          tdee = bmr * 1.725;
          break;
        case "superActive":
          tdee = bmr * 1.9;
          break;
        default:
          tdee = bmr;
          break;
      }

      setCalories(Math.round(tdee));
      setMessage(getMessage(tdee));
    } else {
      setCalories(0);
      setMessage("");
    }
  };

  const getMessage = (tdee) => {
    if (tdee < 1500) {
      return "You are in the very low calorie intake range. Consult with a healthcare professional.";
    } else if (tdee >= 1500 && tdee < 2000) {
      return "You are in the low calorie intake range. Consider increasing your calorie intake.";
    } else if (tdee >= 2000 && tdee < 2500) {
      return "You are in the moderate calorie intake range. Maintain your current intake if it's appropriate for your goals.";
    } else {
      return "You are in the high calorie intake range. Consider decreasing your calorie intake if it's not suitable for your goals.";
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
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="age"
        >
          Age:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="age"
          type="number"
          placeholder="Enter your age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Gender:
        </label>
        <div className="mt-2">
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio text-blue-500"
              value="male"
              checked={gender === "male"}
              onChange={() => setGender("male")}
            />
            <span className="ml-2">Male</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input
              type="radio"
              className="form-radio text-blue-500"
              value="female"
              checked={gender === "female"}
              onChange={() => setGender("female")}
            />
            <span className="ml-2">Female</span>
          </label>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Activity Level:
        </label>
        <select
          className="block w-full bg-white border border-gray-300 text-gray-700 rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          value={activityLevel}
          onChange={(e) => setActivityLevel(e.target.value)}
        >
          <option value="sedentary">Sedentary (Little or no exercise)</option>
          <option value="lightlyActive">
            Lightly Active (Light exercise or sports 1-3 days a week)
          </option>
          <option value="moderatelyActive">
            Moderately Active (Moderate exercise or sports 3-5 days a week)
          </option>
          <option value="veryActive">
            Very Active (Hard exercise or sports 6-7 days a week)
          </option>
          <option value="superActive">
            Super Active (Very hard exercise, physical job, or training)
          </option>
        </select>
      </div>
      <div className="flex justify-center">
        <button
          onClick={calculateCalories}
          className=" hover:bg-t4 text-white font-bold py-2 px-4 hover:text-c4 
          hover:outline-double rounded-2xl
        focus:outline-none focus:shadow-outline bg-c5"
        >
          Calculate
        </button>
      </div>
      <div className="mt-4">
        <strong>Your Daily Caloric Needs: {calories} calories</strong>
      </div>
      {message && (
        <div className="mt-4">
          <strong>{message}</strong>
        </div>
      )}
    </div>
  );
}

export default Calorie;
