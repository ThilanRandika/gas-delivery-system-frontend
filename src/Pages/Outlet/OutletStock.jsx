import React, { useState } from "react";
import axios from "axios"; // Import Axios

const initialProducts = [
  {
    productName: "Gas 2.3Kg",
    productType: "Small",
  },
  {
    productName: "Gas 5Kg",
    productType: "Medium",
  },
  {
    productName: "Gas 12.5Kg",
    productType: "Large",
  },
  {
    productName: "Gas 37.5Kg",
    productType: "Extra Large",
  },
];

const OutletStock = () => {
  const [products] = useState(initialProducts);

  const handleRequestStock = async (productName) => {
    const requestedQuantity = prompt(
      `How many units of ${productName} would you like to request?`
    );

    if (!requestedQuantity) return;

    const quantity = parseInt(requestedQuantity, 10);
    if (isNaN(quantity) || quantity <= 0) {
      alert("Please enter a valid number.");
      return;
    }

    // Assuming you have outletId available in your component
    const outletId = sessionStorage.getItem("outlet_id"); // or however you store it

    if (!outletId) {
      alert("Outlet ID is not available. Please log in.");
      return;
    }

    try {
      const response = await axios.post("http://127.0.0.1:5000/request-stock", {
        productName: productName,
        quantityRequested: quantity,
        outletId: outletId, // Include outletId in the request
      });

      if (response.status === 201) {
        alert(`Requested ${quantity} units of ${productName}`);
      } else {
        alert("Failed to submit stock request.");
      }
    } catch (error) {
      console.error("Error requesting stock:", error);
      alert("An error occurred while requesting stock.");
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Stock Management</h2>

      <table className="w-full border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 border">Product Name</th>
            <th className="p-2 border">Product Type</th>
            <th className="p-2 border">Request Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index} className="text-center">
              <td className="p-2 border">{product.productName}</td>
              <td className="p-2 border">{product.productType}</td>
              <td className="p-2 border">
                <button
                  onClick={() => handleRequestStock(product.productName)} // Use product name
                  className="bg-red-500 text-white px-4 py-1 rounded"
                >
                  Request Stock
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OutletStock;
