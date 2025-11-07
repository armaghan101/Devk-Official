import React from "react";

function ProjectCard({ img, text, fw1, fw2, fw3, reverse }) {
  return (
    <div
      className={`Project flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } justify-between items-center gap-6 md:mx-10 p-4`}
    >
      <img
        className="rounded-xl w-full md:w-[45%] object-cover"
        src={img}
        alt="project"
      />

      <div className="text md:w-[45%] space-y-3">
        <p className="text-lg text-gray-600 leading-relaxed">{text}</p>

        <div className="frameWorks flex flex-wrap items-center gap-3 text-gray-600">
          <span className="border px-3 py-1 rounded-full">{fw1}</span>
          <span className="border px-3 py-1 rounded-full">{fw2}</span>
          <span className="border px-3 py-1 rounded-full">{fw3}</span>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
