import React from 'react';

const CartModal = ({ cartItems, closeModal, removeFromCart }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-lg p-6 bg-indigo-500 rounded-lg">
        <h2 className="mb-4 text-xl font-bold">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between mb-4">
              <span className="font-bold">{item.title}</span>
              <span>${item.price}</span>
              <button
                className="p-1 text-black bg-red-500 rounded hover:bg-red-400"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))
        )}
        <button
          className="p-2 mt-4 text-white bg-gray-800 rounded hover:bg-gray-700"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CartModal;
