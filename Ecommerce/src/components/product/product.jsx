import React, { useState } from "react";
import ProductCard from "./ProductCard";

const productsData = [
  // Electronics
     {
    id: 1,
    name: "Sony WH-1000XM4 Wireless Noise Cancelling Headphones",
    category: "electronics",
    price: 24999,
    originalPrice: 34999,
    rating: 4.8,
    reviews: 2847,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    onSale: true,
    trending: true,
    isTopRated: true,
    description: "Industry-leading noise canceling with Dual Noise Sensor technology. Up to 30-hour battery life with quick charge (10 min charge for 5 hours of playback). Touch controls with voice assistant support."
  },
  {
    id: 2,
    name: "Apple iPhone 15 Pro Max - 256GB",
    category: "electronics",
    price: 149999,
    originalPrice: 159999,
    rating: 4.9,
    reviews: 1256,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&h=500&fit=crop",
    onSale: true,
    trending: true,
    isTopRated: true,
    description: "A17 Pro chip with 6-core GPU. Pro camera system with 48MP Main camera. Titanium design with Ceramic Shield front. USB-C connector."
  },
  {
    id: 3,
    name: "Samsung 65\" QLED 4K Smart TV",
    category: "electronics",
    price: 89999,
    originalPrice: 119999,
    rating: 4.7,
    reviews: 892,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500&h=500&fit=crop",
    onSale: true,
    trending: false,
    isTopRated: false,
    description: "Quantum HDR, Dual LED, Quantum Processor 4K. Alexa Built-in. 4K UHD Resolution. Smart TV with Universal Guide."
  },
  {
    id: 4,
    name: "MacBook Air M2 - 13.6\" Retina Display",
    category: "electronics",
    price: 114999,
    originalPrice: 129999,
    rating: 4.9,
    reviews: 1567,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=500&fit=crop",
    onSale: true,
    trending: true,
    isTopRated: true,
    description: "Apple M2 chip with 8-core CPU and 10-core GPU. 8GB unified memory. 256GB SSD storage. 13.6-inch Liquid Retina display."
  },
  {
    id: 5,
    name: "Canon EOS R6 Mark II Mirrorless Camera",
    category: "electronics",
    price: 189999,
    originalPrice: 219999,
    rating: 4.8,
    reviews: 445,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&h=500&fit=crop",
    onSale: true,
    trending: false,
    isTopRated: true,
    description: "24.2MP Full-Frame CMOS Sensor. DIGIC X Image Processor. 4K Video Recording. Dual Card Slots."
  },

  // Men's Fashion
  {
    id: 6,
    name: "Premium Cotton Oxford Shirt - Classic Fit",
    category: "men",
    price: 2499,
    originalPrice: 3499,
    rating: 4.6,
    reviews: 1234,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b4c?w=500&h=500&fit=crop",
    onSale: true,
    trending: true,
    isTopRated: false,
    description: "100% premium cotton, breathable fabric. Classic Oxford weave pattern. Button-down collar. Available in multiple colors and sizes."
  },
  {
    id: 7,
    name: "Levi's 501 Original Fit Jeans",
    category: "men",
    price: 3999,
    originalPrice: 4999,
    rating: 4.7,
    reviews: 2156,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=500&fit=crop",
    onSale: true,
    trending: false,
    isTopRated: true,
    description: "Iconic straight leg fit. 100% cotton denim. Classic 5-pocket styling. Available in various washes and sizes."
  },
  {
    id: 8,
    name: "Nike Air Max 270 Running Shoes",
    category: "men",
    price: 8999,
    originalPrice: 11999,
    rating: 4.8,
    reviews: 3421,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
    onSale: true,
    trending: true,
    isTopRated: true,
    description: "Max Air 270 unit delivers unrivaled, all-day comfort. Breathable mesh upper. Cushlon midsole for lightweight cushioning."
  },
  {
    id: 9,
    name: "Tommy Hilfiger Polo Shirt",
    category: "men",
    price: 2999,
    originalPrice: 3999,
    rating: 4.5,
    reviews: 987,
    image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=500&h=500&fit=crop",
    onSale: true,
    trending: false,
    isTopRated: false,
    description: "Classic polo design with embroidered logo. Pique cotton fabric. Comfortable fit. Available in multiple colors."
  },
  {
    id: 10,
    name: "Casio G-Shock Digital Watch",
    category: "men",
    price: 5999,
    originalPrice: 7999,
    rating: 4.7,
    reviews: 1876,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    onSale: true,
    trending: true,
    isTopRated: false,
    description: "Shock-resistant design. 200m water resistance. Multiple functions including stopwatch and alarm. Durable resin case."
  },

  // Women's Fashion
  {
    id: 11,
    name: "Floral Summer Dress - Maxi Length",
    category: "women",
    price: 3999,
    originalPrice: 5999,
    rating: 4.6,
    reviews: 1456,
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&h=500&fit=crop",
    onSale: true,
    trending: true,
    isTopRated: false,
    description: "Lightweight chiffon fabric with floral print. Adjustable straps. Side slit design. Perfect for summer occasions."
  },
  {
    id: 12,
    name: "High-Waisted Skinny Jeans",
    category: "women",
    price: 2999,
    originalPrice: 3999,
    rating: 4.5,
    reviews: 2341,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&h=500&fit=crop",
    onSale: true,
    trending: false,
    isTopRated: false,
    description: "Stretchy denim with high-waisted fit. Skinny leg silhouette. Comfortable stretch fabric. Available in multiple washes."
  },
  {
    id: 13,
    name: "Leather Crossbody Bag",
    category: "women",
    price: 4999,
    originalPrice: 6999,
    rating: 4.7,
    reviews: 892,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
    onSale: true,
    trending: true,
    isTopRated: false,
    description: "Genuine leather construction. Adjustable crossbody strap. Multiple interior compartments. Gold-tone hardware."
  },
  {
    id: 14,
    name: "Wireless Bluetooth Earbuds",
    category: "women",
    price: 3999,
    originalPrice: 5999,
    rating: 4.4,
    reviews: 1567,
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=500&h=500&fit=crop",
    onSale: true,
    trending: false,
    isTopRated: false,
    description: "True wireless design. Touch controls. 20-hour total battery life. IPX4 water resistance."
  },
  {
    id: 15,
    name: "Silk Blouse - Elegant Design",
    category: "women",
    price: 5999,
    originalPrice: 7999,
    rating: 4.8,
    reviews: 678,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=500&fit=crop",
    onSale: true,
    trending: true,
    isTopRated: true,
    description: "100% silk fabric. Elegant button-up design. Professional fit. Perfect for office and formal occasions."
  },

  // Kids & Toys
  {
    id: 16,
    name: "LEGO Star Wars Millennium Falcon",
    category: "kids",
    price: 7999,
    originalPrice: 9999,
    rating: 4.9,
    reviews: 2341,
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=500&h=500&fit=crop",
    onSale: true,
    trending: true,
    isTopRated: true,
    description: "Iconic Star Wars spaceship. 1,329 pieces. Includes 7 minifigures. Ages 9+ recommended."
  },
  {
    id: 17,
    name: "Educational Wooden Building Blocks",
    category: "kids",
    price: 1999,
    originalPrice: 2999,
    rating: 4.6,
    reviews: 892,
    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=500&h=500&fit=crop",
    onSale: true,
    trending: false,
    isTopRated: false,
    description: "Natural wood construction. 100 pieces in various shapes. Promotes creativity and motor skills. Safe for ages 3+."
  },
  {
    id: 18,
    name: "Remote Control Car - High Speed",
    category: "kids",
    price: 3999,
    originalPrice: 4999,
    rating: 4.5,
    reviews: 1234,
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=500&h=500&fit=crop",
    onSale: true,
    trending: true,
    isTopRated: false,
    description: "2.4GHz remote control. Up to 20 km/h speed. Rechargeable battery. Suitable for ages 8+."
  },
  {
    id: 19,
    name: "Art & Craft Set - Complete Kit",
    category: "kids",
    price: 1499,
    originalPrice: 2499,
    rating: 4.7,
    reviews: 567,
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500&h=500&fit=crop",
    onSale: true,
    trending: false,
    isTopRated: false,
    description: "Includes paints, brushes, canvas, and accessories. 50+ pieces. Encourages creativity. Ages 6+ recommended."
  },
  {
    id: 20,
    name: "Interactive Learning Tablet",
    category: "kids",
    price: 5999,
    originalPrice: 7999,
    rating: 4.8,
    reviews: 1456,
    image: "https://images.unsplash.com/photo-1544256718-3bcf237f3974?w=500&h=500&fit=crop",
    onSale: true,
    trending: true,
    isTopRated: true,
    description: "Educational games and activities. Parental controls. Durable design. Pre-loaded with learning content."
  },

  // Home & Garden
  {
    id: 21,
    name: "Smart LED Light Bulbs - Pack of 4",
    category: "home",
    price: 2999,
    originalPrice: 3999,
    rating: 4.6,
    reviews: 2341,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&h=500&fit=crop",
    onSale: true,
    trending: true,
    isTopRated: false,
    description: "WiFi-enabled smart bulbs. 16 million colors. Voice control compatible. Energy efficient LED technology."
  },
  {
    id: 22,
    name: "KitchenAid Stand Mixer - Professional",
    category: "home",
    price: 49999,
    originalPrice: 59999,
    rating: 4.9,
    reviews: 892,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=500&fit=crop",
    onSale: true,
    trending: false,
    isTopRated: true,
    description: "5-quart capacity. 10-speed settings. Includes multiple attachments. Professional-grade construction."
  },
  {
    id: 23,
    name: "Memory Foam Mattress - Queen Size",
    category: "home",
    price: 29999,
    originalPrice: 39999,
    rating: 4.7,
    reviews: 1567,
    image: "https://images.unsplash.com/photo-1540518614846-7ded34c848d9?w=500&h=500&fit=crop",
    onSale: true,
    trending: true,
    isTopRated: false,
    description: "10-inch memory foam mattress. Medium-firm feel. CertiPUR-US certified. 100-night trial."
  },
  {
    id: 24,
    name: "Robot Vacuum Cleaner - WiFi Connected",
    category: "home",
    price: 19999,
    originalPrice: 24999,
    rating: 4.5,
    reviews: 1234,
    image: "https://images.unsplash.com/photo-1589006008224-c4c9c4b9d7b3?w=500&h=500&fit=crop",
    onSale: true,
    trending: true,
    isTopRated: false,
    description: "Smart mapping technology. App control. 120-minute runtime. Auto-docking and charging."
  },
  {
    id: 25,
    name: "Garden Tool Set - 8 Pieces",
    category: "home",
    price: 3999,
    originalPrice: 5999,
    rating: 4.6,
    reviews: 678,
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop",
    onSale: true,
    trending: false,
    isTopRated: false,
    description: "Stainless steel construction. Ergonomic handles. Includes trowel, fork, shears, and more. Storage case included."
  },

  // Sports & Fitness
  {
    id: 26,
    name: "Bowflex SelectTech Adjustable Dumbbells",
    category: "sports",
    price: 39999,
    originalPrice: 49999,
    rating: 4.8,
    reviews: 445,
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=500&h=500&fit=crop",
    onSale: true,
    trending: true,
    isTopRated: true,
    description: "Adjustable from 5 to 52.5 pounds. Space-saving design. Durable construction. Perfect for home gym."
  },
  {
    id: 27,
    name: "Yoga Mat - Premium Non-Slip",
    category: "sports",
    price: 1999,
    originalPrice: 2999,
    rating: 4.7,
    reviews: 2341,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=500&fit=crop",
    onSale: true,
    trending: false,
    isTopRated: false,
    description: "6mm thickness. Eco-friendly TPE material. Non-slip surface. Lightweight and portable."
  },
  {
    id: 28,
    name: "Basketball - Official Size & Weight",
    category: "sports",
    price: 2999,
    originalPrice: 3999,
    rating: 4.6,
    reviews: 892,
    image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=500&h=500&fit=crop",
    onSale: true,
    trending: true,
    isTopRated: false,
    description: "Official NBA size and weight. Composite leather cover. Deep channel design. Indoor/outdoor use."
  },
  {
    id: 29,
    name: "Fitness Tracker - Heart Rate Monitor",
    category: "sports",
    price: 5999,
    originalPrice: 7999,
    rating: 4.5,
    reviews: 1567,
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500&h=500&fit=crop",
    onSale: true,
    trending: true,
    isTopRated: false,
    description: "24/7 heart rate monitoring. Sleep tracking. 7-day battery life. Water resistant to 50m."
  },
  {
    id: 30,
    name: "Resistance Bands Set - 5 Levels",
    category: "sports",
    price: 1499,
    originalPrice: 2499,
    rating: 4.7,
    reviews: 678,
    image: "https://images.unsplash.com/photo-1517960413843-0aee8e2d27ce?w=500&h=500&fit=crop",
    onSale: true,
    trending: false,
    isTopRated: false,
    description: "5 different resistance levels. Includes carrying bag. Exercise guide included. Perfect for strength training."
  }
];

const Products = ({ handleOrderPopup, searchQuery = "", addToCart, toggleWishlist, isWishlisted }) => {
  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState("grid"); // grid or list

  const filteredProducts = productsData.filter((product) => {
    const filterMatch =
      filter === "all" ||
      (filter === "sale" && product.onSale) ||
      (filter === "trending" && product.trending) ||
      (filter === "top-rated" && product.isTopRated) ||
      product.category === filter;

    const searchMatch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());

    return filterMatch && searchMatch;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return (b.rating || 0) - (a.rating || 0);
      case "newest":
        return b.id - a.id;
      default:
        return 0;
    }
  });

  const categories = [
    { id: "all", name: "All Products", count: productsData.length },
    { id: "electronics", name: "Electronics", count: productsData.filter(p => p.category === "electronics").length },
    { id: "men", name: "Men's Fashion", count: productsData.filter(p => p.category === "men").length },
    { id: "women", name: "Women's Fashion", count: productsData.filter(p => p.category === "women").length },
    { id: "kids", name: "Kids & Toys", count: productsData.filter(p => p.category === "kids").length },
    { id: "home", name: "Home & Garden", count: productsData.filter(p => p.category === "home").length },
    { id: "sports", name: "Sports & Fitness", count: productsData.filter(p => p.category === "sports").length },
    { id: "sale", name: "On Sale", count: productsData.filter(p => p.onSale).length },
    { id: "trending", name: "Trending", count: productsData.filter(p => p.trending).length },
    { id: "top-rated", name: "Top Rated", count: productsData.filter(p => p.isTopRated).length },
  ];

  return (
    <section className="container mx-auto px-4 py-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800" data-aos="fade-up">
      {/* Header with Search Results and Controls */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 mb-6 backdrop-blur-sm">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {filter === "all"
            ? "All Products"
            : filter === "sale"
            ? "On Sale"
            : filter === "trending"
            ? "Trending Products"
                : filter === "top-rated"
                ? "Top Rated Products"
            : `${filter.charAt(0).toUpperCase() + filter.slice(1)} Products`}
        </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {filteredProducts.length} products found
              {searchQuery && ` for "${searchQuery}"`}
            </p>
          </div>
          
          {/* View Mode Toggle */}
          <div className="flex items-center gap-2">
          <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                viewMode === "grid" 
                  ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400" 
                  : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600"
              }`}
              title="Grid view"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
          </button>
          <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                viewMode === "list" 
                  ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400" 
                  : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600"
              }`}
              title="List view"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
          </button>
          </div>
        </div>
        
        {/* Filters and Sort */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 flex-1">
            {categories.map((category) => (
          <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 py-2.5 rounded-xl font-medium transition-all duration-300 text-sm border-2 ${
                  filter === category.id
                    ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg border-blue-600 transform scale-105"
                    : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-md"
                }`}
              >
                {category.name} ({category.count})
          </button>
            ))}
          </div>
          
          {/* Sort Dropdown */}
          <div className="flex items-center gap-3">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Sort by:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2.5 border-2 border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 transition-all duration-200 hover:border-blue-300 dark:hover:border-blue-500"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="newest">Newest First</option>
            </select>
          </div>
        </div>
      </div>

      {/* Products Grid/List */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-20 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="w-28 h-28 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
            <span className="text-5xl text-gray-400 dark:text-gray-500">🔍</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            No products found
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
            Try different filters or search terms
          </p>
          <button
            onClick={() => setFilter("all")}
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-600"
          >
            View All Products
          </button>
        </div>
      ) : (
        <div className={`${
          viewMode === "grid" 
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            : "space-y-4"
        }`}>
          {sortedProducts.map((product) => (
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
    </section>
  );
};

export default Products;
