import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

function DoctorList() {
  const [doctors, setDoctors] = useState([]);
  const controls = useAnimation();

  useEffect(() => {
    // Fetch your data here
    fetch("http://localhost:5000/api/get-all-doctors")
      .then((response) => response.json())
      .then((data) => {
        setDoctors(data);
        // Start animation after data is loaded
        controls.start({ opacity: 1, y: 0 });
      });
  }, [controls]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={controls}
      exit={{ opacity: 0, y: -20 }}
    >
      {/* Your component content */}
    </motion.div>
  );
}

export default DoctorList;
