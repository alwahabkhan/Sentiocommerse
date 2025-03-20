import React, { useContext } from 'react';
import { WishListContext } from '../Context/WishListContext'; // Import the context

import { Header } from '../Home';
import Footer from '../Layout/Footer';

const Wish = () => {
  // Access wishlist items from context
  const { wishlistItems, removeWishListItem } = useContext(WishListContext);

  const handleRemove = (id) => {
    console.log("🚀 ~ handleRemove ~ id:", id)
    removeWishListItem(id);

    alert('Item remove from wishlist')
  };

  return (
    <div>
      <Header />
      
      <div className=" mt-10 min-h-screen w-full flex justify-center items-center">
        {/* Display message if no items in wishlist */}
        {wishlistItems.length === 0 ? (
          <h3 className="text-xl text-center text-gray-600">
            Your wishlist is empty. Start adding products to your wishlist!
          </h3>
        ) : (
          <div className="w-full md:w-3/4">
            {/* Render each product in the wishlist */}
            <ul className="space-y-6">
              {wishlistItems.map((item, index) => (
                <li key={index} className="flex items-center space-x-4 border-b pb-4">
                  <img
                    src={item.productData.image}
                    alt={item.productData.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-black">{item.productData.name}</h3>
                    <p className="text-gray-600">Price: ${item.productData.price}</p>
                  </div>
                  <button
                className="bg-[#EAB308] flex gap-2 items-center text-black px-6 py-2 rounded-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={() => handleRemove(item.productData.id)} // remove product to wishlist
              >
               Remove
              </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default Wish;
