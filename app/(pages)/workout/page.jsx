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
      <div className="w-full max-w-2xl mx-auto mt-5">
        <div className="mb-4">
          <button
            className={`mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
              selectedTopic === "diet" ? "bg-blue-700" : ""
            }`}
            onClick={() => setSelectedTopic("diet")}
          >
            Diet
          </button>
          <button
            className={`mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
              selectedTopic === "homeworkout" ? "bg-blue-700" : ""
            }`}
            onClick={() => setSelectedTopic("homeworkout")}
          >
            Home Workout
          </button>
          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
              selectedTopic === "yoga" ? "bg-blue-700" : ""
            }`}
            onClick={() => setSelectedTopic("yoga")}
          >
            yoga
          </button>
          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
              selectedTopic === "blog" ? "bg-blue-700" : ""
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
