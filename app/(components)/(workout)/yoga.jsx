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
          //wrong format
          { exercise: "balasana" },
          { exercise: "Tadasana" },
          { exercise: "Trikonasana" },
        ];
      case "intermediate":
        return [
          { exercise: "Utkatasana" },
          { exercise: "Garudasana" },
          { exercise: "Utthita parsvakonasana" },
        ];
      case "advanced":
        return [
          { exercise: "Dhanurasana" },
          { exercise: "Gomukhasana" },
          { exercise: "Astavakrasana" },
        ];
      default:
        return [];
    }
  };

  const getAbsExercises = (level) => {
    switch (level) {
      case "beginner":
        return [
          { exercise: "Halasana" },
          { exercise: "chakraasana" },
          { exercise: "Santolanasana" },
        ];
      case "intermediate":
        return [
          { exercise: "Vaisisthasana" },
          { exercise: "Ustrasana" },
          { exercise: "Eka padasana" },
        ];
      case "advanced":
        return [
          { exercise: "Padahastasana" },
          { exercise: "Hastha uttanasana" },
          { exercise: "Bhujangasana" },
        ];
      default:
        return [];
    }
  };

  const getChestExercises = (level) => {
    switch (level) {
      case "beginner":
        return [
          { exercise: "Ustrasana" },
          { exercise: "Sha-la-bahs asana" },
          { exercise: "Salamba bhujangasana" },
        ];
      case "intermediate":
        return [
          { exercise: "Bhujanaasana" },
          { exercise: "Bitilasana" },
          { exercise: "Anjaneyasana" },
        ];
      case "advanced":
        return [
          { exercise: "adho mukhasana" },
          { exercise: "Camatkarasana" },
          { exercise: "parsva upavistha  konasana" },
        ];
      default:
        return [];
    }
  };

  const getArmsExercises = (level) => {
    switch (level) {
      case "beginner":
        return [
          { exercise: "Ubhaya Padangusthasana" },
          { exercise: "Supta Padangusthasana" },
          { exercise: "Chaturanga Dandasana" },
        ];
      case "intermediate":
        return [
          { exercise: "Bakasana" },
          { exercise: "Adho mukha vrkasana" },
          { exercise: "Virbhadrasana II" },
        ];
      case "advanced":
        return [
          { exercise: "Purvottanasana" },
          { exercise: "Eka pada adho mukha svanasana" },
          { exercise: "Urdhava mukhasana" },
        ];
      default:
        return [];
    }
  };
  const getLegExercises = (level) => {
    switch (level) {
      case "beginner":
        return [
          { exercise: "Supta padangusthasana" },
          { exercise: "Janu sirsasana" },
          { exercise: "Paschimottanasana" },
        ];
      case "intermediate":
        return [
          { exercise: "Upavistha konasana" },
          { exercise: "Ardha chandrasana" },
          { exercise: "Pariivrtta trikonasana" },
        ];
      case "advanced":
        return [
          { exercise: "Utthita Hasta Padangusthasana" },
          { exercise: "Krounchasana" },
          { exercise: "Svarga dvidasana" },
        ];
      default:
        return [];
    }
  };

  const getBackExercises = (level) => {
    switch (level) {
      case "beginner":
        return [
          { exercise: "salamba Bhujangasana" },
          { exercise: "Ardha kapotasna" },
          { exercise: "Marjaryasana" },
        ];
      case "intermediate":
        return [
          { exercise: "Apanasana" },
          { exercise: "setu bandha sarvangasana" },
          { exercise: "Utthan Pristhasana" },
        ];
      case "advanced":
        return [
          {
            exercise: "Ardha matsyendrasana",
            features: ["Chest workout Upper body strength"],
          },
          {
            exercise: "Supta Padangusthasana",
            features: ["Chest workout Upper body strength"],
          },
          {
            exercise: "Paschimottansana",
            features: ["Chest workout Upper body strength"],
          },
        ];
      default:
        return [];
    }
  };

  return (
    // <div className="container mx-auto p-4">
    //   <h1 className="text-3xl font-bold mb-4">Yoga</h1>
    //   <div className="mb-4">
    //     <label className="block text-gray-700 text-sm font-bold mb-2">
    //       Select Yoga Type:
    //     </label>
    //     <div>
    //       <button
    //         onClick={() => handleWorkoutSelection("fullbody")}
    //         className={`${
    //           selectedWorkout === "fullbody" ? "bg-blue-500" : "bg-gray-300"
    //         } text-white py-2 px-4 rounded mr-2`}
    //       >
    //         Full Body
    //       </button>
    //       <button
    //         onClick={() => handleWorkoutSelection("abs")}
    //         className={`${
    //           selectedWorkout === "abs" ? "bg-blue-500" : "bg-gray-300"
    //         } text-white py-2 px-4 rounded mr-2`}
    //       >
    //         Stomach
    //       </button>
    //       <button
    //         onClick={() => handleWorkoutSelection("chest")}
    //         className={`${
    //           selectedWorkout === "chest" ? "bg-blue-500" : "bg-gray-300"
    //         } text-white py-2 px-4 rounded mr-2`}
    //       >
    //         Chest
    //       </button>
    //       <button
    //         onClick={() => handleWorkoutSelection("arms")}
    //         className={`${
    //           selectedWorkout === "arms" ? "bg-blue-500" : "bg-gray-300"
    //         } text-white py-2 px-4 rounded mr-2`}
    //       >
    //         Arms
    //       </button>
    //       <button
    //         onClick={() => handleWorkoutSelection("leg")}
    //         className={`${
    //           selectedWorkout === "leg" ? "bg-blue-500" : "bg-gray-300"
    //         } text-white py-2 px-4 rounded mr-2`}
    //       >
    //         Legs
    //       </button>
    //       <button
    //         onClick={() => handleWorkoutSelection("back")}
    //         className={`${
    //           selectedWorkout === "back" ? "bg-blue-500" : "bg-gray-300"
    //         } text-white py-2 px-4 rounded mr-2`}
    //       >
    //         Back
    //       </button>
    //     </div>
    //   </div>

    //   <div className="mb-4">
    //     <label className="block text-gray-700 text-sm font-bold mb-2">
    //       Select Yoga Level:
    //     </label>
    //     <div>
    //       <button
    //         onClick={() => handleLevelSelection("beginner")}
    //         className={`${
    //           selectedLevel === "beginner" ? "bg-blue-500" : "bg-gray-300"
    //         } text-white py-2 px-4 rounded mr-2`}
    //       >
    //         Beginner
    //       </button>
    //       <button
    //         onClick={() => handleLevelSelection("intermediate")}
    //         className={`${
    //           selectedLevel === "intermediate" ? "bg-blue-500" : "bg-gray-300"
    //         } text-white py-2 px-4 rounded mr-2`}
    //       >
    //         Intermediate
    //       </button>
    //       <button
    //         onClick={() => handleLevelSelection("advanced")}
    //         className={`${
    //           selectedLevel === "advanced" ? "bg-blue-500" : "bg-gray-300"
    //         } text-white py-2 px-4 rounded mr-2`}
    //       >
    //         Advanced
    //       </button>
    //     </div>
    //   </div>

    //   <button
    //     onClick={generateExerciseResults}
    //     className="bg-blue-500 text-white py-2 px-4 rounded"
    //   >
    //     Generate Yoga Results
    //   </button>
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
