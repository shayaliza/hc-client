"use client";
import React from "react";
import { useState } from "react";
import Game1 from "../../(components)/(game)/game1";
import Game2 from "../../(components)/(game)/game2";

function page() {
  const [gameType, setGameType] = useState("game1");

  return (
    <div className="max-w-full mx-5 mr-5 mt-5 font-f3">
      <div className="mb-4 flex justify-center space-x-5">
        <button
          className={`mr-2 bg-t2 border border-solid border-t3
             rounded-lg  hover:bg-c2 hover:text-t3
             font-semibold py-4 px-6 focus:outline-none focus:shadow-outline 
             transition duration-100 ease-in-out shadow-md select-none ${
               gameType === "game1" ? " text-c4 bg-t3" : " text-c3"
             }`}
          onClick={() => setGameType("game1")}
        >
          Quiz Game
        </button>
        <button
          className={`mr-2 bg-t2 border border-solid border-t3
             rounded-lg  hover:bg-c2 hover:text-t3
             font-semibold py-4 px-6 focus:outline-none focus:shadow-outline 
             transition duration-100 ease-in-out shadow-md select-none ${
               gameType === "calorie" ? " text-c4 bg-t3" : " text-c3"
             }`}
          onClick={() => setGameType("game2")}
        >
          Game 2
        </button>
        <button
          className={`mr-2 bg-t2 border border-solid border-t3
             rounded-lg  hover:bg-c2 hover:text-t3
             font-semibold py-4 px-6 focus:outline-none focus:shadow-outline 
             transition duration-100 ease-in-out shadow-md select-none ${
               gameType === "bodyfat" ? " text-c4 bg-t3" : " text-c3"
             }`}
          onClick={() => setGameType("bodyfat")}
        >
          Game 3
        </button>
      </div>
      {gameType === "game1" && <Game1 />}
      {gameType === "game2" && <Game2 />}
      {gameType === "bodyfat" && <BodyFat />}
    </div>
  );
}

export default page;
