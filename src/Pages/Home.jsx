import React from "react";
import Hero from "../Sections/Hero";
import Brands from "../Components/Brands";
import ServiceCard from "../Components/ServiceCard";
import icon1 from "../assets/Icons/3d-programming.png";
import icon2 from "../assets/Icons/3d-modeling.png";
import icon3 from "../assets/Icons/3d.png";
import Cards from "../Components/Cards";
import Expertises from "../Sections/Expertises";
import OurProjects from "../Components/OurProjects";
import Projects from "../Components/Projects";

// ... (imports remain the same)

function Home() {
  return (
    <>
      <Hero />
      <Brands />

      {/* IMPROVED SERVICES SECTION */}
      <div className="services flex flex-col items-center mt-12 px-4 md:px-8">
        <div className="heading max-w-4xl text-center">
          <h2 className="text-center text-4xl font-semibold leading-8 text-gray-600 tracking-wide uppercase">
            Our Services
          </h2>
          <h3 className="text-[16px] font-normal mt-4 text-gray-600 md:text-lg">
            Every brand has a story—it just needs the right platform to dominate
            the digital landscape. At <b>DevK</b>, we are the architects of that
            platform, transforming ambitious ideas into captivating, high-growth
            digital experiences. From crafting stunning websites and powerful
            branding to delivering strategic marketing campaigns, we build
            solutions that don't just make an impact—they drive results. <br />
            <br />
            Ready to amplify your vision?
          </h3>
        </div>
      </div>

      <div className="servicecards flex justify-center items-center gap-5 mt-10">
        <ServiceCard
          title="Website Development"
          number="1"
          description="At DevK, we craft stunning, user-friendly websites that blend design and functionality, turning ideas into powerful digital experiences"
          iconSrc={icon1}
        />
        <ServiceCard
          title="Graphic Design"
          number="2"
          description="At DevK, we craft stunning, user-friendly websites that blend design and functionality, turning ideas into powerful digital experiences"
          iconSrc={icon2}
        />
        <ServiceCard
          title="UI UX"
          number="3"
          description="At DevK, we craft stunning, user-friendly websites that blend design and functionality, turning ideas into powerful digital experiences"
          iconSrc={icon3}
        />
      </div>

      {/* <div className="Project-section">
          <Expertises />
        </div> */}

      {/* <div className="ourTeam mt-10">
          <h3 className="text-center text-6xl">Meet Our Team</h3>
          <Cards />
        </div> */}

      <div className="ourProjectsSvg flex-col flex justify-center items-center mt-10">
        <OurProjects />
      </div>
      <div className="Projects mt-20">
        <Projects />
      </div>
    </>
  );
}

export default Home;
