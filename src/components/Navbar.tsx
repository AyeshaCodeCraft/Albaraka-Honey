
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartProvider";
import Cart from "./Cart";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { cart } = useCart();

  return (
    <header className="w-full flex justify-center font-poppins relative z-30">
      <div className="w-full max-w-[1200px] px-6 py-4 flex items-center justify-between md:bg-[#F2EEE6] md:rounded-[70px]">
        {/* Logo */}
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <img src="/logo.png" alt="Logo" className="h-8 w-auto md:h-10 cursor-pointer" />
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex space-x-[50px] text-lg font-medium text-[#302A25]">
          <Link to="/" className="hover:text-amber-700">Home</Link>
          <Link to="/about-us" className="hover:text-amber-700">About Us</Link>
          <Link to="/shop" className="hover:text-amber-700">Shop</Link>
          <Link to="/contact-us" className="hover:text-amber-700">Contact Us</Link>
        </nav>

        {/* Right Side */}
        <div className="flex items-center space-x-4 relative">
          {/* Cart Icon */}
          <div className="relative">
            <img
              src="/nav-cart.png"
              alt="Cart"
              className="h-6 w-7 cursor-pointer"
              onClick={() => setCartOpen(true)}
            />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#302A25] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            <img src="/menu.png" alt="Menu" className="h-[28px] w-[28px]" />
          </button>
        </div>
      </div>

      {/* Cart Overlay */}
      <Cart isOpen={cartOpen} onClose={() => setCartOpen(false)} />

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center space-y-8 text-2xl font-semibold text-gray-800 md:hidden">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-gray-600 text-3xl"
          >
            ✕
          </button>
          <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-amber-700">Home</Link>
          <Link to="/about-us" onClick={() => setMenuOpen(false)} className="hover:text-amber-700">About Us</Link>
          <Link to="/shop" onClick={() => setMenuOpen(false)} className="hover:text-amber-700">Shop</Link>
          <Link to="/contact-us" onClick={() => setMenuOpen(false)} className="hover:text-amber-700">Contact Us</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
