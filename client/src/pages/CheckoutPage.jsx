import React, { useContext, useState } from 'react';
import { AddToCartContext } from '../Context/AddToCartContext';
import { Header } from '../Home'; // Assuming your Header component is in the Home directory
import Footer from '../Layout/Footer'; // Assuming your Footer component is in the Layout directory

const CheckoutPage = () => {
  const { items } = useContext(AddToCartContext); // Access cart items from context
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    phone: '',
    zipCode: ''
  });

  // Calculate the total price of items in the cart
  const calculateSubtotal = () => {
    return items.reduce((total, item) => total + item.productData.price * item.qty, 0);
  };

  const subtotal = calculateSubtotal();
  const deliveryCharge = 200;
  const total = subtotal + deliveryCharge;

  // Handle form data change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission (could be sending the data to an API or local storage)
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Order submitted successfully!');
    // You can process the form data here, e.g., sending it to an API
  };

  return (
    <>
      {/* Header */}
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap md:flex-nowrap justify-between gap-8">
          {/* Left Section: User Information Form */}
          <div className="w-full md:w-2/3 bg-white p-6 rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-4">Billing Information</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="w-1/2">
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="w-1/2">
                  <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
                    Zip Code
                  </label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <button type="submit" className="bg-yellow-500 text-white px-6 py-2 rounded-md w-full">
                Submit Order
              </button>
            </form>
          </div>

          {/* Right Section: Order Summary */}
          <div className="w-full md:w-1/3 bg-gray-50 p-6 rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
            <div>
              <h3 className="font-medium">Items</h3>
              <ul className="space-y-4 my-4">
                {items.map((item) => (
                  <li key={item.productData.id} className="flex justify-between">
                    <span>
                      {item.productData.name} x {item.qty}
                    </span>
                    <span>${(item.productData.price * item.qty).toFixed(2)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-between my-2">
              <span className="font-medium">Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between my-2">
              <span className="font-medium">Delivery Charge</span>
              <span>${deliveryCharge}</span>
            </div>
            <div className="flex justify-between my-4 border-t pt-4 font-bold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CheckoutPage;
