import React, { useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import { 
  FaSearch, FaHome, FaBox, FaChartBar, FaStore, FaTruck, 
  FaSignOutAlt
} from "react-icons/fa";
import Adminstock from "./Adminstock"; // Import Admin Stock Page
import Adminreport from "./Adminreport"; // Import Admin Report Page
import AdminOutlet from "./AdminOutlet"; // Import Admin Outlet Page
import AdminDelivery from "./AdminDelivery"; // Import Admin Delivery Page

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, LineElement, PointElement);

const Admindash = () => {
  const [activePage, setActivePage] = useState("dashboard"); // Manage active page state

  const salesData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      { label: "Purchase", data: [50000, 45000, 48000, 40000, 42000, 46000], backgroundColor: "blue" },
      { label: "Sales", data: [40000, 42000, 43000, 38000, 39000, 41000], backgroundColor: "green" },
    ],
  };

  const orderSummaryData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      { label: "Ordered", data: [3000, 3200, 3100, 2900, 2800], borderColor: "orange", fill: false },
      { label: "Delivered", data: [2000, 2500, 2400, 2300, 2200], borderColor: "blue", fill: false },
    ],
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-blue-900 text-white flex flex-col p-4">
        <h2 className="text-xl font-bold mb-6">GasByGas</h2>
        <nav className="flex-1">
          <ul>
            <li 
              className={`mb-4 flex items-center space-x-2 cursor-pointer ${activePage === "dashboard" ? "font-bold" : ""}`} 
              onClick={() => setActivePage("dashboard")}
            >
              <FaHome /><span>Home</span>
            </li>

            <li 
              className={`mb-4 flex items-center space-x-2 cursor-pointer ${activePage === "stock" ? "font-bold" : ""}`} 
              onClick={() => setActivePage("stock")}
            > 
              <FaBox /><span>Stock</span>
            </li>

            <li 
              className={`mb-4 flex items-center space-x-2 cursor-pointer ${activePage === "report" ? "font-bold" : ""}`} 
              onClick={() => setActivePage("report")}
            >
              <FaChartBar /><span>Reports</span>
            </li>

            <li 
              className={`mb-4 flex items-center space-x-2 cursor-pointer ${activePage === "outlet" ? "font-bold" : ""}`} 
              onClick={() => setActivePage("outlet")}
            >
              <FaStore /><span>Outlet</span>
            </li>

            <li 
              className={`mb-4 flex items-center space-x-2 cursor-pointer ${activePage === "deliveries" ? "font-bold" : ""}`} 
              onClick={() => setActivePage("deliveries")}
            >
              <FaTruck /><span>Deliveries</span>
            </li>
          </ul>
        </nav>
        <div className="mt-auto">
          <ul>
            <li className="mb-4 flex items-center space-x-2 text-red-500 cursor-pointer">
              <FaSignOutAlt /><span>Log Out</span>
            </li>
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">
        <div className="flex justify-between items-center bg-white p-3 rounded-md shadow-md mb-6">
          <div className="flex items-center space-x-2">
            <FaSearch />
            <input type="text" placeholder="Search stock, reports, customers" className="outline-none" />
          </div>
          <div className="w-10 h-10 rounded-full bg-gray-300"></div>
        </div>

        {/* Render pages based on active selection */}
        {activePage === "dashboard" && (
          <>
            <h2 className="text-xl font-bold">Welcome to Main Stock Dashboard</h2>
            <p>Manage stock, reports, outlets, and deliveries here.</p>

            {/* Summary Cards */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-white p-4 rounded-md shadow-md">
                <h3 className="text-lg font-bold">Total Orders</h3>
                <p className="text-2xl">75</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-md">
                <h3 className="text-lg font-bold">Total Delivered</h3>
                <p className="text-2xl">357</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-md">
                <h3 className="text-lg font-bold">Cost</h3>
                <p className="text-2xl">LKR 17,432</p>
              </div>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white p-4 rounded-md shadow-md">
                <h3 className="text-lg font-bold">Sales & Purchase</h3>
                <Bar data={salesData} />
              </div>
              <div className="bg-white p-4 rounded-md shadow-md">
                <h3 className="text-lg font-bold">Order Summary</h3>
                <Line data={orderSummaryData} />
              </div>
            </div>
          </>
        )}

        {activePage === "stock" && <Adminstock />}
        {activePage === "report" && <Adminreport />}
        {activePage === "outlet" && <AdminOutlet />}
        {activePage === "deliveries" && <AdminDelivery />}
      </main>
    </div>
  );
};

export default Admindash;
