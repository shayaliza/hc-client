"use client";
import React from "react";
import { useState } from "react";
import Hospitals from "../../(components)/(health)/hospital";
import DoctorList from "../../(components)/(health)/showDocter";
import HospitalOwnerPage from "../../(components)/(health)/addDocter";
function Page() {
  const [optionType, setOptionType] = useState("hospitals");

  return (
    <div className="w-full max-w-2xl mx-auto mt-5">
      <div className="mb-4">
        <button
          className={`mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
            optionType === "hospitals" ? "bg-blue-700" : ""
          }`}
          onClick={() => setOptionType("hospitals")}
        >
          Hospitals
        </button>
        <button
          className={`mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
            optionType === "doctors" ? "bg-blue-700" : ""
          }`}
          onClick={() => setOptionType("doctors")}
        >
          Doctors
        </button>{" "}
        <button
          className={`mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
            optionType === "addDoc" ? "bg-blue-700" : ""
          }`}
          onClick={() => setOptionType("addDoc")}
        >
          Add Docter
        </button>
      </div>
      {optionType === "hospitals" && <Hospitals />}
      {optionType === "doctors" && <DoctorList />}
      {optionType === "addDoc" && <HospitalOwnerPage />}
    </div>
  );
}
export default Page;
