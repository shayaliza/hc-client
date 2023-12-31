"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

function PeriodCalc() {
  const [flowRate, setFlowRate] = useState("");
  const [lastDate, setLastDate] = useState("");
  const [avgCycle, setAvgCycle] = useState("");
  const [expectedDate, setExpectedDate] = useState("");

  const calculatePeriodDate = () => {
    if (flowRate && lastDate && avgCycle) {
      const cycleLength = parseInt(avgCycle);
      const lastPeriodDate = new Date(lastDate);
      const flowRateDays = parseInt(flowRate);

      const expectedDate = new Date(lastPeriodDate);
      expectedDate.setDate(lastPeriodDate.getDate() + cycleLength);

      expectedDate.setDate(expectedDate.getDate() + flowRateDays);

      setExpectedDate(expectedDate.toDateString());
    } else {
      setExpectedDate("Please fill in all fields.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className="mx-5 ml-5 p-4 bg-gray-100 rounded-lg shadow-lg"
    >
      <div className="flex justify-center">
        <h2 className="text-2xl font-bold mb-4 text-c4">
          Period Date Calculator
        </h2>
      </div>
      <div className="mb-4">
        <div className="flex justify-center">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="flowRate"
          >
            Flow Rate (in days)
          </label>
        </div>
        <div className="flex justify-center">
          <motion.input
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.5 }}
            className="w-full py-2 px-3 rounded border max-w-md"
            type="number"
            id="flowRate"
            value={flowRate}
            onChange={(e) => setFlowRate(e.target.value)}
          />
        </div>
      </div>
      <div className="mb-4">
        <div className="flex justify-center">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="lastDate"
          >
            Last Period Date
          </label>
        </div>
        <div className="flex justify-center">
          <motion.input
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.5 }}
            className="w-full py-2 px-3 rounded border max-w-md"
            type="date"
            id="lastDate"
            value={lastDate}
            onChange={(e) => setLastDate(e.target.value)}
          />
        </div>
      </div>
      <div className="mb-4">
        <div className="flex justify-center">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="avgCycle"
          >
            Average Cycle Length (in days)
          </label>
        </div>
        <div className="flex justify-center">
          <motion.input
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.5 }}
            className="w-full py-2 px-3 rounded border max-w-md"
            type="number"
            id="avgCycle"
            value={avgCycle}
            onChange={(e) => setAvgCycle(e.target.value)}
          />
        </div>
      </div>
      <div className="flex justify-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hover:bg-t4 text-white font-bold py-2 px-4 hover:text-c4 hover:outline-double rounded-2xl focus:outline-none focus:shadow-outline bg-c5"
          onClick={calculatePeriodDate}
        >
          Calculate
        </motion.button>
      </div>
      <div className="mt-4 text-c4 flex justify-evenly">
        <strong>Expected Period Date:</strong> {expectedDate}
      </div>
    </motion.div>
  );
}

export default PeriodCalc;
