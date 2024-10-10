// src/App.js
import React, { useState, useEffect } from "react";
import Header from "./Header";
import ProductList from "./ProductList";
import Cart from "./Cart";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  // Function to handle adding to the cart
  const handleAddToCart = (product) => {
    const isAlreadyInCart = cart.some((item) => item.id === product.id);

    if (isAlreadyInCart) {
      alert("Item already added to the cart");
    } else {
      setCart((prevCart) => [...prevCart, product]);
    }
  };

  // Function to handle removing from the cart
  const handleRemoveFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const handleCartClick = () => {
    setShowCart(true);
  };

  const handleCloseCart = () => {
    setShowCart(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header cartCount={cart.length} onCartClick={handleCartClick} />
      <ProductList products={products} onAddToCart={handleAddToCart} />
      {showCart && (
        <Cart
          cartItems={cart}
          onClose={handleCloseCart}
          onRemoveFromCart={handleRemoveFromCart}
        />
      )}
    </div>
  );
};

export default App;
