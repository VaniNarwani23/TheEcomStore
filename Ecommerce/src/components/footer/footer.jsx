import React from 'react';
import './footer.css';
import instagram_icon from '../../assets/instagram.png';
import facebook_icon from '../../assets/facebook.png';
import whatsapp_icon from '../../assets/whatsapp.png';
import { FiShoppingBag } from 'react-icons/fi';

const Footer = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-8">
        {/* Top Section */}
        <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 rounded-2xl p-8 mb-8 shadow-lg border border-blue-100 dark:border-gray-600">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <FiShoppingBag size={40} className="text-blue-600 dark:text-blue-400" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">TheEcomStore</h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Your trusted shopping destination</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-700 dark:text-gray-300 mb-2">Get the latest updates</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400"
                />
                <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">About TheEcomStore</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              We're committed to providing you with the best shopping experience, offering quality products 
              at competitive prices with exceptional customer service.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm">24/7 Support</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm">Fast Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-sm">Secure Payment</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">FAQs</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Track Order</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Size Guide</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media & Bottom */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-6">
              <span className="text-gray-600 dark:text-gray-300 font-medium">Follow Us:</span>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-200">
                  <img src={facebook_icon} alt="Facebook" className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-pink-600 hover:bg-pink-700 rounded-full flex items-center justify-center transition-colors duration-200">
                  <img src={instagram_icon} alt="Instagram" className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-colors duration-200">
                  <img src={whatsapp_icon} alt="WhatsApp" className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                © 2025 TheEcomStore by Vani Narwani. All Rights Reserved.
              </p>
              <div className="flex gap-4 text-xs text-gray-500 dark:text-gray-400">
                <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
