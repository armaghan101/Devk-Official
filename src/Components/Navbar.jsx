import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex justify-between items-center h-20 w-[80vw] sm:w-[70vw] md:w-[85vw] bg-white m-auto rounded-full px-6 md:px-10 text-black shadow-md">
      {/* Logo */}
      <div className="logo">
        <h3 className="text-3xl font-bold">
          <span className="text-purple-600">Dev</span>K
        </h3>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex justify-center items-center gap-10 font-medium">
        <li className="cursor-pointer hover:text-purple-600">Home</li>
        <li className="cursor-pointer hover:text-purple-600">Services</li>
        <li className="cursor-pointer hover:text-purple-600">About Us</li>
      </ul>

      {/* Desktop Button */}
      <div className="hidden md:flex h-10 px-4 bg-black text-white justify-center items-center rounded-full text-sm cursor-pointer hover:bg-purple-600 transition-all">
        <button>Get In Touch</button>
      </div>

      {/* Mobile Hamburger Icon */}
      <div
        className="md:hidden flex flex-col justify-center items-center cursor-pointer space-y-1"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="block w-6 h-0.5 bg-black"></span>
        <span className="block w-6 h-0.5 bg-black"></span>
        <span className="block w-6 h-0.5 bg-black"></span>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="absolute top-24 left-0 w-full bg-white rounded-b-2xl shadow-lg py-6 flex flex-col items-center gap-6 md:hidden z-10">
          <ul className="flex flex-col items-center gap-6 text-lg font-medium">
            <li className="cursor-pointer hover:text-purple-600">Home</li>
            <li className="cursor-pointer hover:text-purple-600">Services</li>
            <li className="cursor-pointer hover:text-purple-600">About Us</li>
          </ul>
          <div className="h-10 px-5 bg-black text-white flex justify-center items-center rounded-full text-sm cursor-pointer hover:bg-purple-600 transition-all">
            <button>Get In Touch</button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
