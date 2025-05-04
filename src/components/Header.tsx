import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const Header = () => {
  const { cart } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50">
      {/* Top Navigation Bar */}
      <div className="bg-[#131921] text-white p-4">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold mr-4 flex items-center">
            <span className="text-white">amazon</span>
            <span className="text-orange-400">Clone</span>
          </a>

          {/* Search Bar - hidden on mobile */}
          <div className="hidden md:flex flex-1 mx-4 relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full py-2 px-4 rounded-l text-black"
            />
            <button className="bg-orange-400 hover:bg-orange-500 p-2 rounded-r flex items-center justify-center transition-colors">
              <Search className="w-5 h-5 text-gray-800" />
            </button>
          </div>

          {/* Navigation Links - hidden on mobile */}
          <nav className="hidden md:flex items-center space-x-4">
            <a href="/login" className="flex flex-col text-sm hover:text-orange-400 transition-colors">
              <span className="text-xs text-gray-300">Hello, Sign in</span>
              <span className="font-bold">Account & Lists</span>
            </a>
            <a href="/orders" className="flex flex-col text-sm hover:text-orange-400 transition-colors">
              <span className="text-xs text-gray-300">Returns</span>
              <span className="font-bold">& Orders</span>
            </a>
            <a href="/cart" className="flex items-center hover:text-orange-400 transition-colors">
              <div className="relative">
                <ShoppingCart className="w-6 h-6" />
                <span className="absolute -top-2 -right-2 bg-orange-400 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              </div>
              <span className="ml-1 font-bold">Cart</span>
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center space-x-4">
            <a href="/cart" className="relative hover:text-orange-400 transition-colors">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-orange-400 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            </a>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hover:text-orange-400 transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Sub Navigation Bar */}
      <div className="bg-[#232f3e] text-white p-2">
        <div className="container mx-auto flex items-center overflow-x-auto hide-scrollbar">
          <a href="/all" className="whitespace-nowrap px-3 py-1 text-sm hover:bg-gray-700 rounded transition-colors">
            All Products
          </a>
          <a href="/category/electronics" className="whitespace-nowrap px-3 py-1 text-sm hover:bg-gray-700 rounded transition-colors">
            Electronics
          </a>
          <a href="/category/jewelery" className="whitespace-nowrap px-3 py-1 text-sm hover:bg-gray-700 rounded transition-colors">
            Jewelry
          </a>
          <a href="/category/men's clothing" className="whitespace-nowrap px-3 py-1 text-sm hover:bg-gray-700 rounded transition-colors">
            Men's Clothing
          </a>
          <a href="/category/women's clothing" className="whitespace-nowrap px-3 py-1 text-sm hover:bg-gray-700 rounded transition-colors">
            Women's Clothing
          </a>
          <a href="/deals" className="whitespace-nowrap px-3 py-1 text-sm hover:bg-gray-700 rounded transition-colors">
            Today's Deals
          </a>
          <a href="/customer-service" className="whitespace-nowrap px-3 py-1 text-sm hover:bg-gray-700 rounded transition-colors">
            Customer Service
          </a>
        </div>
      </div>

      {/* Mobile Search - Shown only on mobile */}
      <div className="md:hidden bg-[#131921] px-4 pb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full py-2 px-4 rounded-l text-black"
          />
          <button className="absolute right-0 top-0 bottom-0 bg-orange-400 hover:bg-orange-500 p-2 rounded-r flex items-center justify-center transition-colors">
            <Search className="w-5 h-5 text-gray-800" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#232f3e] text-white">
          <div className="p-4 border-t border-gray-700">
            <a href="/login" className="block py-2 hover:text-orange-400 transition-colors">
              Sign In / Register
            </a>
            <a href="/orders" className="block py-2 hover:text-orange-400 transition-colors">
              Returns & Orders
            </a>
            <a href="/prime" className="block py-2 hover:text-orange-400 transition-colors">
              Prime
            </a>
            <a href="/customer-service" className="block py-2 hover:text-orange-400 transition-colors">
              Customer Service
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;