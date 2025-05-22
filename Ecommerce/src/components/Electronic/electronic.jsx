import React from 'react';
import ProductCard from '../product/ProductCard';
import productsData from '../product/products';
import { motion } from "framer-motion"; 

const Electronics = ({ handleOrderPopup, searchQuery = "" }) => {
  // Filter products by electronics category and search query
  const electronicsProducts = productsData.filter((product) => {
    const categoryMatch = product.category === 'electronics';
    const searchMatch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());

    return categoryMatch && searchMatch;
  });

  return (
    <div className="container mx-auto px-4 py-12">
      {/* 🔹 Centered heading */}
      <h2 className="text-3xl font-bold text-center text-black dark:text-white mb-10">
        Electronic Collection
      </h2>

      {electronicsProducts.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-xl text-gray-600 dark:text-gray-400">
            No products found
          </h3>
          <p className="text-gray-500 dark:text-gray-500 mt-2">
            Try different search terms
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {electronicsProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              handleOrderPopup={handleOrderPopup}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Electronics;
