// Hospitals.js
"use client";

import React, { useState, useEffect } from "react";
import HospitalDoctors from "./HospitalDoctors";
import { motion } from "framer-motion";

function Hospitals() {
  const [hospitalsData, setHospitalsData] = useState([]);

  useEffect(() => {
    fetch(
      "https://healthcarebackend-6vr474q1v-shayalizas-projects.vercel.app//api/superusers"
    )
      .then((response) => response.json())
      .then((data) => setHospitalsData(data))
      .catch((error) => console.error("Error fetching hospital data:", error));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-full mx-auto mt-4 p-6 shadow-md rounded bg-c1"
    >
      <div className="flex justify-center font-f2">
        {" "}
        <h1 className="text-2xl font-semibold mb-4 text-c4">
          List of Hospitals
        </h1>
      </div>
      <div className="space-y-4 ">
        {hospitalsData.map((superuser, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="border p-4 rounded bg-t3 shadow-sm"
          >
            <div className="flex justify-center">
              {" "}
              <h2 className="text-lg text-c5 font-semibold">
                {superuser.hospitalName}
              </h2>
            </div>
            <div className="flex justify-center">
              {" "}
              <p className="text-c3">Address: {superuser.address}</p>
            </div>
            <HospitalDoctors hospitalName={superuser.hospitalName} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Hospitals;
