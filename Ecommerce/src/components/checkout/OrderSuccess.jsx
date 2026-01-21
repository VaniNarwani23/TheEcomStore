import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const OrderSuccess = () => {
  const location = useLocation();
  const total = location.state?.total || 0;
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-700">
        <div className="mb-6">
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Thank you for your order!</h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">Your order has been successfully placed.</p>
        </div>
        
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 mb-6">
          <p className="text-gray-700 dark:text-gray-300 mb-2">Payment received:</p>
          <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">₹{total.toLocaleString()}</p>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          You will receive an email confirmation shortly. We'll keep you updated on your order status.
        </p>
        
        <Link 
          to="/" 
          className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-600"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccess;


