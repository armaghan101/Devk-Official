import React from "react";
import Hero from "../Sections/Hero";
import Brands from "../Components/Brands";
import ServiceCard from "../Components/ServiceCard";
import icon1 from "../assets/Icons/3d-programming.png";
import icon2 from "../assets/Icons/3d-modeling.png";
import icon3 from "../assets/Icons/3d.png";
import OurProjects from "../Components/OurProjects";
import Projects from "../Components/Projects";
import Quote from "../Components/Quote";
import AboutUs from "../Components/AboutUs";
import Team from "../Components/Team";
import Testimonials from "../Components/Testimonials";
import Footer from "../Components/Footer";

function Home() {
  return (
    <>
      <Hero />
      <Brands />

      {/* SERVICES SECTION */}
      <section className="flex flex-col items-center mt-20 px-4 md:px-8">
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

        <div className="flex flex-wrap justify-center items-center gap-8 mt-14 mb-20">
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
        <h3 className="text-center text-5xl">What Our Client Says</h3>
        <Testimonials />
      </section>

      <section className="mt-10">
        <Footer />
      </section>
    </>
  );
}

export default Home;
