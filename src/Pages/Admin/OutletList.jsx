import React, { useState } from "react";

const OutletList = () => {
  const [outlets, setOutlets] = useState([
    {
      id: 1,
      name: "Outlet A",
      location: "Colombo",
      phone: "0771234567",
      email: "outleta@example.com",
      password: "********",
    },
    {
      id: 2,
      name: "Outlet B",
      location: "Negombo",
      phone: "0779876543",
      email: "outletb@example.com",
      password: "********",
    },
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedOutlet, setSelectedOutlet] = useState(null);
  const [newOutlet, setNewOutlet] = useState({
    id: "",
    name: "",
    location: "",
    phone: "",
    email: "",
    password: "",
  });

  // Add new outlet
  const handleAddOutlet = () => {
    setOutlets([...outlets, { ...newOutlet, id: outlets.length + 1 }]);
    setNewOutlet({
      id: "",
      name: "",
      location: "",
      phone: "",
      email: "",
      password: "",
    });
    setShowAddModal(false);
  };

  // Edit outlet details
  const handleEditOutlet = () => {
    setOutlets(
      outlets.map((outlet) =>
        outlet.id === selectedOutlet.id ? selectedOutlet : outlet
      )
    );
    setShowEditModal(false);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Outlets Management</h2>

      {/* Add Outlet Button */}
      <button
        onClick={() => setShowAddModal(true)}
        className="bg-green-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-700"
      >
        Add Outlet
      </button>

      {/* Outlet List Table */}
      <div className="bg-white p-4 rounded-md shadow-md mt-4">
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 border">Outlet ID</th>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Location</th>
              <th className="p-2 border">Phone</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {outlets.map((outlet) => (
              <tr key={outlet.id} className="text-center">
                <td className="p-2 border">{outlet.id}</td>
                <td className="p-2 border">{outlet.name}</td>
                <td className="p-2 border">{outlet.location}</td>
                <td className="p-2 border">{outlet.phone}</td>
                <td className="p-2 border">{outlet.email}</td>
                <td className="p-2 border">
                  <button
                    onClick={() => {
                      setSelectedOutlet(outlet);
                      setShowEditModal(true);
                    }}
                    className="px-3 py-1 bg-yellow-500 text-white rounded"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Outlet Modal */}
      {showAddModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <h3 className="text-lg font-bold mb-4">Add New Outlet</h3>
            <input
              type="text"
              placeholder="Outlet Name"
              value={newOutlet.name}
              onChange={(e) =>
                setNewOutlet({ ...newOutlet, name: e.target.value })
              }
              className="border p-2 w-full mb-2"
            />
            <input
              type="text"
              placeholder="Location"
              value={newOutlet.location}
              onChange={(e) =>
                setNewOutlet({ ...newOutlet, location: e.target.value })
              }
              className="border p-2 w-full mb-2"
            />
            <input
              type="text"
              placeholder="Phone Number"
              value={newOutlet.phone}
              onChange={(e) =>
                setNewOutlet({ ...newOutlet, phone: e.target.value })
              }
              className="border p-2 w-full mb-2"
            />
            <input
              type="email"
              placeholder="Email"
              value={newOutlet.email}
              onChange={(e) =>
                setNewOutlet({ ...newOutlet, email: e.target.value })
              }
              className="border p-2 w-full mb-2"
            />
            <input
              type="password"
              placeholder="Password"
              value={newOutlet.password}
              onChange={(e) =>
                setNewOutlet({ ...newOutlet, password: e.target.value })
              }
              className="border p-2 w-full mb-2"
            />
            <button
              onClick={handleAddOutlet}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Save
            </button>
            <button
              onClick={() => setShowAddModal(false)}
              className="ml-2 px-4 py-2 bg-red-500 text-white rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Edit Outlet Modal */}
      {showEditModal && selectedOutlet && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <h3 className="text-lg font-bold mb-4">Edit Outlet</h3>
            <input
              type="text"
              value={selectedOutlet.name}
              onChange={(e) =>
                setSelectedOutlet({ ...selectedOutlet, name: e.target.value })
              }
              className="border p-2 w-full mb-2"
            />
            <input
              type="text"
              value={selectedOutlet.location}
              onChange={(e) =>
                setSelectedOutlet({
                  ...selectedOutlet,
                  location: e.target.value,
                })
              }
              className="border p-2 w-full mb-2"
            />
            <input
              type="text"
              value={selectedOutlet.phone}
              onChange={(e) =>
                setSelectedOutlet({ ...selectedOutlet, phone: e.target.value })
              }
              className="border p-2 w-full mb-2"
            />
            <input
              type="email"
              value={selectedOutlet.email}
              onChange={(e) =>
                setSelectedOutlet({ ...selectedOutlet, email: e.target.value })
              }
              className="border p-2 w-full mb-2"
            />
            <button
              onClick={handleEditOutlet}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Save
            </button>
            <button
              onClick={() => setShowEditModal(false)}
              className="ml-2 px-4 py-2 bg-red-500 text-white rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OutletList;
