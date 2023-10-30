"use client";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";

function Bp() {
  useEffect(() => {
    const userEmail = Cookies.get("userEmail");
    setUserEmail(userEmail);

    // Load and display previous BP records
    getPreviousBpRecords();
  }, []);
  const [userEmail, setUserEmail] = useState("");
  const [sysBP, setSysBP] = useState("");
  const [diaBP, setDiaBP] = useState("");
  const [bpRecords, setBpRecords] = useState([]);

  const saveBpRecord = async () => {
    const newRecord = {
      sysBP,
      diaBP,
      date: new Date().toLocaleString(),
      userEmail: userEmail,
    };

    try {
      // Send the new BP record to the backend
      await axios.post("http://localhost:5000/api/bpRecords", newRecord);
      // Clear input fields
      setSysBP("");
      setDiaBP("");
    } catch (error) {
      console.error("Error saving BP record:", error);
    }
  };

  const getPreviousBpRecords = async () => {
    const userEmail = Cookies.get("userEmail");
    setUserEmail(userEmail);
    console.log(userEmail);
    const url = `http://localhost:5000/api/bpRecords/${userEmail}`;
    console.log(userEmail);
    console.log(url);
    try {
      const response = await axios.get(url);
      console.log("Response from server:", response.data);
      const userBpRecords = response.data;
      console.log("All User's BP Records:", userBpRecords);

      setBpRecords(userBpRecords);
    } catch (error) {
      console.error("Error getting BP records:", error);
    }
  };
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">BP Tracker for {userEmail}</h1>

      <div className="mb-4">
        <label className="block">Systolic BP:</label>
        <input
          type="number"
          className="border p-2"
          value={sysBP}
          onChange={(e) => setSysBP(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block">Diastolic BP:</label>
        <input
          type="number"
          className="border p-2"
          value={diaBP}
          onChange={(e) => setDiaBP(e.target.value)}
        />
      </div>

      <button
        className="bg-blue-500 text-white px-4 py-2"
        onClick={saveBpRecord}
      >
        Save BP Record
      </button>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Previous BP Records:</h2>
        <ul>
          {bpRecords.map((record, index) => (
            <li key={index}>
              Systolic BP: {record.sysBP}, Diastolic BP: {record.diaBP}, Date:{" "}
              {record.date}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Bp;
