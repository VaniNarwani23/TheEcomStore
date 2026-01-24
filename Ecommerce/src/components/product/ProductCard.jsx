import { Link } from 'react-router-dom';
import RatingStars from '../common/RatingStars';
import { FaHeart, FaShoppingCart, FaEye, FaTruck, FaShieldAlt, FaCheckCircle } from 'react-icons/fa';

const ProductCard = ({ product, addToCart, toggleWishlist, isWishlisted }) => {
  // Handle cases where product data might be incomplete
  const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop";
  const isInvalidImage = !product.image || /(^$|example\.com\/images\/)/.test(product.image);
  const productImage = isInvalidImage ? FALLBACK_IMAGE : product.image;
  const productPrice = product.price || 0;
  const originalPrice = product.originalPrice || productPrice;
  const isOnSale = product.onSale && originalPrice > productPrice;
  const discountPercentage = isOnSale ? Math.round((1 - productPrice / originalPrice) * 100) : 0;
  const savingAmount = originalPrice - productPrice;

  return (
    <div className="group relative bg-white dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-500 hover:shadow-2xl shadow-lg border border-gray-100 dark:border-gray-700 transform hover:-translate-y-3 hover:scale-105">
      
      {/* Image Container with Overlay */}
      <Link to={`/products/${product.id}`} className="relative block overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800">
        <div className="relative pb-[100%] overflow-hidden">
          {/* Image */}
          <img 
            className="absolute h-full w-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out" 
            src={productImage} 
            alt={product.name} 
            loading="lazy"
            onError={(e) => { e.currentTarget.src = FALLBACK_IMAGE; e.currentTarget.onerror = null; }}
          />
          
          {/* Dark Overlay on Hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
          
          {/* Premium Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
            {isOnSale && (
              <div className="bg-gradient-to-r from-red-600 to-red-500 text-white text-xs font-black px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm animate-pulse-subtle">
                -{discountPercentage}% OFF
              </div>
            )}
            {product.isTopRated && (
              <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-white text-xs font-black px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1 backdrop-blur-sm">
                <span>⭐</span> TOP RATED
              </div>
            )}
            {product.trending && (
              <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white text-xs font-black px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1 backdrop-blur-sm">
                <span>🔥</span> TRENDING
              </div>
            )}
            {product.inStock === false && (
              <div className="bg-gray-600 text-white text-xs font-black px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm">
                OUT OF STOCK
              </div>
            )}
          </div>

          {/* Quick Actions - Premium Style */}
          <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleWishlist && toggleWishlist(product.id);
              }}
              className={`p-3 rounded-full shadow-lg transition-all duration-300 backdrop-blur-sm transform hover:scale-110 ${
                isWishlisted && isWishlisted(product.id) 
                  ? 'bg-red-500 text-white hover:bg-red-600 shadow-red-500/50' 
                  : 'bg-white/90 text-gray-700 hover:bg-white'
              }`}
              title={isWishlisted && isWishlisted(product.id) ? 'Remove from wishlist' : 'Add to wishlist'}
            >
              <FaHeart className="w-4 h-4" />
            </button>
            
            <Link
              to={`/products/${product.id}`}
              className="p-3 bg-white/90 text-gray-700 rounded-full shadow-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-110 backdrop-blur-sm"
              title="View details"
            >
              <FaEye className="w-4 h-4" />
            </Link>
          </div>

          {/* Stock Indicator Bar */}
          {product.stock && (
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200">
              <div 
                className="h-full bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-300"
                style={{ width: `${Math.min((product.stock / 100) * 100, 100)}%` }}
              ></div>
            </div>
          )}
        </div>
      </Link>
      
      {/* Content Section */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Category Badge */}
        <div className="text-xs text-gray-600 dark:text-gray-400 font-medium mb-2 uppercase tracking-wide bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded w-fit">
          {product.category}
        </div>
        
        {/* Product Name */}
        <Link to={`/products/${product.id}`} className="flex-grow">
          <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors line-clamp-2 leading-snug">
            {product.name}
          </h3>
        </Link>
        
        {/* Rating Section - Enhanced */}
        <div className="flex items-center gap-2 mb-3 pb-3 border-b border-gray-100 dark:border-gray-700">
          <RatingStars rating={product.rating || 0} size={14} />
          <span className="text-xs text-gray-600 dark:text-gray-400 font-semibold bg-gray-50 dark:bg-gray-700 px-2 py-0.5 rounded-full">
            {product.reviews ? product.reviews.toLocaleString() : 0}
          </span>
        </div>
        
        {/* Price Section - Professional Layout */}
        <div className="mb-4 bg-gray-50 dark:bg-gray-800 rounded-md p-3">
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-2xl font-black text-gray-900 dark:text-white">
              ₹{productPrice.toLocaleString()}
            </span>
            {isOnSale && (
              <span className="text-sm text-gray-500 dark:text-gray-400 line-through font-semibold">
                ₹{originalPrice.toLocaleString()}
              </span>
            )}
          </div>
          
          {isOnSale && (
            <div className="text-xs text-green-600 dark:text-green-400 font-bold flex items-center gap-1">
              <FaCheckCircle className="w-3 h-3" />
              Save ₹{savingAmount.toLocaleString()}
            </div>
          )}
        </div>
        
        {/* Features - Trust Indicators */}
        <div className="flex items-center gap-2 mb-4 text-xs text-gray-600 dark:text-gray-400 flex-wrap">
          <div className="flex items-center gap-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded font-medium">
            <FaTruck className="w-3 h-3" />
            Free Delivery
          </div>
          <div className="flex items-center gap-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded font-medium">
            <FaShieldAlt className="w-3 h-3" />
            Secure
          </div>
        </div>
        
        {/* Action Button - Premium */}
        <div className="mt-auto">
          <button
            onClick={() => addToCart && addToCart(product)}
            disabled={!addToCart}
            className={`w-full py-2.5 px-4 rounded-md font-medium transition-colors duration-200 flex items-center justify-center gap-2 text-sm ${
              addToCart 
                ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-sm hover:shadow-md' 
                : 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-300 cursor-not-allowed'
            }`}
          >
            <FaShoppingCart className="w-4 h-4" />
            {addToCart ? 'Add to Cart' : 'Unavailable'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;