'use client';

import React, { useEffect, useState } from 'react';

import ScrollTriggerArea from '@/components/ScrollTriggerArea/ScrollTriggerArea';
import SwiperArea from '@/components/SwiperArea/SwiperArea';
import FinderWorksList from '@/components/FinderWorksList/FinderWorksList';
import MobileOurworkScroll from '@/components/MobileOurworkScroll/MobileOurworkScroll';

import main from '@/helper/data/json/contents/main/main.json';

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
