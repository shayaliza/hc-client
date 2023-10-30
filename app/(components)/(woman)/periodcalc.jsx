"use client";
import React, { useState } from "react";

function PeriodCalc() {
  const [flowRate, setFlowRate] = useState("");
  const [lastDate, setLastDate] = useState("");
  const [avgCycle, setAvgCycle] = useState("");
  const [expectedDate, setExpectedDate] = useState("");

  const calculatePeriodDate = () => {
    // Calculate the expected period date based on user input
    if (flowRate && lastDate && avgCycle) {
      const cycleLength = parseInt(avgCycle);
      const lastPeriodDate = new Date(lastDate);
      const flowRateDays = parseInt(flowRate);

      // Calculate the expected date by adding the cycle length to the last period date
      const expectedDate = new Date(lastPeriodDate);
      expectedDate.setDate(lastPeriodDate.getDate() + cycleLength);

      // Add the flow rate days to the expected date
      expectedDate.setDate(expectedDate.getDate() + flowRateDays);

      setExpectedDate(expectedDate.toDateString());
    } else {
      setExpectedDate("Please fill in all fields.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Period Date Calculator</h2>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="flowRate"
        >
          Flow Rate (in days):
        </label>
        <input
          className="w-full py-2 px-3 rounded border"
          type="number"
          id="flowRate"
          value={flowRate}
          onChange={(e) => setFlowRate(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="lastDate"
        >
          Last Period Date:
        </label>
        <input
          className="w-full py-2 px-3 rounded border"
          type="date"
          id="lastDate"
          value={lastDate}
          onChange={(e) => setLastDate(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="avgCycle"
        >
          Average Cycle Length (in days):
        </label>
        <input
          className="w-full py-2 px-3 rounded border"
          type="number"
          id="avgCycle"
          value={avgCycle}
          onChange={(e) => setAvgCycle(e.target.value)}
        />
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={calculatePeriodDate}
      >
        Calculate
      </button>
      <div className="mt-4">
        <strong>Expected Period Date:</strong> {expectedDate}
      </div>
    </div>
  );
}

export default PeriodCalc;
