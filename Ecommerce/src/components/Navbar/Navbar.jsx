import React from 'react';
import { IoMdSearch } from 'react-icons/io';
import { FaCartShopping, FaCaretDown } from 'react-icons/fa6';
import { FiShoppingBag } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import DarkMode from './Darkmode';

const Navbar = ({ searchQuery, setSearchQuery, handleSearchSubmit }) => {
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
    <div className="shadow-md bg-white dark:bg-gray-900 duration-200 sticky top-0 z-40">
      {/* Top Bar */}
      <div className="bg-purple-700/40 py-2">
        <div className="container flex justify-between items-center gap-4 px-4">
          {/* Logo */}
          <Link to="/" className="font-bold text-xl flex gap-1 items-center">
            <FiShoppingBag size="30" className="text-black dark:text-white" />
            <span className="text-black dark:text-white">TheEcomStore</span>
          </Link>

          {/* Search - Desktop */}
          <form onSubmit={handleSearch} className="relative group hidden sm:flex flex-1 max-w-xl mx-4">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-gray-300 py-1 px-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
              disabled={!searchQuery.trim()}
            >
              <IoMdSearch className="text-gray-500 group-hover:text-indigo-600 dark:text-gray-400 dark:group-hover:text-indigo-400" />
            </button>
          </form>

          {/* Cart + Dark Mode + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              to="/cart"
              className="bg-gradient-to-t from-purple-300 to-blue-400 hover:from-purple-400 hover:to-blue-500 transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-2"
            >
              <span className="hidden md:inline">Cart</span>
              <FaCartShopping className="text-lg" />
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

      {/* Desktop Navigation */}
      <div className="hidden sm:flex justify-center items-center gap-6 py-3">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={category.link}
            className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
          >
            {category.name}
          </Link>
        ))}

        {/* Trending Dropdown */}
        <div className="group relative">
          <button className="flex items-center text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
            Trending
            <FaCaretDown className="ml-1 transition-transform duration-200 group-hover:rotate-180" />
          </button>
          <div className="absolute z-10 hidden group-hover:block w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 p-2">
            {trendingDropdown.map((item) => (
              <Link
                key={item.id}
                to={item.link}
                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-gray-700 rounded-md"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white dark:bg-gray-800 px-4 py-2 shadow-lg">
          <form onSubmit={handleSearch} className="relative mb-4">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-gray-300 py-2 px-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
              disabled={!searchQuery.trim()}
            >
              <IoMdSearch className="text-gray-500 dark:text-gray-400" />
            </button>
          </form>

          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.link}
              className="block py-2 px-3 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-md text-base font-medium transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {category.name}
            </Link>
          ))}

          <div className="border-t border-gray-200 dark:border-gray-700 my-2" />

          <p className="px-3 py-2 text-sm font-medium text-gray-500 dark:text-gray-400">Trending</p>
          {trendingDropdown.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              className="block py-2 px-6 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-md text-sm font-medium transition-colors"
              onClick={() => setMobileMenuOpen(false)}
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
