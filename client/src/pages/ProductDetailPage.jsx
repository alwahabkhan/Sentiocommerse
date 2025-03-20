import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { AddToCartContext } from "../Context/AddToCartContext";
import { WishListContext } from "../Context/WishListContext";

const ProductDetailPage = () => {
  const { addItem } = useContext(AddToCartContext);
  const { addWishListItem } = useContext(WishListContext);
  const { productId } = useParams();  // Get product ID from the URL
  const [product, setProduct] = useState(null); // State for product data
  const [mainImage, setMainImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  
  // Review state
  const [reviews, setReviews] = useState([]); // State to store reviews
  const [newReview, setNewReview] = useState({ comment: "", rating: 0 }); // New review input
  
  // Fetch product data when the component mounts or productId changes
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch("/product.json");
        const data = await response.json();

        // Find the product matching the productId from the fetched data
        const selectedProduct = data.find(
          (product) => product.id === parseInt(productId)
        );

        if (selectedProduct) {
          setProduct(selectedProduct);
          setMainImage(selectedProduct.image); // Set the main image of the product
          setReviews(selectedProduct.reviews || []); // Set the product reviews if any
        }
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProduct();
  }, [productId]);

  // Add product to cart with quantity
  const addToCartFun = () => {
    if (product) {
      const cartItem = {
        productData: product,
        qty: quantity, // Pass the quantity
      };
      addItem(cartItem); // Add to cart
    }
  };

  // Add product to wishlist
  const addToWishList = () => {
    if (product) {
      const wishListItem = {
        productData: product, // Add product data to wishlist
      };
      addWishListItem(wishListItem); // Add to wishlist
      alert("Product added to the wishlist!");
    }
  };

  // Change the main image to the selected thumbnail
  const changeImage = (src) => {
    setMainImage(src);
  };

  // Increase quantity by 1
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  // Decrease quantity by 1
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Handle star rating change
  const handleStarClick = (rating) => {
    setNewReview({ ...newReview, rating });
  };

  // Handle review submission
  const handleReviewSubmit = () => {
    if (newReview.comment && newReview.rating > 0) {
      const updatedReviews = [
        ...reviews,
        { comment: newReview.comment, rating: newReview.rating },
      ];
      setReviews(updatedReviews);
      setNewReview({ comment: "", rating: 0 });
      alert("Review submitted successfully!");
    } else {
      alert("Please add a comment and select a rating.");
    }
  };

  if (!product) {
    return <div>Loading...</div>; // Handle loading state if product data is not available yet
  }

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">
          {/* Product Images */}
          <div className="w-full md:w-1/2 px-4 mb-8">
            <img
              src={mainImage}
              alt={product.name}
              className="w-full h-auto rounded-lg shadow-md mb-4"
              id="mainImage"
            />
            <div className="flex gap-4 py-4 justify-center overflow-x-auto">
              {/* Thumbnails */}
              {product.images &&
                product.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-16 sm:w-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                    onClick={() => changeImage(img)}
                  />
                ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full md:w-1/2 px-4">
            <h2 className="text-3xl font-bold text-black mb-2">{product.name}</h2>
            <div className="mb-4">
              <span className="text-2xl font-bold mr-2">${product.price}</span>
            </div>
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`w-6 ${index < 4 ? "text-yellow-500" : "text-gray-300"}`}
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
              <span className="ml-2 text-gray-600">4.5 (120 reviews)</span>
            </div>
            <p className="text-black mb-6">{product.description}</p>

            {/* Quantity Selector with Plus and Minus Buttons */}
            <div className="mb-6">
              <label
                htmlFor="quantity"
                className="block text-sm font-medium text-black mb-1"
              >
                Quantity:
              </label>
              <div className="flex items-center space-x-2">
                <button
                  onClick={decreaseQuantity}
                  className="px-4 py-2 border border-gray-300 rounded-l-md"
                >
                  −
                </button>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  min="1"
                  value={quantity}
                  className="w-12 text-center border-t border-b border-gray-300 focus:outline-none"
                  readOnly
                />
                <button
                  onClick={increaseQuantity}
                  className="px-4 py-2 border border-gray-300 rounded-r-md"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4 mb-6">
              <button
                className="bg-[#EAB308] flex gap-2 items-center text-black px-6 py-2 rounded-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={addToCartFun} // Add product to cart
              >
                Add to Cart
              </button>
              <button
                className="bg-gray-200 flex gap-2 items-center text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                onClick={addToWishList}
              >
                <span className="text-red-500">❤️</span>
                Wishlist
              </button>
              
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black mb-2">Key Features:</h3>
              <ul className="list-disc list-inside text-black">
                {product.keyFeature1 && <li>{product.keyFeature1}</li>}
                {product.keyFeature2 && <li>{product.keyFeature2}</li>}
                {product.keyFeature3 && <li>{product.keyFeature3}</li>}
              </ul>
            </div>

            {/* Reviews Section */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
              <div className="space-y-4">
                {reviews.map((review, index) => (
                  <div key={index} className="bg-gray-100 p-4 rounded-md">
                    <div className="flex items-center mb-2">
                      {[...Array(review.rating)].map((_, idx) => (
                        <svg
                          key={idx}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 text-yellow-500"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                      <span className="ml-2 text-gray-600">{review.comment}</span>
                    </div>
                    
                  </div>
                ))}

                {/* Add New Review Form */}
                <div className="mt-6">
                  <div className="flex mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill={newReview.rating >= star ? "yellow" : "gray"}
                        className="w-6 h-6 cursor-pointer"
                        onClick={() => handleStarClick(star)}
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <textarea
                    className="w-full p-2 border border-gray-300 rounded-md"
                    rows="4"
                    value={newReview.comment}
                    onChange={(e) =>
                      setNewReview({ ...newReview, comment: e.target.value })
                    }
                    placeholder="Write your review..."
                  />
                  <button
                    className="bg-yellow-500 text-black px-6 py-2 rounded-md mt-2 hover:bg-yellow-600"
                    onClick={handleReviewSubmit}
                  >
                    Submit Review
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
