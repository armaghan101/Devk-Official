import React from 'react';
import icon1 from "../assets/Icons/3d-programming.png";
import icon2 from "../assets/Icons/3d-modeling.png";
import icon3 from "../assets/Icons/3d.png";
import ServiceCard from "./ServiceCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function OurServices() {
  useGSAP(() => {
    // Animate the heading
    gsap.from(".services h2", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".services",
        start: "top 90%",
      },
    });

    // Animate the paragraph
    gsap.from(".services p", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
      scrollTrigger: {
        trigger: ".services",
        start: "top 90%",
      },
    });

    // Animate the ServiceCards with stagger
    gsap.from(".box > *", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.5, // Each child animates 0.2s after the previous
      scrollTrigger: {
        trigger: ".box",
        start: "top 80%",
      },
    });
  });

  return (
    <section className="services flex flex-col items-center mt-20 px-4 md:px-8">
      <div className="max-w-4xl text-center">
        <h2 className="text-4xl font-semibold text-gray-700 tracking-wide uppercase">
          Our Services
        </h2>

        <p className="text-[16px] md:text-lg font-normal mt-4 text-gray-600 leading-relaxed">
          Every brand has a story—it just needs the right platform to dominate
          the digital landscape. At <b>DevK</b>, we are the architects of that
          platform, transforming ambitious ideas into captivating, high-growth
          digital experiences.
          <br /><br />
          Ready to amplify your vision?
        </p>
      </div>

      <div className="box flex flex-wrap justify-center items-center gap-8 mt-14 mb-20">
        <ServiceCard
          title="Website Development"
          number="1"
          description="We build high-performing, responsive, and visually captivating websites that create impact."
          iconSrc={icon1}
        />
        <ServiceCard
          title="Graphic Design"
          number="2"
          description="We craft stunning brand identities, visuals, and creative assets that speak to your audience."
          iconSrc={icon2}
        />
        <ServiceCard
          title="UI UX"
          number="3"
          description="We design smooth, meaningful, and delightful user experiences that keep users engaged."
          iconSrc={icon3}
        />
      </div>
    </section>
  );
}

export default OurServices;
