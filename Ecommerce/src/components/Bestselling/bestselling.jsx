import React from 'react';
import ProductCard from '../product/ProductCard';
import productsData from '../product/products';

const BestSelling = ({ handleOrderPopup, searchQuery = "", addToCart, toggleWishlist, isWishlisted }) => {
  const filteredProducts = productsData.filter((product) => {
    return (
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const bestSellingProducts = [...filteredProducts]
    .sort((a, b) => b.reviews - a.reviews)
    .slice(0, 12);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
          Best Selling Products
        </h1>
        <p className="text-1xl text-gray-600 dark:text-gray-400">
          Our most popular items
        </p>
      </div>

      {bestSellingProducts.length === 0 ? (
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
          {bestSellingProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              showBestSellerBadge={true}
              addToCart={addToCart}
              toggleWishlist={toggleWishlist}
              isWishlisted={isWishlisted}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default BestSelling;
