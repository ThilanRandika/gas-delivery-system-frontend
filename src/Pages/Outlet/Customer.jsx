import { useState, useEffect } from "react";

const CustomerOrders = () => {
  const [customers, setCustomers] = useState([
    { id: 27535, orderId: 7535, product: "2.3Kg Gas Cylinder", quantity: 100, orderDate: "1/12/22", deliveryDate: "11/12/22", status: "Pending", token: "", tokenExpiry: "" },
    { id: 57535, orderId: 7536, product: "5Kg Gas Cylinder", quantity: 250, orderDate: "15/12/22", deliveryDate: "21/12/22", status: "Approved", token: "ABC123", tokenExpiry: "2025-02-21" },
    { id: 23445, orderId: 2775, product: "12Kg Gas Cylinder", quantity: 100, orderDate: "2/12/22", deliveryDate: "5/12/22", status: "In Progress", token: "", tokenExpiry: "" },
    { id: 23323, orderId: 2275, product: "12Kg Gas Cylinder", quantity: 1, orderDate: "5/12/22", deliveryDate: "8/12/22", status: "Delivered", token: "", tokenExpiry: "" },
    { id: 23950, orderId: 2427, product: "12Kg Gas Cylinder", quantity: 1, orderDate: "22/12/22", deliveryDate: "Cancelled", status: "Cancelled", token: "", tokenExpiry: "" },
  ]);

  const [filterStatus, setFilterStatus] = useState("All");

  const generateToken = () => Math.random().toString(36).substr(2, 8).toUpperCase();

  const getExpiryDate = () => {
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 14); // 14 days from now
    return expiry.toISOString().split("T")[0]; // Format YYYY-MM-DD
  };

  const handleStatusChange = (orderId, newStatus) => {
    setCustomers(customers.map(customer =>
      customer.orderId === orderId
        ? { ...customer, status: newStatus, token: newStatus === "Approved" ? generateToken() : "", tokenExpiry: newStatus === "Approved" ? getExpiryDate() : "" }
        : customer
    ));
  };

  const handleDownloadReport = () => {
    const csvContent = [
      ["Customer ID", "Order ID", "Product", "Quantity", "Order Date", "Delivery Date", "Status", "Token", "Token Expiry"].join(","),
      ...customers.map(c => [c.id, c.orderId, c.product, c.quantity, c.orderDate, c.deliveryDate, c.status, c.token, c.tokenExpiry].join(","))
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "customer_orders.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  // Remove expired tokens
  useEffect(() => {
    const today = new Date().toISOString().split("T")[0]; // Today's date in YYYY-MM-DD format
    setCustomers(customers.map(customer => ({
      ...customer,
      token: customer.tokenExpiry && customer.tokenExpiry < today ? "" : customer.token,
      tokenExpiry: customer.tokenExpiry && customer.tokenExpiry < today ? "" : customer.tokenExpiry,
    })));
  }, []);

  const filteredOrders = filterStatus === "All" ? customers : customers.filter(c => c.status === filterStatus);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Customer Orders</h2>
        <button onClick={handleDownloadReport} className="px-4 py-2 bg-blue-500 text-white rounded">Download Report</button>
      </div>

      {/* Filter Dropdown */}
      <div className="mb-4">
        <label className="font-semibold mr-2">Filter by Status:</label>
        <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} className="border p-2">
          <option value="All">All</option>
          <option value="Pending">Pending</option>
          <option value="Approved">Approved</option>
          <option value="In Progress">In Progress</option>
          <option value="Delivered">Delivered</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </div>

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Customer ID</th>
            <th className="border p-2">Order ID</th>
            <th className="border p-2">Product</th>
            <th className="border p-2">Quantity</th>
            <th className="border p-2">Order Date</th>
            <th className="border p-2">Delivery Date</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Token</th>
            <th className="border p-2">Token Expiry</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map((c) => (
            <tr key={c.orderId} className="border">
              <td className="border p-2">{c.id}</td>
              <td className="border p-2">{c.orderId}</td>
              <td className="border p-2">{c.product}</td>
              <td className="border p-2 font-bold">{c.quantity}</td>
              <td className="border p-2">{c.orderDate}</td>
              <td className="border p-2">{c.deliveryDate}</td>
              <td className="border p-2">
                <select value={c.status} onChange={(e) => handleStatusChange(c.orderId, e.target.value)} className="border p-1">
                  <option value="Pending">Pending</option>
                  <option value="Approved">Approved</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Delivered">Delivered</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </td>
              <td className="border p-2">{c.token}</td>
              <td className={`border p-2 ${c.tokenExpiry && c.tokenExpiry < new Date().toISOString().split("T")[0] ? "text-red-500" : ""}`}>
                {c.tokenExpiry || "N/A"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerOrders;
