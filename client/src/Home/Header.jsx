import { useState, useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, User, ShoppingCart, Menu, X, LogOut, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AddToCartContext } from '../Context/AddToCartContext';
import { WishListContext } from '../Context/WishListContext';
import { SearchContext } from '../Context/SearchContext';

const Header = () => {
    const { items } = useContext(AddToCartContext);
    const { wishlistItems } = useContext(WishListContext); // Access wishlist from context
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cart, setCart] = useState([]);
    const { searchTerm, setSearchTerm } = useContext(SearchContext);

    const handleSearch = (e) => {
      setSearchTerm(e.target.value); // Search term ko context ke state me save karo
    };

    const cartItems = [
        { id: 1, name: 'Wireless Earbuds', price: 129.99, image: '/placeholder.svg?height=50&width=50' },
        { id: 2, name: 'Smart Watch', price: 199.99, image: '/placeholder.svg?height=50&width=50' },
        { id: 3, name: 'Bluetooth Speaker', price: 79.99, image: '/placeholder.svg?height=50&width=50' },
    ];

    const navLinks = [
        { id: 1, label: "Home", to: "/" },
        { id: 2, label: "Shop", to: "/shop" },
        { id: 3, label: "About", to: "/about" },
        { id: 4, label: "Contact", to: "/contact" }
    ];

    useEffect(() => {
        const cartData = JSON.parse(localStorage.getItem("addToCart"));
        setCart(cartData);
    }, []);

    return (
        <>
            {/* Free Delivery Banner */}
            <motion.div 
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className="bg-black text-white w-full py-2 fixed top-0 left-0 z-50"
            >
                <div className="container mx-auto flex justify-center items-center">
                    <p className="text-sm font-medium">
                        Get Free Delivery on Shopping Above ₹400
                    </p>
                </div>
            </motion.div>

            {/* Main Header */}
            <header className="bg-white w-full py-4 fixed top-10 left-0 z-40 shadow-md">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between gap-4">
                        {/* Logo */}
                        <a href="/" className="flex-shrink-0">
                            <img
                                src="/Images/logo.png"
                                alt="Logo"
                                width={80}
                                height={40}
                                className="w-20 h-auto"
                            />
                        </a>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-8">
                            {navLinks.map((item) => (
                                <motion.a
                                    key={item.id}
                                    href={item.to}
                                    className="text-black text-lg hover:text-yellow-500 transition-colors relative group"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    {item.label}
                                    <motion.span
                                        className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-500 origin-left"
                                        initial={{ scaleX: 0 }}
                                        whileHover={{ scaleX: 1 }}
                                        transition={{ duration: 0.2 }}
                                    />
                                </motion.a>
                            ))}
                        </nav>

                        {/* Search Bar */}
                        <div className="hidden md:flex flex-1 max-w-md relative">
                            <input
                              value={searchTerm}
                              onChange={handleSearch}
                                type="text"
                                placeholder="Search for products..."
                                className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-yellow-500 transition-colors outline-none"
                            />
                            <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 hover:text-yellow-500 transition-colors">
                                <Search className="w-5 h-5" />
                            </button>
                        </div>

                        {/* User, Wishlist, and Cart */}
                        <div className="flex items-center space-x-6">
                            {/* Wishlist Icon */}
                            <Link to="/wishlist" className="relative p-2 hover:text-yellow-500 transition-colors">
    <Heart className="w-6 h-6" fill="red" />
    {wishlistItems.length > 0 && (
        <span className="absolute -top-0 bottom-0 -right-2 bg-yellow-500 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {wishlistItems.length}
        </span>
    )}
</Link>

                            {/* User Menu */}
                            <div className="relative">
                                <button 
                                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                                    className="p-2 hover:text-yellow-500 transition-colors"
                                >
                                    <User className="w-6 h-6" />
                                </button>
                                
                                <AnimatePresence>
                                    {isUserMenuOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50"
                                        >
                                            <Link to="/Log" className="flex items-center px-4 py-2 text-gray-800 hover:bg-yellow-50">
                                                <User className="w-4 h-4 mr-2" /> LogIn
                                            </Link>
                                            <Link to="/Admin" className="flex items-center px-4 py-2 text-blue-500 hover:bg-yellow-50">
                                                <User className="w-4 h-4 mr-2 text-blue-500" /> Register To Admin
                                            </Link>
                                            <hr className="my-2" />
                                            <button className="flex items-center px-4 py-2 text-red-600 hover:bg-red-50 w-full">
                                                <LogOut className="w-4 h-4 mr-2" />
                                                Logout
                                            </button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Cart */}
                            <div className="flex items-center space-x-6">
                            <Link 
    to="/cart" 
    className="relative p-2 hover:text-yellow-500 transition-colors"
>
    <ShoppingCart className="w-6 h-6 text-yellow-500" />
    {items.length > 0 && (
        <span className="absolute top-0 right-0 bg-yellow-500 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {items.length}
        </span>
    )}
</Link>
                                <AnimatePresence>
                                    {isCartOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-4 z-50"
                                        >
                                            <div className="px-4 py-2 border-b">
                                                <h3 className="font-semibold">Shopping Cart (3)</h3>
                                            </div>
                                            <div className="max-h-80 overflow-auto">
                                                {cartItems.map((item) => (
                                                    <div key={item.id} className="flex items-center gap-4 p-4 hover:bg-gray-50">
                                                        <img
                                                            src={item.image}
                                                            alt={item.name}
                                                            width={50}
                                                            height={50}
                                                            className="rounded-md"
                                                        />
                                                        <div className="flex-1">
                                                            <h4 className="font-medium">{item.name}</h4>
                                                            <p className="text-yellow-500 font-semibold">${item.price}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="p-4 border-t">
                                                <div className="flex justify-between mb-4">
                                                    <span className="font-semibold">Total:</span>
                                                    <span className="font-bold text-yellow-500">$409.97</span>
                                                </div>
                                                <button className="w-full bg-yellow-500 text-black font-semibold py-2 rounded-lg hover:bg-yellow-400 transition-colors">
                                                    Checkout
                                                </button>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Mobile Menu Button */}
                            <button 
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="md:hidden p-2 hover:text-yellow-500 transition-colors"
                            >
                                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Search */}
                <div className="mt-4 md:hidden relative">
                    <input
                        type="text"
                        placeholder="Search for products..."
                        className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-yellow-500 transition-colors outline-none"
                    />
                    <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 hover:text-yellow-500 transition-colors">
                        <Search className="w-5 h-5" />
                    </button>
                </div>
            </header>

            {/* Spacer for fixed header */}
            <div className="h-32" />
        </>
    );
};

export default Header;
