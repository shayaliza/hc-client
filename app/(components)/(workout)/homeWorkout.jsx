"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

function HomeWorkout() {
  const [selectedWorkout, setSelectedWorkout] = useState("fullbody");
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
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="mx-5 ml-5 p-4  bg-c1 shadow-md rounded"
    >
      <h1 className="text-2xl font-semibold mb-4 text-c4 flex justify-center">
        Home Workout
      </h1>
      <div className="mb-4">
        <label className=" text-c5 text-sm font-bold mb-2 flex justify-center">
          Select Workout Type
        </label>
        <div className="md:flex md:justify-center space-x-3">
          <button
            onClick={() => handleWorkoutSelection("fullbody")}
            className={`
            ${selectedWorkout === "fullbody" ? "bg-blue-500" : "bg-c1"}
            py-4 px-6 border-2 border-solid
             border-gray-300 rounded relative transition-opacity group 
              focus:outline-none`}
          >
            <span className="z-10 relative">Full Body</span>
            <span
              className="absolute inset-0 bg-t3
             origin-left transform scale-x-0 group-hover:scale-x-100
              transition-transform"
            ></span>
          </button>
          <button
            onClick={() => handleWorkoutSelection("abs")}
            className={`
            ${selectedWorkout === "abs" ? "bg-blue-500" : "bg-c1"}
            py-4 px-6 border-2 border-solid
            border-gray-300 rounded relative transition-opacity group 
             focus:outline-none`}
          >
            <span className="z-10 relative">Abs</span>
            <span
              className="absolute inset-0 bg-t3
             origin-left transform scale-x-0 group-hover:scale-x-100
              transition-transform"
            ></span>
          </button>
          <button
            onClick={() => handleWorkoutSelection("chest")}
            className={`
            ${selectedWorkout === "chest" ? "bg-blue-500" : "bg-c1"}
             py-4 px-6 border-2 border-solid
            border-gray-300 rounded relative transition-opacity group 
             focus:outline-none`}
          >
            <span className="z-10 relative">Chest</span>
            <span
              className="absolute inset-0 bg-t3
             origin-left transform scale-x-0 group-hover:scale-x-100
              transition-transform"
            ></span>
          </button>
          <button
            onClick={() => handleWorkoutSelection("arms")}
            className={`
            ${selectedWorkout === "arms" ? "bg-blue-500" : "bg-c1"}
             py-4 px-6 border-2 border-solid
            border-gray-300 rounded relative transition-opacity group 
             focus:outline-none`}
          >
            <span className="z-10 relative">Arms</span>
            <span
              className="absolute inset-0 bg-t3
             origin-left transform scale-x-0 group-hover:scale-x-100
              transition-transform"
            ></span>
          </button>
          <button
            onClick={() => handleWorkoutSelection("leg")}
            className={`
            ${selectedWorkout === "leg" ? "bg-blue-500" : "bg-c1"}
            py-4 px-6 border-2 border-solid
            border-gray-300 rounded relative transition-opacity group 
             focus:outline-none`}
          >
            <span className="z-10 relative">Legs</span>
            <span
              className="absolute inset-0 bg-t3
             origin-left transform scale-x-0 group-hover:scale-x-100
              transition-transform"
            ></span>
          </button>
          <button
            onClick={() => handleWorkoutSelection("back")}
            className={`${
              selectedWorkout === "back" ? "bg-blue-500" : "bg-c1"
            } py-4 px-6 border-2 border-solid
            border-gray-300 rounded relative transition-opacity group 
             focus:outline-none`}
          >
            <span className="z-10 relative">Back</span>
            <span
              className="absolute inset-0 bg-t3
             origin-left transform scale-x-0 group-hover:scale-x-100
              transition-transform"
            ></span>
          </button>
        </div>
      </div>

      <div className="mb-4">
        <label className=" text-c5 text-sm font-bold mb-2 flex justify-center">
          Select Workout Level
        </label>
        <div className="md:flex md:justify-center space-x-3">
          <button
            onClick={() => handleLevelSelection("beginner")}
            className={`${
              selectedLevel === "beginner" ? "bg-blue-500" : "bg-c1"
            } py-4 px-6 border-2 border-solid
            border-gray-300 rounded relative transition-opacity group 
             focus:outline-none`}
          >
            <span className="z-10 relative">Beginner</span>
            <span
              className="absolute inset-0 bg-t3
             origin-left transform scale-x-0 group-hover:scale-x-100
              transition-transform"
            ></span>
          </button>
          <button
            onClick={() => handleLevelSelection("intermediate")}
            className={`${
              selectedLevel === "intermediate" ? "bg-blue-500" : "bg-c1"
            } py-4 px-6 border-2 border-solid
            border-gray-300 rounded relative transition-opacity group 
             focus:outline-none`}
          >
            <span className="z-10 relative">Intermediate</span>
            <span
              className="absolute inset-0 bg-t3
             origin-left transform scale-x-0 group-hover:scale-x-100
              transition-transform"
            ></span>
          </button>
          <button
            onClick={() => handleLevelSelection("advanced")}
            className={`${
              selectedLevel === "advanced" ? "bg-blue-500" : "bg-c1"
            } py-4 px-6 border-2 border-solid
            border-gray-300 rounded relative transition-opacity group 
             focus:outline-none`}
          >
            <span className="z-10 relative">Advanced</span>
            <span
              className="absolute inset-0 bg-t3
             origin-left transform scale-x-0 group-hover:scale-x-100
              transition-transform"
            ></span>
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          onClick={generateExerciseResults}
          className=" hover:bg-t4 text-white font-bold py-2 px-4 hover:text-c4 
        hover:outline-double rounded-2xl
      focus:outline-none focus:shadow-outline bg-c5"
        >
          Generate Exercise Results
        </button>
      </div>

      <div className="mt-4 flex justify-center">
        {/* <h2 className="text-lg text-c4 font-semibold mb-2 flex justify-center">
          Exercise Results:
        </h2> */}
        <ul className="list-disc pl-4">
          {exerciseResults.map((result, index) => (
            <li key={index}>
              {result.exercise}: {result.reps.join(", ")} reps
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default HomeWorkout;
