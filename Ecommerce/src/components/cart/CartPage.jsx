const CartPage = ({ cartItems = [] }) => {  // Provide default empty array
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Cart Items</h2>
      {cartItems.length === 0 ? (  // Changed length() to length
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className="border p-2 mb-2">
            {item.name} - ₹{item.price}
          </div>
        ))
      )}
    </div>
  );
};

export default CartPage;