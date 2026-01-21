// src/hooks/useCart.js
// ============================================================
// Custom Hook - Cart State Management
// ============================================================
// Handles all cart operations: add, remove, update quantity
// Manages localStorage persistence
// ============================================================

import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }

  const { cartItems, setCartItems } = context;

  /**
   * Add product to cart or increment quantity if exists
   */
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        // Product exists: increment quantity
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      // New product: add to cart
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  /**
   * Remove product from cart
   */
  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  /**
   * Update product quantity
   */
  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) {
      removeFromCart(productId);
      return;
    }

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  /**
   * Clear entire cart
   */
  const clearCart = () => {
    setCartItems([]);
  };

  /**
   * Calculate total price
   */
  const totalPrice = cartItems.reduce(
    (total, item) => total + (item.salePrice || item.price) * item.quantity,
    0
  );

  /**
   * Calculate total items count
   */
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  /**
   * Check if product in cart
   */
  const isInCart = (productId) => {
    return cartItems.some((item) => item.id === productId);
  };

  /**
   * Get cart item by ID
   */
  const getCartItem = (productId) => {
    return cartItems.find((item) => item.id === productId);
  };

  return {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalPrice,
    itemCount,
    isInCart,
    getCartItem,
  };
};

export default useCart;
