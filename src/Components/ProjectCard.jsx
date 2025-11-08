import React from "react";

function ProjectCard({ img, title, description, fw1, fw2, fw3, reverse }) { // 💡 Added 'title' and renamed 'text' to 'description' for clarity
  return (
    // 🖼️ Card Container: Added padding, a clean white background, and a sharp shadow for a "lifted" look.
    <div
      className={`Project bg-white rounded-2xl shadow-xl hover:shadow-2xl transition duration-500 overflow-hidden 
        flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } justify-between items-stretch gap-8 p-6 md:p-10 my-8`} // Increased padding and gap
    >
      
      {/* 📸 Image Section: Focus on the visual. */}
      <div className="w-full md:w-[50%] shrink-0">
        <img
          className="rounded-xl w-full h-full object-cover transition duration-300 hover:scale-[1.02] transform"
          src={img}
          alt={`Screenshot of the ${title} project`}
        />
      </div>

      {/* 📝 Text Content: Better typography and visual hierarchy. */}
      <div className="text w-full md:w-[50%] space-y-5 flex flex-col justify-center">
        
        {/* 🏆 New Title element for a clear heading */}
        <h3 className="text-3xl font-bold text-gray-900 leading-tight">
          {title || "Project Title Placeholder"}
        </h3>

        {/* 📜 Description */}
        <p className="text-lg text-gray-700 leading-relaxed border-l-4 border-[#4383c0] pl-4"> 
          {/* Using 'description' prop instead of 'text' */}
          {description || "A brief, compelling description of the project, its goals, and key features."} 
        </p>

        {/* 🛠️ Frameworks/Tech Stack: Swapped borders for colored tags */}
        <div className="frameWorks flex flex-wrap items-center gap-2 pt-2">
          
          {/* Reusable component for technology tags */}
          <TechTag text={fw1} />
          <TechTag text={fw2} />
          {fw3 && <TechTag text={fw3} />} {/* Only render fw3 if it exists */}
          
        </div>
      </div>
    </div>
  );
}

// 🏷️ Sub-component for a visually appealing tech tag
const TechTag = ({ text }) => {
  if (!text) return null;
  return (
    <span className="px-3 py-1 text-sm font-medium tracking-wide rounded-full text-[#4383c0] bg-indigo-100 hover:bg-indigo-200 transition duration-200 cursor-default">
      {text}
    </span>
  );
};

export default ProjectCard;