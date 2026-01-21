import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaFire, FaStar, FaTruck, FaShieldAlt, FaHeadset, FaClock, FaTag, FaBolt, FaLeaf, FaTrophy } from 'react-icons/fa';

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const featuredProducts = [
    {
      id: 1,
      name: "iPhone 15 Pro Max",
      price: 149999,
      originalPrice: 159999,
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop",
      rating: 4.9,
      reviews: 1256,
      discount: 6
    },
    {
      id: 2,
      name: "MacBook Air M2",
      price: 114999,
      originalPrice: 129999,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
      rating: 4.9,
      reviews: 1567,
      discount: 12
    },
    {
      id: 3,
      name: "Sony Headphones",
      price: 24999,
      originalPrice: 34999,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 2847,
      discount: 29
    },
    {
      id: 4,
      name: "Nike Running Shoes",
      price: 8999,
      originalPrice: 11999,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 3421,
      discount: 25
    }
  ];

  const deals = [
    {
      id: 1,
      name: "Flash Sale",
      description: "Up to 70% off",
      timeLeft: "2:45:30",
      color: "from-red-500 to-pink-500"
    },
    {
      id: 2,
      name: "Deal of the Day",
      description: "Limited time offer",
      timeLeft: "5:20:15",
      color: "from-orange-500 to-red-500"
    },
    {
      id: 3,
      name: "Clearance",
      description: "Final sale items",
      timeLeft: "1:30:45",
      color: "from-purple-500 to-blue-500"
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Featured Products Section */}
      <section className="py-12 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column - Featured Products */}
            <div className="lg:w-2/3">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Featured Products</h2>
                <Link 
                  to="/products" 
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium flex items-center gap-2"
                >
                  View All
                  <FaArrowRight className="w-4 h-4" />
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredProducts.map((product) => (
                  <div key={product.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-4 hover:shadow-lg transition-shadow duration-200">
                    <div className="flex gap-4">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900 dark:text-white text-sm mb-2 line-clamp-2">
                          {product.name}
                        </h3>
                        <div className="flex items-center gap-2 mb-2">
                          <FaStar className="text-yellow-400 text-sm" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {product.rating} ({product.reviews.toLocaleString()})
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold text-gray-900 dark:text-white">
                            ₹{product.price.toLocaleString()}
                          </span>
                          <span className="text-sm text-gray-500 line-through">
                            ₹{product.originalPrice.toLocaleString()}
                          </span>
                          <span className="text-xs bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 px-2 py-1 rounded">
                            -{product.discount}%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Deals & Categories */}
            <div className="lg:w-1/3">
              {/* Deals Section */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <FaFire className="text-red-500" />
                  Hot Deals
                </h3>
                
                <div className="space-y-3">
                  {deals.map((deal) => (
                    <div key={deal.id} className={`bg-gradient-to-r ${deal.color} rounded-lg p-4 text-white`}>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">{deal.name}</h4>
                        <FaTag className="text-yellow-300" />
                      </div>
                      <p className="text-sm text-white/90 mb-3">{deal.description}</p>
                      <div className="flex items-center gap-2 text-sm">
                        <FaClock className="text-yellow-300" />
                        <span>Ends in: {deal.timeLeft}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Categories - Synced with Navbar */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Shop by Category</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { name: 'Top Rated', icon: '⭐', link: '/top-rated', color: 'bg-yellow-500' },
                    { name: 'Kids', icon: '👶', link: '/kids', color: 'bg-pink-500' },
                    { name: 'Mens Clothing', icon: '👔', link: '/mens-clothing', color: 'bg-blue-600' },
                    { name: 'Womens Clothing', icon: '👗', link: '/womens-clothing', color: 'bg-red-500' },
                    { name: 'Electronics', icon: '📱', link: '/electronic', color: 'bg-purple-600' },
                    { name: 'Trending', icon: '🔥', link: '/trending', color: 'bg-orange-500' }
                  ].map((category, index) => (
                    <Link
                      key={index}
                      to={category.link}
                      className="group bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl p-4 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-gray-200 dark:border-gray-600"
                    >
                      <div className={`w-14 h-14 mx-auto mb-3 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center text-2xl group-hover:scale-125 transition-transform duration-300 shadow-lg`}>
                        {category.icon}
                      </div>
                      <h4 className="text-xs font-bold text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors uppercase tracking-wider">
                        {category.name}
                      </h4>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Features */}
      <section className="py-8 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: FaTruck, title: 'Free Shipping', desc: 'On orders over ₹999' },
              { icon: FaShieldAlt, title: 'Secure Payment', desc: '100% secure checkout' },
              { icon: FaHeadset, title: '24/7 Support', desc: 'Get help anytime' }
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <feature.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
