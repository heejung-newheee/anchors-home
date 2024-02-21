'use client';

import React, { useEffect, useState } from 'react';

import ScrollTriggerArea from '@/components/ScrollTriggerArea/ScrollTriggerArea';

import main from '@/helper/data/json/contents/main/main.json';

function Expertise({ className, firstText, secondText, scrollImage, scrollDuration }) {
  const WINDOW_OBJECT = React.useRef();
  const GET_CLASSNAME = !className ? { className: 'bg_blue expertise_scroll' } : { className: 'bg_blue expertise_rolling ' + className };
  const IMAGE_ARR = Array.isArray(scrollImage) ? scrollImage : [scrollImage];
  const IMAGE_ARR_MAP = [IMAGE_ARR.map((content, idx) => <span key={idx}>{content}</span>)];
  const [animationScrollY, setAnimationScrollY] = useState(0);
  const EXPERTISE_REF = React.useRef(); // article dom
  const START_POINT = React.useRef(0); // article Y coordinate
  const WRAP_STYLE = React.useRef({}); // text scroll animation
  const CONT_STYLE = React.useRef({}); // position fixed
  const CHAR_STYLE = React.useRef({}); // text extend animation
  //const oldScrollY = usePrevious(scrollY); // 직전 scroll 위치 값

  const _scrollHandler = e => {
    setAnimationScrollY(window.scrollY); // 이전 scroll Y값 저장
  };

  const _resetStartPoint = () => {
    if (EXPERTISE_REF.current?.styles?.position !== 'fixed') {
      START_POINT.current = EXPERTISE_REF.current?.getBoundingClientRect().top + (WINDOW_OBJECT.current?.scrollY ?? 0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', _scrollHandler, { passive: false });
    window.addEventListener('wheel', _scrollHandler, { passive: false });
    window.addEventListener('touchmove', _scrollHandler, { passive: false });
    window.addEventListener('resize', _resetStartPoint);
    START_POINT.current = EXPERTISE_REF.current?.getBoundingClientRect().top + window.scrollY;
    WINDOW_OBJECT.current = window;
  }, []);

  _resetStartPoint();

  useEffect(() => {
    const DEVICE_WIDTH = WINDOW_OBJECT.current.innerWidth;
    const SCROLL_START = DEVICE_WIDTH < 768 ? 1143 : 1559;
    const DURATION_1 = (scrollDuration * 2) / 3; // expertise animation 시간

    if (animationScrollY > SCROLL_START && animationScrollY <= SCROLL_START + DURATION_1) {
      // 첫번째 애니메이션 구간
      CONT_STYLE.current = {
        position: 'fixed',
        zIndex: 1,
        top: 0,
      };
      CHAR_STYLE.current = {
        transform: `scale(1) translateY(0px)`,
      };
      WRAP_STYLE.current =
        DEVICE_WIDTH < 768
          ? {
              marginLeft: `${33 - (278 / DURATION_1) * (animationScrollY - SCROLL_START)}vh`,
            }
          : {
              marginLeft: `${53 - (276 / DURATION_1) * (animationScrollY - SCROLL_START)}vh`,
            };
    } else if (animationScrollY > SCROLL_START + DURATION_1 && animationScrollY <= SCROLL_START + scrollDuration) {
      // 두번째 애니메이션 구간
      const DURATION_2 = scrollDuration - DURATION_1;
      const cur2 = (animationScrollY - SCROLL_START - DURATION_1) / DURATION_2;
      CONT_STYLE.current = {
        position: 'fixed',
        zIndex: 1,
        top: 0,
      };
      WRAP_STYLE.current = DEVICE_WIDTH < 768 ? { marginLeft: `-245vh` } : { marginLeft: `-223vh` };
      CHAR_STYLE.current = {
        transform: `scale(${50 * cur2 + 1}) translateY(-${20 * cur2}px)`,
      };
    } else if (animationScrollY <= SCROLL_START) {
      // 첫번째 애니메이션 이전 구간
      CONT_STYLE.current = { position: 'relative' };
      CHAR_STYLE.current = { transform: `scale(1) translateY(0px)` };
      WRAP_STYLE.current = DEVICE_WIDTH < 768 ? { marginLeft: '33vh' } : { marginLeft: '53vh' };
    } else {
      // 두번째 애니메이션 이후 구간
      CONT_STYLE.current = { position: 'relative' };
      CHAR_STYLE.current = {
        transform: `scale(51) translateY(-20px)`,
      };
      WRAP_STYLE.current = DEVICE_WIDTH < 768 ? { marginLeft: '-245vh', overflow: 'hidden' } : { marginLeft: '-223vh', overflow: 'hidden' };
    }
  }, [animationScrollY]);

  const [windowWidth, setWindowWidth] = React.useState(0);

  useEffect(() => {
    const DEVICE_WIDTH = window.innerWidth;
    setWindowWidth(DEVICE_WIDTH);
  }, []);

  return (
    <div className="scroll_expertise">
      {windowWidth >= 1280 ? (
        <>
          {/* Expertise 텍스트 영역 'Expertis' */}
          <ScrollTriggerArea
            className="line1_flow scroll_expertise"
            defaultID="scroll_trigger01"
            type="multiTrigger"
            triggerStart={{
              mobile: '0',
              table: '0',
              desktop: '0',
              wide: '0',
            }}
            triggerEnd={{
              mobile: '2200vh',
              table: '2200vh',
              desktop: '5000vh',
              wide: '5000vh',
            }}
            triggerMarkers={false}
            XAxes={[
              {
                mobile: '-360vh',
                table: '-400vh',
                desktop: '-600vh',
                wide: '-600vh',
              },
            ]}
          >
            <article className="rolling_text">
              <div className="text_expertis">
                {main.service.rollingBigText[0]}
                {/* Expertise 첫번째 이미지 */}
                <ScrollTriggerArea
                  className="expertise_img"
                  defaultID="scroll_trigger02"
                  type="multiTrigger"
                  triggerStart={{
                    mobile: '-160px',
                    table: '-300px',
                    desktop: '-110px',
                    wide: '-100px',
                  }}
                  triggerEnd={{
                    mobile: '1000vh',
                    table: '1500vh',
                    desktop: '3000vh',
                    wide: '3000vh',
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
                  <img src={main.imgUrl + main.service.blueBgRollingImages[0].image} alt={main.service.blueBgRollingImages[0].alt} />
                </ScrollTriggerArea>
                {/* Expertise 두번째 이미지 */}
                <ScrollTriggerArea
                  className="expertise_img"
                  defaultID="scroll_trigger03"
                  type="multiTrigger"
                  triggerStart={{
                    mobile: '-350px',
                    table: '-550px',
                    desktop: '-410px',
                    wide: '-550px',
                  }}
                  triggerEnd={{
                    mobile: '1000vh',
                    table: '1500vh',
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
                  <img src={main.imgUrl + main.service.blueBgRollingImages[1].image} alt={main.service.blueBgRollingImages[1].alt} />
                </ScrollTriggerArea>
                {/* Expertise 세번째 이미지 */}
                <ScrollTriggerArea
                  className="expertise_img"
                  defaultID="scroll_trigger04"
                  type="multiTrigger"
                  triggerStart={{
                    mobile: '0',
                    table: '-200px',
                    desktop: '-150px',
                    wide: '50px',
                  }}
                  triggerEnd={{
                    mobile: '1000vh',
                    table: '1500vh',
                    desktop: '3000vh',
                    wide: '3000vh',
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
                  <img src={main.imgUrl + main.service.blueBgRollingImages[2].image} alt={main.service.blueBgRollingImages[2].alt} />
                </ScrollTriggerArea>
              </div>
              {/* Expertise 텍스트 영역 'e' */}
              <ScrollTriggerArea
                defaultID="scroll_trigger05"
                type="multiTrigger"
                triggerStart={{
                  mobile: '280px',
                  table: '130px',
                  desktop: '900px',
                  wide: '1200px',
                }}
                triggerEnd={{
                  mobile: '3000vh',
                  table: '4000vh',
                  desktop: '5300vh',
                  wide: '6900vh',
                }}
                triggerMarkers={false}
                fromScale={[
                  {
                    mobile: 1,
                    table: 1,
                    desktop: 1,
                    wide: 1,
                  },
                ]}
                toScale={[
                  {
                    mobile: 30,
                    table: 40,
                    desktop: 60,
                    wide: 30,
                  },
                ]}
                YAxes={[
                  {
                    mobile: '-200%',
                    table: '-150%',
                    desktop: '-200%',
                    wide: '-200%',
                  },
                ]}
                duration={0.001}
              >
                <span className="text_e">{main.service.rollingBigText[1]}</span>
              </ScrollTriggerArea>
            </article>
          </ScrollTriggerArea>
        </>
      ) : (
        <article ref={EXPERTISE_REF} {...GET_CLASSNAME} style={CONT_STYLE.current}>
          <div className="scroll_wrap" style={WRAP_STYLE.current}>
            <span className="scroll_text text_first">{firstText}</span>
            <span className="scroll_text text_second" style={CHAR_STYLE.current}>
              {secondText}
            </span>
            <div className="scroll_image_wrap">{IMAGE_ARR_MAP}</div>
          </div>
        </article>
      )}
    </div>
  );
}

export default Expertise;
