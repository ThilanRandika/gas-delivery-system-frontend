import React, { useRef, useState } from "react";
import { FaBell, FaGasPump, FaSignOutAlt, FaCreditCard, FaEnvelope, FaCog } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Requeststatus from "../Pages/Reqstatus";
import ProductList from "../Pages/ProductList";
import UserNotify from "./UserNotify";
import Paystatus from "./Paystatus";

const Userdash = () => {
  const [activePage, setActivePage] = useState("dashboard");
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: "Dilshani Chathurika",
    username: "dilshani_c",
    address: "123, Colombo Road, Sri Lanka",
    phone: "+99898772",
    email: "ecgthd@gmail.com",
    nic: "19871209876",
  });
  const videoRef = useRef(null);
  const navigate = useNavigate();

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleLogout = () => {
    navigate("/");
  };

  const handleEditProfile = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white p-10 shadow-md flex flex-col justify-between">
        <div>
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="GasByGas Logo" className="w-20 h-20" />
            <span className="text-xl font-bold">GasByGas</span>
          </div>

          <div className="mt-10 flex flex-col items-center">
            <img src="https://randomuser.me/api/portraits/women/45.jpg" alt="User" className="w-20 h-20 rounded-full border-4 border-white" />
            {isEditing ? (
              <div className="mt-4 space-y-2">
                <input type="text" name="name" value={userData.name} onChange={handleInputChange} className="border p-2 rounded w-full" />
                <input type="text" name="username" value={userData.username} onChange={handleInputChange} className="border p-2 rounded w-full" />
                <input type="text" name="address" value={userData.address} onChange={handleInputChange} className="border p-2 rounded w-full" />
                <input type="text" name="phone" value={userData.phone} onChange={handleInputChange} className="border p-2 rounded w-full" />
                <input type="email" name="email" value={userData.email} onChange={handleInputChange} className="border p-2 rounded w-full" />
                <input type="text" name="nic" value={userData.nic} onChange={handleInputChange} className="border p-2 rounded w-full" />
                <button onClick={handleEditProfile} className="mt-2 bg-green-500 text-white px-4 py-2 rounded shadow-md hover:bg-green-700">Save</button>
              </div>
            ) : (
              <div>
                <h3 className="text-lg font-semibold mt-2">{userData.name}</h3>
                <p className="text-sm">{userData.username}</p>
                <p className="text-sm">{userData.address}</p>
                <p className="text-sm">{userData.phone}</p>
                <p className="text-sm">{userData.email}</p>
                <p className="text-sm">{userData.nic}</p>
              </div>
            )}
          </div>

          <nav className="mt-10">
            <ul className="space-y-4">
              <li className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 cursor-pointer" onClick={() => setActivePage("dashboard")}>
                <FaGasPump />
                <span>Dashboard</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 cursor-pointer" onClick={() => setActivePage("request-status")}>
                <FaBell />
                <span>Request Status</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 cursor-pointer" onClick={() => setActivePage("request-gas")}>
                <FaGasPump />
                <span>Request Gas</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 cursor-pointer" onClick={() => setActivePage("notification")}>
                <FaEnvelope />
                <span>All Notifications</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 cursor-pointer" onClick={() => setActivePage("payment-status")}>
                <FaCreditCard />
                <span>Payment Status</span>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-5">
          <button className="flex items-center space-x-2 text-gray-600 font-semibold" onClick={handleEditProfile}>
            <FaCog />
            <span>Settings</span>
          </button>
          <button className="flex items-center space-x-2 text-red-600 font-semibold mt-5" onClick={handleLogout}>
            <FaSignOutAlt />
            <span>Log Out</span>
          </button>
        </div>
      </aside>

      <main className="flex-1 p-6 bg-gray-50">
        <div className="bg-blue-900 text-white p-5 rounded-lg shadow-md">
          <h1 className="text-lg font-semibold">Welcome back, {userData.name}!</h1>
        </div>
        {activePage === "dashboard" && <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center">
            <video ref={videoRef} className="w-full rounded-lg">
              <source src="/Our Services1.mp4" type="video/mp4" />
            </video>
            <button onClick={playVideo} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700">Get Started</button>
          </div>
           {/* Image on the left */}
      <div className="flex justify-center md:justify-start w-full h-auto">
        <img src="/banner-user.png" alt="Support" className="w-[800px] h-auto" />
      </div>
       {/* Latest News Panel */}
        {/* Enlarged Latest News Panel on Left Side */}
        <div className="bottom-10 right-a bg-white shadow-lg p-10 rounded-lg w-[500px] h-[300px] overflow-y-auto">
          <h2 className="text-2xl font-bold text-blue-900">Latest News</h2>
          <ul className="mt-4 space-y-4 text-lg text-gray-700">
            <li>🔹 New Gas Delivery Slots Available!</li>
            <li>🔹 Price Update on LP Gas</li>
            <li>🔹 Special Offers for Loyal Customers</li>
            <li>🔹 Emergency Services Now Available</li>
          </ul>
        </div>

      <div className="flex justify-center md:justify-start w-full h-auto">
        <img src="/delivary.png" alt="Support" className="w-[500px] h-auto" />
      </div>
        </div>}
        {activePage === "request-status" && <Requeststatus />}
        {activePage === "request-gas" && <ProductList />}
        {activePage === "notification" && <UserNotify />}
        {activePage === "payment-status" && <Paystatus />}


        
      </main>
    </div>
  );
};

export default Userdash;
