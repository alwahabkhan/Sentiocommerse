import { Routes, Route } from "react-router-dom";
import { Home, About, Contact, Shop } from "./pages";
import SignIn from "./pages/Sign";
import LogIn from "./pages/Log";
import Wish from "./pages/Wish";
import Cart from "./pages/Cart";
// Import Slick Carousel CSS globally (if using in multiple components)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductDetail from "./pages/ProductDetail";
import AddtoCart from "./pages/AddtoCart";
import { CartProvider } from './pages/CartContext'; // Import the CartProvider
import { AddToCartProvider } from "./Context/AddToCartContext";
import { WishListProvider } from "./Context/WishListContext";
import { SearchProvider } from "./Context/SearchContext";
import CheckoutPage from "./pages/CheckoutPage";
import Admin from "./pages/AdminAccount";
import AdminDashboard from "./pages/Dashboard";
import AdminLogin from "./pages/AdminLogin";
function App() {
  return (
    <>
    <AddToCartProvider>
    <WishListProvider>
    <CartProvider>
      <SearchProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/log" element={<LogIn />} />
        <Route path="/sign" element={<SignIn />} />
        <Route path="/wishlist" element={<Wish />} /> {/* Wishlist Page */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/AddtoCart" element={<AddtoCart />} />
          <Route path="/checkout" element={<CheckoutPage />} /> {/* Checkout page */}
          <Route path="/admin" element={<Admin/>}/>
            <Route path="/dashboard" element={<AdminDashboard/>}/>
            <Route path="/adminlogin" element={<AdminLogin/>}/>
      </Routes>
      </SearchProvider>
      </CartProvider>
      </WishListProvider>
      </AddToCartProvider>
    </>
  );
}

export default App;

