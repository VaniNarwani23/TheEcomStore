// src/components/molecules/ProductCard.jsx
// ============================================================
// Product Card Component - Molecule
// ============================================================
// Combines atoms: Image, Price, Rating, Button
// Handles hover states and wishlist toggle
// ============================================================

import React from 'react';
import { Heart, ShoppingCart, Eye } from 'lucide-react';
import { Button } from '../atoms/Button';
import { Price } from '../atoms/Price';
import { Rating } from '../atoms/Rating';
import './ProductCard.css';

export const ProductCard = ({
  product,
  isWishlisted = false,
  onWishlist,
  onAddToCart,
  onViewDetails,
  loading = false,
}) => {
  if (loading) {
    return (
      <div className="product-card product-card--skeleton">
        <div className="skeleton skeleton--image" />
        <div className="skeleton skeleton--text" style={{ height: '1rem' }} />
        <div className="skeleton skeleton--text" style={{ height: '0.875rem' }} />
        <div className="skeleton skeleton--text" style={{ height: '1.5rem' }} />
      </div>
    );
  }

  return (
    <article className="product-card">
      {/* Image Container */}
      <div className="product-card__image-wrapper">
        <img
          src={product.image}
          alt={product.name}
          className="product-card__image"
          loading="lazy"
          decoding="async"
        />

        {/* Sale Badge */}
        {product.discountPercentage > 0 && (
          <div className="product-card__badge">
            {product.discountPercentage}% OFF
          </div>
        )}

        {/* Limited Stock Badge */}
        {product.isLimitedStock && (
          <div className="product-card__limited">
            Limited Stock
          </div>
        )}

        {/* Wishlist Button */}
        <button
          className={`product-card__wishlist ${
            isWishlisted ? 'product-card__wishlist--active' : ''
          }`}
          onClick={() => onWishlist(product.id)}
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          title={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart
            size={20}
            fill={isWishlisted ? 'currentColor' : 'none'}
            className={isWishlisted ? 'filled' : ''}
          />
        </button>
      </div>

      {/* Content */}
      <div className="product-card__content">
        {/* Product Name */}
        <h3 className="product-card__name">{product.name}</h3>

        {/* Rating */}
        <div className="product-card__rating">
          <Rating
            rating={product.rating}
            count={product.reviewCount}
            size="sm"
            interactive
            onClick={() => onViewDetails(product.id)}
          />
        </div>

        {/* Pricing */}
        <div className="product-card__price">
          <Price
            original={product.originalPrice}
            sale={product.salePrice}
            showDiscount={true}
          />
        </div>

        {/* Shipping Info */}
        {product.freeShipping && (
          <p className="product-card__shipping">📦 Free Shipping</p>
        )}

        {/* Stock Status */}
        {!product.inStock && (
          <p className="product-card__out-of-stock">Out of Stock</p>
        )}

        {/* CTA Buttons (visible on hover) */}
        <div className="product-card__actions">
          <Button
            variant="primary"
            size="md"
            onClick={() => onAddToCart(product)}
            icon={ShoppingCart}
            disabled={!product.inStock}
            fullWidth
          >
            Add to Cart
          </Button>
          <Button
            variant="secondary"
            size="md"
            onClick={() => onViewDetails(product.id)}
            icon={Eye}
            fullWidth
          >
            View Details
          </Button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
