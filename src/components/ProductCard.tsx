import React from 'react';
import { Product } from '../types';
import { useCart } from '../contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <span key={i} className="text-yellow-400">★</span>
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <span key={i} className="text-yellow-400">⯪</span>
        );
      } else {
        stars.push(
          <span key={i} className="text-gray-300">★</span>
        );
      }
    }
    
    return (
      <div className="flex items-center">
        <div className="flex mr-1">{stars}</div>
        <span className="text-sm text-blue-600">({Math.floor(Math.random() * 500) + 10})</span>
      </div>
    );
  };

  return (
    <div className="bg-white p-4 rounded shadow hover:shadow-md transition-shadow duration-300">
      <div className="group relative">
        {/* Product Image */}
        <a href={`/product/${product.id}`} className="block">
          <div className="h-48 mb-4 overflow-hidden flex items-center justify-center bg-gray-100 p-4">
            <img 
              src={product.image} 
              alt={product.title} 
              className="h-full object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </a>
        
        {/* Quick Add Button - appears on hover */}
        <div className="absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button 
            onClick={() => addToCart(product)}
            className="bg-orange-400 text-black w-full py-2 font-semibold rounded-b hover:bg-orange-500 transition-colors"
          >
            Quick Add
          </button>
        </div>
      </div>
      
      {/* Product Title */}
      <a href={`/product/${product.id}`}>
        <h3 className="font-medium text-sm mb-1 line-clamp-2 h-10 hover:text-blue-600 transition-colors">
          {product.title}
        </h3>
      </a>
      
      {/* Product Rating */}
      <div className="mb-2">
        {renderStars(product.rating)}
      </div>
      
      {/* Product Price */}
      <div className="flex items-baseline mb-2">
        <span className="text-lg font-semibold">${product.price.toFixed(2)}</span>
        {Math.random() > 0.5 && (
          <span className="ml-2 text-xs text-gray-500 line-through">
            ${(product.price * 1.2).toFixed(2)}
          </span>
        )}
      </div>
      
      {/* Prime Delivery - random */}
      {Math.random() > 0.3 && (
        <div className="text-xs text-gray-700">
          <span className="text-blue-600 font-semibold">Prime</span> FREE delivery tomorrow
        </div>
      )}
    </div>
  );
};

export default ProductCard;