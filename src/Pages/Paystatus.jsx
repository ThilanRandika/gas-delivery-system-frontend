import React, { useState } from "react";

// Sample payment data (you can replace this with real data or mock data)
const samplePayments = [
  {
    paymentID: "P12345",
    productName: "Gas Cylinder - 5kg",
    paymentDate: "2025-02-01",
    status: "Successful",
    deliveryDate: "2025-02-05",
  },
  {
    paymentID: "P12346",
    productName: "Gas Cylinder - 10kg",
    paymentDate: "2025-02-03",
    status: "Faild",
    deliveryDate: "2025-02-07",
  },
  // Add more payment data here as needed
];

const Paystatus = () => {
  // Calculate the difference in days between payment and delivery date
  const calculateDateDifference = (paymentDate, deliveryDate) => {
    const payment = new Date(paymentDate);
    const delivery = new Date(deliveryDate);
    const differenceInTime = delivery - payment;
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);
    return differenceInDays;
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold mb-4">Payment Status</h1>

      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 text-left">Payment ID</th>
            <th className="py-2 px-4 text-left">Product Name</th>
            <th className="py-2 px-4 text-left">Days After Payment</th>
            <th className="py-2 px-4 text-left">Payment Date</th>
            <th className="py-2 px-4 text-left">Payment Status</th>
          </tr>
        </thead>
        <tbody>
          {samplePayments.map((payment) => (
            <tr key={payment.paymentID} className="border-b">
              <td className="py-2 px-4">{payment.paymentID}</td>
              <td className="py-2 px-4">{payment.productName}</td>
              <td className="py-2 px-4">
                {calculateDateDifference(payment.paymentDate, payment.deliveryDate)} days
              </td>
              <td className="py-2 px-4">{payment.paymentDate}</td>
              <td className="py-2 px-4">{payment.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Paystatus;
