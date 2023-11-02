import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Mental3() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    // Fetch all doctors from your API
    fetch("http://localhost:5000/api/get-all-doctors")
      .then((response) => response.json())
      .then((data) => {
        const therapistDoctors = data.filter(
          (doctor) => doctor.speciality === "Therapist"
        );
        setDoctors(therapistDoctors);
      })
      .catch((error) => {
        console.error("Error fetching doctors:", error);
      });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className="container mx-auto mt-10  bg-lime-100"
    >
      <h1 className="text-2xl font-semibold mb-6 text-center text-c4">
        Therapist Doctors
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {doctors.map((doctor) => (
          <motion.div
            key={doctor._id}
            whileHover={{ scale: 1.05 }}
            className="p-4 shadow-md rounded-lg bg-c1"
          >
            <h2 className="text-lg font-semibold mb-2 text-center text-c3">
              {doctor.name}
            </h2>
            <p className="text-gray-600 text-center">
              Speciality: {doctor.speciality}
            </p>
            <p className="text-gray-600 text-center">
              Availability: {doctor.daysAvailable}
            </p>
            <p className="text-gray-600 text-center">Time: {doctor.time}</p>
            <p className="text-gray-600 text-center">
              Hospital: {doctor.hospitalName}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Mental3;
