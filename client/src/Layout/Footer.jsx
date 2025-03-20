import { motion } from "framer-motion"
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-200 text-black">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-4 text-yellow-400">About Us</h3>
            <p className="text-black">
              Sentio Commerce is your one-stop shop for all your electronic needs. We provide high-quality products at competitive prices.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Quick Links</h3>
            <ul className="space-y-2">
            <li>
                <a href="/" className="text-black hover:text-yellow-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/shop" className="text-black hover:text-yellow-400 transition-colors">
                  Shop
                </a>
              </li>
              <li>
                <a href="/about" className="text-black hover:text-yellow-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-black hover:text-yellow-400 transition-colors">
                  Contact
                </a>
              </li>
              
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Contact Info</h3>
            <ul className="space-y-2 text-black">
              <li>Email: info@sentio.com</li>
              <li>Phone: (123) 456-7890</li>
              <li>Address: 123 Commerce St</li>
              <li>City, State 12345</li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-black hover:text-yellow-400 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-black hover:text-yellow-400 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-black hover:text-yellow-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-black hover:text-yellow-400 transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-8 pt-8 border-t border-gray-800 text-center text-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>&copy; {new Date().getFullYear()} Sentio Commerce. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
