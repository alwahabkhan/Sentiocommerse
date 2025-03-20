import { motion, AnimatePresence } from "framer-motion"
import { useState, useContext } from "react"
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SearchContext } from "../Context/SearchContext";

const products = [
  {
    id: 1111,
    name: "Wireless Earbuds Pro",
    price: 129.99,
    image: "public/product/e1.1.jpeg"
  },
  {
    id: 2222,
    name: "Smart Earphones X1",
    price: 149.99,
    image: "public/product/e2.1.jpeg"
  },
  {
    id: 3333,
    name: "Premium Audio Buds",
    price: 179.99,
    image: "public/product/f2.1.jpeg"
  },
  {
    id: 4444,
    name: "Elite Sound Pods",
    price: 199.99,
    image: "public/product/f4.2.jpeg"
  },
  // Add more products for pagination
  {
    id: 5555,
    name: "Ultra Bass Earphones",
    price: 159.99,
    image: "public/product/o2.jpeg"
  },
  {
    id: 6666,
    name: "Pro Gaming Headset",
    price: 189.99,
    image: "/Images/boAtRockerz 330Pro3.webp"
  },
  {
    id: 7777,
    name: "Noise Cancelling Buds",
    price: 209.99,
    image: "/Images/boAtCosmosPro1.webp"
  },
  {
    id: 8888,
    name: "Sport Wireless Earbuds",
    price: 139.99,
    image: "/Images/boAtRockerz 330Pro3.webp"
  } ,
  {
    id: 9999,
    name: "Sport Wireless Earbuds",
    price: 139.99,
    image: "/Images/boAtRockerz 330Pro3.webp"
  }
];


const ITEMS_PER_PAGE = 4

export default function RecommendedProducts() {

  const { searchTerm } = useContext(SearchContext);

  const [currentPage, setCurrentPage] = useState(0)
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE)
  
  const currentProducts = products.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  const filteredProducts = currentProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  

  return (
    <section className="py-0 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold mb-8 text-black"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Recommended Products
        </motion.h2>
        <div className="relative">
          <AnimatePresence mode="wait">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  className="bg-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-yellow-500/20 transition-shadow"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="p-4">
                    <div className="aspect-square relative mb-4 rounded-lg overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-semibold text-lg mb-2 text-black">{product.name}</h3>
                    <p className="text-black text-xl font-bold">${product.price}</p>
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
          </AnimatePresence>
          
          <div className="flex justify-center items-center mt-8 gap-4">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(0, prev - 1))}
              disabled={currentPage === 0}
              className="p-2 rounded-full bg-yellow-400 text-black disabled:opacity-50 disabled:cursor-not-allowed hover:bg-yellow-300 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="text-white">
              Page {currentPage + 1} of {totalPages}
            </div>
            <button
              onClick={() => setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1))}
              disabled={currentPage === totalPages - 1}
              className="p-2 rounded-full bg-yellow-400 text-black disabled:opacity-50 disabled:cursor-not-allowed hover:bg-yellow-300 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
