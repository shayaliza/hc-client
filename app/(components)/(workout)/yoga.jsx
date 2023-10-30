"use client";
import React from "react";
import { useState } from "react";

function Yoga() {
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState("beginner");
  const [exerciseResults, setExerciseResults] = useState([]);

  const handleWorkoutSelection = (workoutType) => {
    setSelectedWorkout(workoutType);
    setExerciseResults([]);
  };

  const handleLevelSelection = (level) => {
    setSelectedLevel(level);
    setExerciseResults([]);
  };

  const generateExerciseResults = () => {
    let results = [];
    if (selectedWorkout && selectedLevel) {
      switch (selectedWorkout) {
        case "fullbody":
          results = getFullBodyExercises(selectedLevel);
          break;
        case "abs":
          results = getAbsExercises(selectedLevel);
          break;
        case "chest":
          results = getChestExercises(selectedLevel);
          break;
        case "arms":
          results = getArmsExercises(selectedLevel);
          break;
        case "leg":
          results = getLegExercises(selectedLevel);
          break;
        case "back":
          results = getBackExercises(selectedLevel);
          break;
        default:
          break;
      }
    }
    setExerciseResults(results);
  };

  const getFullBodyExercises = (level) => {
    switch (level) {
      case "beginner":
        return [
          { exercise: "Push-ups" },
          { exercise: "Bodyweight Squats" },
          { exercise: "Plank" },
        ];
      case "intermediate":
        return [
          { exercise: "Diamond Push-ups" },
          { exercise: "Jump Squats" },
          { exercise: "Side Plank" },
        ];
      case "advanced":
        return [
          { exercise: "One-Arm Push-ups" },
          { exercise: "Pistol Squats" },
          { exercise: "Plank with Leg Lift" },
        ];
      default:
        return [];
    }
  };

  const getAbsExercises = (level) => {
    switch (level) {
      case "beginner":
        return [
          { exercise: "Push-ups" },
          { exercise: "Bodyweight Squats" },
          { exercise: "Plank" },
        ];
      case "intermediate":
        return [
          { exercise: "Diamond Push-ups" },
          { exercise: "Jump Squats" },
          { exercise: "Side Plank" },
        ];
      case "advanced":
        return [
          { exercise: "One-Arm Push-ups" },
          { exercise: "Pistol Squats" },
          { exercise: "Plank with Leg Lift" },
        ];
      default:
        return [];
    }
  };

  const getChestExercises = (level) => {
    switch (level) {
      case "beginner":
        return [
          { exercise: "Push-ups" },
          { exercise: "Incline Dumbbell Press" },
          { exercise: "Chest Flyes" },
        ];
      case "intermediate":
        return [
          { exercise: "Wide Push-ups" },
          { exercise: "Decline Push-ups" },
          { exercise: "Cable Crossovers" },
        ];
      case "advanced":
        return [
          { exercise: "One-Arm Push-ups" },
          { exercise: "Bench Press" },
          { exercise: "Incline Dumbbell Flyes" },
        ];
      default:
        return [];
    }
  };

  const getArmsExercises = (level) => {
    switch (level) {
      case "beginner":
        return [
          { exercise: "Push-ups" },
          { exercise: "Bodyweight Squats" },
          { exercise: "Plank" },
        ];
      case "intermediate":
        return [
          { exercise: "Diamond Push-ups" },
          { exercise: "Jump Squats" },
          { exercise: "Side Plank" },
        ];
      case "advanced":
        return [
          { exercise: "One-Arm Push-ups" },
          { exercise: "Pistol Squats" },
          { exercise: "Plank with Leg Lift" },
        ];
      default:
        return [];
    }
  };
  const getLegExercises = (level) => {
    switch (level) {
      case "beginner":
        return [
          { exercise: "Bodyweight Squats" },
          { exercise: "Lunges" },
          { exercise: "Calf Raises" },
        ];
      case "intermediate":
        return [
          { exercise: "Squats" },
          { exercise: "Deadlifts" },
          { exercise: "Leg Press" },
        ];
      case "advanced":
        return [
          { exercise: "Pistol Squats" },
          { exercise: "Hack Squats" },
          { exercise: "Seated Calf Raises" },
        ];
      default:
        return [];
    }
  };

  const getBackExercises = (level) => {
    switch (level) {
      case "beginner":
        return [
          { exercise: "Push-ups" },
          { exercise: "Bodyweight Squats" },
          { exercise: "Plank" },
        ];
      case "intermediate":
        return [
          { exercise: "Diamond Push-ups" },
          { exercise: "Jump Squats" },
          { exercise: "Side Plank" },
        ];
      case "advanced":
        return [
          { exercise: "One-Arm Push-ups" },
          { exercise: "Pistol Squats" },
          {
            exercise: "Plank with Leg Lift",
            features: ["Chest workout", "Upper body strength"],
          },
        ];
      default:
        return [];
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Yoga</h1>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Select Yoga Type:
        </label>
        <div>
          <button
            onClick={() => handleWorkoutSelection("fullbody")}
            className={`${
              selectedWorkout === "fullbody" ? "bg-blue-500" : "bg-gray-300"
            } text-white py-2 px-4 rounded mr-2`}
          >
            Full Body
          </button>
          <button
            onClick={() => handleWorkoutSelection("abs")}
            className={`${
              selectedWorkout === "abs" ? "bg-blue-500" : "bg-gray-300"
            } text-white py-2 px-4 rounded mr-2`}
          >
            Abs
          </button>
          <button
            onClick={() => handleWorkoutSelection("chest")}
            className={`${
              selectedWorkout === "chest" ? "bg-blue-500" : "bg-gray-300"
            } text-white py-2 px-4 rounded mr-2`}
          >
            Chest
          </button>
          <button
            onClick={() => handleWorkoutSelection("arms")}
            className={`${
              selectedWorkout === "arms" ? "bg-blue-500" : "bg-gray-300"
            } text-white py-2 px-4 rounded mr-2`}
          >
            Arms
          </button>
          <button
            onClick={() => handleWorkoutSelection("leg")}
            className={`${
              selectedWorkout === "leg" ? "bg-blue-500" : "bg-gray-300"
            } text-white py-2 px-4 rounded mr-2`}
          >
            Legs
          </button>
          <button
            onClick={() => handleWorkoutSelection("back")}
            className={`${
              selectedWorkout === "back" ? "bg-blue-500" : "bg-gray-300"
            } text-white py-2 px-4 rounded mr-2`}
          >
            Back
          </button>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Select Yoga Level:
        </label>
        <div>
          <button
            onClick={() => handleLevelSelection("beginner")}
            className={`${
              selectedLevel === "beginner" ? "bg-blue-500" : "bg-gray-300"
            } text-white py-2 px-4 rounded mr-2`}
          >
            Beginner
          </button>
          <button
            onClick={() => handleLevelSelection("intermediate")}
            className={`${
              selectedLevel === "intermediate" ? "bg-blue-500" : "bg-gray-300"
            } text-white py-2 px-4 rounded mr-2`}
          >
            Intermediate
          </button>
          <button
            onClick={() => handleLevelSelection("advanced")}
            className={`${
              selectedLevel === "advanced" ? "bg-blue-500" : "bg-gray-300"
            } text-white py-2 px-4 rounded mr-2`}
          >
            Advanced
          </button>
        </div>
      </div>

      <button
        onClick={generateExerciseResults}
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Generate Yoga Results
      </button>

      <div className="mt-4">
        <h2 className="text-lg font-semibold mb-2">Yoga Results:</h2>
        <ul className="list-disc pl-4">
          {exerciseResults.map((result, index) => (
            <li key={index}>
              {result.exercise} : {result.features}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Yoga;
