'use client';
import React from 'react';

import './scss/SwiperArea.scss';

// S: swiper import
import {
  Pagination,
  Navigation,
  Scrollbar,
  EffectFade,
  EffectCube,
  EffectCoverflow,
  EffectFlip,
  EffectCards,
  EffectCreative,
  Controller,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-cube';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-flip';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-creative';
// E: swiper import

const swiperModule = [
  Pagination,
  Navigation,
  Scrollbar,
  EffectFade,
  EffectCube,
  EffectCoverflow,
  EffectFlip,
  EffectCards,
  EffectCreative,
  Controller,
];

const DEFAULT_SWIPER_OPTION = {
  slidesPerView: 1,
  spaceBetween: 0,
  effect: 'slide',
  pagination: { clickable: true },
  navigation: true,
  scrollbar: false,
};

function SwiperArea({
  type,
  swiperOption = DEFAULT_SWIPER_OPTION,
  swiperContent,
  firstContent,
  secondContent,
}) {
  const [firstSwiper, setFirstSwiper] = React.useState(null);
  const [secondSwiper, setSecondSwiper] = React.useState(null);

  const computedSwiperOption = { ...DEFAULT_SWIPER_OPTION, ...swiperOption };

  if (type === 'double') {
    return (
      <>
        <Swiper
          modules={swiperModule}
          onSwiper={setFirstSwiper}
          controller={{ control: secondSwiper }}
        >
          <SwiperSlide>{firstContent}</SwiperSlide>
          <SwiperSlide>{firstContent}</SwiperSlide>
          <SwiperSlide>{firstContent}</SwiperSlide>
        </Swiper>
        <Swiper
          modules={swiperModule}
          onSwiper={setSecondSwiper}
          controller={{ control: firstSwiper }}
        >
          <SwiperSlide>{secondContent}</SwiperSlide>
          <SwiperSlide>{secondContent}</SwiperSlide>
          <SwiperSlide>{secondContent}</SwiperSlide>
        </Swiper>
      </>
    );
  }
  return (
    <Swiper modules={swiperModule} {...computedSwiperOption}>
      <SwiperSlide>{swiperContent}</SwiperSlide>
      <SwiperSlide>{swiperContent}</SwiperSlide>
      <SwiperSlide>{swiperContent}</SwiperSlide>
    </Swiper>
  );
}

export default SwiperArea;
