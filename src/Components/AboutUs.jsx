import React from 'react'
import kashan from '../assets/devk assets/kashan2.png' // Assuming 'kashan' is the correct image for your content
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function AboutUs() {
  useGSAP(() => {
    gsap.from(".ab-text h2,.ab-text p,.ab-text .ab-span", {
      duration: 2,
      opacity: 0,
      scrollTrigger: {
        trigger: ".about",
        start: "top 50%", 
        end: "bottom 20%",
      },
    });
    gsap.from(".ab-img", {
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".about",
        start: "top 50%", 
        end: "bottom 20%",
      },
    });
  });
  return (
    // 🎨 Added a light background section to make it stand out
    <section className="about py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-16">
          
          {/* 🖼️ Image Wrapper - Increased size and added a distinctive border/shadow */}
          <div className="ab-img w-full lg:w-1/3 relative group">
            {/* Background shape for visual depth */}
            <div className="absolute inset-0 bg-indigo-200 transform translate-x-3 translate-y-3 rounded-3xl opacity-60 group-hover:translate-x-2 group-hover:translate-y-2 transition duration-300 hidden md:block"></div>
            
            <img
              className="rounded-3xl w-full object-cover shadow-2xl relative z-10 transform transition duration-500 group-hover:scale-[1.01] border-4 border-white"
              src={kashan}
              alt="Founder - Company Leadership"
            />
          </div>

          {/* 📝 Text Content - More spacing and emphasis on the title */}
          <div className="ab-text lg:w-2/3 space-y-8 lg:pr-12">
            
            <span className="ab-span inline-block text-sm font-medium uppercase tracking-widest text-[#4383c0]">
              Our Mission
            </span>
            
            <h2 className="text-5xl font-extrabold text-gray-900 leading-tight">
              Where <span className="text-[#4383c0]">Creativity</span> Meets Code.
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed border-l-4 border-[#4383c0] pl-4">
              We are a dedicated team of developers, designers, and problem-solvers. Our core mission is to transform your complex ideas into **efficient, scalable, and visually engaging** digital solutions that not only work flawlessly but stand out with quality, performance, and purpose.
            </p>
            
            <p className="text-lg text-gray-500">
              Join us on this journey — let's build something exceptional together.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default AboutUs