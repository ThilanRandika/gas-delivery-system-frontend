import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminOutlet = () => {
  const navigate = useNavigate();
  const [outlets, setOutlets] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [newOutlet, setNewOutlet] = useState({
    outlet_name: "",
    email: "",
    location: "",
    password: "",
  });
  const [editOutlet, setEditOutlet] = useState({
    outlet_ID: "",
    outlet_name: "",
    email: "",
    location: "",
  });

  useEffect(() => {
    fetchOutlets();
  }, []);

  const fetchOutlets = async () => {
    try {
      const response = await axios.get("http://localhost:5000/get_outlets");
      setOutlets(response.data);
    } catch (error) {
      console.error("Error fetching outlets:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewOutlet((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditOutlet((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddOutlet = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/register_outlet",
        newOutlet
      );
      if (response.status === 201) {
        alert("Outlet added successfully!");
        setShowAddModal(false);
        setNewOutlet({
          outlet_name: "",
          email: "",
          location: "",
          password: "",
        });
        fetchOutlets(); // Refresh the outlet list
      }
    } catch (error) {
      console.error("Error adding outlet:", error);
      alert("An error occurred while adding the outlet.");
    }
  };

  const handleEditOutlet = async () => {
    try {
      const response = await axios.put(
        `http://localhost:5000/edit_outlet/${editOutlet.outlet_ID}`,
        editOutlet
      );
      if (response.status === 200) {
        alert("Outlet updated successfully!");
        setShowEditModal(false);
        fetchOutlets(); // Refresh the outlet list
      }
    } catch (error) {
      console.error("Error updating outlet:", error);
      alert("An error occurred while updating the outlet.");
    }
  };

  const openEditModal = (outlet) => {
    setEditOutlet({
      outlet_ID: outlet.outlet_ID,
      outlet_name: outlet.outlet_name,
      email: outlet.email,
      location: outlet.location,
    });
    setShowEditModal(true);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Outlet Management</h2>

      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => navigate("/outlet-list")}
          className="bg-green-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-700"
        >
          Outlets
        </button>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700"
        >
          Add Outlet
        </button>
      </div>

      {/* Modal for Adding Outlet */}
      {showAddModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-md">
            <h3 className="text-lg font-bold mb-4">Add New Outlet</h3>
            <input
              type="text"
              name="outlet_name"
              placeholder="Outlet Name"
              value={newOutlet.outlet_name}
              onChange={handleInputChange}
              className="border rounded p-2 mb-2 w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={newOutlet.email}
              onChange={handleInputChange}
              className="border rounded p-2 mb-2 w-full"
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={newOutlet.location}
              onChange={handleInputChange}
              className="border rounded p-2 mb-2 w-full"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={newOutlet.password}
              onChange={handleInputChange}
              className="border rounded p-2 mb-2 w-full"
            />
            <div className="flex justify-end">
              <button
                onClick={handleAddOutlet}
                className="bg-green-500 text-white px-4 py-2 rounded-md mr-2"
              >
                Add Outlet
              </button>
              <button
                onClick={() => setShowAddModal(false)}
                className="bg-red-500 text-white px-4 py-2 rounded-md"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal for Editing Outlet */}
      {showEditModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-md">
            <h3 className="text-lg font-bold mb-4">Edit Outlet</h3>
            <input
              type="text"
              name="outlet_name"
              placeholder="Outlet Name"
              value={editOutlet.outlet_name}
              onChange={handleEditInputChange}
              className="border rounded p-2 mb-2 w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={editOutlet.email}
              onChange={handleEditInputChange}
              className="border rounded p-2 mb-2 w-full"
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={editOutlet.location}
              onChange={handleEditInputChange}
              className="border rounded p-2 mb-2 w-full"
            />
            <div className="flex justify-end">
              <button
                onClick={handleEditOutlet}
                className="bg-green-500 text-white px-4 py-2 rounded-md mr-2"
              >
                Update Outlet
              </button>
              <button
                onClick={() => setShowEditModal(false)}
                className="bg-red-500 text-white px-4 py-2 rounded-md"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Table for Outlet Details */}
      <div className="bg-white p-4 rounded-md shadow-md mt-4">
        <h3 className="text-lg font-bold mb-4">Outlet Details</h3>
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 border">Outlet ID</th>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Location</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {outlets.map((outlet) => (
              <tr key={outlet.outlet_ID} className="text-center">
                <td className="p-2 border">{outlet.outlet_ID}</td>
                <td className="p-2 border">{outlet.outlet_name}</td>
                <td className="p-2 border">{outlet.location}</td>
                <td className="p-2 border">{outlet.email}</td>
                <td className="p-2 border">
                  <button
                    onClick={() => openEditModal(outlet)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded-md"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Table for Stock Details */}
      <div className="bg-white p-4 rounded-md shadow-md mt-4">
        <h3 className="text-lg font-bold mb-4">Stock Details</h3>
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 border">Product</th>
              <th className="p-2 border">Quantity</th>
              <th className="p-2 border">Expiry Date</th>
              <th className="p-2 border">Last Restock</th>
              <th className="p-2 border">Delivery Date</th>
              <th className="p-2 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {outlets.map((outlet) => (
              <tr key={outlet.outlet_ID} className="text-center">
                <td className="p-2 border">{outlet.product || "N/A"}</td>
                <td className="p-2 border">{outlet.quantity || "N/A"}</td>
                <td className="p-2 border">{outlet.expiry_date || "N/A"}</td>
                <td className="p-2 border">
                  {outlet.last_restock_date || "N/A"}
                </td>
                <td className="p-2 border">{outlet.delivery_date || "N/A"}</td>
                <td className="p-2 border">{outlet.status || "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminOutlet;
