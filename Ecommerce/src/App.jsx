import AOS from "aos";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar/Navbar";
import Toast from "./components/common/Toast";
import Footer from "./components/footer/footer";
import Banner from "./components/banner/banner";
import HeroSection from "./components/hero/hero";
import Products from "./components/product/product";
import MensClothing from "./components/MensClothing/MensClothing";
import KidsClothing from "./components/KidsClothing/KidsClothing";
import WomensClothing from "./components/WomensClothing/WomensClothing";
import TopProducts from "./components/topproducts/TopRatedProducts";
import Electronic from "./components/Electronic/electronic";
import Trending from "./components/Trending/trending";
import BestSelling from "./components/Bestselling/bestselling";
import CartPage from "./components/cart/CartPage";
import Checkout from "./components/checkout/Checkout";
import OrderSuccess from "./components/checkout/OrderSuccess";
import Wishlist from "./components/wishlist/Wishlist";
import ProductDetails from "./components/product/ProductDetails";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";

function App() {
  const [orderPopup, setOrderPopup] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(null);
  const [wishlistIds, setWishlistIds] = useState([]);
  const [toastMessage, setToastMessage] = useState("");
  const [toastQuantity, setToastQuantity] = useState(1);
  const [toastProductImage, setToastProductImage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [lastAddedProduct, setLastAddedProduct] = useState(null);

  const handleSearchSubmit = (query) => {
    setSearchQuery(query);
  };

  const addToCart = (product, quantity = 1) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        setToastMessage(`✓ "${product.name}" updated! Total: ${existingItem.quantity + quantity} items`);
        setToastQuantity(existingItem.quantity + quantity);
        setToastProductImage(product.image || "");
        setLastAddedProduct(product.id);
        return prevItems.map(item =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + quantity } 
            : item
        );
      }
      setToastMessage(`✓ "${product.name}" added to your cart!`);
      setToastQuantity(quantity);
      setToastProductImage(product.image || "");
      setLastAddedProduct(product.id);
      return [...prevItems, { ...product, quantity }];
    });
    setShowToast(true);
  };

  const handleUndoAddToCart = () => {
    if (lastAddedProduct) {
      setCartItems(prevItems => {
        const item = prevItems.find(p => p.id === lastAddedProduct);
        if (item && item.quantity > 1) {
          return prevItems.map(p =>
            p.id === lastAddedProduct 
              ? { ...p, quantity: p.quantity - 1 }
              : p
          );
        }
        return prevItems.filter(p => p.id !== lastAddedProduct);
      });
      setShowToast(false);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId 
          ? { ...item, quantity: newQuantity } 
          : item
      )
    );
  };

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Wishlist controls
  const toggleWishlist = (productId) => {
    setWishlistIds((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  };
  const isWishlisted = (productId) => wishlistIds.includes(productId);

  // Persist cart and wishlist to localStorage
  useEffect(() => {
    try {
      const savedCart = JSON.parse(localStorage.getItem('cartItems') || '[]');
      const savedWishlist = JSON.parse(localStorage.getItem('wishlistIds') || '[]');
      const savedUser = JSON.parse(localStorage.getItem('user') || 'null');
      if (Array.isArray(savedCart)) setCartItems(savedCart);
      if (Array.isArray(savedWishlist)) setWishlistIds(savedWishlist);
      if (savedUser) setUser(savedUser);
    } catch {}
  }, []);
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);
  useEffect(() => {
    localStorage.setItem('wishlistIds', JSON.stringify(wishlistIds));
  }, [wishlistIds]);

  const clearCart = () => setCartItems([]);

  const handleLogin = (nextUser) => {
    try {
      setUser(nextUser);
      localStorage.setItem('user', JSON.stringify(nextUser));
    } catch {}
  };

  const handleLogout = () => {
    try {
      setUser(null);
      localStorage.removeItem('user');
    } catch {}
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-all duration-300">
      <Navbar 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery}
        handleSearchSubmit={handleSearchSubmit}
        cartItemCount={cartItemCount}
        wishlistCount={wishlistIds.length}
        user={user}
        onLogout={handleLogout}
      />
      
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner onNavigate={() => setSearchQuery("")} />
              <HeroSection />
              <Products 
                handleOrderPopup={setOrderPopup} 
                searchQuery={searchQuery}
                addToCart={addToCart}
                toggleWishlist={toggleWishlist}
                isWishlisted={isWishlisted}
              />
            </>
          }
        />
        <Route 
          path="/mens-clothing" 
          element={
            <MensClothing 
              handleOrderPopup={setOrderPopup} 
              searchQuery={searchQuery}
              addToCart={addToCart}
              toggleWishlist={toggleWishlist}
              isWishlisted={isWishlisted}
            />
          } 
        />
        <Route 
          path="/kids" 
          element={
            <KidsClothing 
              handleOrderPopup={setOrderPopup} 
              searchQuery={searchQuery}
              addToCart={addToCart}
              toggleWishlist={toggleWishlist}
              isWishlisted={isWishlisted}
            />
          } 
        />
        <Route 
          path="/womens-clothing" 
          element={
            <WomensClothing 
              handleOrderPopup={setOrderPopup} 
              searchQuery={searchQuery}
              addToCart={addToCart}
              toggleWishlist={toggleWishlist}
              isWishlisted={isWishlisted}
            />
          } 
        />
        <Route 
          path="/top-rated" 
          element={
            <TopProducts 
              handleOrderPopup={setOrderPopup} 
              searchQuery={searchQuery}
              addToCart={addToCart}
              toggleWishlist={toggleWishlist}
              isWishlisted={isWishlisted}
            />
          } 
        />
        <Route 
          path="/electronic" 
          element={
            <Electronic 
              handleOrderPopup={setOrderPopup} 
              searchQuery={searchQuery}
              addToCart={addToCart}
              toggleWishlist={toggleWishlist}
              isWishlisted={isWishlisted}
            />
          } 
        />
        <Route 
          path="/trending" 
          element={
            <Trending 
              handleOrderPopup={setOrderPopup} 
              searchQuery={searchQuery}
              addToCart={addToCart}
              toggleWishlist={toggleWishlist}
              isWishlisted={isWishlisted}
            />
          } 
        />
        <Route 
          path="/bestselling" 
          element={
            <BestSelling 
              handleOrderPopup={setOrderPopup} 
              searchQuery={searchQuery}
              addToCart={addToCart}
            />
          } 
        />
        <Route 
          path="/cart" 
          element={
            <CartPage 
              cartItems={cartItems}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
            />
          } 
        />
        <Route 
          path="/wishlist" 
          element={<Wishlist wishlistIds={wishlistIds} addToCart={addToCart} toggleWishlist={toggleWishlist} isWishlisted={isWishlisted} searchQuery={searchQuery} />} 
        />
        <Route 
          path="/checkout" 
          element={<Checkout cartItems={cartItems} clearCart={clearCart} />} 
        />
        <Route 
          path="/order-success" 
          element={<OrderSuccess />} 
        />
        <Route
          path="/products/:id"
          element={<ProductDetails addToCart={addToCart} />}
        />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<SignUp onLogin={handleLogin} />} />
      </Routes>

      <Footer />

      {showToast && (
        <Toast 
          message={toastMessage}
          quantity={toastQuantity}
          productImage={toastProductImage}
          type="success" 
          onClose={() => setShowToast(false)}
          onCancel={handleUndoAddToCart}
        />
      )}
    </div>
  );
}

export default App;
