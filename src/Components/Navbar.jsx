import React from 'react';

const Navbar = ({ cartCount, openModal }) => {
  return (
    <nav className="flex items-center justify-between p-6 text-black bg-blue-600 shadow-md">
      <h1 className="text-2xl font-bold text-white"> Fashion Store</h1>
      <button
        className="relative px-4 py-2 text-blue-600 transition duration-300 ease-in-out bg-white rounded-full hover:bg-gray-200"
        onClick={openModal}
      >
        Cart 
        <span className="px-2 py-1 ml-2 text-xs text-white bg-red-500 rounded-full">
          {cartCount}
        </span>
      </button>
    </nav>
  );
};

export default Navbar;
