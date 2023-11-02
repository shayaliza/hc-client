//app/showDoctor/page.js
"use client";
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

function DoctorList() {
  const [doctors, setDoctors] = useState([]);
  const controls = useAnimation();
  useEffect(() => {
    fetch("http://localhost:5000/api/get-all-doctors")
      .then((response) => response.json())
      .then((data) => {
        setDoctors(data);
        controls.start({ opacity: 1, y: 0 }); // Trigger animation when data is loaded
      });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={controls}
      exit={{ opacity: 0, y: -20 }}
    >
      <div className="flex justify-center">
        <h2 className="text-2xl font-semibold mb-4 text-c4">List of Doctors</h2>
      </div>
      <ul className="">
        {doctors.map((doctor, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-4"
          >
            <motion.div
              whileHover={{ scale: 1.02 }} // Extra: Zoom in on hover
              className="bg-c1 p-4 rounded shadow"
            >
              <div className="flex justify-center">
                {" "}
                <h3 className="text-xl font-semibold text-c5 px-5 pb-3">
                  {doctor.name}
                </h3>
              </div>
              <div className="bg-t3 mx-4 mr-4 mb-3 px-5 pt-3 pb-3">
                <div className="flex justify-center">
                  <p>
                    <span>Speciality: </span>
                    {doctor.speciality}
                  </p>
                </div>
                <div className="flex justify-center">
                  {" "}
                  <p>
                    <span>Time: </span>
                    {doctor.time}
                  </p>
                </div>
                <div className="flex justify-center">
                  {" "}
                  <p>
                    <span>Days Available: </span>
                    {doctor.daysAvailable}
                  </p>
                </div>
                <div className="flex justify-center">
                  {" "}
                  <p>
                    <span>Hospital: </span>
                    {doctor.hospitalName}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

export default DoctorList;
