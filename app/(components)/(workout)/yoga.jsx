"use client";
import React from "react";
import { useState } from "react";

function Yoga() {
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
          {
            exercise: "balasana",
            features: ["fullbody strength"],
          },
          {
            exercise: "Tadasana",
            features: ["fullbody strength"],
          },
          {
            exercise: "Trikonasana",
            features: ["fullbody strength"],
          },
        ];
      case "intermediate":
        return [
          {
            exercise: "Utkatasana",
            features: ["fullbody strength"],
          },
          {
            exercise: "Garudasana",
            features: ["fullbody strength"],
          },
          {
            exercise: "Utthita parsvakonasana",
            features: ["fullbody strength"],
          },
        ];
      case "advanced":
        return [
          {
            exercise: "Dhanurasana",
            features: ["fullbody strength"],
          },
          {
            exercise: "Gomukhasana",
            features: ["fullbody strength"],
          },
          {
            exercise: "Astavakrasana",
            features: ["fullbosdy strength"],
          },
        ];
      default:
        return [];
    }
  };

  const getAbsExercises = (level) => {
    switch (level) {
      case "beginner":
        return [
          {
            exercise: "Halasana",
            features: ["stomach workout abdomin strength"],
          },
          {
            exercise: "chakraasana",
            features: ["stomach workout abdomin strength"],
          },
          {
            exercise: "Santolanasana",
            features: ["stomach workout abdomin strength"],
          },
        ];
      case "intermediate":
        return [
          {
            exercise: "Vaisisthasana",
            features: ["stomach workout abdomin strength"],
          },
          {
            exercise: "Ustrasana",
            features: ["stomach workout abdomin strength"],
          },
          {
            exercise: "Eka padasana",
            features: ["stomach workout abdomin strength"],
          },
        ];
      case "advanced":
        return [
          {
            exercise: "Padahastasana",
            features: ["stomach workout abdomin strength"],
          },
          {
            exercise: "Hastha uttanasana",
            features: ["stomach workout abdomin strength"],
          },
          {
            exercise: "Bhujangasana",
            features: ["stomach workout abdomin strength"],
          },
        ];
      default:
        return [];
    }
  };

  const getChestExercises = (level) => {
    switch (level) {
      case "beginner":
        return [
          {
            exercise: "Ustrasana",
            features: ["chest workout thoracic region strength"],
          },
          {
            exercise: "Sha-la-bahs asana",
            features: ["chest workout thoracic region strength"],
          },
          {
            exercise: "Salamba bhujangasana",
            features: ["chesst workout thoracic region strength"],
          },
        ];
      case "intermediate":
        return [
          {
            exercise: "Bhujanaasana",

            features: ["chest workout thoracic region strength"],
          },
          {
            exercise: "Bitilasana",
            features: ["chest workout thoracic region strength"],
          },
          {
            exercise: "Anjaneyasana",
            features: ["chest workout thoracic region strength"],
          },
        ];
      case "advanced":
        return [
          {
            exercise: "adho mukhasana",
            features: ["chest workout thoracic region strength"],
          },
          {
            exercise: "Camatkarasana",
            features: ["chest workout thoracic region strength"],
          },
          {
            exercise: "parsva upavistha  konasana",
            features: ["chest workout thoracic region strength"],
          },
        ];
      default:
        return [];
    }
  };
  const getArmsExercises = (level) => {
    switch (level) {
      case "beginner":
        return [
          {
            exercise: "Ubhaya Padangusthasana",
            features: ["Arms workout Arm and shoulder muscle strength"],
          },
          {
            exercise: "Supta Padangusthasana",
            features: ["Arms workout Arm and shoulder muscle strength"],
          },
          {
            exercise: "Chaturanga Dandasana",
            features: ["Arms workout Arm and shoulder muscle strength"],
          },
        ];
      case "intermediate":
        return [
          {
            exercise: "Bakasana",
            features: ["Arms workout Arm and shoulder muscle strength"],
          },
          {
            exercise: "Adho mukha vrkasana",
            features: ["Arms workout Arm and shoulder muscle strength"],
          },
          {
            exercise: "Virbhadrasana II",
            features: ["Arms workout Arm and shoulder muscle strength"],
          },
        ];
      case "advanced":
        return [
          {
            exercise: "Purvottanasana",
            features: ["Arms workout Arm and shoulder muscle strength"],
          },
          {
            exercise: "Eka pada adho mukha svanasana",
            features: ["Arms workout Arm and shoulder muscle strength"],
          },
          {
            exercise: "Urdhava mukhasana",
            features: ["Arms workout Arm and shoulder muscle strength"],
          },
        ];
      default:
        return [];
    }
  };
  const getLegExercises = (level) => {
    switch (level) {
      case "beginner":
        return [
          {
            exercise: "Supta padangusthasana",
            features: ["Leg workout calf and thigh muscle strength"],
          },
          {
            exercise: "Janu sirsasana",
            features: ["Leg workout calf and thigh muscle strength"],
          },
          {
            exercise: "Paschimottanasana",
            features: ["Leg workout calf and thigh muscle strength"],
          },
        ];
      case "intermediate":
        return [
          {
            exercise: "Upavistha konasana",
            features: ["Leg workout calf and thigh muscle strength"],
          },
          {
            exercise: "Ardha chandrasana",
            features: ["Leg workout calf and thigh muscle strength"],
          },
          {
            exercise: "Pariivrtta trikonasana",
            features: ["Leg workout calf and thigh muscle strength"],
          },
        ];
      case "advanced":
        return [
          {
            exercise: "Utthita Hasta Padangusthasana",
            features: ["Leg workout calf and thigh muscle strength"],
          },
          {
            exercise: "Krounchasana",
            features: ["Leg workout calf and thigh muscle strength"],
          },
          {
            exercise: "Svarga dvidasana",
            features: ["Leg workout calf and thigh muscle strength"],
          },
        ];
      default:
        return [];
    }
  };

  const getBackExercises = (level) => {
    switch (level) {
      case "beginner":
        return [
          {
            exercise: "salamba Bhujangasana",
            features: ["Back workout neck to waist muscles strength"],
          },
          {
            exercise: "Ardha kapotasna",
            features: ["Back workout neck to waist muscles strength"],
          },
          {
            exercise: "Marjaryasana",
            features: ["Back workout neck to waist muscles strength"],
          },
        ];
      case "intermediate":
        return [
          {
            exercise: "Apanasana",
            features: ["Back workout neck to waist muscles strength"],
          },
          {
            exercise: "setu bandha sarvangasana",
            features: ["Back workout neck to waist muscles strength"],
          },
          {
            exercise: "Utthan Pristhasana",
            features: ["Back workout neck to waist muscles strength"],
          },
        ];
      case "advanced":
        return [
          {
            exercise: "Ardha matsyendrasana",
            features: ["Back workout neck to waist muscles strength"],
          },
          {
            exercise: "Supta Padangusthasana",
            features: ["Back workout neck to waist muscles strength"],
          },
          {
            exercise: "Paschimottansana",
            features: ["Back workout neck to waist muscles strength"],
          },
        ];
      default:
        return [];
    }
  };
  return (
    <div className="mx-5 ml-5 p-4  bg-c1 shadow-md rounded">
      <h1 className="text-2xl font-semibold mb-4 text-c4 flex justify-center">
        Home Workout
      </h1>
      <div className="mb-4">
        <label className=" text-c5 text-sm font-bold mb-2 flex justify-center">
          Select Workout Type
        </label>
        <div className="flex justify-center space-x-3">
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
            <span className="z-10 relative">Stomach</span>
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
        <div className="flex justify-center space-x-3">
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
        {/* <h2 className="text-lg font-semibold mb-2">Yoga Results:</h2> */}
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
