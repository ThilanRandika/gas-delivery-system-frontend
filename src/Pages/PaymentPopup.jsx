import React from "react";

const PaymentPopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-1/3">
        <h2 className="text-xl font-bold mb-4">Payment</h2>
        
        <label className="block mb-2">Card Number</label>
        <input type="text" placeholder="1234 1234 1234 1234" className="border p-2 w-full mb-4" />

        <div className="flex space-x-4">
          <div>
            <label className="block mb-2">Expiry</label>
            <input type="text" placeholder="MM / YY" className="border p-2 w-full" />
          </div>
          <div>
            <label className="block mb-2">CVC</label>
            <input type="text" placeholder="CVC" className="border p-2 w-full" />
          </div>
        </div>

        <label className="block mt-4 mb-2">Postal Code</label>
        <input type="text" placeholder="90210" className="border p-2 w-full mb-4" />

        <div className="flex justify-between mt-4">
          <button onClick={onClose} className="text-red-500">Cancel</button>
          <button className="bg-blue-500 text-white px-6 py-2 rounded">Submit Payment</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPopup;
