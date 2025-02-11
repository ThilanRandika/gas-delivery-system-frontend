import React, { useState } from "react";

// Sample notifications data
const sampleNotifications = [
  { id: 1, message: "Your gas request has been processed successfully.", date: "2025-02-01" },
  { id: 2, message: "Payment for your gas order is successful.", date: "2025-02-03" },
  { id: 3, message: "New gas delivery scheduled for February 6, 2025.", date: "2025-02-04" },
];

const UserNotify = () => {
  const [notifications, setNotifications] = useState(sampleNotifications);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold mb-4">My Notifications</h1>

      {notifications.length === 0 ? (
        <p>No new notifications.</p>
      ) : (
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div key={notification.id} className="border-b py-3">
              <p className="font-semibold">{notification.message}</p>
              <p className="text-sm text-gray-500">{notification.date}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserNotify;
