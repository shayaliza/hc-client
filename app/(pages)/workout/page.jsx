"use client";
import { useState } from "react";
import React from "react";
import Diet from "../../(components)/(workout)/diet";
import HomeWorkout from "../../(components)/(workout)/homeWorkout";
import Yoga from "../../(components)/(workout)/yoga";
import Blog from "../../(components)/(workout)/blog";

function page() {
  const [selectedTopic, setSelectedTopic] = useState("diet");

  return (
    <>
      <div className="w-full mx-auto mt-5 ">
        <div className="mb-4 flex justify-center space-x-5">
          <button
            className={`mr-2 bg-t2 border border-solid border-t3
            rounded-lg  hover:bg-c2 hover:text-t3
            font-semibold py-4 px-6 focus:outline-none focus:shadow-outline 
            transition duration-100 ease-in-out shadow-md select-none ${
              selectedTopic === "diet" ? " text-c4 bg-t3" : " text-c3"
            }`}
            onClick={() => setSelectedTopic("diet")}
          >
            Diet
          </button>
          <button
            className={`mr-2 bg-t2 border border-solid border-t3
            rounded-lg  hover:bg-c2 hover:text-t3
            font-semibold py-4 px-6 focus:outline-none focus:shadow-outline 
            transition duration-100 ease-in-out shadow-md select-none ${
              selectedTopic === "homeworkout" ? " text-c4 bg-t3" : " text-c3"
            }`}
            onClick={() => setSelectedTopic("homeworkout")}
          >
            Home Workout
          </button>
          <button
            className={`mr-2 bg-t2 border border-solid border-t3
            rounded-lg  hover:bg-c2 hover:text-t3
            font-semibold py-4 px-6 focus:outline-none focus:shadow-outline 
            transition duration-100 ease-in-out shadow-md select-none ${
              selectedTopic === "yoga" ? " text-c4 bg-t3" : " text-c3"
            }`}
            onClick={() => setSelectedTopic("yoga")}
          >
            yoga
          </button>
          <button
            className={`mr-2 bg-t2 border border-solid border-t3
            rounded-lg  hover:bg-c2 hover:text-t3
            font-semibold py-4 px-6 focus:outline-none focus:shadow-outline 
            transition duration-100 ease-in-out shadow-md select-none ${
              selectedTopic === "blog" ? " text-c4 bg-t3" : " text-c3"
            }`}
            onClick={() => setSelectedTopic("blog")}
          >
            Blog
          </button>
        </div>
        {selectedTopic === "diet" && <Diet />}
        {selectedTopic === "homeworkout" && <HomeWorkout />}
        {selectedTopic === "yoga" && <Yoga />}
        {selectedTopic === "blog" && <Blog />}
      </div>
    </>
  );
}

export default page;
