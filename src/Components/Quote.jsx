import React from "react";

function Quote() {
  return (
    <div className="flex flex-col items-center justify-center px-4 sm:px-8 py-12 bg-linear-to-br from-[#050A30] via-[#002B7A] to-[#0A84FF] rounded-xl shadow-2xl max-w-4xl mx-5 my-12">
      
      {/* Quote Text */}
      <blockquote className="relative text-center w-full lg:w-[80%] mb-6">
        {/* Decorative Quote Mark */}
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-5xl sm:text-6xl md:text-7xl font-serif text-white">
          “
        </span>

        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium italic leading-relaxed text-gray-100">
          Every expert developer once wrote their first line of code. Don’t rush
          the process. Learn a little each day, build what excites you, and let
          curiosity guide you. Web development is a journey, not a race. Join us
          on that journey, and grow with us one line at a time.
        </h3>
      </blockquote>

      {/* Author Name */}
      <h3 className="text-lg sm:text-xl font-semibold text-white tracking-wide mt-4">
        — KASHAN AFZAL
      </h3>
    </div>
  );
}

export default Quote;
