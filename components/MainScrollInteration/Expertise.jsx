'use client';

import React, { useEffect, useState } from 'react';

import ScrollTriggerArea from '@/components/ScrollTriggerArea/ScrollTriggerArea';

import main from '@/helper/data/json/contents/main/main.json';

// S: scroll trigger option
const SCROLL_TRIGGER_OPTION = {
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
  fromScale: {
    expertiseFromScale: [
      { mobile: 1, table: 1, desktop: 1, wide: 1 },
      { mobile: 1, table: 1, desktop: 1, wide: 1 },
    ],
  },
  toScale: {
    expertiseToScale: [
      { mobile: 1, table: 1, desktop: 1, wide: 1 },
      { mobile: 1, table: 1, desktop: 30, wide: 30 },
    ],
  },
};
// E: scroll trigger option

function Expertise({ className, firstText, secondText, scrollImage, scrollDuration }) {
  const WINDOW_OBJECT = React.useRef();
  const GET_CLASSNAME = !className ? { className: 'bg_blue expertise_scroll' } : { className: 'bg_blue expertise_rolling ' + className };
  const IMAGE_ARR = Array.isArray(scrollImage) ? scrollImage : [scrollImage];
  const IMAGE_ARR_MAP = [IMAGE_ARR.map((content, idx) => <span key={idx}>{content}</span>)];
  const [animationScrollY, setAnimationScrollY] = useState(0);
  //const animating = React.useRef(false);
  const EXPERTISE_REF = React.useRef(); // article dom
  const START_POINT = React.useRef(0); // article Y coordinate
  //const marginLeft = React.useRef(0);
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
    //console.log(DEVICE_WIDTH);
    //const crit = EXPERTISE_REF.current?.getBoundingClientRect().top;
    const SCROLL_START = DEVICE_WIDTH < 768 ? 1143 : 1559;
    const DURATION_1 = (scrollDuration * 2) / 3; // expertise animation 시간

    //console.log(crit + animationScrollY);
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
        <article>
          <ScrollTriggerArea
            type="timeLine"
            defaultID="scroll_trigger01"
            className="expertise_wrap"
            triggerStart={SCROLL_TRIGGER_OPTION.triggerStart[0]}
            triggerEnd={SCROLL_TRIGGER_OPTION.triggerEnd[0]}
            XAxes={SCROLL_TRIGGER_OPTION.XAxes.expertiseTrigger}
            triggerOffset={'top'}
            triggerMarkers={true}
            timeLineFromScale={SCROLL_TRIGGER_OPTION.fromScale.expertiseFromScale}
            timeLineToScale={SCROLL_TRIGGER_OPTION.toScale.expertiseToScale}
          >
            <span className="expertise_text expertis">{main.service.rollingBigText[0]}</span>
            <span className="expertise_text e timeLine" style={{ width: '83.5vh' }}>
              {main.service.rollingBigText[1]}
            </span>
            <span className="expertise_img img_first_test">
              <img src={main.imgUrl + main.service.blueBgRollingImages[0].image} alt={main.service.blueBgRollingImages[0].alt} />
            </span>
            <span className="expertise_img img_second_test">
              <img src={main.imgUrl + main.service.blueBgRollingImages[1].image} alt={main.service.blueBgRollingImages[1].alt} />
            </span>
            <span className="expertise_img img_third_test">
              <img src={main.imgUrl + main.service.blueBgRollingImages[2].image} alt={main.service.blueBgRollingImages[2].alt} />
            </span>
          </ScrollTriggerArea>
        </article>
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
