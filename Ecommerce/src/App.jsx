import AOS from "aos";
import "aos/dist/aos.css";
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

  const handleSearchSubmit = (query) => {
    setSearchQuery(query);
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
    <div className="bg-white dark:bg-slate-900 text-gray-900 dark:text-white">
      <Navbar 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery}
        handleSearchSubmit={handleSearchSubmit}
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
              />
            </>
          }
        />
        <Route 
          path="/mens-clothing" 
          element={<MensClothing handleOrderPopup={setOrderPopup} searchQuery={searchQuery} />} 
        />
        <Route 
          path="/kids" 
          element={<KidsClothing handleOrderPopup={setOrderPopup} searchQuery={searchQuery} />} 
        />
        <Route 
          path="/womens-clothing" 
          element={<WomensClothing handleOrderPopup={setOrderPopup} searchQuery={searchQuery} />} 
        />
        <Route 
          path="/top-rated" 
          element={<TopProducts handleOrderPopup={setOrderPopup} searchQuery={searchQuery} />} 
        />
        <Route 
          path="/electronic" 
          element={<Electronic handleOrderPopup={setOrderPopup} searchQuery={searchQuery} />} 
        />
        <Route 
          path="/trending" 
          element={<Trending handleOrderPopup={setOrderPopup} searchQuery={searchQuery} />} 
        />
        <Route 
          path="/bestselling" 
          element={<BestSelling handleOrderPopup={setOrderPopup} searchQuery={searchQuery} />} 
        />
          
        
        <Route 
          path="/cart" 
          element={<CartPage cartItems={cartItems} />} 
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
