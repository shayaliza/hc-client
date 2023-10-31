"use client";
import React from "react";
import { useState } from "react";
import Hospitals from "../../(components)/(health)/hospital";
import DoctorList from "../../(components)/(health)/showDocter";
import HospitalOwnerPage from "../../(components)/(health)/addDocter";
function Page() {
  const [optionType, setOptionType] = useState("hospitals");

  return (
    <div className="max-w-full mx-5 mr-5 mt-5">
      <div className="mb-4  flex justify-center space-x-5">
        <button
          className={`mr-2 bg-t2 border border-solid border-t3
           rounded-lg  hover:bg-c2 hover:text-t3
           font-semibold py-4 px-6 focus:outline-none focus:shadow-outline 
           transition duration-100 ease-in-out shadow-md select-none ${
             optionType === "hospitals" ? " text-c4 bg-t3" : " text-c3"
           }`}
          onClick={() => setOptionType("hospitals")}
        >
          Hospitals
        </button>
        <button
          className={`mr-2 bg-t2 border border-solid border-t3
           rounded-lg  hover:bg-c2 hover:text-t3
           font-semibold py-4 px-6 focus:outline-none focus:shadow-outline 
           transition duration-100 ease-in-out shadow-md select-none ${
             optionType === "doctors" ? " text-c4 bg-t3" : " text-c3"
           }`}
          onClick={() => setOptionType("doctors")}
        >
          Doctors
        </button>{" "}
        <button
          className={`mr-2 bg-t2 border border-solid border-t3
           rounded-lg  hover:bg-c2 hover:text-t3
           font-semibold py-4 px-6 focus:outline-none focus:shadow-outline 
           transition duration-100 ease-in-out shadow-md select-none ${
             optionType === "addDoc" ? " text-c4 bg-t3" : " text-c3"
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
