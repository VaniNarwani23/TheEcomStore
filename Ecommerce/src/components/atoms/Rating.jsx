// src/components/atoms/Rating.jsx
// ============================================================
// Rating Component - Star rating with review count
// ============================================================
// Shows 0-5 star rating, review count, link to reviews
// ============================================================

import React from 'react';
import { Star } from 'lucide-react';
import './Rating.css';

export const Rating = ({
  rating = 0,
  count = 0,
  onClick,
  interactive = false,
  size = 'md',
  className = '',
}) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div
      className={`rating rating--${size} ${interactive ? 'rating--interactive' : ''} ${className}`}
      onClick={interactive ? onClick : undefined}
      role={interactive ? 'button' : 'generic'}
      tabIndex={interactive ? 0 : -1}
      onKeyPress={
        interactive
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                onClick?.();
              }
            }
          : undefined
      }
      aria-label={`Rating: ${rating} out of 5 stars${count ? `, ${count} reviews` : ''}`}
    >
      <div className="rating__stars">
        {/* Full Stars */}
        {Array.from({ length: fullStars }).map((_, i) => (
          <Star
            key={`full-${i}`}
            size={16}
            className="rating__star rating__star--full"
            fill="currentColor"
          />
        ))}

        {/* Half Star */}
        {hasHalfStar && (
          <div key="half" className="rating__star-half">
            <Star
              size={16}
              className="rating__star rating__star--full"
              fill="currentColor"
            />
            <Star
              size={16}
              className="rating__star rating__star--empty"
              fill="none"
            />
          </div>
        )}

        {/* Empty Stars */}
        {Array.from({ length: emptyStars }).map((_, i) => (
          <Star
            key={`empty-${i}`}
            size={16}
            className="rating__star rating__star--empty"
            fill="none"
          />
        ))}
      </div>

      {/* Rating Text */}
      <div className="rating__info">
        <span className="rating__value">{rating.toFixed(1)}</span>
        {count > 0 && (
          <>
            <span className="rating__separator" aria-hidden="true">
              •
            </span>
            <span className="rating__count">{count.toLocaleString()}</span>
          </>
        )}
      </div>
    </div>
  );
};

export default Rating;
