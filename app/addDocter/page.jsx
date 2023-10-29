"use client";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

function HospitalOwnerPage() {
  const userPhoneNumber = Cookies.get("userPhoneNumber"); // Change to userPhoneNumber

  // const userEmail = Cookies.get("userEmail");
  // const [superuserEmail, setSuperuserEmail] = useState(userEmail);


  if (userPhoneNumber !== undefined) {
    Cookies.set('userPhoneNumber', userPhoneNumber); // Change to userPhoneNumber
    console.log(userPhoneNumber);
  }
  
  // if (userEmail !== undefined) {
  //   Cookies.set('userEmail', userEmail)
  //   console.log(userEmail);
  // }


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
        const response = await fetch("http://localhost:5000/api/check-superuser", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ phoneNumber: userPhoneNumber }), // Send the user's phone number
        });
    
        if (response.ok) {
          const data = await response.json();
          setIsSuperUser(data.isSuperUser);
        }
      } catch (error) {
        console.error("Error checking superuser status:", error);
      }
    };
    

    checkSuperUser();
  }, []);

  const handleDoctorSubmit = async (e) => {
    e.preventDefault();

    const hospitalName = getHospitalName();
    const dataToSend = {
      ...doctorData,
      hospitalName,
    };

    // Send the doctor data to the backend for saving.
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACK_END}api/upload-doctor`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToSend),
        }
      );

      if (response.ok) {
        // Handle successful doctor data upload
        console.log("Doctor data uploaded successfully");
        // You can show a success message here if needed.
      } else {
        // Handle errors
        console.error("Doctor data upload failed");
        // You can show an error message here if needed.
      }
    } catch (error) {
      console.error("Error uploading doctor data:", error);
      // You can show an error message here if needed.
    }
  };

  if (!isSuperUser) {
    // Display a message or redirect if the user is not a superuser
    return <div>You do not have permission to access this page.</div>;
  }

  return (
    <div className="max-w-md mx-auto mt-4 p-6 bg-white shadow-md rounded">
      <h1 className="text-2xl font-semibold mb-4">Upload Doctor Information</h1>
      <form onSubmit={handleDoctorSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-600 text-sm font-semibold"
          >
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
        </div>
        <div className="mb-4">
          <label
            htmlFor="speciality"
            className="block text-gray-600 text-sm font-semibold"
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
        </div>
        <div className="mb-4">
          <label
            htmlFor="time"
            className="block text-gray-600 text-sm font-semibold"
          >
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
        </div>
        <div className="mb-4">
          <label
            htmlFor="daysAvailable"
            className="block text-gray-600 text-sm font-semibold"
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
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded w-full"
          >
            Upload Doctor Information
          </button>
        </div>
      </form>
    </div>
  );
}

export default HospitalOwnerPage;
