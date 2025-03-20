import React, { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FaFilter } from "react-icons/fa";
import { SearchContext } from "../Context/SearchContext";

const ShopNow = () => {
  const { searchTerm } = useContext(SearchContext);
  const location = useLocation();

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  // Get category from query params or state
  const queryParams = new URLSearchParams(location.search);
  const queryCategory = queryParams.get("category");
  const stateCategory = location.state?.category || "";
  const selectedCategory = queryCategory || stateCategory;

  // Fetch products and set initial data
  const fetchProducts = async () => {
    try {
      const response = await fetch("/product.json");
      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data); // Default to all products
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Apply filters (category + search term)
  const applyFilters = () => {
    let filtered = [...products];

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter((product) => product.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  };

  // Sort products by price
  const sortProducts = (type) => {
    const sortedProducts = [...filteredProducts];
    if (type === "high-price") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (type === "low-price") {
      sortedProducts.sort((a, b) => a.price - b.price);
    }
    setFilteredProducts(sortedProducts);
    setShowDropdown(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [selectedCategory, searchTerm, products]);

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h1 className="text-3xl font-bold mb-8 text-black">
          {selectedCategory || ""}
        </h1>

        {/* Filter Dropdown */}
        <div className="relative mb-4 flex justify-end">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="px-4 py-2 bg-gray-200 text-black font-semibold rounded-lg hover:bg-gray-300 transition-colors flex items-center gap-2"
          >
            <FaFilter />
            Filter
          </button>
          {showDropdown && (
            <div className="absolute top-12 right-0 bg-white border rounded-lg shadow-lg z-10">
              <button
                className="block px-4 py-2 text-black hover:bg-yellow-300 w-full text-left"
                onClick={() => sortProducts("high-price")}
              >
                High To Low Price
              </button>
              <button
                className="block px-4 py-2 text-black hover:bg-yellow-300 w-full text-left"
                onClick={() => sortProducts("low-price")}
              >
                Low To High Price
              </button>
            </div>
          )}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-yellow-500/20 transition-shadow flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="p-4 flex flex-col flex-grow">
                <div className="aspect-square relative mb-4 rounded-lg overflow-hidden">
                  <img
                    src={`/public/${product.image}`}
                    alt={product.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-black">{product.name}</h3>
                <p className="text-black text-xl font-bold mb-4">${product.price}</p>
                <div className="mt-auto">
                  <a
                    href={`/product/${product.id}`}
                    className="inline-block w-full bg-yellow-400 text-black font-semibold py-2 px-4 rounded-lg hover:bg-yellow-300 transition-colors text-center"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopNow;
