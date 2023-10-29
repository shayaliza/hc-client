// Hospitals.js
"use client"

import React, { useState, useEffect } from 'react';


function Hospitals() {
  const [hospitalsData, setHospitalsData] = useState([]);

  useEffect(() => {
    // Fetch hospital names and addresses from the superuser API endpoint
    fetch("http://localhost:5000/api/superusers")
      .then((response) => response.json())
      .then((data) => setHospitalsData(data))
      .catch((error) => console.error("Error fetching hospital data:", error));
  }, []);

  return (
    <div className="max-w-md mx-auto mt-4 p-6 bg-white shadow-md rounded">
      <h1 className="text-2xl font-semibold mb-4">List of Hospitals</h1>
      <div className="space-y-4">
        {hospitalsData.map((superuser, index) => (
          <div key={index} className="border p-4 rounded">
            <h2 className="text-lg font-semibold">{superuser.hospitalName}</h2>
            <p className="text-gray-600">Address: {superuser.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hospitals;