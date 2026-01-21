import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  fullWidth = false,
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none transform hover:-translate-y-0.5';
  
  const variants = {
    primary: 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl focus-visible:ring-blue-300 dark:focus-visible:ring-blue-600',
    secondary: 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-md hover:shadow-lg focus-visible:ring-gray-300 dark:focus-visible:ring-gray-600',
    outline: 'border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 shadow-md hover:shadow-lg focus-visible:ring-blue-300 dark:focus-visible:ring-blue-600',
    ghost: 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white focus-visible:ring-gray-300 dark:focus-visible:ring-gray-600',
    link: 'text-blue-600 dark:text-blue-400 underline-offset-4 hover:underline focus-visible:ring-blue-300 dark:focus-visible:ring-blue-600 p-0 h-auto',
    success: 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg hover:shadow-xl focus-visible:ring-green-300 dark:focus-visible:ring-green-600',
    danger: 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-lg hover:shadow-xl focus-visible:ring-red-300 dark:focus-visible:ring-red-600',
  };
  
  const sizes = {
    sm: 'h-9 px-3 text-xs',
    md: 'h-10 px-4 py-2',
    lg: 'h-12 px-6 text-base',
    xl: 'h-14 px-8 text-lg',
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;