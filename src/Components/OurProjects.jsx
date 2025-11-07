import React from "react";


function OurProjects() {
  const svgSize = 250;
  const center = svgSize / 2;
  const arrowSize = 10; // Controls overall arrow dimensions
  
  // Define the coordinates for the simple shaft and head
  const shaftStart = center - 30;
  const shaftEnd = center + 10;
  
  return (
    // Re-added the style for debugging, please make sure you see the border!
    <svg 
      width={svgSize} 
      height={svgSize} 
      viewBox={`0 0 ${svgSize} ${svgSize}`}
      style={{  backgroundColor: 'white' }} 
    >
      {/* The path for the text to follow */}
      <path
        className="fill-transparent"
        id="curve"
        d="M 25 125 A 100 100 0 1 1 25 127"
      ></path>
      
      {/* The rotating text */}
      <text className="text text-rotation"> 
        <textPath className="text-xl font-medium" href="#curve">
          OUR PROJECTS OUR PROJECTS OUR PROJECTS OUR PROJECTS OUR PROJECTS OUR PROJECTS
        </textPath>
      </text>

      {/* --- SIMPLER ARROW (Shaft and Head) --- */}
      
      {/* 1. Arrow Shaft (Simple thick line) */}
      <line 
        x1={center} 
        y1={shaftStart} 
        x2={center} 
        y2={shaftEnd} 
        stroke="#333333" 
        strokeWidth="6" 
        strokeLinecap="round" 
      />

      {/* 2. Arrow Head (Simple filled triangle) */}
      <polygon
        points={`
          ${center - arrowSize},${shaftEnd} 
          ${center + arrowSize},${shaftEnd} 
          ${center},${shaftEnd + arrowSize}
        `}
        fill="#333333" 
      />
      {/* ------------------------------------- */}
      
    </svg>
  );
}

export default OurProjects;