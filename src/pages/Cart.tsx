import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import QuantitySelector from '../components/QuantitySelector';
import { Trash2, Lock } from 'lucide-react';

const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, subtotal } = useCart();
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  
  const discount = promoApplied ? subtotal * 0.1 : 0;
  const shipping = subtotal > 50 ? 0 : 4.99;
  const total = subtotal - discount + shipping;
  
  const handleApplyPromo = () => {
    if (promoCode.toLowerCase() === 'discount10') {
      setPromoApplied(true);
      alert('Promo code applied successfully!');
    } else {
      alert('Invalid promo code.');
    }
  };
  
  const handleProceedToCheckout = () => {
    alert('This would proceed to checkout in a real implementation.');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      
      {cart.length === 0 ? (
        <div className="bg-white p-8 rounded shadow text-center">
          <h2 className="text-xl font-semibold mb-4">Your Amazon Cart is empty</h2>
          <p className="text-gray-600 mb-6">Your shopping cart is waiting. Give it purpose – fill it with groceries, clothing, electronics, and more.</p>
          <a 
            href="/" 
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-6 rounded transition-colors inline-block"
          >
            Continue Shopping
          </a>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded shadow mb-4">
              <div className="p-4 border-b">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold">Shopping Cart</h2>
                  <span className="text-gray-600 text-sm">Price</span>
                </div>
              </div>
              
              {/* Product List */}
              {cart.map((item) => (
                <div key={item.id} className="p-4 border-b last:border-b-0 flex">
                  {/* Product Image */}
                  <div className="w-24 h-24 flex-shrink-0 mr-4">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  {/* Product Details */}
                  <div className="flex-grow">
                    <a 
                      href={`/product/${item.id}`}
                      className="font-medium hover:text-blue-600 transition-colors"
                    >
                      {item.title}
                    </a>
                    
                    <div className="text-sm text-green-700 my-1">In Stock</div>
                    
                    {Math.random() > 0.3 && (
                      <div className="text-xs my-1">
                        <span className="text-blue-600 font-semibold mr-1">Prime</span>
                        FREE delivery tomorrow
                      </div>
                    )}
                    
                    {/* Product actions */}
                    <div className="flex items-center mt-2 space-x-4">
                      <QuantitySelector 
                        quantity={item.quantity} 
                        onChange={(newQuantity) => updateQuantity(item.id, newQuantity)} 
                      />
                      
                      {/* Separator */}
                      <span className="text-gray-300">|</span>
                      
                      {/* Delete button */}
                      <button 
                        onClick={() => removeFromCart(item.id)} 
                        className="text-sm text-blue-600 hover:text-blue-800 hover:underline transition-colors flex items-center"
                      >
                        <Trash2 className="w-4 h-4 mr-1" />
                        Delete
                      </button>
                      
                      {/* Save for later */}
                      <button className="text-sm text-blue-600 hover:text-blue-800 hover:underline transition-colors">
                        Save for later
                      </button>
                    </div>
                  </div>
                  
                  {/* Price */}
                  <div className="text-right font-semibold min-w-24">
                    ${item.price.toFixed(2)}
                  </div>
                </div>
              ))}
              
              {/* Subtotal */}
              <div className="p-4 text-right">
                <div className="text-xl">
                  Subtotal ({cart.reduce((acc, item) => acc + item.quantity, 0)} items): 
                  <span className="font-bold ml-2">${subtotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
            
            {/* Product recommendations would go here */}
            <div className="bg-white p-4 rounded shadow">
              <h3 className="font-bold mb-4">Customers who bought items in your cart also bought</h3>
              <div className="flex space-x-4 overflow-x-auto pb-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="min-w-36">
                    <div className="h-36 bg-gray-100 flex items-center justify-center mb-2">
                      <img 
                        src={`https://source.unsplash.com/random/100x100?product=${i}`} 
                        alt={`Recommended product ${i}`}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <div className="text-xs line-clamp-2 mb-1">Recommended Product with a Longer Title to Show Text Wrapping</div>
                    <div className="text-sm font-bold">${(Math.random() * 100 + 9.99).toFixed(2)}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-4 rounded shadow mb-4">
              <div className="mb-4">
                <button 
                  onClick={handleProceedToCheckout}
                  className="w-full bg-yellow-400 hover:bg-yellow-500 font-medium py-2 rounded transition-colors"
                >
                  Proceed to checkout
                </button>
              </div>
              
              <div className="text-xl mb-4">
                Subtotal ({cart.reduce((acc, item) => acc + item.quantity, 0)} items): 
                <span className="font-bold ml-2">${subtotal.toFixed(2)}</span>
              </div>
              
              {/* Promo code */}
              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <input 
                    type="checkbox" 
                    id="gift" 
                    className="mr-2 accent-orange-400"
                  />
                  <label htmlFor="gift" className="text-sm">This order contains a gift</label>
                </div>
                
                <div className="border-t border-b py-4 my-2">
                  <div className="text-sm font-bold mb-2">Add a promo code</div>
                  <div className="flex">
                    <input 
                      type="text" 
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Enter code"
                      className="border flex-grow p-1.5 text-sm rounded-l focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    <button 
                      onClick={handleApplyPromo}
                      className="bg-gray-200 hover:bg-gray-300 px-3 text-sm rounded-r transition-colors"
                    >
                      Apply
                    </button>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    Try "DISCOUNT10" for 10% off
                  </div>
                </div>
              </div>
              
              {/* Order Summary */}
              <div>
                <h3 className="font-bold mb-2">Order Summary</h3>
                <div className="space-y-1 text-sm mb-3">
                  <div className="flex justify-between">
                    <span>Items ({cart.reduce((acc, item) => acc + item.quantity, 0)}):</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping & handling:</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  
                  {promoApplied && (
                    <div className="flex justify-between text-green-600">
                      <span>Promotion applied:</span>
                      <span>-${discount.toFixed(2)}</span>
                    </div>
                  )}
                </div>
                
                <div className="border-t pt-3">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Order total:</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
                
                <div className="flex items-center mt-4 text-xs text-gray-600 justify-end">
                  <Lock className="w-3 h-3 mr-1" />
                  Secure transaction
                </div>
              </div>
            </div>
            
            {/* Related products recommendations */}
            <div className="bg-white p-4 rounded shadow">
              <h3 className="font-semibold mb-2">You might also like</h3>
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center">
                    <div className="w-16 h-16 bg-gray-100 flex-shrink-0 mr-3">
                      <img 
                        src={`https://source.unsplash.com/random/60x60?product=${i+4}`} 
                        alt={`Recommended product ${i}`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-grow">
                      <div className="text-xs line-clamp-2 hover:text-blue-600 transition-colors cursor-pointer">
                        Popular Product {i} with Amazing Features and Great Reviews
                      </div>
                      <div className="text-sm font-bold">${(Math.random() * 50 + 9.99).toFixed(2)}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;