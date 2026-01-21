import React, { useEffect } from 'react';
import { FaCheckCircle, FaTimes } from 'react-icons/fa';
import './Toast.css';

const Toast = ({ message, quantity = 1, type = 'success', onClose, onCancel, duration = 4000, productImage }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <div className={`toast toast-${type}`}>
      <div className="toast-content">
        {productImage && (
          <img src={productImage} alt="product" className="toast-product-image" />
        )}
        <div className="toast-icon-wrapper">
          <FaCheckCircle className="toast-icon" />
        </div>
        <div className="toast-text">
          <span className="toast-message">{message}</span>
          <span className="toast-quantity">Quantity: {quantity}</span>
        </div>
      </div>
      <div className="toast-actions">
        {onCancel && (
          <button className="toast-undo" onClick={onCancel}>
            Undo
          </button>
        )}
        <button className="toast-close" onClick={onClose}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Toast;
