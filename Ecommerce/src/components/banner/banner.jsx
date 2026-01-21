import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight, FaFire, FaTruck, FaShieldAlt, FaHeadset } from 'react-icons/fa';

const Banner = ({ onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const handleCategoryClick = (link) => {
    if (onNavigate) {
      onNavigate();
    }
    navigate(link);
  };

  const bannerSlides = [
    {
      id: 1,
      title: "Mega Sale Alert! 🔥",
      subtitle: "Up to 70% Off on Electronics",
      description: "Get the latest smartphones, laptops, and gadgets at unbeatable prices. Limited time offer!",
      image: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=1200&h=400&fit=crop",
      buttonText: "Shop Electronics",
      link: "/electronic",
      bgColor: "from-blue-600 to-purple-600"
    },
    {
      id: 2,
      title: "Fashion Forward",
      subtitle: "New Collection Arrived",
      description: "Discover the latest trends in men's and women's fashion. Premium quality at affordable prices.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=400&fit=crop",
      buttonText: "Shop Mens Clothing",
      link: "/mens-clothing",
      bgColor: "from-pink-500 to-red-500"
    },
    {
      id: 3,
      title: "Kids Collection",
      subtitle: "Quality & Safety First",
      description: "Explore premium kids clothing, toys, and accessories. Safe, comfortable, and stylish for your little ones!",
      image: "https://images.unsplash.com/photo-1503454537688-e47a4f00b3a1?w=1200&h=400&fit=crop",
      buttonText: "Shop Kids",
      link: "/kids",
      bgColor: "from-pink-500 to-purple-500"
    },
    {
      id: 4,
      title: "Womens Fashion",
      subtitle: "Latest Trends & Styles",
      description: "Discover elegant dresses, tops, and accessories. Express your unique style with our curated collection.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1200&h=400&fit=crop",
      buttonText: "Shop Womens Clothing",
      link: "/womens-clothing",
      bgColor: "from-red-500 to-pink-600"
    },
    {
      id: 5,
      title: "Trending Now 🔥",
      subtitle: "Most Popular This Week",
      description: "Check out what's trending this week. Limited stocks available, grab yours before they're gone!",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&h=400&fit=crop",
      buttonText: "Shop Trending",
      link: "/trending",
      bgColor: "from-orange-500 to-red-500"
    },
    {
      id: 6,
      title: "Top Rated Products",
      subtitle: "Customer Favorites",
      description: "Shop the most loved and highly-rated products by our customers. Quality guaranteed!",
      image: "https://images.unsplash.com/photo-1516035069371-29ad0abe9ed2?w=1200&h=400&fit=crop",
      buttonText: "Shop Top Rated",
      link: "/top-rated",
      bgColor: "from-blue-500 to-indigo-600"
    }
  ];

  const features = [
    { icon: FaTruck, title: 'Free Shipping', desc: 'On orders over ₹999' },
    { icon: FaShieldAlt, title: 'Secure Payment', desc: '100% secure checkout' },
    { icon: FaHeadset, title: '24/7 Support', desc: 'Get help anytime' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [bannerSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length);
  };

  return (
    <div className="bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
      {/* Main Banner Slider */}
      <section className="relative overflow-hidden">
        <div className="relative h-96 md:h-[500px]">
          {bannerSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="relative h-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent dark:from-black/80 dark:via-black/60 dark:to-transparent"></div>
                
                <div className="absolute inset-0 flex items-center">
                  <div className="container mx-auto px-4">
                    <div className="max-w-2xl">
                      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4 shadow-lg">
                        <FaFire className="text-yellow-300 animate-pulse" />
                        <span>Limited Time</span>
                      </div>
                      
                      <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
                        {slide.title}
                      </h1>
                      
                      <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">
                        {slide.subtitle}
                      </h2>
                      
                      <p className="text-lg text-gray-200 mb-6 max-w-lg">
                        {slide.description}
                      </p>
                      
                      <button
                        onClick={() => handleCategoryClick(slide.link)}
                        className="inline-block bg-white text-gray-900 font-bold px-8 py-4 rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 text-lg cursor-pointer"
                      >
                        {slide.buttonText}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
          >
            <FaChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
          >
            <FaChevronRight className="w-5 h-5" />
          </button>
          
          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {bannerSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="py-6 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <feature.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white text-sm">{feature.title}</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
