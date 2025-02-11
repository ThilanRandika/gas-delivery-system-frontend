import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";

const Signup = ({ togglePopup }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [businessType, setBusinessType] = useState("Enterprises");
  const [data, setData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    username: "",
    contactNumber: "",
    password: "",
    confirmPassword: "",
    streetLine1: "",
    streetLine2: "",
    city: "",
    nic: "", // Ensure NIC is included in the state
    enterpriseName: "",
    enterpriseType: "",
    enterpriseEmail: "",
    enterpriseContactNumber: "",
    industryName: "",
    industryType: "",
    industryEmail: "",
    industryContactNumber: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitData = async () => {
    // Validate required fields
    if (
      !data.email ||
      !data.password ||
      !data.firstName ||
      !data.lastName ||
      !data.username ||
      !data.contactNumber ||
      !data.streetLine1 ||
      !data.city ||
      !data.nic || // Ensure NIC is filled
      data.password !== data.confirmPassword
    ) {
      alert("Please fill in all required fields and ensure passwords match.");
      return;
    }

    // Debugging: Log the NIC value
    console.log("NIC value being sent:", data.nic);

    // Debugging: Log the data being sent
    console.log("Data being sent to the server:", data);

    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/register",
        {
          email: data.email,
          password: data.password,
          fname: data.firstName,
          lname: data.lastName,
          username: data.username,
          contact_no: data.contactNumber,
          street_line1: data.streetLine1,
          street_line2: data.streetLine2,
          city: data.city,
          nic: data.nic, // Ensure NIC is included
          role: "user", // Default role
          // Conditionally include enterprise/industry data
          enterprise_name:
            businessType === "Enterprises" ? data.enterpriseName : "",
          enterprise_type:
            businessType === "Enterprises" ? data.enterpriseType : "",
          enterprise_email:
            businessType === "Enterprises" ? data.enterpriseEmail : "",
          enterprise_contact_number:
            businessType === "Enterprises" ? data.enterpriseContactNumber : "",
          industry_name: businessType === "Industry" ? data.industryName : "",
          industry_type: businessType === "Industry" ? data.industryType : "",
          industry_email: businessType === "Industry" ? data.industryEmail : "",
          industry_contact_number:
            businessType === "Industry" ? data.industryContactNumber : "",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Check if the response indicates success
      if (response.status === 201) {
        alert("Signup successful!"); // Show success message
        // Optionally, you can redirect the user or reset the form here
      } else {
        console.error("Error response:", response.data);
        alert("Error: " + response.data.message);
      }
    } catch (error) {
      // Check if error response exists and log it for better debugging
      if (error.response) {
        console.error("Error details:", error.response.data);
        alert(
          "Error: " + (error.response.data.message || error.response.statusText)
        );
      } else {
        console.error("Network or other error:", error.message);
        alert("Signup failed. Please try again.");
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-r from-black/40 via-gray-800/30 to-black/40 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.1 }}
        transition={{ duration: 0.2 }}
        className="relative w-full max-w-2xl p-8 bg-white rounded-lg shadow-lg"
      >
        {/* Close Button */}
        <button
          onClick={togglePopup}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 cursor-pointer"
        >
          ✖
        </button>

        <h2 className="text-3xl font-bold text-center mb-2">Sign Up</h2>
        <p className="text-gray-600 text-center mb-4">
          Please fill in this form to create an account!
        </p>

        <div className="space-y-4">
          <div className="flex space-x-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="w-1/2 p-2 border rounded"
              onChange={handleInputChange}
              value={data.firstName}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="w-1/2 p-2 border rounded"
              onChange={handleInputChange}
              value={data.lastName}
            />
          </div>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="w-full p-2 border rounded"
            onChange={handleInputChange}
            value={data.username}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 border rounded"
            onChange={handleInputChange}
            value={data.email}
          />
          <input
            type="text"
            name="contactNumber"
            placeholder="Contact Number"
            className="w-full p-2 border rounded"
            onChange={handleInputChange}
            value={data.contactNumber}
          />
          {/* NIC Field */}
          <input
            type="text"
            name="nic"
            placeholder="NIC (National Identity Card)"
            className="w-full p-2 border rounded"
            onChange={handleInputChange}
            value={data.nic}
          />

          {/* Password Field */}
          <div className="relative">
            <input
              type={passwordVisible ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="w-full p-2 border rounded pr-10"
              onChange={handleInputChange}
              value={data.password}
            />
            <button
              type="button"
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="absolute inset-y-0 right-3 flex items-center text-gray-600"
            >
              {passwordVisible ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </button>
          </div>

          {/* Confirm Password Field */}
          <div className="relative">
            <input
              type={confirmPasswordVisible ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              className="w-full p-2 border rounded pr-10"
              onChange={handleInputChange}
              value={data.confirmPassword}
            />
            <button
              type="button"
              onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
              className="absolute inset-y-0 right-3 flex items-center text-gray-600"
            >
              {confirmPasswordVisible ? (
                <FaEyeSlash size={20} />
              ) : (
                <FaEye size={20} />
              )}
            </button>
          </div>

          <p className="text-gray-600">Address</p>
          <div className="flex space-x-2">
            <input
              type="text"
              name="streetLine1"
              placeholder="Street Line 1"
              className="w-1/3 p-2 border rounded"
              onChange={handleInputChange}
              value={data.streetLine1}
            />
            <input
              type="text"
              name="streetLine2"
              placeholder="Street Line 2"
              className="w-1/3 p-2 border rounded"
              onChange={handleInputChange}
              value={data.streetLine2}
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              className="w-1/3 p-2 border rounded"
              onChange={handleInputChange}
              value={data.city}
            />
          </div>

          <p className="text-gray-600">Do You Have a Business or Industry?</p>
          <div className="flex space-x-4">
            <button
              type="button"
              className={`p-2 w-1/2 rounded ${
                businessType === "Enterprises"
                  ? "bg-blue-900 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => setBusinessType("Enterprises")}
            >
              Enterprises
            </button>
            <button
              type="button"
              className={`p-2 w-1/2 rounded ${
                businessType === "Industry"
                  ? "bg-blue-900 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => setBusinessType("Industry")}
            >
              Industry
            </button>
          </div>

          {businessType === "Enterprises" && (
            <div>
              <input
                type="text"
                name="enterpriseName"
                placeholder="Enterprise Name"
                className="w-full p-2 border rounded"
                onChange={handleInputChange}
                value={data.enterpriseName}
              />
              <input
                type="text"
                name="enterpriseType"
                placeholder="Enterprise Type"
                className="w-full p-2 border rounded"
                onChange={handleInputChange}
                value={data.enterpriseType}
              />
              <input
                type="email"
                name="enterpriseEmail"
                placeholder="Enterprise Email"
                className="w-full p-2 border rounded"
                onChange={handleInputChange}
                value={data.enterpriseEmail}
              />
              <input
                type="text"
                name="enterpriseContactNumber"
                placeholder="Enterprise Contact Number"
                className="w-full p-2 border rounded"
                onChange={handleInputChange}
                value={data.enterpriseContactNumber}
              />
            </div>
          )}

          {businessType === "Industry" && (
            <div>
              <input
                type="text"
                name="industryName"
                placeholder="Industry Name"
                className="w-full p-2 border rounded"
                onChange={handleInputChange}
                value={data.industryName}
              />
              <input
                type="text"
                name="industryType"
                placeholder="Industry Type"
                className="w-full p-2 border rounded"
                onChange={handleInputChange}
                value={data.industryType}
              />
              <input
                type="email"
                name="industryEmail"
                placeholder="Industry Email"
                className="w-full p-2 border rounded"
                onChange={handleInputChange}
                value={data.industryEmail}
              />
              <input
                type="text"
                name="industryContactNumber"
                placeholder="Industry Contact Number"
                className="w-full p-2 border rounded"
                onChange={handleInputChange}
                value={data.industryContactNumber}
              />
            </div>
          )}

          <button
            onClick={submitData}
            className="w-full bg-blue-500 text-white p-2 rounded"
          >
            Submit
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Signup;
