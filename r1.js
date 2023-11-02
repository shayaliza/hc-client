import React from "react";
import { motion } from "framer-motion";

function BloodPressureTracker({
  userEmail,
  sysBP,
  setSysBP,
  diaBP,
  setDiaBP,
  saveBpRecord,
  bpRecords,
}) {
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

export default BloodPressureTracker;
