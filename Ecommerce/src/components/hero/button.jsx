import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  fullWidth = false,
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
  
  const variants = {
    primary: 'bg-black text-white hover:bg-gray-800 focus-visible:ring-black',
    secondary: 'bg-white text-black border border-gray-200 hover:bg-gray-100 focus-visible:ring-gray-300',
    outline: 'border border-black text-black hover:bg-black hover:text-white focus-visible:ring-black',
    ghost: 'hover:bg-gray-100 text-black focus-visible:ring-gray-300',
    link: 'text-black underline-offset-4 hover:underline focus-visible:ring-gray-300 p-0 h-auto',
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