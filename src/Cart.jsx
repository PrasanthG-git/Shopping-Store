// src/Cart.js
import React from "react";

const Cart = ({ cartItems, onClose, onRemoveFromCart }) => {
  return (
    <div className="top-0 right-0 z-10 fixed bg-white shadow-lg p-4 w-1/3 h-full">
      <h2 className="font-bold text-xl">Cart</h2>
      <button onClick={onClose} className="top-4 right-4 absolute">
        Close
      </button>
      <ul>
        {cartItems.length === 0 ? (
          <li>Your cart is empty.</li>
        ) : (
          cartItems.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center py-2 border-b"
            >
              <div>
                <p>{item.title}</p>
                <p>Rs.{item.price * 82}</p>
              </div>
              <button
                onClick={() => onRemoveFromCart(item.id)}
                className="bg-red-500 px-3 py-1 rounded text-white"
              >
                Remove
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Cart;
