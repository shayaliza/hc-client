// HospitalDoctors.js
"use client";
import React, { useState } from "react";

const HospitalDoctors = ({ hospitalName }) => {
  console.log("Hospital Name:", hospitalName);
  const [doctors, setDoctors] = useState([]);
  const [showDoctors, setShowDoctors] = useState(false);

  const handleViewDoctors = () => {
    const apiUrl = `http://localhost:5000/api/doctors/${hospitalName}`;
    console.log("API URL:", apiUrl);

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setDoctors(data);
        setShowDoctors(true);
      });
  };

  return (
    <div className="bg-t2 text-c4 py-2 px-4 rounded mt-2 ">
      <div className="flex justify-center">
        <button onClick={handleViewDoctors}>View Doctors</button>
      </div>
      {showDoctors && (
        <div>
          <div className="flex justify-center">
            {" "}
            <h2 className="text-2xl font-semibold mb-4 text-c4">
              List of Doctors for {hospitalName}
            </h2>
          </div>
          <ul>
            {doctors.map((doctor, index) => (
              <li key={index} className="mb-4">
                <div className="bg-t3 p-4 rounded shadow">
                  <div className="flex justify-center">
                    {" "}
                    <h3 className="text-xl text-c3 font-semibold">
                      {doctor.name}
                    </h3>
                  </div>
                  <div className="flex justify-center">
                    {" "}
                    <p className="text-c4">
                      {" "}
                      <span>Speciality:</span> {doctor.speciality}
                    </p>
                  </div>
                  <div className="flex justify-center">
                    {" "}
                    <p className="text-c4">
                      <span>Time: </span>
                      {doctor.time}
                    </p>
                  </div>
                  <div className="flex justify-center">
                    {" "}
                    <p className="text-c4">
                      <span> Days Available:</span> {doctor.daysAvailable}
                    </p>
                  </div>
                  {/* <p className="text-c4">
                    <span>Hospital:</span> {doctor.hospitalName}
                  </p> */}
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
