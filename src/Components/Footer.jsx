import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaCcVisa, FaCcMastercard, FaPaypal } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1D2D6B] text-white py-8">
      <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        
        {/* Product Categories */}
        <div>
          <h4 className="text-lg font-bold mb-4">Product Categories</h4>
          <ul className="space-y-2">
            <li className="font-semibold">LPG Gas Cylinders</li>
            <li>2.3 Kg Gas Cylinder</li>
            <li>5 Kg Gas Cylinder</li>
            <li>12.5 Kg Gas Cylinder</li>
            <li>37.5 Kg Industrial Gas Cylinder</li>
            <li>Home Gas Refill</li>
            <li>Commercial Gas Refill</li>
            <li>Bulk Gas Supply</li>
          </ul>
        </div>

        {/* Customer Services */}
        <div>
          <h4 className="text-lg font-bold mb-4">Customer Services</h4>
          <ul className="space-y-2">
            <li>Order Gas Online</li>
            <li>Track Your Order</li>
            <li>Schedule a Delivery</li>
            <li>Safety Guidelines</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* Company Info */}
        <div>
          <h4 className="text-lg font-bold mb-4">Company Information</h4>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Careers</li>
            <li>Blog / News</li>
          </ul>
        </div>

        {/* Support & Help */}
        <div>
          <h4 className="text-lg font-bold mb-4">Support & Help</h4>
          <ul className="space-y-2">
            <li>Customer Support</li>
            <li>Emergency Helpline</li>
            <li>Return & Refund Policy</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Payment & Delivery */}
        <div>
          <h4 className="text-lg font-bold mb-4">Payment & Delivery</h4>
          <ul className="space-y-2">
            <li>Accepted Payment Methods</li>
            <div className="flex space-x-3 mt-2">
              <FaCcVisa className="text-2xl" />
              <FaCcMastercard className="text-2xl" />
              <FaPaypal className="text-2xl" />
            </div>
            <li>Delivery Areas & Timings</li>
            <li>Free Installation Services</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-bold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <FaFacebook className="cursor-pointer text-xl hover:text-blue-500" />
            <FaInstagram className="cursor-pointer text-xl hover:text-pink-500" />
            <FaTwitter className="cursor-pointer text-xl hover:text-blue-400" />
            <FaLinkedin className="cursor-pointer text-xl hover:text-blue-600" />
            <FaYoutube className="cursor-pointer text-xl hover:text-red-500" />
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="text-center mt-8 text-gray-300">
        © 2025 GasByGas. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
