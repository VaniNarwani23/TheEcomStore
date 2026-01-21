import React from 'react';
import productsData from '../product/products';
import ProductCard from '../product/ProductCard';
import { Link } from 'react-router-dom';
import { FaHeart, FaArrowRight } from 'react-icons/fa6';

const Wishlist = ({ wishlistIds = [], addToCart, toggleWishlist, isWishlisted, searchQuery = '' }) => {
  const items = productsData.filter(p => wishlistIds.includes(p.id)).filter(p =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-red-500 to-pink-500 dark:from-red-700 dark:to-pink-700 py-8 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-2">
            <FaHeart className="text-3xl text-white" />
            <h1 className="text-4xl font-bold text-white">My Wishlist</h1>
          </div>
          <p className="text-red-50 text-lg">
            {items.length} {items.length === 1 ? 'item' : 'items'} saved
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {items.length === 0 ? (
          <div className="max-w-2xl mx-auto">
            {/* Empty State */}
            <div className="text-center py-20 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border-2 border-dashed border-gray-200 dark:border-gray-700">
              <div className="w-32 h-32 bg-gradient-to-br from-red-100 to-pink-100 dark:from-red-900/30 dark:to-pink-900/30 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                <span className="text-6xl">♥</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">Your Wishlist is Empty</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-2 text-lg">
                Save your favorite items by clicking the heart icon
              </p>
              <p className="text-gray-500 dark:text-gray-500 mb-8">
                Start adding products to your wishlist to keep track of items you love!
              </p>
              <Link 
                to="/" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-600"
              >
                <span>Continue Shopping</span>
                <FaArrowRight />
              </Link>
            </div>
          </div>
        ) : (
          <>
            {/* Wishlist Summary */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 mb-8 shadow-md border border-gray-200 dark:border-gray-700">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Total Items in Wishlist</p>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{items.length}</h2>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      wishlistIds.forEach(id => {
                        const product = productsData.find(p => p.id === id);
                        if (product) addToCart(product, 1);
                      });
                    }}
                    className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg"
                  >
                    Add All to Cart
                  </button>
                </div>
              </div>
            </div>

            {/* Products Grid - Amazon Style */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
              {items.map((product, index) => (
                <div key={product.id} style={{ animationDelay: `${index * 50}ms` }} className="animate-fadeIn">
                  <ProductCard
                    product={product}
                    addToCart={addToCart}
                    toggleWishlist={toggleWishlist}
                    isWishlisted={isWishlisted}
                  />
                </div>
              ))}
            </div>

            {/* Footer CTA */}
            <div className="bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-xl p-8 text-center border border-purple-200 dark:border-purple-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Continue Shopping?
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Browse our collections and find more products you love
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/" 
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg"
                >
                  <span>Browse All Products</span>
                  <FaArrowRight />
                </Link>
                <Link 
                  to="/cart" 
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg"
                >
                  <span>Go to Cart</span>
                  <FaArrowRight />
                </Link>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Add fadeIn animation */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Wishlist;


