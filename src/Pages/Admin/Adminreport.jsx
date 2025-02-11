import React from "react";

const Adminreport = () => {
  // Overview Data
  const overviewData = {
    TotalProfit: "LKR 21,190",
    Revenue: "LKR 18,300",
    Sales: "LKR 17,432",
    NetPurchaseValue: "LKR 1,17,432",
    NetSalesValue: "LKR 80,432",
  };

  // Outlet Data
  const outletData = [
    { Outlet_ID: 1, Name: "Outlet A", Location: "Colombo" },
    { Outlet_ID: 2, Name: "Outlet B", Location: "Negombo" },
  ];

  // Gas Stock Data
  const gasStockData = [
    { Stock_ID: 1, Outlet_ID: 1, Cylinder_Type: "12.5kg", Quantity: 100, Expiry_Date: "2029-01-01", Last_Restock_Date: "2025-01-01" },
    { Stock_ID: 2, Outlet_ID: 2, Cylinder_Type: "5kg", Quantity: 50, Expiry_Date: "2029-01-01", Last_Restock_Date: "2025-01-21" },
  ];

  // Best Selling Categories
  const bestSellingCategories = [
    { category: "2.3Kg Cylinder", turnover: "LKR 26,000", increase: "3.2%" },
    { category: "5Kg Cylinder", turnover: "LKR 22,000", increase: "2%" },
    { category: "12Kg Cylinder", turnover: "LKR 22,000", increase: "1.5%" },
  ];

  // Best Selling Products
  const bestSellingProducts = [
    { product: "2.3Kg", productId: 23567, category: "Small", remainingQty: 200, turnover: "LKR 17,000", increase: "2.3%" },
    { product: "5Kg", productId: 25831, category: "Medium", remainingQty: 150, turnover: "LKR 12,000", increase: "1.3%" },
    { product: "12Kg", productId: 56841, category: "Large", remainingQty: 100, turnover: "LKR 10,000", increase: "1.3%" },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Overview Section (Now at the Top) */}
      <h2 className="text-2xl font-bold mb-4">Overview</h2>
      <div className="grid grid-cols-3 gap-4 mb-6">
        {Object.entries(overviewData).map(([key, value]) => (
          <div key={key} className="bg-white p-4 rounded-md shadow-md text-center">
            <h3 className="text-lg font-bold">{key.replace(/([A-Z])/g, " $1")}</h3>
            <p className="text-2xl">{value}</p>
          </div>
        ))}
      </div>

      {/* Best Selling Category */}
      <h2 className="text-2xl font-bold mb-4">Best Selling Category in All Outlets</h2>
      <table className="w-full border border-gray-300 rounded-lg mb-6">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 border">Category</th>
            <th className="p-2 border">Turn Over</th>
            <th className="p-2 border">Increase By</th>
          </tr>
        </thead>
        <tbody>
          {bestSellingCategories.map((category, index) => (
            <tr key={index} className="text-center">
              <td className="p-2 border">{category.category}</td>
              <td className="p-2 border">{category.turnover}</td>
              <td className="p-2 border text-green-500">{category.increase}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Best Selling Products */}
      <h2 className="text-2xl font-bold mb-4">Best Selling Products</h2>
      <table className="w-full border border-gray-300 rounded-lg">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 border">Product</th>
            <th className="p-2 border">Product ID</th>
            <th className="p-2 border">Category</th>
            <th className="p-2 border">Remaining Quantity</th>
            <th className="p-2 border">Turn Over</th>
            <th className="p-2 border">Increase By</th>
          </tr>
        </thead>
        <tbody>
          {bestSellingProducts.map((product, index) => (
            <tr key={index} className="text-center">
              <td className="p-2 border">{product.product}</td>
              <td className="p-2 border">{product.productId}</td>
              <td className="p-2 border">{product.category}</td>
              <td className="p-2 border">{product.remainingQty}</td>
              <td className="p-2 border">{product.turnover}</td>
              <td className="p-2 border text-green-500">{product.increase}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Adminreport;
