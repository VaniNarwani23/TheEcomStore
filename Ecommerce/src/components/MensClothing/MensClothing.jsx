import React from "react";
import ProductCard from "../product/ProductCard";
import productsData from "../product/products";

const MensClothing = ({ handleOrderPopup, searchQuery = "", addToCart, toggleWishlist, isWishlisted }) => {
  // Filter products by category and search query
  const filteredProducts = productsData.filter((product) => {
    const categoryMatch = product.category === "men";
    const searchMatch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return categoryMatch && searchMatch;
  });

  return (
    <div>
      {/* Premium Header Banner */}
      <div className="bg-gradient-to-r from-pink-500 to-red-500 dark:from-pink-700 dark:to-red-700 py-12 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-4xl">👔</span>
            <h1 className="text-4xl md:text-5xl font-black text-white">Mens Clothing</h1>
          </div>
          <p className="text-red-100 text-lg">Premium quality clothing for the modern man</p>
          <p className="text-red-100 mt-2 font-semibold">{filteredProducts.length} products available</p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
      {filteredProducts.length === 0 ? (
        <div className="text-center py-20 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border-2 border-dashed border-gray-300 dark:border-gray-600">
          <h3 className="text-2xl font-bold text-gray-600 dark:text-gray-400">
            No products found
          </h3>
          <p className="text-gray-500 dark:text-gray-500 mt-2">
            Try different search terms
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
              toggleWishlist={toggleWishlist}
              isWishlisted={isWishlisted}
            />
          ))}
        </div>
      )}
      </div>
    </div>
  );
};

export default MensClothing;