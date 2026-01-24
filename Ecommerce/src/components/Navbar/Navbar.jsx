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
    <div className="shadow-md bg-white dark:bg-gray-900 duration-200 sticky top-0 z-40 border-b border-gray-200 dark:border-gray-800">
      {/* Professional Top Bar */}
      <div className="bg-gray-900 dark:bg-gray-950 py-2.5 shadow-sm">
        <div className="container flex justify-between items-center gap-4 px-4">
          {/* Logo */}
          <Link to="/" className="font-bold text-xl flex gap-2 items-center group">
            <div className="p-2 bg-white dark:bg-gray-800 rounded-md shadow-sm group-hover:shadow-md transition-all duration-200">
              <FiShoppingBag size="24" className="text-orange-500 dark:text-orange-400" />
            </div>
            <span className="text-white font-bold tracking-wide hidden sm:inline text-lg">TheEcomStore</span>
          </Link>

          {/* Search - Desktop Professional */}
          <form onSubmit={handleSearch} className="relative group hidden sm:flex flex-1 max-w-2xl mx-4">
            <input
              type="text"
              placeholder="Search 1000+ products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-l-md py-2.5 px-4 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white bg-white"
            />
            <button
              type="submit"
              className="absolute right-0 top-0 bottom-0 px-4 bg-orange-500 hover:bg-orange-600 text-white rounded-r-md transition-colors duration-200"
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
              className="relative bg-gray-800 hover:bg-gray-700 transition-colors duration-200 text-white py-2 px-3 rounded-md flex items-center gap-2 hidden sm:flex"
              title="View Wishlist"
            >
              <span className="hidden lg:inline text-sm font-medium">Wishlist</span>
              <FaHeart className="text-base" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-orange-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Cart Button */}
            <Link
              to="/cart"
              className="relative bg-gray-800 hover:bg-gray-700 transition-colors duration-200 text-white py-2 px-3 rounded-md flex items-center gap-2"
              title="View Cart"
            >
              <span className="hidden lg:inline text-sm font-medium">Cart</span>
              <FaCartShopping className="text-base" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-orange-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
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

      {/* Professional Desktop Navigation */}
      <div className="hidden sm:flex justify-center items-center gap-6 py-3 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={category.link}
            onClick={() => setSearchQuery("")}
            className="relative text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 px-3 py-2 text-sm font-medium transition-colors duration-200 group"
          >
            {category.name}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-200"></span>
          </Link>
        ))}

        {/* Trending Dropdown - Professional */}
        <div className="group relative">
          <button className="flex items-center text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 px-3 py-2 text-sm font-medium transition-colors duration-200">
            Trending
            <FaCaretDown className="ml-2 transition-transform duration-200 group-hover:rotate-180 text-xs" />
          </button>
          <div className="absolute z-10 hidden group-hover:block w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 p-2 border border-gray-200 dark:border-gray-700">
            {trendingDropdown.map((item) => (
              <Link
                key={item.id}
                to={item.link}
                onClick={() => setSearchQuery("")}
                className="block px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-orange-600 dark:hover:text-orange-400 rounded transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Professional Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white dark:bg-gray-900 px-4 py-4 shadow-lg border-b border-gray-200 dark:border-gray-800">
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
              className="block py-3 px-4 text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md text-base font-medium transition-colors duration-200"
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
              className="block py-2 px-8 text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md text-sm font-medium transition-colors duration-200"
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