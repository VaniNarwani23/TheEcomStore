import { Link } from 'react-router-dom';

const CartPage = ({ cartItems, removeFromCart, updateQuantity }) => {
  const subtotal = cartItems.reduce(
    (sum, item) => sum + (item.price || 0) * item.quantity,
    0
  );
  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen">
      <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white text-center">Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <div className="text-center py-20 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 max-w-md mx-auto">
          <div className="w-24 h-24 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl text-gray-400 dark:text-gray-500">🛒</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Your cart is empty</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8">Start shopping to add items to your cart</p>
          <Link 
            to="/" 
            className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-600"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-lg">{item.name}</h3>
                    <p className="text-lg font-medium text-blue-600 dark:text-blue-400">₹{item.price}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
                    <button 
                      className="w-8 h-8 bg-white dark:bg-gray-600 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors flex items-center justify-center font-bold" 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span className="w-8 text-center text-gray-900 dark:text-white font-medium">{item.quantity}</span>
                    <button 
                      className="w-8 h-8 bg-white dark:bg-gray-600 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors flex items-center justify-center font-bold" 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <button 
                    className="px-4 py-2 text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 font-medium transition-colors" 
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 h-fit border-2 border-gray-200 dark:border-gray-700 sticky top-24">
            <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Order Summary</h4>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between py-2 border-b border-gray-100 dark:border-gray-700">
                <span className="text-gray-700 dark:text-gray-300">Subtotal</span>
                <span className="text-gray-900 dark:text-white font-medium">₹{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100 dark:border-gray-700">
                <span className="text-gray-700 dark:text-gray-300">Shipping</span>
                <span className="text-gray-900 dark:text-white font-medium">
                  {subtotal >= 999 ? 'Free' : '₹49'}
                </span>
              </div>
              <div className="flex justify-between py-3 text-lg font-bold border-t-2 border-gray-200 dark:border-gray-600">
                <span className="text-gray-900 dark:text-white">Total</span>
                <span className="text-blue-600 dark:text-blue-400">
                  ₹{Math.max(0, subtotal + (subtotal >= 999 ? 0 : 49)).toLocaleString()}
                </span>
              </div>
            </div>
            <Link 
              to="/checkout" 
              className="block w-full text-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-600"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
