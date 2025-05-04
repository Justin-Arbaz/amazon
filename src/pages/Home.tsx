import React, { useState, useEffect } from 'react';
import Carousel from '../components/Carousel';
import CategorySection from '../components/CategorySection';
import { Product } from '../types';
import { fetchProducts } from '../utils/api';

const Home: React.FC = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [electronics, setElectronics] = useState<Product[]>([]);
  const [jewelry, setJewelry] = useState<Product[]>([]);
  const [mensClothing, setMensClothing] = useState<Product[]>([]);
  const [womensClothing, setWomensClothing] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const products = await fetchProducts();
        
        // Set featured products (random selection)
        const shuffled = [...products].sort(() => 0.5 - Math.random());
        setFeaturedProducts(shuffled.slice(0, 5));
        
        // Set category-specific products
        setElectronics(products.filter(p => p.category === 'electronics').slice(0, 5));
        setJewelry(products.filter(p => p.category === 'jewelery').slice(0, 5));
        setMensClothing(products.filter(p => p.category === "men's clothing").slice(0, 5));
        setWomensClothing(products.filter(p => p.category === "women's clothing").slice(0, 5));
        
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };
    
    getProducts();
  }, []);

  // Carousel images
  const carouselImages = [
    'https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/1005638/pexels-photo-1005638.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/3776166/pexels-photo-3776166.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600'
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-400"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100">
      {/* Hero Carousel */}
      <Carousel images={carouselImages} />
      
      {/* Featured Products */}
      <div className="container mx-auto px-4 -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Shop by category cards */}
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-xl font-bold mb-4">Shop by Category</h2>
            <div className="grid grid-cols-2 gap-4">
              <a 
                href="/category/electronics" 
                className="bg-gray-100 p-3 rounded hover:bg-gray-200 transition-colors text-center"
              >
                <div className="h-16 flex items-center justify-center mb-2">
                  <img 
                    src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400" 
                    alt="Electronics" 
                    className="h-full object-contain"
                  />
                </div>
                <span className="text-sm font-medium">Electronics</span>
              </a>
              <a 
                href="/category/jewelery" 
                className="bg-gray-100 p-3 rounded hover:bg-gray-200 transition-colors text-center"
              >
                <div className="h-16 flex items-center justify-center mb-2">
                  <img 
                    src="https://images.pexels.com/photos/234798/pexels-photo-234798.jpeg?auto=compress&cs=tinysrgb&w=400" 
                    alt="Jewelry" 
                    className="h-full object-contain"
                  />
                </div>
                <span className="text-sm font-medium">Jewelry</span>
              </a>
              <a 
                href="/category/men's clothing" 
                className="bg-gray-100 p-3 rounded hover:bg-gray-200 transition-colors text-center"
              >
                <div className="h-16 flex items-center justify-center mb-2">
                  <img 
                    src="https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=400" 
                    alt="Men's Clothing" 
                    className="h-full object-contain"
                  />
                </div>
                <span className="text-sm font-medium">Men's</span>
              </a>
              <a 
                href="/category/women's clothing" 
                className="bg-gray-100 p-3 rounded hover:bg-gray-200 transition-colors text-center"
              >
                <div className="h-16 flex items-center justify-center mb-2">
                  <img 
                    src="https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=400" 
                    alt="Women's Clothing" 
                    className="h-full object-contain"
                  />
                </div>
                <span className="text-sm font-medium">Women's</span>
              </a>
            </div>
            <a 
              href="/all" 
              className="mt-4 text-blue-600 hover:text-blue-800 hover:underline text-sm font-medium block text-center"
            >
              Shop all categories
            </a>
          </div>
          
          {/* Sign in card */}
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-xl font-bold mb-4">Sign in for the best experience</h2>
            <a 
              href="/login" 
              className="bg-yellow-400 hover:bg-yellow-500 text-center py-2 px-4 rounded w-full block mb-4 font-medium transition-colors"
            >
              Sign in securely
            </a>
            <a 
              href="/register" 
              className="text-blue-600 hover:text-blue-800 hover:underline text-sm font-medium"
            >
              New customer? Start here
            </a>
          </div>
          
          {/* Deals card */}
          <div className="bg-white p-6 rounded shadow-md md:col-span-1 lg:col-span-2">
            <h2 className="text-xl font-bold mb-4">Today's Deals</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {featuredProducts.slice(0, 4).map((product) => (
                <a 
                  key={product.id} 
                  href={`/product/${product.id}`}
                  className="group"
                >
                  <div className="bg-gray-100 p-2 rounded flex items-center justify-center h-24 mb-2">
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="h-full object-contain group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="text-xs text-red-600 font-bold mb-1">
                    Up to {Math.floor(Math.random() * 60) + 20}% off
                  </div>
                  <div className="text-xs line-clamp-1">{product.title}</div>
                </a>
              ))}
            </div>
            <a 
              href="/deals" 
              className="mt-4 text-blue-600 hover:text-blue-800 hover:underline text-sm font-medium block text-right"
            >
              See all deals
            </a>
          </div>
        </div>
      </div>
      
      {/* Category Sections */}
      <CategorySection 
        title="Top Deals in Electronics" 
        products={electronics}
        viewAllUrl="/category/electronics"
      />
      
      <CategorySection 
        title="Jewelry & Watches" 
        products={jewelry}
        viewAllUrl="/category/jewelery"
      />
      
      <CategorySection 
        title="Men's Fashion" 
        products={mensClothing}
        viewAllUrl="/category/men's clothing"
      />
      
      <CategorySection 
        title="Women's Fashion" 
        products={womensClothing}
        viewAllUrl="/category/women's clothing"
      />
    </div>
  );
};

export default Home;