import React from "react";

const Navbar = ({ homebtn, abtBtn, febtn, supbtn, toggleLogin, toggleSignup }) => {
  return (
    <nav className="bg-blue-900 text-white p-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="GasByGas Logo" className="w-16 h-16" />
        <span className="text-xl font-bold">GasByGas</span>
      </div>

      <div className="hidden md:flex space-x-6">
        <button onClick={homebtn} className="hover:text-gray-300">Home</button>
        <button onClick={abtBtn} className="hover:text-gray-300">About</button>
        <button onClick={febtn} className="hover:text-gray-300">Features</button>
        <button onClick={supbtn} className="hover:text-gray-300">Support</button>
      </div>

      {/* Auth Buttons */}
      <div className="flex space-x-4">
        <button 
          onClick={toggleLogin} 
          className="border border-white px-4 py-2 rounded hover:bg-white hover:text-blue-900">
          Sign In
        </button>
        <button 
          onClick={toggleSignup} 
          className="bg-white text-blue-900 px-4 py-2 rounded hover:bg-gray-300">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
