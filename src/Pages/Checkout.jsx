import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import PaymentPopup from "./PaymentPopup";

const Checkout = () => {
  const location = useLocation();
  const product = location.state?.product;

  // Quantity State
  const [quantity, setQuantity] = useState(1);
  const [isPaymentPopupOpen, setIsPaymentPopupOpen] = useState(false);

  if (!product) {
    return <div className="p-10 text-red-600 font-bold">Product not found!</div>;
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Order Summary</h1>

      {/* Product Details */}
      <div className="flex justify-between border p-4 rounded-lg">
        <div className="flex items-center">
          <img src={product.image} alt={product.name} className="w-32 h-32 mr-4" />
          <div>
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p className="text-gray-600">LKR {product.price} per unit</p>
          </div>
        </div>
      </div>

      {/* Quantity Input */}
      <div className="mt-6">
        <label className="text-xl font-bold">Quantity</label>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="border p-2 rounded w-20 ml-4"
        />
      </div>

      {/* Total Price */}
      <div className="mt-4 text-xl font-bold">
        Total Price: LKR {product.price * quantity}
      </div>

      {/* Payment Section */}
      <div className="mt-6">
        <h2 className="text-xl font-bold">Payment Method</h2>
        <p className="text-gray-600 mb-4">Check / Money Order</p>
        <button 
          onClick={() => setIsPaymentPopupOpen(true)}
          className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          Proceed to Payment
        </button>
      </div>

      {isPaymentPopupOpen && <PaymentPopup onClose={() => setIsPaymentPopupOpen(false)} />}
    </div>
  );
};

export default Checkout;
