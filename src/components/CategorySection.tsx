import React from 'react';
import { Product } from '../types';
import ProductCard from './ProductCard';

interface CategorySectionProps {
  title: string;
  products: Product[];
  viewAllUrl?: string;
}

const CategorySection: React.FC<CategorySectionProps> = ({
  title,
  products,
  viewAllUrl,
}) => {
  return (
    <section className="my-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
          {viewAllUrl && (
            <a 
              href={viewAllUrl}
              className="text-blue-600 hover:text-blue-800 hover:underline text-sm font-medium transition-colors"
            >
              View all
            </a>
          )}
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;