import React, { useState, useEffect } from "react";

const Adminstock = () => {
  const [stockData, setStockData] = useState([]);
  const [newStock, setNewStock] = useState({
    product: "",
    quantity: "",
    expiry: "",
    restock: "",
    availability: "",
  });

  // Fetch existing stock data when the component mounts
  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await fetch("http://localhost:5000/get_stock");
        const data = await response.json();
        setStockData(data);
      } catch (error) {
        console.error("Error fetching stock data:", error);
      }
    };

    fetchStockData();
  }, []);

  const handleChange = (e) => {
    setNewStock({ ...newStock, [e.target.name]: e.target.value });
  };

  const addStock = async () => {
    const stockToAdd = {
      product: newStock.product,
      quantity: newStock.quantity,
      expiry: newStock.expiry,
      restock: newStock.restock,
      availability: newStock.availability,
    };

    try {
      const response = await fetch("http://localhost:5000/insert_stock", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(stockToAdd),
      });

      if (!response.ok) {
        throw new Error("Failed to add stock");
      }

      // Fetch updated stock data after adding new stock
      const updatedStockData = await fetch("http://localhost:5000/get_stock");
      const updatedData = await updatedStockData.json();
      setStockData(updatedData); // Update the state with the new stock data

      // Reset the new stock input fields
      setNewStock({
        product: "",
        quantity: "",
        expiry: "",
        restock: "",
        availability: "",
      });
    } catch (error) {
      console.error("Error adding stock:", error);
    }
  };

  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      {/* Overall Inventory Section */}
      <div className="flex justify-between items-center bg-gray-100 p-4 rounded-md shadow-md mb-6">
        <div>
          <h3 className="text-lg font-bold">Overall Inventory</h3>
        </div>
        <div className="flex space-x-8">
          <div>
            <p className="text-blue-500 font-semibold">Categories</p>
            <p className="text-xl font-bold">14</p>
            <p className="text-gray-500 text-sm">Last 7 days</p>
          </div>
          <div>
            <p className="text-orange-500 font-semibold">Total Products</p>
            <p className="text-xl font-bold">157000</p>
            <p className="text-gray-500 text-sm">Last 7 days</p>
          </div>
          <div>
            <p className="text-gray-700 font-semibold">Revenue</p>
            <p className="text-xl font-bold">LKR 2579000</p>
          </div>
        </div>
      </div>

      {/* Stock Table Section */}
      <h3 className="text-lg font-bold">Stock Management</h3>
      <table className="w-full mt-4 border-collapse border border-gray-200">
        <thead>
          <tr className="border-b">
            <th className="p-2">Product</th>
            <th className="p-2">Quantity</th>
            <th className="p-2">Expiry Date</th>
            <th className="p-2">Last Restock Date</th>
            <th className="p-2">Availability</th>
          </tr>
        </thead>
        <tbody>
          {stockData.map((item, index) => (
            <tr key={index} className="border-b">
              <td className="p-2">{item.product}</td>
              <td className="p-2">{item.quantity} units</td>
              <td className="p-2">{item.expiry_date}</td>
              <td className="p-2">{item.last_restock_date}</td>
              <td
                className={`p-2 ${
                  item.availability === "Out of Stock"
                    ? "text-red-500"
                    : item.availability === "Limited"
                    ? "text-yellow-500"
                    : "text-green-500"
                }`}
              >
                {item.availability}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add New Stock Section */}
      <div className="mt-4">
        <h3 className="text-lg font-bold">Add New Stock</h3>
        <input
          type="text"
          name="product"
          placeholder="Product"
          value={newStock.product}
          onChange={handleChange}
          className="border p-2 m-2"
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={newStock.quantity}
          onChange={handleChange}
          className="border p-2 m-2"
        />
        <input
          type="date"
          name="expiry"
          value={newStock.expiry}
          onChange={handleChange}
          className="border p-2 m-2"
        />
        <input
          type="date"
          name="restock"
          value={newStock.restock}
          onChange={handleChange}
          className="border p-2 m-2"
        />
        <select
          name="availability"
          value={newStock.availability}
          onChange={handleChange}
          className="border p-2 m-2"
        >
          <option value="">Select Availability</option>
          <option value="In Stock">In Stock</option>
          <option value="Out of Stock">Out of Stock</option>
          <option value="Limited">Limited</option>
        </select>
        <button
          onClick={addStock}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Add Stock
        </button>
      </div>
    </div>
  );
};

export default Adminstock;
