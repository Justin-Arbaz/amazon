import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById, fetchProductsByCategory } from '../utils/api';
import { Product } from '../types';
import QuantitySelector from '../components/QuantitySelector';
import { useCart } from '../contexts/CartContext';
import { ShoppingCart, Package, Shield, Truck, Heart } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const getProduct = async () => {
      if (!id) return;
      
      setLoading(true);
      try {
        const fetchedProduct = await fetchProductById(id);
        setProduct(fetchedProduct);
        setSelectedImage(fetchedProduct.image);
        
        // Get related products from the same category
        const categoryProducts = await fetchProductsByCategory(fetchedProduct.category);
        setRelatedProducts(
          categoryProducts.filter(p => p.id !== fetchedProduct.id).slice(0, 4)
        );
        
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product:', error);
        setLoading(false);
      }
    };
    
    getProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
      alert('Product added to cart!');
    }
  };

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
        <span className="text-sm text-blue-600 mr-2">{Math.floor(Math.random() * 500) + 10} ratings</span>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-400"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <p>Sorry, we couldn't find the product you're looking for.</p>
        <a href="/" className="text-blue-600 hover:underline mt-4 inline-block">
          Return to homepage
        </a>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Product Detail Section */}
      <div className="bg-white p-4 md:p-6 rounded shadow mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Product Images */}
          <div className="md:col-span-1">
            <div className="bg-white p-4 rounded flex items-center justify-center h-72 sm:h-80 md:h-96 mb-4">
              <img 
                src={selectedImage} 
                alt={product.title} 
                className="max-h-full max-w-full object-contain hover:scale-105 transition-transform cursor-zoom-in"
              />
            </div>
            
            {/* Thumbnail images (multiple product images would go here - using the same image as a demo) */}
            <div className="flex space-x-2 justify-center">
              {[product.image, product.image, product.image].map((img, index) => (
                <div 
                  key={index}
                  onClick={() => setSelectedImage(img)}
                  className={`border-2 rounded p-1 cursor-pointer w-16 h-16 flex items-center justify-center ${
                    selectedImage === img ? 'border-orange-400' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img 
                    src={img} 
                    alt={`Thumbnail ${index + 1}`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Product Info */}
          <div className="md:col-span-1">
            <nav className="text-sm text-gray-500 mb-2">
              <ol className="flex flex-wrap items-center">
                <li>
                  <a href="/" className="hover:text-orange-400 transition-colors">Home</a>
                </li>
                <li className="mx-2">/</li>
                <li>
                  <a href={`/category/${product.category}`} className="hover:text-orange-400 transition-colors">
                    {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                  </a>
                </li>
              </ol>
            </nav>
            
            <h1 className="text-xl sm:text-2xl font-medium mb-2">{product.title}</h1>
            
            <div className="mb-4">
              {renderStars(product.rating)}
            </div>
            
            <div className="border-t border-b py-4 mb-4">
              <div className="flex items-baseline mb-2">
                <span className="text-red-600 text-2xl font-medium">${product.price.toFixed(2)}</span>
                {Math.random() > 0.5 && (
                  <span className="ml-2 text-sm text-gray-500 line-through">
                    ${(product.price * 1.2).toFixed(2)}
                  </span>
                )}
              </div>
              
              {Math.random() > 0.3 && (
                <div className="text-green-600 text-sm mb-2">
                  In Stock - Only {Math.floor(Math.random() * 10) + 2} left
                </div>
              )}
              
              {/* Prime Delivery */}
              <div className="flex items-center text-xs my-2">
                <span className="text-blue-600 font-semibold">Prime</span> 
                <span className="ml-1">FREE delivery tomorrow</span>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="font-semibold mb-2">About this item:</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>
          
          {/* Buy Box */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="border rounded p-4">
              <div className="text-xl font-semibold mb-4">${product.price.toFixed(2)}</div>
              
              {/* Delivery info */}
              <div className="text-sm mb-4">
                <div className="text-green-700 font-medium mb-1">
                  FREE delivery: <span className="font-bold">Tomorrow</span>
                </div>
                <div>
                  Order within <span className="text-green-700 font-medium">
                    {new Date().getHours() % 12} hrs {new Date().getMinutes()} mins
                  </span>
                </div>
                <div className="flex items-center mt-2">
                  <Truck className="w-4 h-4 mr-1 text-gray-600" />
                  <span>Delivers to Your Location</span>
                </div>
              </div>
              
              <div className="text-green-700 text-lg font-medium mb-4">
                In Stock
              </div>
              
              {/* Quantity selector */}
              <div className="mb-4">
                <label className="block mb-1 text-sm">Quantity:</label>
                <QuantitySelector 
                  quantity={quantity} 
                  onChange={setQuantity} 
                />
              </div>
              
              {/* Buy buttons */}
              <div className="space-y-2">
                <button 
                  onClick={handleAddToCart}
                  className="w-full bg-yellow-400 hover:bg-yellow-500 py-2 px-4 rounded-full font-medium transition-colors"
                >
                  Add to Cart
                </button>
                <button className="w-full bg-orange-400 hover:bg-orange-500 py-2 px-4 rounded-full font-medium transition-colors">
                  Buy Now
                </button>
              </div>
              
              {/* Secure transaction */}
              <div className="flex items-center mt-4 text-xs text-gray-600">
                <Shield className="w-4 h-4 mr-1" />
                Secure transaction
              </div>
              
              {/* Wishlist */}
              <button className="w-full mt-4 text-sm text-left flex items-center hover:text-orange-500 transition-colors">
                <Heart className="w-4 h-4 mr-1" />
                Add to Wish List
              </button>
            </div>
            
            <div className="mt-4 border rounded p-4">
              <div className="flex items-center text-sm mb-3">
                <Package className="w-4 h-4 mr-2 text-gray-600" />
                <span className="font-medium">Returns:</span>
                <span className="ml-1">Eligible for Return, Refund or Replacement</span>
              </div>
              <div className="flex items-center text-sm">
                <Truck className="w-4 h-4 mr-2 text-gray-600" />
                <span className="font-medium">Shipping:</span>
                <span className="ml-1">FREE 2-day shipping</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Customer Reviews Section */}
      <div className="bg-white p-6 rounded shadow mb-8">
        <h2 className="text-xl font-bold mb-4">Customer Reviews</h2>
        
        {/* Review stats */}
        <div className="flex flex-wrap gap-8 mb-6">
          <div>
            <div className="flex items-center mb-2">
              {renderStars(product.rating)}
              <span className="font-medium ml-2">{product.rating.toFixed(1)} out of 5</span>
            </div>
            <div className="text-sm text-gray-600">{Math.floor(Math.random() * 500) + 10} global ratings</div>
          </div>
          
          <div className="flex-1 max-w-md">
            {[5, 4, 3, 2, 1].map((star) => {
              const percentage = star === Math.round(product.rating) 
                ? 65 
                : Math.max(5, Math.min(95, Math.floor(Math.random() * 30)));
              
              return (
                <div key={star} className="flex items-center mb-1">
                  <a href="#" className="text-sm text-blue-600 hover:underline mr-2 w-8">
                    {star} star
                  </a>
                  <div className="h-4 bg-gray-200 rounded flex-1">
                    <div 
                      className="h-4 bg-yellow-400 rounded" 
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-blue-600 hover:underline ml-2 w-8">
                    {percentage}%
                  </span>
                </div>
              );
            })}
          </div>
          
          <div>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded transition-colors">
              Write a customer review
            </button>
          </div>
        </div>
        
        {/* Individual reviews */}
        <div className="border-t pt-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="mb-6 pb-6 border-b last:border-b-0">
              <div className="flex items-center mb-2">
                <div className="font-medium mr-2">Customer {i}</div>
                {renderStars(Math.max(3, Math.min(5, product.rating + (Math.random() - 0.5))))}
              </div>
              <h4 className="font-semibold mb-2">
                {["Great product!", "Worth the money", "Exactly as described"][i-1]}
              </h4>
              <div className="text-sm text-gray-600 mb-2">
                Reviewed on {new Date(Date.now() - i * 86400000).toLocaleDateString()}
              </div>
              <p className="text-sm mb-2">
                {["I love this product! It exceeded my expectations and the quality is outstanding. Would definitely recommend to others looking for this type of item.",
                  "This product is exactly what I needed. The price is reasonable for the quality you get. Fast shipping too!",
                  "Works just as described. Good value for the price and seems durable. The only minor issue is that it took a bit longer to arrive than expected."][i-1]}
              </p>
              <div className="text-sm text-gray-600">
                {Math.floor(Math.random() * 50) + 5} people found this helpful
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;