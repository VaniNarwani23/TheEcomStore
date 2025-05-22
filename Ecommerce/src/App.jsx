import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

// Import all your components
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

function App() {
  const [orderPopup, setOrderPopup] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleOrderPopup = () => setOrderPopup(!orderPopup);

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
        handleOrderPopup={handleOrderPopup} 
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
                handleOrderPopup={handleOrderPopup} 
                searchQuery={searchQuery}
              />
            </>
          }
        />
        <Route 
          path="/mens-clothing" 
          element={
            <MensClothing 
              handleOrderPopup={handleOrderPopup}
              searchQuery={searchQuery}
            />
          } 
        />
        <Route 
          path="/kids-clothing" 
          element={
            <KidsClothing 
              handleOrderPopup={handleOrderPopup}
              searchQuery={searchQuery}
            />
          } 
        />
        <Route 
          path="/womens-clothing" 
          element={
            <WomensClothing 
              handleOrderPopup={handleOrderPopup}
              searchQuery={searchQuery}
            />
          } 
        />
        <Route 
          path="/top-rated" 
          element={
            <TopProducts 
              handleOrderPopup={handleOrderPopup}
              searchQuery={searchQuery}
            />
          } 
        />
        <Route 
          path="/electronic" 
          element={
            <Electronic 
              handleOrderPopup={handleOrderPopup}
              searchQuery={searchQuery}
            />
          } 
        />
        <Route 
          path="/trending" 
          element={
            <Trending 
              handleOrderPopup={handleOrderPopup}
              searchQuery={searchQuery}
            />
          } 
        />
        <Route 
          path="/bestselling" 
          element={
            <BestSelling 
              handleOrderPopup={handleOrderPopup}
              searchQuery={searchQuery}
            />
          } 
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;