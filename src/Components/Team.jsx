import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import kashan from "../assets/devk assets/kashan2.png";
import armaghan from "../assets/devk assets/armaghan.jpg";
import farhan from '../assets/devk assets/farhan.avif'

const team = [
  { name: "Ava Green", role: "UI/UX Designer", img: kashan },
  { name: "Armaghan Sajid", role: "Frontend Engineer", img: armaghan },
  { name: "Kashan Afzal", role: "Founder", img: kashan },
  { name: "Farhan", role: "Frontend Engineer", img: farhan },
  { name: "Mia Johnson", role: "Marketing Lead", img: kashan }
];

export default function Team() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="w-full max-w-7xl py-20 px-15">

        {/* section text */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#2d2b2a]">
            Meet the Team
          </h2>
          <p className="text-[#7a7876] text-sm mt-2">
            Creative minds working together
          </p>
        </div>

        <Swiper
          modules={[EffectCoverflow, Pagination, Navigation]}
          initialSlide={1}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={false}
          slidesPerView={3}
          spaceBetween={48}
          coverflowEffect={{
            rotate: 12,
            depth: 110,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          className="team-swiper"
          breakpoints={{
            0: { slidesPerView: 1.2, spaceBetween: 14 },
            640: { slidesPerView: 1.6, spaceBetween: 22 },
            1024: { slidesPerView: 3, spaceBetween: 48 },
          }}
        >
          {team.map((person, idx) => (
            <SwiperSlide key={idx}>
              <div className="w-full h-[520px] bg-white rounded-3xl overflow-hidden shadow-md 
                transition-transform duration-500 hover:scale-[1.04] hover:shadow-xl border border-[#e6ded7]">

                <img
                  src={person.img}
                  alt={person.name}
                  className="w-full h-[80%] object-cover"
                />

                <div className="px-5 py-4 text-center">
                  <h3 className="text-xl font-semibold text-[#3b3735]">
                    {person.name}
                  </h3>
                  <p className="text-sm text-[#9a9491] mt-1">
                    {person.role}
                  </p>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
