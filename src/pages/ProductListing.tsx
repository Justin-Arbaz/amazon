import React, { useEffect, useState } from 'react';
import { Product } from '../types';
import ProductCard from '../components/ProductCard';
import { fetchProductsByCategory, fetchProducts } from '../utils/api';
import { useParams } from 'react-router-dom';

const ProductListing: React.FC = () => {
  const { category } = useParams<{ category?: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [minRating, setMinRating] = useState(0);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        let fetchedProducts;
        
        if (category) {
          fetchedProducts = await fetchProductsByCategory(category);
        } else {
          fetchedProducts = await fetchProducts();
        }
        
        setProducts(fetchedProducts);
        
        // Find max price for filter range
        if (fetchedProducts.length > 0) {
          const maxPrice = Math.max(...fetchedProducts.map(p => p.price));
          setPriceRange([0, Math.ceil(maxPrice)]);
        }
        
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };
    
    getProducts();
  }, [category]);

  // Filter and sort products
  const filteredProducts = products
    .filter(product => 
      product.price >= priceRange[0] && 
      product.price <= priceRange[1] &&
      product.rating >= minRating
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        default: // 'featured'
          return 0; // Keep original order
      }
    });

  const formatCategoryTitle = (category?: string) => {
    if (!category) return 'All Products';
    
    return category
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-400"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">
        {formatCategoryTitle(category)}
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Filters Sidebar */}
        <div className="bg-white p-4 rounded shadow md:col-span-1">
          <h2 className="font-bold text-lg mb-4">Filters</h2>
          
          {/* Price Filter */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Price Range</h3>
            <div className="flex items-center space-x-2">
              <input
                type="number"
                min="0"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                className="w-20 p-1 border rounded text-sm"
              />
              <span>to</span>
              <input
                type="number"
                min="0"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                className="w-20 p-1 border rounded text-sm"
              />
            </div>
            <div className="mt-2">
              <input
                type="range"
                min="0"
                max={Math.ceil(Math.max(...products.map(p => p.price)))}
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                className="w-full accent-orange-400"
              />
            </div>
          </div>
          
          {/* Rating Filter */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Minimum Rating</h3>
            <div className="space-y-2">
              {[4, 3, 2, 1, 0].map((rating) => (
                <label key={rating} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="rating"
                    checked={minRating === rating}
                    onChange={() => setMinRating(rating)}
                    className="accent-orange-400"
                  />
                  <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
                        ★
                      </span>
                    ))}
                    {rating > 0 && <span className="ml-1 text-sm text-gray-600">& Up</span>}
                  </div>
                </label>
              ))}
            </div>
          </div>
          
          {/* Category filter - only show if on all products page */}
          {!category && (
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/category/electronics" className="text-blue-600 hover:underline">
                    Electronics
                  </a>
                </li>
                <li>
                  <a href="/category/jewelery" className="text-blue-600 hover:underline">
                    Jewelry
                  </a>
                </li>
                <li>
                  <a href="/category/men's clothing" className="text-blue-600 hover:underline">
                    Men's Clothing
                  </a>
                </li>
                <li>
                  <a href="/category/women's clothing" className="text-blue-600 hover:underline">
                    Women's Clothing
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
        
        {/* Products Grid */}
        <div className="md:col-span-3">
          {/* Sort controls */}
          <div className="bg-white p-3 rounded shadow mb-4 flex items-center justify-between">
            <span className="text-sm">
              {filteredProducts.length} results
            </span>
            <div className="flex items-center">
              <span className="text-sm mr-2">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border rounded p-1.5 text-sm"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Avg. Customer Review</option>
              </select>
            </div>
          </div>
          
          {/* Products */}
          {filteredProducts.length === 0 ? (
            <div className="bg-white p-8 rounded shadow text-center">
              <h2 className="text-xl font-semibold mb-2">No products found</h2>
              <p className="text-gray-600">Try adjusting your filters to find what you're looking for.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductListing;