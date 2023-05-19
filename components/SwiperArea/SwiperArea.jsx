'use client';
import React from 'react';

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
import './scss/SwiperArea.scss';

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

/* const DEFAULT_SWIPER_OPTION = {
  slidesPerView: 1,
  spaceBetween: 0,
  effect: 'slide',
  pagination: { clickable: true },
  navigation: true,
  scrollbar: false,
  autoplay: false,
  loop: false,
}; */

function SwiperArea({
  type,
  swiperOption,
  firstSwiperOption,
  secondSwiperOption,
  swiperContent,
  firstContent,
  secondContent,
  className,
  firstClassName,
  secondClassName,
  autoPlayStop,
}) {
  // const [uniqueSwiperKey, setUniqueSwiperKey] = React.useState(0);
  const [firstSwiper, setFirstSwiper] = React.useState(null);
  const [secondSwiper, setSecondSwiper] = React.useState(null);

  //const COMPUTED_SWIPER_OPTION = { ...DEFAULT_SWIPER_OPTION, ...swiperOption };
  /* const COMPUTED_FIRST_SWIPER_OPTION = {
    ...DEFAULT_SWIPER_OPTION,
    ...firstSwiperOption,
  };
  const COMPUTED_SCOND_SWIPER_OPTION = {
    ...DEFAULT_SWIPER_OPTION,
    ...secondSwiperOption,
  }; */

  // React.useEffect(() => {
  //   window.addEventListener('resize', () => setUniqueSwiperKey(new Date().getTime()));
  // }, []);

  const SINGLE_SWIPER_OPTION = !swiperOption
    ? {
        slidesPerView: 1,
        spaceBetween: 0,
        effect: 'slide',
        pagination: { clickable: true },
        navigation: true,
        scrollbar: false,
        autoplay: false,
        loop: false,
        nested: true,
        resistance: false,
        observer: true,
        touchStartForcePreventDefault: true,
      }
    : {
        slidesPerView: 1,
        spaceBetween: 0,
        effect: 'slide',
        pagination: { clickable: true },
        navigation: true,
        scrollbar: false,
        autoplay: false,
        loop: false,
        nested: true,
        resistance: false,
        observer: true,
        touchStartForcePreventDefault: true,
        ...swiperOption,
      };
  const FIRST_SWIPER_OPTION = !firstSwiperOption
    ? {
        slidesPerView: 1,
        spaceBetween: 0,
        effect: 'slide',
        pagination: { clickable: true },
        navigation: true,
        scrollbar: false,
        autoplay: false,
        loop: false,
        nested: true,
        resistance: false,
        observer: true,
        touchStartForcePreventDefault: true,
      }
    : {
        slidesPerView: 1,
        spaceBetween: 0,
        effect: 'slide',
        pagination: { clickable: true },
        navigation: true,
        scrollbar: false,
        autoplay: false,
        loop: false,
        nested: true,
        resistance: false,
        observer: true,
        touchStartForcePreventDefault: true,
        ...firstSwiperOption,
      };

  const SECOND_SWIPER_OPTION = !secondSwiperOption
    ? {
        slidesPerView: 1,
        spaceBetween: 0,
        effect: 'slide',
        pagination: { clickable: true },
        navigation: true,
        scrollbar: false,
        autoplay: false,
        loop: false,
        nested: true,
        resistance: false,
        observer: true,
        touchStartForcePreventDefault: true,
      }
    : {
        slidesPerView: 1,
        spaceBetween: 0,
        effect: 'slide',
        pagination: { clickable: true },
        navigation: true,
        scrollbar: false,
        autoplay: false,
        loop: false,
        nested: true,
        resistance: false,
        observer: true,
        touchStartForcePreventDefault: true,
        ...secondSwiperOption,
      };

  const GET_CLASSNAME1st = !firstClassName ? { className: 'swiper_area' } : { className: 'swiper_area ' + firstClassName };

  const GET_CLASSNAME2st = !secondClassName ? { className: 'swiper_area' } : { className: 'swiper_area ' + secondClassName };

  const FIRST_SWIPER_ARR = Array.isArray(firstContent) ? firstContent : [firstContent];

  const FIRST_SWIPER_MAP = [FIRST_SWIPER_ARR.map((contentArrays, idx) => <SwiperSlide key={idx}>{contentArrays}</SwiperSlide>)];

  const SECOND_SWIPER_ARR = Array.isArray(secondContent) ? secondContent : [secondContent];

  const SECOND_SWIPER_MAP = [SECOND_SWIPER_ARR.map((contentArrays, idx) => <SwiperSlide key={idx}>{contentArrays}</SwiperSlide>)];

  const SWIPER_REF = React.useRef(null);

  if (type === 'double') {
    return (
      <>
        {/* S: double swiper */}
        <Swiper // first swiper
          key={`ssw-01`}
          modules={SWIPER_MODULE}
          onSwiper={setFirstSwiper}
          controller={{ control: secondSwiper }}
          {...FIRST_SWIPER_OPTION}
          {...GET_CLASSNAME1st}
        >
          {FIRST_SWIPER_MAP}
        </Swiper>
        <Swiper // second swiper
          key={`ssw-02`}
          modules={SWIPER_MODULE}
          onSwiper={setSecondSwiper}
          controller={{ control: firstSwiper }}
          {...SECOND_SWIPER_OPTION}
          {...GET_CLASSNAME2st}
        >
          {SECOND_SWIPER_MAP}
        </Swiper>
        {/* E: double swiper */}
      </>
    );
  }

  const GET_CLASSNAME = !className ? { className: 'swiper_area' } : { className: 'swiper_area ' + className };

  const SINGLE_SWIPER_ARR = Array.isArray(swiperContent) ? swiperContent : [swiperContent];

  const SINGLE_SWIPER_MAP = [SINGLE_SWIPER_ARR.map((contentArrays, idx) => <SwiperSlide key={idx}>{contentArrays}</SwiperSlide>)];

  return (
    <div
      className="single_swiper_wrap"
      onMouseEnter={() => (autoPlayStop === 'Y' && SWIPER_REF.current.swiper.autoplay.stop() )}
      onMouseLeave={() => (autoPlayStop === 'Y' && SWIPER_REF.current.swiper.autoplay.start() )}
    >
      {/* S: single swiper */}
      <Swiper key={`ssw`} modules={SWIPER_MODULE} {...SINGLE_SWIPER_OPTION} {...GET_CLASSNAME} ref={SWIPER_REF}>
        {SINGLE_SWIPER_MAP}
      </Swiper>
      {/* E: single swiper */}
    </div>
  );
}

export default SwiperArea;
