// SignupForm.jsx
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import zxcvbn from "zxcvbn";

function SignupForm() {
  const [passwordStrength, setPasswordStrength] = useState(0);
  function getStrengthLabel(score) {
    // ... (existing code for password strength labels)
    const labels = [
      "Very Weak😶(try something unique by mixing numbers, letters and special character)",
      "Weak🥲(try something unique by mixing numbers, letters and special character)",
      "Fair🙂",
      "Strong🫡",
      "Very Strong💪",
    ];
    return labels[score];
  }

  const onPasswordChange = (e) => {
    const password = e.target.value;
    const result = zxcvbn(password);

    // Set the password strength score
    setPasswordStrength(result.score);
  };

  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    userType: "normal", // Default to normal user
    hospitalName: "", // Additional field for hospital owner
    address: "", // Additional field for hospital owner
    phoneNumber: "", // Additional field for hospital owner
  });

  const [usernameExists, setUsernameExists] = useState(false);
  const [emailExists, setEmailExists] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordStrength < 2) {
      // Password is weak, do not allow form submission
      toast.error("Please choose a stronger password.");
      return;
    }

    if (userData.userType === "hospital" && !userData.hospitalName) {
      toast.error("Please enter the hospital name.");
      return;
    }

    // Check if the username already exists
    const usernameExistsResponse = await fetch(
      // `${process.env.NEXT_PUBLIC_BACK_END}api/check-username?username=${userData.username}`
      //  "http://localhost:5000/api/check-username?username=${userData.username}"
      `http://localhost:5000/api/check-username?username=${userData.username}`
    );

    if (usernameExistsResponse.ok) {
      const data = await usernameExistsResponse.json();
      if (data.exists) {
        console.error("Username already exists. Please choose another.");
        setUsernameExists(true);
        return;
      }
    } else {
      console.error("Error checking username availability.");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:5000/api/signup",

        // `${process.env.NEXT_PUBLIC_BACK_END}api/signup`,

        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      if (response.ok) {
        // Handle successful signup
        console.log("Signup successful");
        toast.success("Signup successful");
      } else {
        // Handle signup errors
        console.error("Signup failed");
        toast.error("Signup failed Email is already registered");
        const responseData = await response.json();
        if (responseData.message === "Email is already registered") {
          setEmailExists(true);
        }
      }
    } catch (error) {
      console.error("Signup error:", error);
      toast.success("unexpected server error");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-4 p-6 bg-white shadow-md rounded font-f2">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="userType"
            className="block text-gray-600 text-sm font-semibold"
          >
            Choose User Type
          </label>
          <select
            id="userType"
            name="userType"
            value={userData.userType}
            onChange={(e) =>
              setUserData({ ...userData, userType: e.target.value })
            }
            className="w-full p-2 border border-gray-300 rounded mt-2"
            required
          >
            <option value="normal">Normal User</option>
            <option value="hospital">Hospital Owner</option>
          </select>
        </div>

        {/* Conditional rendering based on user type */}
        {userData.userType === "hospital" && (
          <div>
            <div className="mb-4">
              <label
                htmlFor="hospitalName"
                className="block text-gray-600 text-sm font-semibold"
              >
                Hospital Name
              </label>
              <input
                type="text"
                id="hospitalName"
                name="hospitalName"
                value={userData.hospitalName}
                onChange={(e) =>
                  setUserData({ ...userData, hospitalName: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded mt-2"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="address"
                className="block text-gray-600 text-sm font-semibold"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={userData.address}
                onChange={(e) =>
                  setUserData({ ...userData, address: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded mt-2"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phoneNumber"
                className="block text-gray-600 text-sm font-semibold"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={userData.phoneNumber}
                onChange={(e) =>
                  setUserData({ ...userData, phoneNumber: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded mt-2"
                required
              />
            </div>
          </div>
        )}

        {/* Common fields for both user types */}
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-600 text-sm font-semibold"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={userData.username}
            onChange={(e) => {
              setUsernameExists(false);
              setUserData({ ...userData, username: e.target.value });
            }}
            className="w-full p-2 border border-gray-300 rounded mt-2"
            required
          />
          {usernameExists && (
            <p className="text-red-500 text-sm mt-1">
              Username already exists. Please choose another.
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-600 text-sm font-semibold"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={userData.email}
            onChange={(e) => {
              setEmailExists(false);
              setUserData({ ...userData, email: e.target.value });
            }}
            className="w-full p-2 border border-gray-300 rounded mt-2"
            required
          />
          {emailExists && (
            <p className="text-red-500 text-sm mt-1">
              Email already exists. Please use a different email address.
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-600 text-sm font-semibold"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={userData.password}
            onChange={(e) => {
              setUserData({ ...userData, password: e.target.value });
              onPasswordChange(e);
            }}
            className="w-full p-2 border border-gray-300 rounded mt-2"
            required
          />
          <div className="password-strength">
            <progress
              max="4"
              value={passwordStrength}
              className={`strength-${passwordStrength}`}
            />
            <p>Password Strength: {getStrengthLabel(passwordStrength)}</p>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex justify-center">
            {" "}
            <button
              type="submit"
              className=" hover:bg-t4 text-white font-bold py-2 px-10 hover:text-c4 
          hover:outline-double rounded-2xl
        focus:outline-none focus:shadow-outline bg-c5"
            >
              Sign Up
            </button>
          </div>
        </div>
      </form>
      <div>
        if you are already sign up then{" "}
        <Link href="/login.js" className="text-blue-600 underline">
          Login
        </Link>
      </div>
      <ToastContainer />
    </div>
  );
}

export default SignupForm;
