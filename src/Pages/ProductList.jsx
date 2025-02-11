import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const navigate = useNavigate();
  const [selectedBranch, setSelectedBranch] = useState("");

  const products = [
    { id: 1, name: "2.3 Kg Gas Cylinder", price: 694, image: "/2.3KG 1.png" },
    { id: 2, name: "05 Kg Gas Cylinder", price: 1482, image: "/gas5k-3 1.png" },
    { id: 3, name: "12 Kg Gas Cylinder", price: 3690, image: "/gas12.5k.png" },
    { id: 4, name: "37.5 Kg Gas Cylinder", price: 14500, image: "/37kgbg-1 1.png" }
  ];

  const branches = [
    "Colombo", "Kandy", "Galle", "Negombo", "Anuradhapura", "Kurunegala", "Jaffna", "Ratnapura", "Matara", "Badulla",
    "Gampaha", "Puttalam", "Batticaloa", "Trincomalee", "Nuwara Eliya", "Polonnaruwa", "Ampara", "Mannar", "Vavuniya", "Kilinochchi",
    "Monaragala", "Hambantota", "Kegalle", "Mullaitivu", "Matale"
  ];

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Gas Cylinders</h1>

      <div className="mb-4">
        <label className="text-lg font-semibold">Select Branch:</label>
        <select
          className="ml-2 border p-2 rounded"
          value={selectedBranch}
          onChange={(e) => setSelectedBranch(e.target.value)}
        >
          <option value="">Select Branch</option>
          {branches.map((branch, index) => (
            <option key={index} value={branch}>{branch}</option>
          ))}
        </select>
      </div>

      {products.map((product) => (
        <div key={product.id} className="flex items-center justify-between p-10 border rounded-lg mb-10">
          <div className="flex items-center">
            <img src={product.image} alt={product.name} className="w-30 h-30 mr-4" />
            <div>
              <h2 className="text-xl font-bold">{product.name}</h2>
              <p className="text-gray-600">LKR {product.price}</p>
            </div>
          </div>
          <button 
            onClick={() => navigate(`/checkout/${product.id}`, { state: { product, selectedBranch } })}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            disabled={!selectedBranch}
          >
            Purchase Order
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
