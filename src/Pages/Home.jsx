import React from "react";
import Hero from "../Sections/Hero";
import Brands from "../Components/Brands";
import OurProjects from "../Components/OurProjects";
import Projects from "../Components/Projects";
import Quote from "../Components/Quote";
import AboutUs from "../Components/AboutUs";
import Team from "../Components/Team";
import Testimonials from "../Components/Testimonials";
import Footer from "../Components/Footer";
import OurServices from '../Components/OurServices'
function Home() {
  return (
    <>
      <Hero />
      <Brands />

      {/* SERVICES SECTION */}
      <section>
        <OurServices />
      </section>

      {/* PROJECTS */}
      <section className="">
        <Projects />
      </section>

      {/* ABOUT US */}
      <section className=" flex justify-center">
        <AboutUs />
      </section>

      {/* QUOTE */}
      <section className="flex justify-center">
        <Quote />
      </section>

      {/* TEAM */}
      <section className="">
        <Team />
      </section>

      <section className="">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-700 tracking-wide uppercase">
            What Our Clients Say
          </h2>
          <div className="w-16 h-1 bg-[#2d2b2a] mx-auto mt-3 rounded"></div>
        </div>
        <Testimonials />
      </section>

      <section className="mt-10">
        <Footer />
      </section>
    </>
  );
}

export default Home;
