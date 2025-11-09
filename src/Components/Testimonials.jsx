import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// ⭐ Testimonials Data
const testimonials = [
  {
    name: "Kareen Holland",
    img: "https://i.pravatar.cc/150?img=47",
    review: "Great services quick and efficient. Get solutions quickly.",
    rating: 5,
  },
  {
    name: "Britta Christiansen",
    img: "https://i.pravatar.cc/150?img=32",
    review:
      "Thanks for your patience, your brilliance and your gentle nudges. You transformed my website beautifully.",
    rating: 5,
  },
  {
    name: "Britta Christiansen",
    img: "https://i.pravatar.cc/150?img=32",
    review:
      "Thanks for your patience, your brilliance and your gentle nudges. You transformed my website beautifully.",
    rating: 5,
  },
  {
    name: "Britta Christiansen",
    img: "https://i.pravatar.cc/150?img=32",
    review:
      "Thanks for your patience, your brilliance and your gentle nudges. You transformed my website beautifully.",
    rating: 5,
  },
  {
    name: "Andrew",
    img: "https://i.pravatar.cc/150?img=13",
    review:
      "Communication was great and professional. The team made the process smooth.",
    rating: 5,
  },
  {
    name: "Andrew",
    img: "https://i.pravatar.cc/150?img=13",
    review:
      "Communication was great and professional. The team made the process smooth.",
    rating: 5,
  },
];

// ⭐ Helper to create dynamic stars
const Stars = ({ count }) => "★".repeat(count).padEnd(5, "☆"); // 5 total stars

export default function Testimonials() {
  return (
    <section className="w-full opacity-0 translate-y-6 animate-fadeUp h-80 flex justify-center items-center">
      <div className="max-w-7xl mx-auto px-6">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Pagination, Autoplay]}
          className="pb-10"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div
                className="bg-gray-100 text-gray-800 rounded-2xl p-6 shadow-md flex flex-col justify-between min-h-[260px] md:min-h-[300px] lg:min-h-70
                transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Profile */}
                <div className="flex items-center gap-3">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <h3 className="font-semibold text-lg">{t.name}</h3>
                </div>

                {/* Stars */}
                <div className="text-yellow-400 text-lg mt-3">
                  {Stars({ count: t.rating })}
                </div>

                {/* Review */}
                <p className="mt-4 text-gray-700 leading-relaxed">{t.review}</p>

                {/* Google Link */}
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
