import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#131921] text-white mt-8">
      {/* Back to top button */}
      <div className="bg-[#232f3e] py-3 text-center cursor-pointer hover:bg-[#37475a] transition-colors">
        <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          Back to top
        </button>
      </div>
      
      {/* Footer Links */}
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          <div>
            <h3 className="font-bold mb-3">Get to Know Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Sustainability</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Press Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Investor Relations</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-3">Make Money with Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Sell products</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Become an Affiliate</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Advertise Your Products</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Self-Publish</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Host an Amazon Hub</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-3">Payment Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Business Card</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Shop with Points</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Reload Your Balance</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Currency Converter</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Gift Cards</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-3">Let Us Help You</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Your Account</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Your Orders</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Shipping Rates & Policies</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Returns & Replacements</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Help</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="border-t border-gray-700 py-6">
        <div className="container mx-auto px-4 text-center">
          <a href="/" className="text-2xl font-bold mb-4 inline-block">
            <span className="text-white">amazon</span>
            <span className="text-orange-400">Clone</span>
          </a>
          <p className="text-xs text-gray-400 mt-2">
            &copy; {new Date().getFullYear()} Amazon Clone. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <a href="#" className="text-xs text-gray-400 hover:text-white">Conditions of Use</a>
            <a href="#" className="text-xs text-gray-400 hover:text-white">Privacy Notice</a>
            <a href="#" className="text-xs text-gray-400 hover:text-white">Interest-Based Ads</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;