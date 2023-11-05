"use client";
// import React from "react";
import React, { useState } from "react";
import PeriodCalc from "../../(components)/(woman)/periodcalc";
import Fertility from "../../(components)/(woman)/fertility";
import Mensuration from "../../(components)/(woman)/mensuration";
import Pregnancy from "../../(components)/(woman)/pregnancy";
import Sex from "../../(components)/(woman)/sex";

function Page() {
  const [selectedTopic, setSelectedTopic] = useState("period calculator");

  return (
    <>
      <div className=" mt-5">
        <div className="mb-4  md:flex md:justify-center space-x-5 font-f3">
          <button
            className={`mr-2 bg-t2 border border-solid border-t3
           rounded-lg  hover:bg-c2 hover:text-t3
           font-semibold py-4 px-6 focus:outline-none focus:shadow-outline 
           transition duration-100 ease-in-out shadow-md select-none ${
             selectedTopic === "period calculator"
               ? " text-c4 bg-t3"
               : " text-c3"
           }`}
            onClick={() => setSelectedTopic("period calculator")}
          >
            Period Calculator
          </button>
          <button
            className={`mr-2 bg-t2 border border-solid border-t3
           rounded-lg  hover:bg-c2 hover:text-t3
           font-semibold py-4 px-6 focus:outline-none focus:shadow-outline 
           transition duration-100 ease-in-out shadow-md select-none ${
             selectedTopic === "fertility" ? " text-c4 bg-t3" : " text-c3"
           }`}
            onClick={() => setSelectedTopic("fertility")}
          >
            Fertility Blog
          </button>
          <button
            className={`mr-2 bg-t2 border border-solid border-t3
           rounded-lg  hover:bg-c2 hover:text-t3
           font-semibold py-4 px-6 focus:outline-none focus:shadow-outline 
           transition duration-100 ease-in-out shadow-md select-none ${
             selectedTopic === "mensuration" ? " text-c4 bg-t3" : " text-c3"
           }`}
            onClick={() => setSelectedTopic("mensuration")}
          >
            Mensuration Blog
          </button>
          <button
            className={`mr-2 bg-t2 border border-solid border-t3
           rounded-lg  hover:bg-c2 hover:text-t3
           font-semibold py-4 px-6 focus:outline-none focus:shadow-outline 
           transition duration-100 ease-in-out shadow-md select-none ${
             selectedTopic === "pregnancy" ? " text-c4 bg-t3" : " text-c3"
           }`}
            onClick={() => setSelectedTopic("pregnancy")}
          >
            Pregnancy Blog
          </button>
          <button
            className={`mr-2 bg-t2 border border-solid border-t3
           rounded-lg  hover:bg-c2 hover:text-t3
           font-semibold py-4 px-6 focus:outline-none focus:shadow-outline 
           transition duration-100 ease-in-out shadow-md select-none ${
             selectedTopic === "sex" ? " text-c4 bg-t3" : " text-c3"
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
  );
}

export default Page;
