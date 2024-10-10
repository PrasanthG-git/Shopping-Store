// src/Product.js
import React from "react";

const Product = ({ product, onAddToCart }) => {
  return (
    <div className="shadow-md p-4 border rounded-lg">
      {/* Update the image size here */}
      <img
        src={product.image}
        alt={product.title}
        className="mx-auto w-48 h-48 object-contain"
      />
      <h2 className="mt-2 font-bold text-lg">{product.title}</h2>
      {/* Add product description */}
      <p className="mt-2 text-gray-600 text-sm">
        {product.description}
      </p>
      <p className="mt-2 text-gray-700">Rs.{product.price*82}</p>
      <button
        onClick={() => onAddToCart(product)}
        className="bg-blue-600 mt-4 px-4 py-2 rounded text-white"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
