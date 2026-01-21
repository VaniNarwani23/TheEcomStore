import React from 'react';
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';

const RatingStars = ({ rating = 0, size = 16, className = '' }) => {
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  return (
    <div className={`flex items-center gap-0.5 ${className}`}>
      {Array.from({ length: fullStars }).map((_, i) => (
        <FaStar key={`full-${i}`} size={size} className="text-yellow-400" />
      ))}
      {hasHalf && <FaStarHalfAlt size={size} className="text-yellow-400" />}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <FaRegStar key={`empty-${i}`} size={size} className="text-yellow-400" />
      ))}
    </div>
  );
};

export default RatingStars;


