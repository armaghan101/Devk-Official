import React from "react";
import ProjectCard from "./ProjectCard";
import p1 from "../assets/devk assets/p1.png"; // Assuming p1 is a generic project image
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  useGSAP(() => {
    gsap.from(".boxes p", {
      y: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: ".boxes",
        start: "top 70%", 
        end: "bottom 20%",
      },
    });
    gsap.from(".projects", {
      y: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: ".boxes",
        start: "top 38%", 
        end: "bottom 20%",
      },
    });
  });
  return (
    // 🌐 Main Container: Center the content and add vertical padding
    <section className="boxes sm:py-15 ">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* 🏆 Section Header: Clear, bold introduction to the projects */}
        <div className="text-center mb-16 px-4">
          <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 tracking-wide">
            Recent Work That{" "}
            <span className="text-[#4383c0]">Delivered Results</span>
          </h2>

          <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            A selection of projects demonstrating expertise in full-stack
            development and modern design principles.
          </p>
        </div>

        {/* 📚 Projects List: Space out the cards nicely */}
        <div className="projects space-y-16">
          <ProjectCard
            img={p1}
            title="Project Nexus Dashboard" // Using the new 'title' prop
            description="This project involved building a highly responsive administrative dashboard using modern component architecture. Key features include real-time data visualization, user management modules, and integrated analytics. The focus was on scalability and an intuitive user experience across all devices." // Using 'description' prop
            fw1="React"
            fw2="Tailwind"
            fw3="Figma"
          />

          <ProjectCard
            reverse
            img={p1}
            title="E-Commerce API & Frontend" // Example title
            description="A complete headless commerce solution, featuring a robust Node.js/Express API backend and a blazing-fast front-end. We optimized the checkout flow and implemented secure payment gateways, resulting in a 30% reduction in cart abandonment."
            fw1="Node.js"
            fw2="Express"
            fw3="MongoDB"
          />

          <ProjectCard
            img={p1}
            title="Mobile First Marketing Site" // Example title
            description="Designed and developed a sleek marketing site with a primary emphasis on mobile performance. The site scores 98+ on Google PageSpeed Insights and uses advanced CSS techniques for smooth, engaging animations and transitions."
            fw1="Next.js"
            fw2="Sass"
            fw3="Vercel"
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;
