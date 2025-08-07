import AOS from "aos";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar/navbar";
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

function App() {
  const [orderPopup, setOrderPopup] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const handleSearchSubmit = (query) => {
    setSearchQuery(query);
  };

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
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
    <div className="bg-white dark:bg-slate-900 text-gray-900 dark:text-white">
      <Navbar 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery}
        handleSearchSubmit={handleSearchSubmit}
        cartItemCount={cartItemCount}
      />
      
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <HeroSection />
              <Products 
                handleOrderPopup={setOrderPopup} 
                searchQuery={searchQuery}
                addToCart={addToCart}
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
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
