'use client';

import React, { useEffect, useState } from 'react';

import ScrollTriggerArea from '@/components/ScrollTriggerArea/ScrollTriggerArea';
import SwiperArea from '@/components/SwiperArea/SwiperArea';
import FinderWorksList from '@/components/FinderWorksList/FinderWorksList';

import main from '@/helper/data/json/contents/main/main.json';

// S: scroll trigger option
const OURWORKS_SCROLL_OPTION = {
  triggerStart: [
    { mobile: '0px', table: '0px', desktop: '0px', wide: '200px' },
    { mobile: '0px', table: '0px', desktop: '250px', wide: '300px' },
  ],
  triggerEnd: [
    { mobile: '0px', table: '0px', desktop: '5000vh', wide: '200px' },
    { mobile: '4500vh', table: '4500vh', desktop: '4500vh', wide: '4500vh' },
  ],
  XAxes: {
    expertiseTrigger: [
      { mobile: '0px', table: '0px', desktop: '-580vh', wide: '200px' },
      { mobile: '0px', table: '0px', desktop: '-580vh', wide: '200px' },
      { mobile: '0px', table: '0px', desktop: '-630vh', wide: '200px' },
      { mobile: '0px', table: '0px', desktop: '-620vh', wide: '200px' },
      { mobile: '0px', table: '0px', desktop: '-610vh', wide: '200px' },
    ],
  },
};
// E: scroll trigger option

function OurWorks({ className, scrollText, scrollImage, scrollDuration }) {
  // S: Mobile scroll 기능구현
  const WINDOW_OBJECT = React.useRef();
  const GET_CLASSNAME = !className ? { className: 'bg_blue ourwork_scroll' } : { className: 'bg_blue ourwork_scroll ' + className };
  const IMAGE_ARR = Array.isArray(scrollImage) ? scrollImage : [scrollImage];
  const IMAGE_ARR_MAP = [IMAGE_ARR.map((content, idx) => <span key={idx}>{content}</span>)];
  const [animationScrollY, setAnimationScrollY] = useState(0);
  const ROLLING_REF = React.useRef(); // article dom
  const START_POINT = React.useRef(0); // article Y coordinate
  const WRAP_STYLE = React.useRef({}); // text scroll animation
  const CONT_STYLE = React.useRef({}); // posit

  const _scrollHandler = e => {
    setAnimationScrollY(window.scrollY);
  };

  const _resetStartPoint = () => {
    if (ROLLING_REF.current?.styles?.position !== 'fixed') {
      START_POINT.current = ROLLING_REF.current?.getBoundingClientRect().top + (WINDOW_OBJECT.current?.scrollY ?? 0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', _scrollHandler, { passive: false });
    window.addEventListener('wheel', _scrollHandler, { passive: false });
    window.addEventListener('touchmove', _scrollHandler, { passive: false });
    window.addEventListener('resize', _resetStartPoint);
    START_POINT.current = ROLLING_REF.current?.getBoundingClientRect().top + window.scrollY;
    WINDOW_OBJECT.current = window;
  }, []);

  _resetStartPoint();

  useEffect(() => {
    const DEVICE_WIDTH = WINDOW_OBJECT.current.innerWidth;
    const ABOUT_US = ROLLING_REF.current?.parentNode.parentNode.parentNode.previousSibling.previousSibling;
    const SERVISE = ROLLING_REF.current?.parentNode.parentNode.parentNode.previousSibling;
    const ABOUT_US_HEIGHT = ABOUT_US?.getBoundingClientRect().height;
    const SERVICE_HEIGHT = SERVISE?.getBoundingClientRect().height;
    const SCROLL_START = ABOUT_US_HEIGHT + SERVICE_HEIGHT;
    const DURATION = scrollDuration; // expertise animation 시간

    if (animationScrollY > SCROLL_START && animationScrollY <= SCROLL_START + DURATION) {
      // 첫번째 애니메이션 구간
      CONT_STYLE.current = {
        position: 'fixed',
        top: '0',
        zIndex: '2',
        backgroundColor: '#1d1d1f',
      };
      WRAP_STYLE.current =
        DEVICE_WIDTH < 768
          ? {
              marginLeft: `${10 - (700 / DURATION) * (animationScrollY - SCROLL_START)}vw`,
              color: '#fff',
            }
          : {
              marginLeft: `${14 - (328 / DURATION) * (animationScrollY - SCROLL_START)}vw`,
              color: '#fff',
            };
      ROLLING_REF.current?.parentNode.classList.add('bg_black');
    } else if (animationScrollY <= SCROLL_START) {
      // 첫번째 애니메이션 이전 구간
      CONT_STYLE.current = { position: 'relative', backgroundColor: '#fff' };
      WRAP_STYLE.current = DEVICE_WIDTH < 768 ? { marginLeft: '10vw' } : { marginLeft: '14vw' };
      ROLLING_REF.current?.parentNode.classList.remove('bg_black');
    } else {
      // 애니메이션 이후 구간
      ROLLING_REF.current?.parentNode.classList.add('bg_black');
      CONT_STYLE.current = {
        backgroundColor: '#1d1d1f',
      };
      WRAP_STYLE.current = DEVICE_WIDTH < 768 ? { marginLeft: '690vw' } : { marginLeft: '315vw' };
    }
  }, [animationScrollY]);
  // E: Mobile scroll 기능구현

  const [windowWidth, setWindowWidth] = React.useState(0);
  useEffect(() => {
    const DEVICE_WIDTH = window.innerWidth;
    setWindowWidth(DEVICE_WIDTH);
  }, []);

  return (
    <section>
      {windowWidth >= 1280 ? (
        <>
          <section className="section_div is_black rolling_wrap">
            {/* Our works 텍스트 영역 */}
            <ScrollTriggerArea
              type="multiTrigger"
              className="line1_flow"
              defaultID="scroll_trigger06"
              triggerStart={OURWORKS_SCROLL_OPTION.triggerStart[0]}
              triggerEnd={OURWORKS_SCROLL_OPTION.triggerEnd[0]}
              triggerMarkers={true}
              XAxes={OURWORKS_SCROLL_OPTION.XAxes.expertiseTrigger}
            >
              <article className="rolling_text">
                <div className="text_ourworks">{main.ourWorks.rollingBigText}</div>
                <span className="ourworks_img">
                  <img src={main.imgUrl + main.ourWorks.rollingImages[0].image} alt={main.ourWorks.rollingImages[0].alt} />
                </span>
                <span className="ourworks_img">
                  <img src={main.imgUrl + main.ourWorks.rollingImages[1].image} alt={main.ourWorks.rollingImages[1].alt} />
                </span>
                <span className="ourworks_img">
                  <img src={main.imgUrl + main.ourWorks.rollingImages[2].image} alt={main.ourWorks.rollingImages[2].alt} />
                </span>
              </article>
            </ScrollTriggerArea>
          </section>
          {/* E: our works scroll 영역 */}
          {/* S: card swiper 영역 */}
          <ScrollTriggerArea
            className="scroll_swiper"
            defaultID="scroll_trigger10"
            type="multiTrigger"
            triggerStart={OURWORKS_SCROLL_OPTION.triggerStart[1]}
            triggerEnd={OURWORKS_SCROLL_OPTION.triggerEnd[1]}
            triggerOffset={'center'}
            triggerMarkers={false}
          >
            <div className="portfolio_wrap">
              <SwiperArea
                type="single"
                swiperOption={{
                  slidesPerView: 'auto',
                  effect: 'cards',
                  cardsEffect: {
                    perSlideRotate: 30,
                    perSlideOffset: 100,
                  },
                  speed: 1000,
                }}
                className="section_div is_photo scroll-linear portfolio"
                swiperContent={main.ourWorks.portfolio.map((data, index) => (
                  <FinderWorksList key={index} arrLength={index} />
                ))}
              />
            </div>
          </ScrollTriggerArea>
          {/* E: card swiper 영역 */}
        </>
      ) : (
        <>
          <section className="section_div is_black">
            <article ref={ROLLING_REF} {...GET_CLASSNAME} style={CONT_STYLE.current}>
              <div className="scroll_wrap" style={WRAP_STYLE.current}>
                <span className="scroll_text text_first">{scrollText}</span>
                <div className="scroll_image_wrap">{IMAGE_ARR_MAP}</div>
              </div>
            </article>
          </section>
          <div className="portfolio_wrap">
            <SwiperArea
              type="single"
              swiperOption={{
                slidesPerView: 'auto',
                effect: 'cards',
                cardsEffect: {
                  perSlideRotate: 30,
                  perSlideOffset: 100,
                },
                speed: 1000,
              }}
              className="section_div is_photo scroll-linear portfolio"
              swiperContent={main.ourWorks.portfolio.map((data, index) => (
                <FinderWorksList key={index} arrLength={index} />
              ))}
            />
          </div>
        </>
      )}
    </section>
  );
}

export default OurWorks;
