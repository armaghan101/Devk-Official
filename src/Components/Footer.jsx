import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6 border-t border-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content: Links and Info */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          
          {/* 1. Logo & Tagline */}
          <div>
            <h3 className="text-2xl font-bold text-indigo-400 mb-4">DevK</h3>
            <p className="text-gray-400 text-sm">
              Crafting modern, high-performance web experiences.
            </p>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition duration-300">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition duration-300">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition duration-300">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition duration-300">Contact Us</a></li>
            </ul>
          </div>

          {/* 3. Resources */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition duration-300">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition duration-300">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition duration-300">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition duration-300">Terms of Service</a></li>
            </ul>
          </div>

          {/* 4. Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="mailto:info@devk.com" aria-label="Email" className="text-gray-400 hover:text-indigo-400 transition duration-300">
                <FaEnvelope className="w-6 h-6" />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-indigo-400 transition duration-300">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-indigo-400 transition duration-300">
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a href="#" aria-label="GitHub" className="text-gray-400 hover:text-indigo-400 transition duration-300">
                <FaGithub className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Separator Line */}
        <hr className="my-8 border-gray-700" />
        
        {/* Copyright Bar */}
        <div className="flex justify-center items-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} **DevK**. All Rights Reserved.
          </p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;