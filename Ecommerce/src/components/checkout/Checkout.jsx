import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = ({ cartItems = [], clearCart }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '', email: '', phone: '',
    address: '', city: '', state: '', zip: '',
    paymentMethod: 'cod'
  });
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [card, setCard] = useState({ number: '', name: '', expiry: '', cvv: '' });
  const [upi, setUpi] = useState({ id: '' });

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price || 0) * item.quantity, 0);
  const shipping = subtotal >= 999 || subtotal === 0 ? 0 : 49;
  const total = Math.max(0, subtotal - discount) + shipping;

  const updateField = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const updateCard = (e) => setCard({ ...card, [e.target.name]: e.target.value });
  const updateUpi = (e) => setUpi({ ...upi, [e.target.name]: e.target.value });

  const applyCoupon = (e) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === 'SAVE10' && subtotal > 0) {
      setDiscount(Number((subtotal * 0.1).toFixed(2)));
    } else {
      setDiscount(0);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // Normally, send order to backend and process payment here.
    if (form.paymentMethod === 'card') {
      if (!card.number || !card.name || !card.expiry || !card.cvv) {
        alert('Please fill card details.');
        return;
      }
    }
    if (form.paymentMethod === 'upi') {
      if (!upi.id) {
        alert('Please enter your UPI ID.');
        return;
      }
      // Validate UPI ID format
      const upiRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z]{2,}$/;
      if (!upiRegex.test(upi.id)) {
        alert('Please enter a valid UPI ID (e.g., yourname@upi).');
        return;
      }
    }
    clearCart?.();
    navigate('/order-success', { replace: true, state: { total } });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Checkout</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <form onSubmit={onSubmit} className="lg:col-span-2 space-y-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
              <input 
                name="name" 
                placeholder="Enter your full name" 
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 transition-colors" 
                value={form.name} 
                onChange={updateField} 
                required 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
              <input 
                name="email" 
                type="email" 
                placeholder="Enter your email" 
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 transition-colors" 
                value={form.email} 
                onChange={updateField} 
                required 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone</label>
              <input 
                name="phone" 
                placeholder="Enter your phone number" 
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 transition-colors" 
                value={form.phone} 
                onChange={updateField} 
                required 
              />
            </div>
          </div>

          <h2 className="text-xl font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mt-6">Shipping Address</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Address</label>
              <input 
                name="address" 
                placeholder="Enter your full address" 
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 transition-colors" 
                value={form.address} 
                onChange={updateField} 
                required 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">City</label>
              <input 
                name="city" 
                placeholder="Enter city" 
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 transition-colors" 
                value={form.city} 
                onChange={updateField} 
                required 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">State</label>
              <input 
                name="state" 
                placeholder="Enter state" 
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 transition-colors" 
                value={form.state} 
                onChange={updateField} 
                required 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">ZIP Code</label>
              <input 
                name="zip" 
                placeholder="Enter ZIP code" 
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 transition-colors" 
                value={form.zip} 
                onChange={updateField} 
                required 
              />
            </div>
          </div>

          <h2 className="text-xl font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mt-6">Payment Method</h2>
          <div className="space-y-3">
            <label className="flex items-center gap-3 p-3 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors">
              <input 
                type="radio" 
                name="paymentMethod" 
                value="cod" 
                checked={form.paymentMethod === 'cod'} 
                onChange={updateField}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
              />
              <span className="text-gray-900 dark:text-white font-medium">Cash on Delivery</span>
            </label>
            <label className="flex items-center gap-3 p-3 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors">
              <input 
                type="radio" 
                name="paymentMethod" 
                value="card" 
                checked={form.paymentMethod === 'card'} 
                onChange={updateField}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
              />
              <span className="text-gray-900 dark:text-white font-medium">Credit/Debit Card</span>
            </label>
            <label className="flex items-center gap-3 p-3 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors">
              <input 
                type="radio" 
                name="paymentMethod" 
                value="upi" 
                checked={form.paymentMethod === 'upi'} 
                onChange={updateField}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
              />
              <span className="text-gray-900 dark:text-white font-medium">UPI</span>
            </label>
          </div>

          {form.paymentMethod === 'card' && (
            <div className="space-y-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Card Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Card Number</label>
                  <input 
                    name="number" 
                    placeholder="1234 5678 9012 3456" 
                    className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-3 bg-white dark:bg-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 transition-colors" 
                    value={card.number} 
                    onChange={updateCard} 
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name on Card</label>
                  <input 
                    name="name" 
                    placeholder="Enter name as on card" 
                    className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-3 bg-white dark:bg-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 transition-colors" 
                    value={card.name} 
                    onChange={updateCard} 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Expiry Date</label>
                  <input 
                    name="expiry" 
                    placeholder="MM/YY" 
                    className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-3 bg-white dark:bg-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 transition-colors" 
                    value={card.expiry} 
                    onChange={updateCard} 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">CVV</label>
                  <input 
                    name="cvv" 
                    placeholder="123" 
                    className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-3 bg-white dark:bg-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 transition-colors" 
                    value={card.cvv} 
                    onChange={updateCard} 
                  />
                </div>
              </div>
            </div>
          )}

          {form.paymentMethod === 'upi' && (
            <div className="space-y-4 p-4 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg border border-purple-200 dark:border-purple-700">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">📱</span>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">UPI Payment</h3>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 rounded-lg p-3 mb-4">
                <p className="text-sm text-blue-800 dark:text-blue-300">
                  💡 <strong>Tip:</strong> UPI IDs usually look like: <code className="bg-blue-100 dark:bg-blue-800 px-2 py-1 rounded">yourname@upi</code>
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">UPI ID</label>
                <input 
                  name="id" 
                  type="email"
                  placeholder="yourname@upi" 
                  className="w-full border-2 border-purple-300 dark:border-purple-600 rounded-lg p-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:focus:ring-purple-400 dark:focus:border-purple-400 transition-colors text-center text-lg font-semibold tracking-wider" 
                  value={upi.id} 
                  onChange={updateUpi}
                  required
                />
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">Popular UPI providers: Google Pay, PhonePe, Paytm, WhatsApp Pay</p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 rounded-lg p-3">
                <p className="text-sm text-green-800 dark:text-green-300">
                  ✓ Amount to pay: <strong className="text-lg">₹{total.toLocaleString()}</strong>
                </p>
              </div>
            </div>
          )}

          <button 
            type="submit" 
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-600"
          >
            Place Order
          </button>
        </form>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 h-fit border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Order Summary</h3>
          <form onSubmit={applyCoupon} className="flex gap-2 mb-4">
            <input 
              value={couponCode} 
              onChange={(e)=>setCouponCode(e.target.value)} 
              placeholder="Coupon code (SAVE10)" 
              className="flex-1 border border-gray-300 dark:border-gray-600 rounded-lg p-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 transition-colors" 
            />
            <button 
              type="submit" 
              className="px-4 py-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-medium rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-600"
            >
              Apply
            </button>
          </form>
          <div className="space-y-3 mb-6">
            {cartItems.map(item => (
              <div key={item.id} className="flex justify-between text-sm py-2 border-b border-gray-100 dark:border-gray-700">
                <span className="text-gray-700 dark:text-gray-300">{item.name} × {item.quantity}</span>
                <span className="text-gray-900 dark:text-white font-medium">₹{(item.price * item.quantity).toLocaleString()}</span>
              </div>
            ))}
          </div>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-100 dark:border-gray-700">
              <span className="text-gray-700 dark:text-gray-300">Subtotal</span>
              <span className="text-gray-900 dark:text-white font-medium">₹{subtotal.toLocaleString()}</span>
            </div>
            {discount > 0 && (
              <div className="flex justify-between py-2 border-b border-gray-100 dark:border-gray-700">
                <span className="text-green-600 dark:text-green-400 font-medium">Discount</span>
                <span className="text-green-600 dark:text-green-400 font-medium">-₹{discount.toLocaleString()}</span>
              </div>
            )}
            <div className="flex justify-between py-2 border-b border-gray-100 dark:border-gray-700">
              <span className="text-gray-700 dark:text-gray-300">Shipping</span>
              <span className="text-gray-900 dark:text-white font-medium">₹{shipping.toLocaleString()}</span>
            </div>
            <div className="flex justify-between py-3 text-lg font-bold border-t-2 border-gray-200 dark:border-gray-600">
              <span className="text-gray-900 dark:text-white">Total</span>
              <span className="text-blue-600 dark:text-blue-400">₹{total.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;


