// LoginForm.jsx
"use client";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LoginForm() {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is already logged in
    const authToken = Cookies.get("authToken");
    if (authToken) {
      setIsLoggedIn(true);
    }
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
{userData.userType === "hospital" && (
  <div className="mb-4">
    <label htmlFor="phoneNumber" className="block text-gray-600 text-sm font-semibold">
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
)}

    if (!userData.email || !userData.password) {
      toast.error("Email and password are required.");
      return;
    }

    // if (userData.hospitalOwner && (!userData.hospitalName || !userData.phoneNumber)) {
    //   toast.error("Hospital Name and Phone Number are required for hospital owners.");
    //   return;
    // }

    try {
      const response = await fetch(
        // `${process.env.NEXT_PUBLIC_BACK_END}api/login`,
        "http://localhost:5000/api/login",

        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      if (response.ok) {
        // Set the authentication cookie with the token
        const { token } = await response.json();
        Cookies.set("authToken", token, {
          expires: 7,
          path: "/",
        });

        // Set the user's email in a cookie or local storage
        Cookies.set("userEmail", userData.email, { expires: 7, path: "/" });
        Cookies.set('userPhoneNumber', userData.phoneNumber, { expires: 7, path: "/" });

        // After a successful login or registration, you should set the user's phone number in Cookies.

        setIsLoggedIn(true);
        // Show a success toast
        toast.success("Login successful");
        // Handle successful login
        console.log("Login successful");
      } else {
        // Handle login errors
        toast.error("Check your email and password and try again");
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };
  const handleLogout = () => {
    // Clear the user's session (remove the cookie)
    Cookies.remove("authToken");
    setIsLoggedIn(false); // Mark the user as logged out
    // Show a success toast for logout
    toast.success("Logout successful");
    console.log("Logged out");
  };

  return (
    <div className="max-w-md mx-auto mt-4 p-6 bg-white shadow-md rounded">
      <div>
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
      </div>

      {isLoggedIn ? ( // If the user is logged in, show a message
        <div>
          <p>You are already logged in.</p>
          {/* Add a logout button */}
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white p-2 rounded w-full mt-4"
          >
            Log Out
          </button>
        </div>
      ) : (
        // If the user is not logged in, show the login form
        <form onSubmit={handleSubmit}>
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
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
              className="w-full p-2 border border-gray-300 rounded mt-2"
              required
            />
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
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
              className="w-full p-2 border border-gray-300 rounded mt-2"
              required
            />
          </div>
          
          <div className="mb-4">
            <label
              htmlFor="hospitalOwner"
              className="block text-gray-600 text-sm font-semibold"
            >
              Are you a Hospital Owner?
            </label>
            <input
              type="checkbox"
              id="hospitalOwner"
              name="hospitalOwner"
              checked={userData.hospitalOwner}
              onChange={(e) =>
                setUserData({ ...userData, hospitalOwner: e.target.checked })
              }
              className="w-full p-2 mt-2"
            />
          </div>

          {userData.hospitalOwner && (
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

          <div className="mt-6">
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded w-full"
            >
              Log In
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default LoginForm;
