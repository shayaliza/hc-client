"use client";
// import React from "react";
import React, { useState } from "react";
import PeriodCalc from "../(components)/(woman)/periodcalc";
import Fertility from "../(components)/(woman)/fertility";
import Mensuration from "../(components)/(woman)/mensuration";
import Pregnancy from "../(components)/(woman)/pregnancy";
import Sex from "../(components)/(woman)/sex";

function Page() {
  const [selectedTopic, setSelectedTopic] = useState("period calculator");

  return (
    <>
      <div className="w-full max-w-2xl mx-auto mt-5">
        <div className="mb-4">
          <button
            className={`mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
              selectedTopic === "period calculator" ? "bg-blue-700" : ""
            }`}
            onClick={() => setSelectedTopic("period calculator")}
          >
            Period Calculator
          </button>
          <button
            className={`mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
              selectedTopic === "fertility" ? "bg-blue-700" : ""
            }`}
            onClick={() => setSelectedTopic("fertility")}
          >
            Fertility Blog
          </button>
          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
              selectedTopic === "mensuration" ? "bg-blue-700" : ""
            }`}
            onClick={() => setSelectedTopic("mensuration")}
          >
            Mensuration Blog
          </button>
          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
              selectedTopic === "pregnancy" ? "bg-blue-700" : ""
            }`}
            onClick={() => setSelectedTopic("pregnancy")}
          >
            Pregnancy Blog
          </button>
          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
              selectedTopic === "sex" ? "bg-blue-700" : ""
            }`}
            onClick={() => setSelectedTopic("sex")}
          >
            Sex Blog
          </button>
        </div>
        {selectedTopic === "period calculator" && <PeriodCalc />}
        {selectedTopic === "fertility" && <Fertility />}
        {selectedTopic === "mensuration" && <Mensuration />}
        {selectedTopic === "pregnancy" && <Pregnancy />}
        {selectedTopic === "sex" && <Sex />}
      </div>
    </>
    // <div className="flex">
    //   <div className="w-1/4 p-4">
    //     <button
    //       className={`block mb-4 text-blue-500 hover:underline ${
    //         selectedTopic === "periodcalc" ? "font-bold" : ""
    //       }`}
    //       onClick={() => handleTopicChange("periodcalc")}
    //     >
    //       Period Calculator
    //     </button>
    //     <button
    //       className={`block mb-4 text-blue-500 hover:underline ${
    //         selectedTopic === "fertility" ? "font-bold" : ""
    //       }`}
    //       onClick={() => handleTopicChange("fertility")}
    //     >
    //       Fertility Blog
    //     </button>
    //     <button
    //       className={`block mb-4 text-blue-500 hover:underline ${
    //         selectedTopic === "mensuration" ? "font-bold" : ""
    //       }`}
    //       onClick={() => handleTopicChange("mensuration")}
    //     >
    //       Mensuration Blog
    //     </button>
    //     <button
    //       className={`block mb-4 text-blue-500 hover:underline ${
    //         selectedTopic === "pregnancy" ? "font-bold" : ""
    //       }`}
    //       onClick={() => handleTopicChange("pregnancy")}
    //     >
    //       Pregnancy Blog
    //     </button>
    //     <button
    //       className={`block mb-4 text-blue-500 hover:underline ${
    //         selectedTopic === "sex" ? "font-bold" : ""
    //       }`}
    //       onClick={() => handleTopicChange("sex")}
    //     >
    //       Sex Education Blog
    //     </button>
    //   </div>
    //   <div className="w-3/4 p-4">
    //     {selectedTopic === "periodcalc" && <PeriodCalc />}
    //     {selectedTopic === "fertility" && <Fertility />}
    //     {selectedTopic === "mensuration" && <Mensuration />}
    //     {selectedTopic === "pregnancy" && <Pregnancy />}
    //     {selectedTopic === "sex" && <Sex />}
    //   </div>
    // </div>
  );
}

export default Page;
