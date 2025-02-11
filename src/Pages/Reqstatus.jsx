import React from "react";

const Requeststatus = () => {
  // Sample Order Data
  const orders = [
    { id: 7535, type: "2.3Kg Gas Cylinder", quantity: 1, date: "11/12/22", status: "Pending" },
    { id: 5724, type: "5Kg Gas Cylinder", quantity: 1, date: "21/12/22", status: "Approved" },
    { id: 2775, type: "12Kg Gas Cylinder", quantity: 1, date: "5/12/22", status: "In Progress" },
    { id: 2275, type: "12Kg Gas Cylinder", quantity: 1, date: "8/12/22", status: "Delivered" },
    { id: 2427, type: "5Kg Gas Cylinder", quantity: 1, date: "9/1/23", status: "Cancelled" },
    { id: 2578, type: "5Kg Gas Cylinder", quantity: 1, date: "9/1/23", status: "Delivered" },
    { id: 2757, type: "2.3Kg Gas Cylinder", quantity: 1, date: "15/12/23", status: "Pending" },
    { id: 3757, type: "12Kg Gas Cylinder", quantity: 1, date: "6/6/23", status: "Approved" },
    { id: 2474, type: "12Kg Gas Cylinder", quantity: 1, date: "11/11/22", status: "Pending" },
  ];

  return (
    <div className="request-status-container p-6">

      {/* Orders Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold">Orders</h1>
        <button className="btn-order-history text-blue-600">Order History</button>
      </div>

      {/* Orders Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 text-left">Product Type</th>
              <th className="py-2 px-4 text-left">Quantity</th>
              <th className="py-2 px-4 text-left">Order ID</th>
              <th className="py-2 px-4 text-left">Order Date</th>
              <th className="py-2 px-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="py-2 px-4">{order.type}</td>
                <td className="py-2 px-4">{order.quantity}</td>
                <td className="py-2 px-4">{order.id}</td>
                <td className="py-2 px-4">{order.date}</td>
                <td className={`py-2 px-4 status ${order.status.toLowerCase().replace(" ", "-")}`}>
                  {order.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Section */}
      <div className="flex justify-between items-center mt-4">
        <button className="btn-prev text-blue-600" disabled>
          Previous
        </button>
        <div className="text-center text-gray-600">
          Page 1 of 10
        </div>
        <button className="btn-next text-blue-600">Next</button>
      </div>
    </div>
  );
};

export default Requeststatus;
