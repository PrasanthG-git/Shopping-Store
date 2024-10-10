// src/ProductList.js
import React from "react";
import Product from "./Product";

const ProductList = ({ products, onAddToCart }) => {
  return (
    <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4">
      {products.map((product) => (
        <Product key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};

export default ProductList;
