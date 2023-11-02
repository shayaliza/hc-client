"use client";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { motion } from "framer-motion";

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
      await axios.post("http://localhost:5000/api/bpRecords", newRecord);
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
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-full mx-auto mt-4 p-6 shadow-md rounded bg-c1"
    >
      <div className="flex justify-center">
        <h1 className="text-2xl font-semibold mb-4 text-c4">
          BP Tracker for {userEmail}
        </h1>
      </div>

      <div className="mb-4">
        <div className="flex justify-center">
          <label className="block">Systolic BP:</label>
        </div>
        <div className="flex justify-center">
          <input
            type="number"
            className="border p-2"
            value={sysBP}
            onChange={(e) => setSysBP(e.target.value)}
          />
        </div>
      </div>

      <div className="mb-4">
        <div className="flex justify-center">
          <label className="block">Diastolic BP:</label>
        </div>
        <div className="flex justify-center">
          <input
            type="number"
            className="border p-2 max-w-md"
            value={diaBP}
            onChange={(e) => setDiaBP(e.target.value)}
          />
        </div>
      </div>

      <div className="flex justify-center">
        <motion.button
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          onClick={saveBpRecord}
          className="hover-bg-t4 text-white font-bold py-2 px-4 hover-text-c4 
        hover-outline-double rounded-2xl focus-outline-none focus-shadow-outline bg-c5"
        >
          Save BP
        </motion.button>
      </div>

      <div className="mt-8">
        <div className="flex justify-center">
          <h2 className="text-2xl font-semibold text-c4">
            Previous BP Records
          </h2>
        </div>
        <ul>
          {bpRecords.map((record, index) => (
            <motion.li
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.02 }}
              key={index}
              className="flex justify-evenly"
            >
              Systolic BP: {record.sysBP}, Diastolic BP: {record.diaBP}, Date:{" "}
              {record.date}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default Bp;
