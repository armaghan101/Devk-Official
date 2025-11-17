import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-linear-to-br from-[#050A30] via-[#002B7A] to-[#0A84FF] text-white pt-12 pb-6 border-t border-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          
          {/* Logo */}
          <div>
            <h3 className="text-2xl font-bold text-indigo-300 mb-4">DevK</h3>
            <p className="text-gray-200 text-sm max-w-xs">
              Crafting modern, high-performance web experiences.
            </p>
          </div>

          {/* Contact Info Column */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="text-indigo-200 space-y-2 text-sm">
              <li>📍 Mian khel Bazar</li>
              <li>📞 +92 313 9614220</li>
              <li>✉️ kashandevksystem@gmail.com</li>
              <li>⏰ Mon - Sun: 9:00 AM - 6:00 PM</li>
            </ul>
          </div>

          {/* Social Icons */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-5">
              <a href="mailto:kashandevksystem@gmail.com" className="text-indigo-200 hover:text-white transition">
                <FaEnvelope className="w-6 h-6" />
              </a>
              <a href="https://wa.me/+923139614220" className="text-indigo-200 hover:text-white transition">
                <FaWhatsapp className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/company/devk-system/posts/?feedView=all" className="text-indigo-200 hover:text-white transition">
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a href="https://github.com/kashanafzl" className="text-indigo-200 hover:text-white transition">
                <FaGithub className="w-6 h-6" />
              </a>
            </div>
          </div>

        </div>

        <hr className="my-8 border-indigo-500/40" />

        {/* Copyright */}
        <div className="flex justify-center items-center">
          <p className="text-sm text-indigo-200">
            &copy; {new Date().getFullYear()} <strong>DevK</strong>. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
