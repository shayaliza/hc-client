// HospitalDoctors.js
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useEffect } from "react";

const HospitalDoctors = ({ hospitalName }) => {
  console.log("Hospital Name:", hospitalName);
  const [doctors, setDoctors] = useState([]);
  const [showDoctors, setShowDoctors] = useState(false); // Add showDoctors state

  const handleViewDoctors = () => {
    const apiUrl = `http://localhost:5000/api/doctors/${hospitalName}`;
    console.log("API URL:", apiUrl);

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setDoctors(data);
        setShowDoctors(true); // Show the list of doctors
      });
  };

  return (
    <div className="bg-blue-500 text-white py-2 px-4 rounded mt-2 inline-block">
      <button onClick={handleViewDoctors}>View Doctors</button>
      {showDoctors && ( // Render the list of doctors when showDoctors is true
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            List of Doctors for {hospitalName}
          </h2>
          <ul>
            {doctors.map((doctor, index) => (
              <li key={index} className="mb-4">
                <div className="bg-black p-4 rounded shadow">
                  <h3 className="text-xl font-semibold">{doctor.name}</h3>
                  <p>Speciality: {doctor.speciality}</p>
                  <p>Time: {doctor.time}</p>
                  <p>Days Available: {doctor.daysAvailable}</p>
                  <p>Hospital: {doctor.hospitalName}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HospitalDoctors;
