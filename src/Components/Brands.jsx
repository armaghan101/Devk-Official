import React from 'react'
import b1 from '../assets/Logos/amazon-logo-amazon-icon-transparent-free-png.png'
import b2 from '../assets/Logos/facebook-1-logo-png-transparent.png'
import b3 from '../assets/Logos/Fiverr-Logo-2020-present.png'
import b4 from '../assets/Logos/Shopify_logo_2018.svg.png'
import b5 from '../assets/Logos/Upwork-Logo-1.png'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const brandLogos = [
  { src: b1, alt: 'Amazon' },
  { src: b2, alt: 'Facebook' },
  { src: b3, alt: 'Fiverr' },
  { src: b4, alt: 'Shopify' },
  { src: b5, alt: 'Upwork' },
];

function Brands() {
  useGSAP(() => {
    gsap.from(".brands h2", {
      y: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: ".brands",
        start: "top 90%", 
        end: "bottom 20%",
      },
    });
    gsap.from(".marquee-container", {
      y: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: ".brands",
        start: "top 78%", 
        end: "bottom 20%",
      },
    });
  });
  return (
    <>
      <style>
        {`
          @keyframes infinite-scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }

          .animate-marquee {
            display: flex;
            width: 200%;
            animation: infinite-scroll 30s linear infinite;
          }

          .animate-marquee:hover {
            animation-play-state: paused;
          }

          .marquee-container {
            overflow: hidden;
            -webkit-mask-image: linear-gradient(
              to right, transparent, black 10%, black 90%, transparent
            );
            mask-image: linear-gradient(
              to right, transparent, black 10%, black 90%, transparent
            );
          }

          .logo-set {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 50%;
            flex-shrink: 0;
            gap: 2rem;
          }
        `}
      </style>

      <div className="brands w-full bg-white py-10 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <h2 className="text-center text-base font-semibold leading-8 text-gray-600 uppercase tracking-wide">
            Trusted by amazing brands
          </h2>

          <div className="marquee-container mt-10 sm:mt-14">
            <div className="animate-marquee">

              <div className="logo-set">
                {brandLogos.map((logo, index) => (
                  <img
                    key={`logo1-${index}`}
                    className="
                      object-contain 
                      max-h-12 sm:max-h-10 md:max-h-15 
                      grayscale opacity-70
                      hover:grayscale-0 hover:opacity-100 hover:scale-105
                      transition-all duration-300 px-3 sm:px-6 md:px-8 lg:px-10
                    "
                    src={logo.src}
                    alt={logo.alt}
                  />
                ))}
              </div>

              <div className="logo-set" aria-hidden="true">
                {brandLogos.map((logo, index) => (
                  <img
                    key={`logo2-${index}`}
                    className="
                      object-contain
                      max-h-7 sm:max-h-10 md:max-h-12 
                      grayscale opacity-70
                      hover:grayscale-0 hover:opacity-100 hover:scale-105
                      transition-all duration-300 px-3 sm:px-6 md:px-8 lg:px-10
                    "
                    src={logo.src}
                    alt={logo.alt}
                  />
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Brands
