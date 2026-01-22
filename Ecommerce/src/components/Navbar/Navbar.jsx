import React from 'react';
import { IoMdSearch } from 'react-icons/io';
import { FaCartShopping, FaCaretDown, FaHeart } from 'react-icons/fa6';
import { FiShoppingBag } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import DarkMode from './DarkMode';

const Navbar = ({ searchQuery, setSearchQuery, handleSearchSubmit, cartItemCount = 0, wishlistCount = 0 }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  const categories = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Top Rated", link: "/top-rated" },
    { id: 3, name: "Kids", link: "/kids" },
    { id: 4, name: "Mens clothing", link: "/mens-clothing" },
    { id: 5, name: "Womens clothing", link: "/womens-clothing" },
    { id: 6, name: "Electronic", link: "/electronic" },
  ];

  const trendingDropdown = [
    { id: 1, name: "Trending Products", link: "/trending" },
    { id: 2, name: "Best Selling", link: "/bestselling" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      handleSearchSubmit(searchQuery);
      navigate('/');
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="shadow-lg bg-gradient-to-r from-white via-blue-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 duration-200 sticky top-0 z-40 border-b border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm">
      {/* Premium Top Bar */}
      <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 dark:from-purple-800 dark:via-blue-800 dark:to-indigo-800 py-2 shadow-md">
        <div className="container flex justify-between items-center gap-4 px-4">
          {/* Logo */}
          <Link to="/" className="font-bold text-xl flex gap-2 items-center group">
            <div className="p-2 bg-white dark:bg-gray-900 rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
              <FiShoppingBag size="24" className="text-blue-600 dark:text-blue-400" />
            </div>
            <span className="text-white font-black tracking-wider hidden sm:inline">TheEcomStore</span>
          </Link>

          {/* Search - Desktop Enhanced */}
          <form onSubmit={handleSearch} className="relative group hidden sm:flex flex-1 max-w-2xl mx-4">
            <input
              type="text"
              placeholder="Search 1000+ products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full py-3 px-6 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:border-white dark:border-gray-600 dark:bg-gray-800 dark:text-white bg-white shadow-lg hover:shadow-xl transition-all duration-300"
            />
            <button
              type="submit"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-yellow-300 transition-colors duration-300"
              disabled={!searchQuery.trim()}
            >
              <IoMdSearch className="text-xl" />
            </button>
          </form>

          {/* Wishlist + Cart + Dark Mode + Mobile Toggle */}
          <div className="flex items-center gap-3">
            {/* Wishlist Button */}
            <Link
              to="/wishlist"
              className="relative bg-gradient-to-br from-red-400 to-pink-500 hover:from-red-500 hover:to-pink-600 transition-all duration-300 text-white py-2 px-4 rounded-full flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-110 hidden sm:flex"
              title="View Wishlist"
            >
              <span className="hidden lg:inline text-sm font-bold">Wishlist</span>
              <FaHeart className="text-lg animate-pulse-subtle" />
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-red-600 text-xs font-black rounded-full w-6 h-6 flex items-center justify-center shadow-lg border-2 border-white dark:border-gray-900 animate-bounce">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Cart Button */}
            <Link
              to="/cart"
              className="relative bg-gradient-to-br from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 text-white py-2 px-4 rounded-full flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-110"
              title="View Cart"
            >
              <span className="hidden lg:inline text-sm font-bold">Cart</span>
              <FaCartShopping className="text-lg" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-blue-600 text-xs font-black rounded-full w-6 h-6 flex items-center justify-center shadow-lg border-2 border-white dark:border-gray-900 animate-bounce">
                  {cartItemCount}
                </span>
              )}
            </Link>

            <DarkMode />

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="sm:hidden text-gray-700 dark:text-gray-300 focus:outline-none"
            >
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Premium Desktop Navigation */}
      <div className="hidden sm:flex justify-center items-center gap-8 py-4 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={category.link}
            onClick={() => setSearchQuery("")}
            className="relative text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-semibold transition-all duration-300 group"
          >
            {category.name}
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-300 rounded-full"></span>
          </Link>
        ))}

        {/* Trending Dropdown - Premium */}
        <div className="group relative">
          <button className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-semibold transition-all duration-300">
            Trending
            <FaCaretDown className="ml-2 transition-transform duration-300 group-hover:rotate-180 text-xs" />
          </button>
          <div className="absolute z-10 hidden group-hover:block w-56 rounded-xl shadow-2xl bg-white dark:bg-gray-800 p-3 border border-gray-100 dark:border-gray-700 animate-fadeInScale">
            {trendingDropdown.map((item) => (
              <Link
                key={item.id}
                to={item.link}
                onClick={() => setSearchQuery("")}
                className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-all duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Premium Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-gradient-to-b from-white to-blue-50 dark:from-gray-800 dark:to-gray-900 px-4 py-4 shadow-2xl border-b border-gray-100 dark:border-gray-700 animate-slideInUp">
          <form onSubmit={handleSearch} className="relative mb-6">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full py-3 px-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white bg-white shadow-md"
            />
            <button
              type="submit"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-600 dark:text-blue-400"
              disabled={!searchQuery.trim()}
            >
              <IoMdSearch className="text-xl" />
            </button>
          </form>

          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.link}
              onClick={() => {
                setSearchQuery("");
                setMobileMenuOpen(false);
              }}
              className="block py-3 px-4 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg text-base font-semibold transition-all duration-200 transform hover:translate-x-2"
            >
              {category.name}
            </Link>
          ))}

          <div className="border-t border-gray-200 dark:border-gray-700 my-4" />

          <p className="px-4 py-3 text-sm font-bold text-gray-600 dark:text-gray-400 uppercase tracking-widest">Trending</p>
          {trendingDropdown.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              onClick={() => {
                setSearchQuery("");
                setMobileMenuOpen(false);
              }}
              className="block py-2 px-8 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg text-sm font-semibold transition-all duration-200"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;