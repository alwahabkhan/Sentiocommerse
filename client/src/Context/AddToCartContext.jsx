import React, { createContext, useState, useEffect } from "react";

export const AddToCartContext = createContext();

export const AddToCartProvider = ({ children }) => {
  const [items, setItems] = useState(() => {
    const storedItems = JSON.parse(localStorage.getItem("addToCart")) || [];
    return storedItems;
  });

  // Update item quantity in the cart
  const updateItemQuantity = (updatedItems) => {
    setItems(updatedItems);  // Update the items in the state
    localStorage.setItem("addToCart", JSON.stringify(updatedItems));  // Update localStorage
  };

  const addItem = (newItem) => {
    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    localStorage.setItem("addToCart", JSON.stringify(updatedItems)); // Update localStorage
  };

  const removeItem = (id) => {
    const updatedItems = [...items];
  
    const indexToRemove = updatedItems.findIndex(
      (item) => item.productData.id === id
    );
  
    if (indexToRemove !== -1) {
      updatedItems.splice(indexToRemove, 1);
      setItems(updatedItems);
      localStorage.setItem("addToCart", JSON.stringify(updatedItems));
      console.log("Updated addToCart after removal:", updatedItems);
    } else {
      console.log(`Item with id ${id} not found!`);
    }
  };

  return (
    <AddToCartContext.Provider value={{ items, addItem, updateItemQuantity, removeItem }}>
      {children}
    </AddToCartContext.Provider>
  );
};


