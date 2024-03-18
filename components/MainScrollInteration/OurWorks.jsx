'use client';

import React, { useEffect, useState } from 'react';

import ScrollTriggerArea from '@/components/ScrollTriggerArea/ScrollTriggerArea';
import SwiperArea from '@/components/SwiperArea/SwiperArea';
import FinderWorksList from '@/components/FinderWorksList/FinderWorksList';

import main from '@/helper/data/json/contents/main/main.json';

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
              className="line1_flow"
              defaultID="scroll_trigger06"
              type="multiTrigger"
              triggerStart={{
                mobile: '0',
                table: '0',
                desktop: '0',
                wide: '0',
              }}
              triggerEnd={{
                mobile: '4000vh',
                table: '4000vh',
                desktop: '10000vh',
                wide: '12000vh',
              }}
              triggerMarkers={false}
              XAxes={[
                {
                  mobile: '-200%',
                  table: '-200%',
                  desktop: '-300%',
                  wide: '-300%',
                },
              ]}
              duration={0.001}
            >
              <article className="rolling_text">
                <div className="text_ourworks">
                  {main.ourWorks.rollingBigText}
                  {/* Our works 첫번째 이미지 */}
                  <ScrollTriggerArea
                    className="ourworks_img"
                    defaultID="scroll_trigger07"
                    type="multiTrigger"
                    triggerStart={{
                      mobile: '-215px',
                      table: '-390px',
                      desktop: '-220px',
                      wide: '-230px',
                    }}
                    triggerEnd={{
                      mobile: '1500vh',
                      table: '1500vh',
                      desktop: '1500vh',
                      wide: '1500vh',
                    }}
                    triggerMarkers={false}
                    XAxes={[
                      {
                        mobile: '-200%',
                        table: '-200%',
                        desktop: '-200%',
                        wide: '-200%',
                      },
                    ]}
                    duration={0.01}
                  >
                    <img src={main.imgUrl + main.ourWorks.rollingImages[0].image} alt={main.ourWorks.rollingImages[0].alt} />
                  </ScrollTriggerArea>
                  {/* Our works 두번째 이미지 */}
                  <ScrollTriggerArea
                    className="ourworks_img"
                    defaultID="scroll_trigger08"
                    type="multiTrigger"
                    triggerStart={{
                      mobile: '-350px',
                      table: '-500px',
                      desktop: '-420px',
                      wide: '-540px',
                    }}
                    triggerEnd={{
                      mobile: '1500vh',
                      table: '1500vh',
                      desktop: '1500vh',
                      wide: '1500vh',
                    }}
                    triggerMarkers={false}
                    XAxes={[
                      {
                        mobile: '-200%',
                        table: '-200%',
                        desktop: '-200%',
                        wide: '-200%',
                      },
                    ]}
                    duration={0.01}
                  >
                    <img src={main.imgUrl + main.ourWorks.rollingImages[1].image} alt={main.ourWorks.rollingImages[1].alt} />
                  </ScrollTriggerArea>
                  {/* Our works 세번째 이미지 */}
                  <ScrollTriggerArea
                    className="ourworks_img"
                    defaultID="scroll_trigger09"
                    type="multiTrigger"
                    triggerStart={{
                      mobile: '-220px',
                      table: '-220px',
                      desktop: '-200px',
                      wide: '-150px',
                    }}
                    triggerEnd={{
                      mobile: '2000vh',
                      table: '2000vh',
                      desktop: '2000vh',
                      wide: '2000vh',
                    }}
                    triggerMarkers={false}
                    XAxes={[
                      {
                        mobile: '-200%',
                        table: '-200%',
                        desktop: '-200%',
                        wide: '-200%',
                      },
                    ]}
                    duration={0.01}
                  >
                    <img src={main.imgUrl + main.ourWorks.rollingImages[2].image} alt={main.ourWorks.rollingImages[2].alt} />
                  </ScrollTriggerArea>
                </div>
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
