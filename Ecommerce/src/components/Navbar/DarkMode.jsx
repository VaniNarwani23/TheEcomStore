import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const DarkMode = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const element = document.documentElement;
    if (theme === 'dark') {
      element.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      element.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2.5 rounded-xl bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-600 dark:hover:to-gray-700 transition-all duration-300 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:outline-none shadow-md hover:shadow-lg transform hover:scale-105 border border-gray-200 dark:border-gray-600"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300 transition-transform duration-300" />
      ) : (
        <Sun className="w-5 h-5 text-yellow-500 transition-transform duration-300" />
      )}
    </button>
  );
};

export default DarkMode;