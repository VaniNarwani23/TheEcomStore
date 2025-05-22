import React from 'react';
import Button from './button';

const HeroSection = () => {
  return (
    <section className="relative bg-white dark:bg-slate-900 overflow-hidden">
     
      <div className="absolute inset-0 z-0">
        <div className="absolute right-0 bottom-0 w-2/3 h-2/3 bg-white dark:bg-slate-900 rounded-tl-[100px] -z-10"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center py-16 md:py-24">
        
          <div className="w-full md:w-1/2 md:pr-12 mb-8 md:mb-0 z-10">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-slate-900 dark:text-white">
            Find Your Perfect Products
            </h1>
            <p className="text-xl text-black dark:text-white mb-8 max-w-lg">
              Discover our premium collection of innovative products designed to elevate your everyday experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg">Shop Now</Button>
              <Button size="lg">Learn More</Button>
            </div>
          </div>

          
          <div className="w-full md:w-1/2 z-10 transform transition-transform duration-500 hover:scale-105">
            <img
              src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Premium tech products"
              className="w-full h-auto object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
