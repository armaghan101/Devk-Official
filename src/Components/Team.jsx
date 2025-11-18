import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import kashan from "../assets/devk assets/kashan2.png";
import armaghan from "../assets/devk assets/armaghan.jpg";
import farhan from "../assets/devk assets/farhan.avif";

const team = [
  { name: "Ava Green", role: "UI/UX Designer", img: kashan },
  { name: "Armaghan Sajid", role: "Frontend Engineer", img: armaghan },
  { name: "Kashan Afzal", role: "Founder", img: kashan },
  { name: "Farhan", role: "Frontend Engineer", img: farhan },
  { name: "Mia Johnson", role: "Marketing Lead", img: kashan },
];

// --- CHANGE HERE ---
// Duplicate the array to ensure Swiper's loop has enough slides
const loopedTeam = [...team, ...team];

export default function Team() {
  return (
    <div className="w-full py-16 bg-white">
      <div className="max-w-7xl px-4 sm:px-6 lg:px-10 mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#2d2b2a] tracking-wide uppercase">
            Meet the Team
          </h2>
          <p className="text-[#7a7876] text-sm sm:text-base mt-2">
            Creative minds working together
          </p>

          {/* Accent underline */}
          <div className="w-16 h-1 bg-[#2d2b2a] mx-auto mt-3 rounded"></div>
        </div>

        <Swiper
          modules={[EffectCoverflow, Pagination, Navigation]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          initialSlide={2} // You might want to set this to 5 to start on the "second" set
          spaceBetween={20}
          loop={true} // This was already correct!
          coverflowEffect={{
            rotate: 12,
            depth: 110,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          className="pb-10"
          breakpoints={{
            0: { spaceBetween: 14 },
            640: { spaceBetween: 22 },
            1024: { spaceBetween: 48 },
          }}
        >
          {/* --- CHANGE HERE --- */}
          {/* Map over the new 'loopedTeam' array */}
          {loopedTeam.map((person, idx) => (
            <SwiperSlide
              key={idx} // Using index is fine for a static list
              className="w-60! sm:w-[280px]! md:w-[320px]!"
            >
              <div
                className="w-full bg-white rounded-3xl overflow-hidden shadow-md 
                transition-transform duration-500 hover:scale-[1.04] hover:shadow-xl border border-[#e6ded7]"
              >
                <div className="w-full h-64 sm:h-72 md:h-80 overflow-hidden">
                  <img
                    src={person.img}
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="px-5 py-4 text-center">
                  <h3 className="text-lg sm:text-xl font-semibold text-[#3b3735]">
                    {person.name}
                  </h3>
                  <p className="text-sm text-[#9a9491] mt-1">{person.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}