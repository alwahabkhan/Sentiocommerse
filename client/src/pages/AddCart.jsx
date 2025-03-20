// src/pages/AddCart.jsx
import React from "react";
import { useCart } from "./CartContext"; // Adjust the import path

const CartPage = () => {
  const { cart, addToCart, removeFromCart } = useCart(); // Destructure the cart, addToCart, and removeFromCart

  if (!cart) {
    return <div>No items in the cart</div>;
  }

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - {item.price} USD
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
