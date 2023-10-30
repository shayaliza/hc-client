"use client";
import React, { useState } from "react";

function HomeWorkout() {
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
          { exercise: "Push-ups", reps: [15, 12, 10] },
          { exercise: "Bodyweight Squats", reps: [20, 18, 15] },
          { exercise: "Plank", reps: [30, 45, 60] },
        ];
      case "intermediate":
        return [
          { exercise: "Diamond Push-ups", reps: [12, 10, 8] },
          { exercise: "Jump Squats", reps: [15, 12, 10] },
          { exercise: "Side Plank", reps: [30, 45, 60] },
        ];
      case "advanced":
        return [
          { exercise: "One-Arm Push-ups", reps: [10, 8, 6] },
          { exercise: "Pistol Squats", reps: [12, 10, 8] },
          { exercise: "Plank with Leg Lift", reps: [30, 45, 60] },
        ];
      default:
        return [];
    }
  };

  const getAbsExercises = (level) => {
    switch (level) {
      case "beginner":
        return [
          { exercise: "Push-ups", reps: [15, 12, 10] },
          { exercise: "Bodyweight Squats", reps: [20, 18, 15] },
          { exercise: "Plank", reps: [30, 45, 60] },
        ];
      case "intermediate":
        return [
          { exercise: "Diamond Push-ups", reps: [12, 10, 8] },
          { exercise: "Jump Squats", reps: [15, 12, 10] },
          { exercise: "Side Plank", reps: [30, 45, 60] },
        ];
      case "advanced":
        return [
          { exercise: "One-Arm Push-ups", reps: [10, 8, 6] },
          { exercise: "Pistol Squats", reps: [12, 10, 8] },
          { exercise: "Plank with Leg Lift", reps: [30, 45, 60] },
        ];
      default:
        return [];
    }
  };

  const getChestExercises = (level) => {
    switch (level) {
      case "beginner":
        return [
          { exercise: "Push-ups", reps: [12, 10, 8] },
          { exercise: "Incline Dumbbell Press", reps: [10, 8, 6] },
          { exercise: "Chest Flyes", reps: [12, 10, 8] },
        ];
      case "intermediate":
        return [
          { exercise: "Wide Push-ups", reps: [15, 12, 10] },
          { exercise: "Decline Push-ups", reps: [12, 10, 8] },
          { exercise: "Cable Crossovers", reps: [12, 10, 8] },
        ];
      case "advanced":
        return [
          { exercise: "One-Arm Push-ups", reps: [10, 8, 6] },
          { exercise: "Bench Press", reps: [8, 6, 4] },
          { exercise: "Incline Dumbbell Flyes", reps: [12, 10, 8] },
        ];
      default:
        return [];
    }
  };

  const getArmsExercises = (level) => {
    switch (level) {
      case "beginner":
        return [
          { exercise: "Push-ups", reps: [15, 12, 10] },
          { exercise: "Bodyweight Squats", reps: [20, 18, 15] },
          { exercise: "Plank", reps: [30, 45, 60] },
        ];
      case "intermediate":
        return [
          { exercise: "Diamond Push-ups", reps: [12, 10, 8] },
          { exercise: "Jump Squats", reps: [15, 12, 10] },
          { exercise: "Side Plank", reps: [30, 45, 60] },
        ];
      case "advanced":
        return [
          { exercise: "One-Arm Push-ups", reps: [10, 8, 6] },
          { exercise: "Pistol Squats", reps: [12, 10, 8] },
          { exercise: "Plank with Leg Lift", reps: [30, 45, 60] },
        ];
      default:
        return [];
    }
  };
  const getLegExercises = (level) => {
    switch (level) {
      case "beginner":
        return [
          { exercise: "Bodyweight Squats", reps: [20, 18, 15] },
          { exercise: "Lunges", reps: [12, 10, 8] },
          { exercise: "Calf Raises", reps: [15, 12, 10] },
        ];
      case "intermediate":
        return [
          { exercise: "Squats", reps: [12, 10, 8] },
          { exercise: "Deadlifts", reps: [10, 8, 6] },
          { exercise: "Leg Press", reps: [12, 10, 8] },
        ];
      case "advanced":
        return [
          { exercise: "Pistol Squats", reps: [8, 6, 4] },
          { exercise: "Hack Squats", reps: [10, 8, 6] },
          { exercise: "Seated Calf Raises", reps: [12, 10, 8] },
        ];
      default:
        return [];
    }
  };

  const getBackExercises = (level) => {
    switch (level) {
      case "beginner":
        return [
          { exercise: "Push-ups", reps: [15, 12, 10] },
          { exercise: "Bodyweight Squats", reps: [20, 18, 15] },
          { exercise: "Plank", reps: [30, 45, 60] },
        ];
      case "intermediate":
        return [
          { exercise: "Diamond Push-ups", reps: [12, 10, 8] },
          { exercise: "Jump Squats", reps: [15, 12, 10] },
          { exercise: "Side Plank", reps: [30, 45, 60] },
        ];
      case "advanced":
        return [
          { exercise: "One-Arm Push-ups", reps: [10, 8, 6] },
          { exercise: "Pistol Squats", reps: [12, 10, 8] },
          { exercise: "Plank with Leg Lift", reps: [30, 45, 60] },
        ];
      default:
        return [];
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Home Workout</h1>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Select Workout Type:
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
          Select Workout Level:
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
        Generate Exercise Results
      </button>

      <div className="mt-4">
        <h2 className="text-lg font-semibold mb-2">Exercise Results:</h2>
        <ul className="list-disc pl-4">
          {exerciseResults.map((result, index) => (
            <li key={index}>
              {result.exercise}: {result.reps.join(", ")} reps
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HomeWorkout;
