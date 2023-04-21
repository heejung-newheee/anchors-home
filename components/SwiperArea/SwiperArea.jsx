'use client';
import React from 'react';

import './scss/SwiperArea.scss';

// S: swiper import
import {
  Autoplay,
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

const SWIPER_MODULE = [
  Autoplay,
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
  autoplay: false,
  loop: false,
};

function SwiperArea({
  type,
  swiperOption = DEFAULT_SWIPER_OPTION,
  firstSwiperOption = DEFAULT_SWIPER_OPTION,
  secondSwiperOption = DEFAULT_SWIPER_OPTION,
  swiperContent,
  firstContent,
  secondContent,
  className,
  firstClassName,
  secondClassName,
}) {
  const [firstSwiper, setFirstSwiper] = React.useState(null);
  const [secondSwiper, setSecondSwiper] = React.useState(null);

  const COMPUTED_SWIPER_OPTION = { ...DEFAULT_SWIPER_OPTION, ...swiperOption };
  const COMPUTED_FIRST_SWIPER_OPTION = {
    ...DEFAULT_SWIPER_OPTION,
    ...firstSwiperOption,
  };
  const COMPUTED_SCOND_SWIPER_OPTION = {
    ...DEFAULT_SWIPER_OPTION,
    ...secondSwiperOption,
  };

  const GET_CLASSNAME1st =
    firstClassName == undefined
      ? { className: 'swiper_area' }
      : { className: 'swiper_area ' + firstClassName };

  const GET_CLASSNAME2st =
    secondClassName == undefined
      ? { className: 'swiper_area' }
      : { className: 'swiper_area ' + secondClassName };

  const FIRST_SWIPER_ARR = Array.isArray(firstContent)
    ? firstContent
    : [firstContent];

  const FIRST_SWIPER_MAP = [
    FIRST_SWIPER_ARR.map((contentArrays, idx) => (
      <SwiperSlide key={idx}>{contentArrays}</SwiperSlide>
    )),
  ];

  const SECOND_SWIPER_ARR = Array.isArray(secondContent)
    ? secondContent
    : [secondContent];

  const SECOND_SWIPER_MAP = [
    SECOND_SWIPER_ARR.map((contentArrays, idx) => (
      <SwiperSlide key={idx}>{contentArrays}</SwiperSlide>
    )),
  ];

  if (type === 'double') {
    return (
      <>
        {/* S: double swiper */}
        <Swiper // first swiper
          modules={SWIPER_MODULE}
          onSwiper={setFirstSwiper}
          controller={{ control: secondSwiper }}
          {...COMPUTED_FIRST_SWIPER_OPTION}
          {...GET_CLASSNAME1st}
        >
          {FIRST_SWIPER_MAP}
        </Swiper>
        <Swiper // second swiper
          modules={SWIPER_MODULE}
          onSwiper={setSecondSwiper}
          controller={{ control: firstSwiper }}
          {...COMPUTED_SCOND_SWIPER_OPTION}
          {...GET_CLASSNAME2st}
        >
          {SECOND_SWIPER_MAP}
        </Swiper>
        {/* E: double swiper */}
      </>
    );
  }

  const GET_CLASSNAME =
    className == undefined
      ? { className: 'swiper_area' }
      : { className: 'swiper_area ' + className };

  const SINGLE_SWIPER_ARR = Array.isArray(swiperContent)
    ? swiperContent
    : [swiperContent];

  const SINGLE_SWIPER_MAP = [
    SINGLE_SWIPER_ARR.map((contentArrays, idx) => (
      <SwiperSlide key={idx}>{contentArrays}</SwiperSlide>
    )),
  ];

  return (
    // S: single swiper
    <Swiper
      modules={SWIPER_MODULE}
      {...COMPUTED_SWIPER_OPTION}
      {...GET_CLASSNAME}
    >
      {SINGLE_SWIPER_MAP}
    </Swiper>
    // E: single swiper
  );
}

export default SwiperArea;
