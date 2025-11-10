import React from "react";
// import gsap from 'gsap'
import banner from "../assets/Hero.png";
import Navbar from "../Components/Navbar";
import CountUp from "react-countup";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";

function Hero() {
  // useGSAP(() => {
  //   gsap.to(".line", {
  //     transform: "translateY(-100%)",
  //     duration: 1,
  //     delay: 0.5,
  //     stagger: 0.1,
  //   });
  // });
  const heroStyle = {
    backgroundImage: `url(${banner})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "",
  };
  return (
    <>
      <main style={heroStyle} className="h-screen w-screen relative">
        <header className="pt-5">
          <Navbar />
        </header>
        <main className="h-[88%] w-screen flex justify-center items-center flex-col">
          <h3 className="hero-text font-medium text-5xl px-5 lg:text-7xl text-center text-white">
            We only teach what we are <br /> really really good at.
          </h3>
          <div className="bttns flex justify-center items-center gap-7 mt-10">
            <button className="h-15 bg-white rounded-full px-8 lg:px-15 ">
              Get In Touch
            </button>
            <button className="h-15 rounded-full px-8 lg:px-15 border-2 border-white text-white">
              Learn More
            </button>
          </div>
          <div className="experience flex justify-center items-center gap-10 mt-30 text-white lg:text-xl">
            <div className="websites text-center">
              <CountUp start={0} end={50} duration={5} delay={0.5} suffix=" + " />
              <h3>Websites Built</h3>
            </div>
            <div className="websites text-center">
              <CountUp start={0} end={4} duration={5} delay={0.5} suffix=" Years" />
              <h3>Experience</h3>
            </div>
            <div className="websites text-center">
              <CountUp start={0} end={30} duration={5} delay={0.5} suffix=" + " />
              <h3>5 Stars Reviews</h3>
            </div>
          </div>
          {/* <div className="loading flex justify-center items-center absolute top-0 left-0">
            <div className="line h-screen w-53 bg-[#004586]"></div>
            <div className="line h-screen w-53 bg-[#004586]"></div>
            <div className="line h-screen w-53 bg-[#004586]"></div>
            <div className="line h-screen w-53 bg-[#004586]"></div>
            <div className="line h-screen w-53 bg-[#004586]"></div>
            <div className="line h-screen w-53 bg-[#004586]"></div>
            <div className="line h-screen w-53 bg-[#004586]"></div>
            <div className="line h-screen w-53 bg-[#004586]"></div>
          </div>  */}
        </main>
      </main>
    </>
  );
}

export default Hero;
