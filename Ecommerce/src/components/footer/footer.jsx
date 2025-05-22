import React from 'react';
import './footer.css';
import instagram_icon from '../../assets/instagram.png';
import facebook_icon from '../../assets/facebook.png';
import whatsapp_icon from '../../assets/whatsapp.png';
import { FiShoppingBag } from 'react-icons/fi';


const Footer = () => {
  return (
    <div className="footer bg-slate-300  text-black  p-6">
      <div className="shadow-md duration-200 relative z-47">
      <div className="w-full flex justify-between items-center gap-10 px-4 py-4 bg-slate-400">

          <div>
            <a href="#" className="font-bold text-xl flex gap-1 items-center">
              <FiShoppingBag size={30} />
              TheEcomStore
            </a>
          </div>
        </div>
      </div>

      <ul className="footer-links flex gap-6 justify-center my-6">
        <li>About</li>
        <li>Contact Us</li>
      </ul>

      <div className="footer-social-icon flex justify-center gap-4 mb-6">
        <div className="footer-icon-container">
          <img src={instagram_icon} alt="Instagram" />
        </div>
        <div className="footer-icon-container">
          <img src={facebook_icon} alt="Facebook" />
        </div>
        <div className="footer-icon-container">
          <img src={whatsapp_icon} alt="WhatsApp" />
        </div>
      </div>
    
  <div className="text-right">
    <h2 className="text-sm font-semibold uppercase">Terms and Conditions</h2>
  </div>


      
 
      <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between text-center">
        <span className="text-sm text-gray-500">
        © 2025 TheEcomStore by Vani Narwani All Rights Reserved.
         

           
        </span>
      </div>
    </div>
  );
};

export default Footer;
