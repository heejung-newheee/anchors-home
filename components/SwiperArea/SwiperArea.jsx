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
  firstSwiperOption = DEFAULT_SWIPER_OPTION,
  secondSwiperOption = DEFAULT_SWIPER_OPTION,
  swiperContent,
  swiperContentData = [],
  firstContent,
  secondContent,
}) {
  const [firstSwiper, setFirstSwiper] = React.useState(null);
  const [secondSwiper, setSecondSwiper] = React.useState(null);

  const computedSwiperOption = { ...DEFAULT_SWIPER_OPTION, ...swiperOption };
  const computedFirstSwiperOption = {
    ...DEFAULT_SWIPER_OPTION,
    ...firstSwiperOption,
  };
  const computedScondSwiperOption = {
    ...DEFAULT_SWIPER_OPTION,
    ...secondSwiperOption,
  };

  if (type === 'double') {
    return (
      <>
        {/* S: double swiper */}
        <Swiper // first swiper
          modules={swiperModule}
          onSwiper={setFirstSwiper}
          controller={{ control: secondSwiper }}
          {...computedFirstSwiperOption}
        >
          {swiperContentData.map((d, idx) => (
            <SwiperSlide key={idx}>{firstContent(d)}</SwiperSlide>
          ))}
        </Swiper>
        <Swiper // second swiper
          modules={swiperModule}
          onSwiper={setSecondSwiper}
          controller={{ control: firstSwiper }}
          {...computedScondSwiperOption}
        >
          {swiperContentData.map((d, idx) => (
            <SwiperSlide key={idx}>{secondContent(d)}</SwiperSlide>
          ))}
        </Swiper>
        {/* E: double swiper */}
      </>
    );
  }
  return (
    // S: single swiper
    <Swiper modules={swiperModule} {...computedSwiperOption}>
      {swiperContentData.map((d, idx) => (
        <SwiperSlide key={idx}>{swiperContent(d)}</SwiperSlide>
      ))}
    </Swiper>
    // E: single swiper
  );
}

export default SwiperArea;
