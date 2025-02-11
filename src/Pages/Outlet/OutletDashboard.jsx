import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  FaSearch,
  FaHome,
  FaBox,
  FaChartBar,
  FaUsers,
  FaTruck,
  FaSignOutAlt,
} from "react-icons/fa";
import OutletStock from "./OutletStock";
import OutletPerformance from "./OutletPerformance";
import OutletDeliveries from "./OutletDeliveries";
import Customer from "./Customer";

const OutletDashboard = () => {
  const [activePage, setActivePage] = useState("dashboard");

  // Example Data for Orders, Stock & Deliveries
  const ordersData = [
    { id: 1, type: "2.3 Kg Cylinder", status: "Pending" },
    { id: 2, type: "5 Kg Cylinder", status: "Approved" },
    { id: 3, type: "12.5 Kg Cylinder", status: "Scheduled" },
  ];

  const stockData = [
    { type: "2.3 Kg Cylinder", quantity: 10, status: "Low" },
    { type: "5 Kg Cylinder", quantity: 15, status: "Low" },
    { type: "12.5 Kg Cylinder", quantity: 20, status: "Sufficient" },
  ];

  const deliveriesData = [
    { id: 1, type: "2.3 Kg Cylinder", date: "2025-02-10" },
    { id: 2, type: "5 Kg Cylinder", date: "2025-02-12" },
  ];

  // Sales & Orders Summary Chart Data
  const salesData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      { label: "Ordered", data: [3000, 3200, 3100, 2900, 2800], borderColor: "orange", fill: false },
      { label: "Delivered", data: [2000, 2500, 2400, 2300, 2200], borderColor: "blue", fill: false },
    ],
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-blue-900 text-white flex flex-col p-4 fixed h-full">
        <h2 className="text-xl font-bold mb-6">GasByGas Outlet</h2>
        <nav className="flex-1">
          <ul>
            <li 
              className={`mb-4 flex items-center space-x-2 cursor-pointer ${activePage === "dashboard" ? "font-bold" : ""}`} 
              onClick={() => setActivePage("dashboard")}
            >
              <FaHome /><span>Dashboard</span>
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
              className={`mb-4 flex items-center space-x-2 cursor-pointer ${activePage === "customers" ? "font-bold" : ""}`} 
              onClick={() => setActivePage("customers")}
            >
              <FaUsers /><span>Customers</span>
            </li>
            <li 
              className={`mb-4 flex items-center space-x-2 cursor-pointer ${activePage === "delivery" ? "font-bold" : ""}`} 
              onClick={() => setActivePage("delivery")}
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
      <main className="flex-1 p-6 bg-gray-100 ml-64 overflow-y-auto">
        <div className="flex justify-between items-center bg-white p-3 rounded-md shadow-md mb-6">
          <div className="flex items-center space-x-2">
            <FaSearch />
            <input type="text" placeholder="Search stock, reports, customers" className="outline-none" />
          </div>
          <div className="w-10 h-10 rounded-full bg-gray-300"></div>
        </div>

        {/* Render Dashboard Overview */}
        {activePage === "dashboard" && (
          <>
            <h2 className="text-xl font-bold mb-4">Welcome to Outlet Dashboard</h2>
            <p>Manage stock, reports, customers, and deliveries here.</p>

            {/* Data Cards */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-white p-4 rounded-md shadow-md">
                <h3 className="text-lg font-bold">Orders</h3>
                {ordersData.map((order) => (
                  <p key={order.id}>{order.type} - {order.status}</p>
                ))}
              </div>
              <div className="bg-white p-4 rounded-md shadow-md">
                <h3 className="text-lg font-bold">Stock</h3>
                {stockData.map((stock) => (
                  <p key={stock.type} className={stock.status === "Low" ? "text-red-500" : "text-green-500"}>{stock.type} - {stock.status}</p>
                ))}
              </div>
              <div className="bg-white p-4 rounded-md shadow-md">
                <h3 className="text-lg font-bold">Upcoming Deliveries</h3>
                {deliveriesData.map((delivery) => (
                  <p key={delivery.id}>{delivery.type} - {delivery.date}</p>
                ))}
              </div>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white p-4 rounded-md shadow-md">
                <h3 className="text-lg font-bold">Order Summary</h3>
                <Line data={salesData} />
              </div>
            </div>
          </>
        )}

        {/* Render Other Pages */}
        {activePage === "stock" && <OutletStock />}
        {activePage === "report" && <OutletPerformance />}
        {activePage === "customers" && <Customer />}
        {activePage === "delivery" && <OutletDeliveries />}
      </main>
    </div>
  );
};

export default OutletDashboard;
