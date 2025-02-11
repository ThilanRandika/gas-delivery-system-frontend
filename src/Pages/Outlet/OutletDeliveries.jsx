import { useState } from "react";

const OutletDeliveries = () => {
  const [incomingDeliveries, setIncomingDeliveries] = useState([
    { id: 1, stockType: "12Kg Gas Cylinder", arrivalTime: "10:30 AM", status: "On the way" },
    { id: 2, stockType: "5Kg Gas Cylinder", arrivalTime: "12:15 PM", status: "Delayed" },
  ]);

  const [pickupOrders, setPickupOrders] = useState([
    { id: 101, customer: "Kasun Perera", pickupTime: "09:45 AM", status: "Pending" },
    { id: 102, customer: "Ruwan Silva", pickupTime: "11:00 AM", status: "Picked Up" },
  ]);

  const [deliveryRoutes, setDeliveryRoutes] = useState([
    { id: 201, customer: "Nimal Fernando", address: "Colombo 05", eta: "1:15 PM" },
    { id: 202, customer: "Sanduni Jayawardena", address: "Negombo", eta: "2:00 PM" },
  ]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Outlet Deliveries Dashboard</h2>
      
      {/* Incoming Deliveries Section */}
      <div className="mb-6 bg-white shadow p-4 rounded">
        <h3 className="text-lg font-semibold mb-2">Incoming Deliveries</h3>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Stock Type</th>
              <th className="border p-2">Estimated Arrival</th>
              <th className="border p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {incomingDeliveries.map(delivery => (
              <tr key={delivery.id} className="border">
                <td className="border p-2">{delivery.stockType}</td>
                <td className="border p-2">{delivery.arrivalTime}</td>
                <td className={`border p-2 ${delivery.status === "Delayed" ? "text-red-500" : "text-green-500"}`}>{delivery.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Order Pickup Tracking */}
      <div className="mb-6 bg-white shadow p-4 rounded">
        <h3 className="text-lg font-semibold mb-2">Order Pickup Tracking</h3>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Customer</th>
              <th className="border p-2">Pickup Time</th>
              <th className="border p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {pickupOrders.map(order => (
              <tr key={order.id} className="border">
                <td className="border p-2">{order.customer}</td>
                <td className="border p-2">{order.pickupTime}</td>
                <td className={`border p-2 ${order.status === "Picked Up" ? "text-green-500" : "text-orange-500"}`}>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Delivery Route Optimization */}
      <div className="mb-6 bg-white shadow p-4 rounded">
        <h3 className="text-lg font-semibold mb-2">Delivery Route Optimization</h3>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Customer</th>
              <th className="border p-2">Address</th>
              <th className="border p-2">Estimated Arrival</th>
            </tr>
          </thead>
          <tbody>
            {deliveryRoutes.map(route => (
              <tr key={route.id} className="border">
                <td className="border p-2">{route.customer}</td>
                <td className="border p-2">{route.address}</td>
                <td className="border p-2 text-blue-500">{route.eta}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OutletDeliveries;