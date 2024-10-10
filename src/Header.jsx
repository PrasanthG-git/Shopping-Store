// src/Header.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Header = ({ cartCount, onCartClick }) => {
  return (
    <header className="flex justify-between items-center bg-blue-600 p-4 text-white">
      <h1 className="text-xl">Simple Store</h1>
      <button onClick={onCartClick} className="relative">
        {/* Add cart icon here */}
        <FontAwesomeIcon icon={faShoppingCart} className="text-2xl" />
        {/* Cart count as a badge */}
        {cartCount > 0 && (
          <span className="top-0 right-0 absolute bg-red-500 px-2 rounded-full text-white text-xs">
            {cartCount}
          </span>
        )}
      </button>
    </header>
  );
};

export default Header;
