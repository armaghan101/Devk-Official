import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import t1 from '../assets/devk assets/t1.jpg';
import t2 from '../assets/devk assets/t2.jpg';

// ⭐ Testimonials Data
const testimonials = [
  {
    name: "Client One",
    img: t1,
    review: "As someone who knows Kashan, I'm impressed by his web development and design skills. His work is top-notch, with exceptional quality and attention to detail. If you're looking for someone who truly excels, Kashan is your top choice.",
    rating: 5,
  },
  {
    name: "Client Two",
    img: t2,
    review: "I’m extremely happy with Kashan’s work. He’s a skilled developer who delivered on time and exceeded expectations. His expertise made the process smooth and efficient. I look forward to working with him again.",
    rating: 5,
  },
];

// ⭐ Helper to create dynamic stars
const Stars = ({ count }) => "★".repeat(count).padEnd(5, "☆");

export default function Testimonials() {
  return (
    <section className="w-full py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1, centeredSlides: true },
            768: { slidesPerView: 2, centeredSlides: false },
            1024: { slidesPerView: 2, centeredSlides: false },
          }}
          modules={[Pagination, Autoplay]}
          className="pb-10"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-100 text-gray-800 rounded-2xl p-6 shadow-md flex flex-col justify-between h-full min-h-80 md:min-h-[300px] transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
                
                <div>
                  <div className="flex items-center gap-3">
                    <img
                      src={t.img}
                      alt={t.name || `Testimonial ${index + 1}`}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <h3 className="font-semibold text-lg">{t.name}</h3>
                  </div>

                  <div className="text-yellow-400 text-lg mt-3">
                    {Stars({ count: t.rating })}
                  </div>

                  <p className="mt-4 text-gray-700 leading-relaxed">
                    {t.review}
                  </p>
                </div>

                <a
                  href="#"
                  className="flex items-center gap-2 text-[#4285F4] mt-6 font-medium text-sm hover:underline"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                    className="w-4"
                    alt="Google"
                  />
                  Posted on Google
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
