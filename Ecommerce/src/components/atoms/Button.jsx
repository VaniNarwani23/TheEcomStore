// src/components/atoms/Button.jsx
// ============================================================
// Button Component - Atomic Building Block
// ============================================================
// Variants: primary | secondary | tertiary | ghost
// Sizes: sm | md | lg
// States: default | hover | active | disabled | loading
// ============================================================

import React from 'react';
import './Button.css';

export const Button = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled = false,
  icon: Icon,
  iconPosition = 'left',
  fullWidth = false,
  type = 'button',
  children,
  className = '',
  ...props
}) => {
  const classes = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    isLoading && 'btn--loading',
    disabled && 'btn--disabled',
    fullWidth && 'btn--full-width',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={classes}
      type={type}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <span className="btn__spinner" aria-label="Loading" />
          {children}
        </>
      ) : (
        <>
          {Icon && iconPosition === 'left' && <Icon size={18} className="btn__icon" />}
          {children}
          {Icon && iconPosition === 'right' && <Icon size={18} className="btn__icon" />}
        </>
      )}
    </button>
  );
};

export default Button;
