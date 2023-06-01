'use client';

import React, { useEffect, useState } from 'react';

import ScrollTriggerArea from '@/components/ScrollTriggerArea/ScrollTriggerArea';
import SwiperArea from '@/components/SwiperArea/SwiperArea';
import FinderWorksList from '@/components/FinderWorksList/FinderWorksList';
import MobileOurworkScroll from '@/components/MobileOurworkScroll/MobileOurworkScroll';

import main from '@/helper/data/json/contents/main/main.json';

const OURWORKS_SCROLL_OPTION = {
  triggerStart: [{ mobile: '0px', table: '0px', desktop: '0px', wide: '200px' }],
  triggerEnd: [{ mobile: '0px', table: '0px', desktop: '5000vh', wide: '200px' }],
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

function OurWorks({ className }) {
  const [windowWidth, setWindowWidth] = React.useState(0);

  useEffect(() => {
    const DEVICE_WIDTH = window.innerWidth;
    setWindowWidth(DEVICE_WIDTH);
  }, []);
  const GET_CLASSNAME = !className ? { className: 'scroll_expertise' } : { className: 'scroll_expertise ' + className };
  return (
    <section {...GET_CLASSNAME}>
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
            triggerStart={{
              mobile: '0',
              table: '0',
              desktop: '250px',
              wide: '300px',
            }}
            triggerEnd={{
              mobile: '4500vh',
              table: '4500vh',
              desktop: '4500vh',
              wide: '4500vh',
            }}
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
            <MobileOurworkScroll
              scrollText={main.ourWorks.rollingBigText}
              scrollImage={main.ourWorks.rollingImages.map((content, idx) => (
                <img key={idx} src={main.imgUrl + content.image} alt={content.alt} />
              ))}
              scrollDuration={1000}
            />
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
