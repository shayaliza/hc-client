//app/showDoctor/page.js
"use client"
import React, { useState, useEffect } from 'react';

function DoctorList() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    // Fetch the list of doctors from your API endpoint
    fetch("http://localhost:5000/api/get-all-doctors")
      .then((response) => response.json())
      .then((data) => setDoctors(data));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">List of Doctors</h2>
      <ul>
        {doctors.map((doctor, index) => (
          <li key={index} className="mb-4">
            <div className="bg-white p-4 rounded shadow">
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
  );
}

export default DoctorList;
