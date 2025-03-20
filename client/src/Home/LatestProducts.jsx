import { useEffect, useState, useContext } from "react";
import { motion } from "framer-motion";
import { SearchContext } from "../Context/SearchContext";

export default function LatestProducts() {
  const { searchTerm } = useContext(SearchContext);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from the product.json file
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/public/product.json"); // Replace with the actual path
        if (!response.ok) throw new Error("Failed to fetch products.");
        const data = await response.json();

        // Randomly select 4 products from the fetched data
        const shuffledProducts = data.sort(() => 0.5 - Math.random());
        const selectedProducts = shuffledProducts.slice(0, 4);

        setProducts(selectedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-8 text-black"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Latest Products
        </motion.h2>

        {/* Show loading indicator */}
        {loading ? (
          <p className="text-center text-black">Loading products...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="bg-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-yellow-500/20 transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="p-4 flex flex-col h-full justify-between">
                  <div>
                    <div className="aspect-square relative mb-4 rounded-lg overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <h3 className="font-semibold text-lg mb-2 text-black">
                      {product.name}
                    </h3>
                    <p className="text-black text-xl font-bold">
                      ${product.price}
                    </p>
                  </div>
                  <a
                    href={`/product/${product.id}`}
                    className="mt-4 inline-block w-full bg-yellow-400 text-black font-semibold py-2 px-4 rounded-lg hover:bg-yellow-300 transition-colors text-center"
                  >
                    View Details
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
