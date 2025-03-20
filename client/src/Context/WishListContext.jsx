import React, { createContext, useState } from "react";

export const WishListContext = createContext();

export const WishListProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState(() => {
    const storedWishlistItems = JSON.parse(localStorage.getItem("WishList")) || [];
    return storedWishlistItems;
  });

  const addWishListItem = (newWishlistItem) => {
    const updatedWishlistItems = [...wishlistItems, newWishlistItem];
    setWishlistItems(updatedWishlistItems);
    localStorage.setItem("WishList", JSON.stringify(updatedWishlistItems));
  };

  const removeWishListItem = (id) => {
    const updatedWishlistItems = [...wishlistItems];
  
    const indexToRemove = updatedWishlistItems.findIndex(
      (item) => item.productData.id === id
    );
  
    if (indexToRemove !== -1) {
      updatedWishlistItems.splice(indexToRemove, 1);
      setWishlistItems(updatedWishlistItems);
      localStorage.setItem("WishList", JSON.stringify(updatedWishlistItems));
      console.log("Updated Wishlist after removal:", updatedWishlistItems);
    } else {
      console.log(`Item with id ${id} not found!`);
    }
  };
  
  return (
    <WishListContext.Provider value={{ wishlistItems, addWishListItem, removeWishListItem }}>
      {children}
    </WishListContext.Provider>
  );
};
