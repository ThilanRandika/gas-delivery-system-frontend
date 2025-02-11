import React, { useState } from "react";

const AdminDelivery = () => {
  // Delivery Status Options
  const statusOptions = ["Pending", "In Transit", "Delivered"];

  // Gas Stock (Main Warehouse)
  const [gasStock, setGasStock] = useState([
    { cylinder: "2.3Kg", quantity: 5000 },
    { cylinder: "5Kg", quantity: 3500 },
    { cylinder: "12.5Kg", quantity: 2000 },
    { cylinder: "37.5Kg", quantity: 1000 },
  ]);

  const outletOptions = ["Outlet A", "Outlet B", "Outlet C"];
  const locationOptions = ["Colombo", "Negombo", "Kandy"];
  const cylinderOptions = ["2.3Kg", "5Kg", "12.5Kg", "37.5Kg"];

  const [lowStockOutlets, setLowStockOutlets] = useState([
    {
      outlet: "Outlet A",
      location: "Colombo",
      cylinder: "5Kg",
      requestQuantity: 20,
    },
    {
      outlet: "Outlet B",
      location: "Negombo",
      cylinder: "12.5Kg",
      requestQuantity: 10,
    },
  ]);

  const handleOutletChange = (index, field, value) => {
    const updatedOutlets = [...lowStockOutlets];
    updatedOutlets[index][field] = value;
    setLowStockOutlets(updatedOutlets);
  };

  // Deliveries
  const [deliveries, setDeliveries] = useState([
    {
      deliveryID: 101,
      outlet: "Outlet A",
      location: "Negombo",
      cylinder: "5Kg",
      quantity: 50,
      status: "Pending",
    },
    {
      deliveryID: 102,
      outlet: "Outlet B",
      location: "Colombo",
      cylinder: "12.5Kg",
      quantity: 50,
      status: "In Transit",
    },
  ]);

  // Handle status update
  const handleTransfer = (outlet, location, cylinder, neededQuantity) => {
    console.log("Transferring Stock:", {
      outlet,
      location,
      cylinder,
      neededQuantity,
    });

    const updatedStock = gasStock.map((item) =>
      item.cylinder === cylinder
        ? { ...item, quantity: item.quantity - neededQuantity }
        : item
    );

    setGasStock(updatedStock);

    const newDelivery = {
      deliveryID: deliveries.length + 103,
      outlet,
      location, // Make sure location is passed correctly
      cylinder,
      quantity: neededQuantity,
      status: "Pending",
    };

    console.log("New Delivery Entry:", newDelivery);

    setDeliveries([...deliveries, newDelivery]);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Gas Delivery Management</h2>

      {/* Gas Stock (Main Warehouse) */}
      <div className="bg-white p-4 rounded-md shadow-md mb-6">
        <h3 className="text-lg font-bold mb-2">Main Warehouse Gas Stock</h3>
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 border">Cylinder Type</th>
              <th className="p-2 border">Available Quantity</th>
            </tr>
          </thead>
          <tbody>
            {gasStock.map((item, index) => (
              <tr key={index} className="text-center">
                <td className="p-2 border">{item.cylinder}</td>
                <td className="p-2 border">{item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Outlets with Low Stock */}
      <div className="bg-white p-4 rounded-md shadow-md mb-6">
        <h3 className="text-lg font-bold mb-2">Outlets with Low Stock</h3>
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 border">Outlet</th>
              <th className="p-2 border">Location</th>
              <th className="p-2 border">Cylinder Type</th>
              <th className="p-2 border">Request Quantity</th>
              <th className="p-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {lowStockOutlets.map((outlet, index) => (
              <tr key={index} className="text-center">
                {/* Outlet Dropdown */}
                <td className="p-2 border">
                  <select
                    value={outlet.outlet}
                    onChange={(e) =>
                      handleOutletChange(index, "outlet", e.target.value)
                    }
                    className="border rounded p-1 bg-white w-full"
                  >
                    {outletOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </td>

                {/* Location Dropdown */}
                <td className="p-2 border">
                  <select
                    value={outlet.location}
                    onChange={(e) =>
                      handleOutletChange(index, "location", e.target.value)
                    }
                    className="border rounded p-1 bg-white w-full"
                  >
                    {locationOptions.map((loc) => (
                      <option key={loc} value={loc}>
                        {loc}
                      </option>
                    ))}
                  </select>
                </td>

                {/* Cylinder Type Dropdown */}
                <td className="p-2 border">
                  <select
                    value={outlet.cylinder}
                    onChange={(e) =>
                      handleOutletChange(index, "cylinder", e.target.value)
                    }
                    className="border rounded p-1 bg-white w-full"
                  >
                    {cylinderOptions.map((cylinder) => (
                      <option key={cylinder} value={cylinder}>
                        {cylinder}
                      </option>
                    ))}
                  </select>
                </td>

                {/* Request Quantity Input */}
                <td className="p-2 border">
                  <input
                    type="number"
                    value={outlet.requestQuantity}
                    onChange={(e) =>
                      handleOutletChange(
                        index,
                        "requestQuantity",
                        e.target.value
                      )
                    }
                    className="border rounded p-1 w-full"
                  />
                </td>

                {/* Send Stock Button */}
                <td className="p-2 border">
                  <button
                    onClick={() =>
                      handleTransfer(
                        outlet.outlet,
                        outlet.cylinder,
                        outlet.requestQuantity
                      )
                    }
                    className="bg-blue-600 text-white px-3 py-1 rounded-md"
                  >
                    Send Stock
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Delivery Status */}
      <div className="bg-white p-4 rounded-md shadow-md">
        <h3 className="text-lg font-bold mb-2">Delivery Tracking</h3>
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 border">Delivery ID</th>
              <th className="p-2 border">Outlet</th>
              <th className="p-2 border">Location</th>{" "}
              {/* Ensure this is included */}
              <th className="p-2 border">Cylinder Type</th>
              <th className="p-2 border">Quantity</th>
              <th className="p-2 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {deliveries.map((delivery, index) => (
              <tr key={index} className="text-center">
                <td className="p-2 border">{delivery.deliveryID}</td>
                <td className="p-2 border">{delivery.outlet}</td>
                <td className="p-2 border">{delivery.location}</td>{" "}
                {/* Ensure this is being displayed */}
                <td className="p-2 border">{delivery.cylinder}</td>
                <td className="p-2 border">{delivery.quantity}</td>
                <td className="p-2 border">
                  <select
                    value={delivery.status}
                    onChange={(e) => handleStatusChange(index, e.target.value)}
                    className="border rounded p-1 bg-white"
                  >
                    {statusOptions.map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDelivery;
