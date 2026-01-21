// src/components/atoms/Price.jsx
// ============================================================
// Price Component - Display pricing with discount
// ============================================================
// Shows original price (strikethrough) + sale price
// Displays discount percentage
// ============================================================

import React from 'react';
import './Price.css';

export const Price = ({
  original,
  sale,
  currency = '₹',
  showDiscount = true,
  className = '',
}) => {
  const discountPercentage =
    original && sale
      ? Math.round(((original - sale) / original) * 100)
      : 0;

  const hasDiscount = sale < original;

  return (
    <div className={`price ${className}`}>
      <div className="price__container">
        {hasDiscount && (
          <>
            <span className="price__original">
              {currency}
              {original.toLocaleString('en-IN')}
            </span>
            <span className="price__separator" aria-hidden="true">
              →
            </span>
          </>
        )}
        <span className="price__sale">
          {currency}
          {sale.toLocaleString('en-IN')}
        </span>
        {hasDiscount && showDiscount && (
          <span className="price__discount" aria-label={`${discountPercentage}% off`}>
            {discountPercentage}% off
          </span>
        )}
      </div>
      {hasDiscount && (
        <p className="price__savings">
          You save {currency}
          {(original - sale).toLocaleString('en-IN')}
        </p>
      )}
    </div>
  );
};

export default Price;
