import React from "react";

function Quote() {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gray-900 rounded-xl shadow-2xl max-w-4xl h-100 mx-auto my-12">
      {/* Quote Text */}
      <blockquote className="relative text-center w-full lg:w-[80%] mb-6">
        {/* Decorative Quote Mark */}
        <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-6xl font-serif text-white ">
          “
        </span>

        <h3 className="text-xl sm:text-2xl font-semibold italic leading-relaxed text-gray-900 dark:text-gray-100">
          "Every expert developer once wrote their first line of code. Don't
          rush the process. Learn a little each day, build what excites you, and
          let curiosity guide you. Web development is a journey — not a race.
          Join us on that journey, and grow with us one line at a time."
        </h3>
      </blockquote>

      {/* Author/Source */}
      <h3 className="text-xl font-medium text-white tracking-wider mt-4">
        — KASHAN AFZAL
      </h3>
    </div>
  );
}

export default Quote;
