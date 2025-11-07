import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import '../Components/style.css';

// import required modules
import { EffectCards } from 'swiper/modules';

export default function Cards() {
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper mt-10"
      >
        <SwiperSlide>Kashan Afzal</SwiperSlide>
        <SwiperSlide>Farhan</SwiperSlide>
        <SwiperSlide>Majid</SwiperSlide>
      </Swiper>
    </>
  );
}
