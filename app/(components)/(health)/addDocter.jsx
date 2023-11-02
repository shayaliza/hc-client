"use client";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion, useAnimation } from "framer-motion";

function HospitalOwnerPage() {
  const userPhoneNumber = Cookies.get("userPhoneNumber");
  const controls = useAnimation();
  //  Cookies.set('hospitalName', hospitalName);
  if (userPhoneNumber !== undefined) {
    Cookies.set("userPhoneNumber", userPhoneNumber);
    console.log(userPhoneNumber);
  }

  const [doctorData, setDoctorData] = useState({
    name: "",
    speciality: "",
    time: "",
    daysAvailable: "",
  });

  const [isSuperUser, setIsSuperUser] = useState(false); //false krna h abhi isko

  useEffect(() => {
    //
    const checkSuperUser = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/check-superuser",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ phoneNumber: userPhoneNumber }),
          }
        );

        if (response.ok) {
          const data = await response.json();
          setIsSuperUser(data.isSuperUser);
          controls.start({ opacity: 1, y: 0 }); // Trigger animation when data is loaded
        }
      } catch (error) {
        console.error("Error checking superuser status:", error);
      }
    };
    checkSuperUser();
  }, [userPhoneNumber, controls]);
  //   checkSuperUser();
  // }, []);

  function getHospitalName() {
    return Cookies.get("hospitalName");
  }

  const handleDoctorSubmit = async (e) => {
    e.preventDefault();

    const hospitalName = getHospitalName();
    const dataToSend = {
      ...doctorData,
      hospitalName,
    };

    try {
      const response = await fetch(
        // `${process.env.NEXT_PUBLIC_BACK_END}api/upload-doctor`,
        "http://localhost:5000/api/upload-doctor",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToSend),
        }
      );

      if (response.ok) {
        console.log("Doctor data uploaded successfully");
        toast.success("Doctor data uploaded successfully");
      } else {
        // Handle errors
        console.error("Doctor data upload failed");
        toast.success("Doctor data upload failed");
      }
    } catch (error) {
      console.error("Error uploading doctor data:", error);
    }
  };

  if (!isSuperUser) {
    return (
      <motion.div
        initial={{ opacity: 1 }}
        animate={controls}
        exit={{ opacity: 1 }}
        className=" min-h-fit flex items-center justify-center bg-gray-100 mt-20"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 2 }}
          exit={{ opacity: 0 }}
          className="max-w-md w-full p-6 space-y-4 bg-white shadow-lg rounded-lg"
        >
          <h2 className="text-2xl font-semibold text-gray-800">
            Login as the Hospital Owner to Add Doctors
          </h2>
        </motion.div>
      </motion.div>
    );
  }

  return (
    // <div className="max-w-2xl mx-auto mt-4 p-6 bg-c1 shadow-md rounded">
    //   <h1 className="text-2xl font-semibold mb-4 text-c4">
    //     Upload Doctor Information
    //   </h1>
    //   <form onSubmit={handleDoctorSubmit}>
    //     <div className="mb-4">
    //       <label htmlFor="name" className="block text-c5 text-sm font-semibold">
    //         Doctor Name
    //       </label>
    //       <input
    //         type="text"
    //         id="name"
    //         name="name"
    //         value={doctorData.name}
    //         onChange={(e) =>
    //           setDoctorData({ ...doctorData, name: e.target.value })
    //         }
    //         className="w-full p-2 border border-gray-300 rounded mt-2"
    //         required
    //       />
    //     </div>
    //     <div className="mb-4">
    //       <label
    //         htmlFor="speciality"
    //         className="block text-c5 text-sm font-semibold"
    //       >
    //         Speciality
    //       </label>
    //       <input
    //         type="text"
    //         id="speciality"
    //         name="speciality"
    //         value={doctorData.speciality}
    //         onChange={(e) =>
    //           setDoctorData({ ...doctorData, speciality: e.target.value })
    //         }
    //         className="w-full p-2 border border-gray-300 rounded mt-2"
    //         required
    //       />
    //     </div>
    //     <div className="mb-4">
    //       <label htmlFor="time" className="block text-c5 text-sm font-semibold">
    //         Time
    //       </label>
    //       <input
    //         type="text"
    //         id="time"
    //         name="time"
    //         value={doctorData.time}
    //         onChange={(e) =>
    //           setDoctorData({ ...doctorData, time: e.target.value })
    //         }
    //         className="w-full p-2 border border-gray-300 rounded mt-2"
    //         required
    //       />
    //     </div>
    //     <div className="mb-4">
    //       <label
    //         htmlFor="daysAvailable"
    //         className="block text-c5 text-sm font-semibold"
    //       >
    //         Days Available
    //       </label>
    //       <input
    //         type="text"
    //         id="daysAvailable"
    //         name="daysAvailable"
    //         value={doctorData.daysAvailable}
    //         onChange={(e) =>
    //           setDoctorData({ ...doctorData, daysAvailable: e.target.value })
    //         }
    //         className="w-full p-2 border border-gray-300 rounded mt-2"
    //         required
    //       />
    //     </div>
    //     <div className="mb-4">
    //       <label
    //         htmlFor="hospitalName"
    //         className="block text-c5 text-sm font-semibold"
    //       >
    //         Hospital Name
    //       </label>
    //       <input
    //         type="text"
    //         id="hospitalName"
    //         name="hospitalName"
    //         value={getHospitalName()}
    //         readOnly // Make the input read-only
    //         className="w-full p-2 border border-gray-300 rounded mt-2"
    //         required
    //       />
    //     </div>
    //     {/* <div className="mt-6">
    //       <button type="submit" className="bg-t1 text-c3 p-2 rounded w-full">
    //         Upload Doctor Information
    //       </button>
    //     </div> */}
    //     <div className="flex justify-center">
    //       <button
    //         type="submit"
    //         className=" hover:bg-t4 text-white font-bold py-2 px-4 hover:text-c4
    //       hover:outline-double rounded-2xl
    //     focus:outline-none focus:shadow-outline bg-c5"
    //       >
    //         Add Doctor
    //       </button>
    //     </div>
    //   </form>
    //   <div>
    //     <ToastContainer
    //       position="top-right"
    //       autoClose={3000}
    //       hideProgressBar={false}
    //       newestOnTop={false}
    //       closeOnClick
    //       pauseOnFocusLoss
    //       draggable
    //       pauseOnHover
    //     />
    //   </div>
    // </div>
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={controls}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-2xl mx-auto mt-4 p-6 bg-c1 shadow-md rounded"
    >
      <h1 className="text-2xl font-semibold mb-4 text-c4">
        Upload Doctor Information
      </h1>
      <form onSubmit={handleDoctorSubmit}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-4"
        >
          <label htmlFor="name" className="block text-c5 text-sm font-semibold">
            Doctor Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={doctorData.name}
            onChange={(e) =>
              setDoctorData({ ...doctorData, name: e.target.value })
            }
            className="w-full p-2 border border-gray-300 rounded mt-2"
            required
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-4"
        >
          <label
            htmlFor="speciality"
            className="block text-c5 text-sm font-semibold"
          >
            Speciality
          </label>
          <input
            type="text"
            id="speciality"
            name="speciality"
            value={doctorData.speciality}
            onChange={(e) =>
              setDoctorData({ ...doctorData, speciality: e.target.value })
            }
            className="w-full p-2 border border-gray-300 rounded mt-2"
            required
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-4"
        >
          <label htmlFor="time" className="block text-c5 text-sm font-semibold">
            Time
          </label>
          <input
            type="text"
            id="time"
            name="time"
            value={doctorData.time}
            onChange={(e) =>
              setDoctorData({ ...doctorData, time: e.target.value })
            }
            className="w-full p-2 border border-gray-300 rounded mt-2"
            required
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-4"
        >
          <label
            htmlFor="daysAvailable"
            className="block text-c5 text-sm font-semibold"
          >
            Days Available
          </label>
          <input
            type="text"
            id="daysAvailable"
            name="daysAvailable"
            value={doctorData.daysAvailable}
            onChange={(e) =>
              setDoctorData({ ...doctorData, daysAvailable: e.target.value })
            }
            className="w-full p-2 border border-gray-300 rounded mt-2"
            required
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-4"
        >
          <label
            htmlFor="hospitalName"
            className="block text-c5 text-sm font-semibold"
          >
            Hospital Name
          </label>
          <input
            type="text"
            id="hospitalName"
            name="hospitalName"
            value={getHospitalName()}
            readOnly
            className="w-full p-2 border border-gray-300 rounded mt-2"
            required
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center"
        >
          <button
            type="submit"
            className="hover:bg-t4 text-white font-bold py-2 px-4 hover:text-c4 
        hover:outline-double rounded-2xl focus:outline-none focus:shadow-outline bg-c5"
          >
            Add Doctor
          </button>
        </motion.div>
      </form>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 1 }}
      >
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </motion.div>
    </motion.div>
  );
}

export default HospitalOwnerPage;
