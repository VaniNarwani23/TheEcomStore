import React from 'react';
import BannerImg from "../../assets/4547829.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import { motion } from "framer-motion"; 

const Banner = () => {
  return (
    <div className="min-h-[700px] flex justify-center items-center py-12 sm:py-0 w-full">
      <div className="container px-4 sm:px-0"> {/* Added padding for small screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* Image Section */}
          <div data-aos="zoom-in" className="flex justify-center">
            <img 
              className="w-full max-w-[350px] sm:max-w-[400px] h-auto mx-auto object-cover" 
              src={BannerImg} 
              alt="Banner img" 
            />
          </div>
          
          
          <div className="flex flex-col justify-center gap-6 sm:pt-0 text-center sm:text-left">
            <motion.h1 
              initial={{ y: 100, opacity: 0 }} 
              animate={{ y: [10], opacity: 1 }} 
              transition={{ duration: 0.3, delay: 0.5 }} 
              data-aos="fade-up" 
              className="text-3xl sm:text-4xl font-bold"
            >
               Mega Sale Alert at TheEcomStore! 🔥
            </motion.h1>
            <p data-aos="fade-up" className="text-sm text-gray-500 tracking-wide leading-5">
            Get ready to revamp your wardrobe and upgrade your gadgets without breaking the bank! Enjoy massive discounts on top-rated products across categories – from trendy fashion for men, women, and kids to the latest in electronics. Whether you're shopping for essentials or treating yourself, our limited-time sale has something special for everyone. Hurry – deals like these won’t last forever. Shop now and save big, only at TheEcomStore!
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
              <div data-aos="fade-up" className="flex items-center gap-2 sm:gap-4">
                <GrSecure className="text-3xl h-10 w-10 sm:h-12 sm:w-12 shadow-sm p-3 sm:p-4 rounded-full bg-violet-100 dark:bg-violet-400"/>
                <p className="text-sm sm:text-base">Quality Products</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-2 sm:gap-4">
                <IoFastFood className="text-3xl h-10 w-10 sm:h-12 sm:w-12 shadow-sm p-3 sm:p-4 rounded-full bg-orange-400" />
                <p className="text-sm sm:text-base">Fast Delivery</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-2 sm:gap-4">
                <GiFoodTruck className="text-3xl h-10 w-10 sm:h-12 sm:w-12 shadow-sm p-3 sm:p-4 rounded-full bg-blue-400" />
                <p className="text-sm sm:text-base">Payment Methods</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-2 sm:gap-4">
                <GiFoodTruck className="text-3xl h-10 w-10 sm:h-12 sm:w-12 shadow-sm p-3 sm:p-4 rounded-full bg-purple-400" />
                <p className="text-sm sm:text-base">Get Offers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
