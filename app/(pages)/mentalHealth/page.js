"use client";
import React from "react";
import { useState } from "react";
import Mental1 from "../../(components)/(mental)/mental1";
import Mental2 from "../../(components)/(mental)/mental2";
import Mental3 from "../../(components)/(mental)/mental3";

function page() {
  const [gameType, setGameType] = useState("mental2");

  return (
    <div className="max-w-full mx-5 mr-5 mt-5">
      <div className="mb-4 flex justify-center space-x-5">
        <button
          className={`mr-2 bg-t2 border border-solid border-t3
             rounded-lg  hover:bg-c2 hover:text-t3
             font-semibold py-4 px-6 focus:outline-none focus:shadow-outline 
             transition duration-100 ease-in-out shadow-md select-none ${
               gameType === "mental2" ? " text-c4 bg-t3" : " text-c3"
             }`}
          onClick={() => setGameType("mental2")}
        >
          Therapy
        </button>

        <button
          className={`mr-2 bg-t2 border border-solid border-t3
             rounded-lg  hover:bg-c2 hover:text-t3
             font-semibold py-4 px-6 focus:outline-none focus:shadow-outline 
             transition duration-100 ease-in-out shadow-md select-none ${
               gameType === "bodyfat" ? " text-c4 bg-t3" : " text-c3"
             }`}
          onClick={() => setGameType("mental3")}
        >
          Therapist
        </button>
        <button
          className={`mr-2 bg-t2 border border-solid border-t3
             rounded-lg  hover:bg-c2 hover:text-t3
             font-semibold py-4 px-6 focus:outline-none focus:shadow-outline 
             transition duration-100 ease-in-out shadow-md select-none ${
               gameType === "game1" ? " text-c4 bg-t3" : " text-c3"
             }`}
          onClick={() => setGameType("mental1")}
        >
          Blog
        </button>
      </div>
      {gameType === "mental1" && <Mental1 />}
      {gameType === "mental2" && <Mental2 />}
      {gameType === "mental3" && <Mental3 />}
    </div>
  );
}

export default page;
