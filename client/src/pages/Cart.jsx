import React, { useContext, useState, useEffect } from 'react';
import { Header } from '../Home';
import Footer from '../Layout/Footer';
import { AddToCartContext } from '../Context/AddToCartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { items, updateItemQuantity, removeItem } = useContext(AddToCartContext); // Get context to update quantity
  const [totalPrice, setTotalPrice] = useState(0);

  // Calculate total price whenever items change
  useEffect(() => {
    const calculateTotal = items.reduce((total, item) => {
      return total + item.productData.price * item.qty;
    }, 0);
    setTotalPrice(calculateTotal.toFixed(2));
  }, [items]);

  // Handle quantity change (increment/decrement) for a specific product
  const handleQuantityChange = (id, action) => {
    const updatedItems = items.map((item) => {
      if (item.productData.id === id) {
        const updatedItem = { ...item }; // Copy the item to avoid mutation
        if (action === 'increment') {
          updatedItem.qty += 1; // Increase the quantity
        } else if (action === 'decrement' && updatedItem.qty > 1) {
          updatedItem.qty -= 1; // Decrease the quantity (ensure it doesn't go below 1)
        }
        return updatedItem;
      }
      return item;
    });

    updateItemQuantity(updatedItems); // Update context and localStorage
  };

  const handleRemove = (id) => {
    console.log("🚀 ~ handleRemove ~ id:", id)
    removeItem(id);

    alert('Item remove from cart')
  };

  return (
    <div>
      <Header />
      <div className="min-h-screen w-full bg-gray-50 py-8 flex justify-center">
        <div className="container mx-auto px-4 flex">
          {/* Cart Items Section */}
          <div className="flex-1 bg-white shadow-md rounded-lg p-6 mr-6">
            {items.length === 0 ? (
              <p className="text-center text-xl text-gray-500">Your cart is empty</p>
            ) : (
              <ul>
                {items.map((item) => (
                  <li key={item.id} className="flex items-center justify-between py-4 border-b border-gray-200">
                    <div className="flex items-center">
                      <img
                        src={item.productData.image}
                        alt={item.productData.name}
                        className="w-20 h-20 object-cover rounded-md"
                      />
                      <div className="ml-4">
                        <h4 className="text-lg font-semibold text-gray-800">{item.productData.name}</h4>
                        <p className="text-gray-500">Qty: {item.qty}</p>
                      </div>
                    </div>
                    <div className="text-lg font-semibold text-gray-900 flex items-center space-x-4">
                      {/* Decrement Button */}
                      <button
                        onClick={() => handleQuantityChange(item.productData.id, 'decrement')}
                        className="bg-yellow-500 text-black rounded-full w-8 h-8 flex justify-center items-center hover:bg-yellow-400 transition-all"
                      >
                        <span className="text-lg">-</span>
                      </button>
                      <span className="text-gray-800">{item.qty}</span>
                      {/* Increment Button */}
                      <button
                        onClick={() => handleQuantityChange(item.productData.id, 'increment')}
                        className="bg-yellow-500 text-black rounded-full w-8 h-8 flex justify-center items-center hover:bg-yellow-400 transition-all"
                      >
                        <span className="text-lg">+</span>
                      </button>
                      <span className="text-lg font-semibold text-gray-900">${item.qty * item.productData.price}</span>

                      <button
                className="bg-[#EAB308] flex gap-2 items-center text-black px-6 py-2 rounded-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={() => handleRemove(item.productData.id)} // remove product to cart
              >
               Remove
              </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Cart Summary Section */}
          <div className="w-80 bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cart Summary</h2>
            <div className="flex justify-between mb-4">
              <span className="text-lg font-semibold text-gray-800">Total Price:</span>
              <span className="text-xl font-bold text-yellow-500">${totalPrice}</span>
            </div>

            {/* Action Buttons */}
            {items.length > 0 && (
              <div className="flex justify-between mt-6 space-x-2">
                <Link to="/shop">
                  <button className="w-full md:w-auto bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg hover:bg-gray-400 transition-colors">
                    Continue Shopping
                  </button>
                </Link>
                <Link to="/Checkout">
                  <button className="w-full md:w-auto bg-yellow-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-yellow-600 transition-colors">
                    Proceed to Checkout
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
