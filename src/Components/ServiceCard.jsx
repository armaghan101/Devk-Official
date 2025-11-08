import React from 'react';

/**
 * A reusable service card component.
 * @param {object} props
 * @param {string} props.number - The large decorative number (e.g., "1").
 * @param {string} props.iconSrc - The URL/path to the icon graphic.
 * @param {string} props.title - The main heading (e.g., "WEBSITE DEVELOPMENT").
 * @param {string} props.description - The descriptive text.
 */
const ServiceCard = ({ number, iconSrc, title, description }) => {
  return (
    <div className="bg-black text-white p-8 md:p-10 relative overflow-hidden max-w-sm w-full shadow-lg h-105">
      
      {/* 1. Decorative Background Number */}
      <div className="cardtext absolute top-6 right-8 text-9xl font-bold text-[#4383c0] z-0">
        {number}
      </div>

      {/* 2. Decorative Bottom-Left Circle */}
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-c bg-[#4383c0] rounded-full z-0 opacity-80"></div>

      {/* 3. Main Content (positioned above decorations) */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Icon */}
        <div className="mb-6">
          <img 
            src={iconSrc} 
            alt={`${title} icon`} 
            className="h-20" 
            aria-hidden="true"
          />
        </div>

        {/* Heading */}
        <h3 className="text-xl font-bold uppercase tracking-wider mb-4">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;