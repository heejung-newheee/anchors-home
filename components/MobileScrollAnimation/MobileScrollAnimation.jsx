'use client';

import React, { useEffect, useState } from 'react';

import './scss/MobileScrollAnimation.scss';

export default function MobileScrollAnimation({ className, firstText, secondText, scrollImage, scrollDuration }) {
  const WINDOW_Object = React.useRef();
  const GET_CLASSNAME = !className ? { className: 'bg_blue expertise_scroll' } : { className: 'bg_blue expertise_rolling ' + className };
  const IMAGE_ARR = Array.isArray(scrollImage) ? scrollImage : [scrollImage];
  const IMAGE_ARR_MAP = [IMAGE_ARR.map((content, idx) => <span key={idx}>{content}</span>)];
  const [animationScrollY, setAnimationScrollY] = useState(0);
  //const animating = React.useRef(false);
  const rollingRef = React.useRef(); // article dom
  const startPoint = React.useRef(0); // article Y coordinate
  const marginLeft = React.useRef(0);
  const wrapStyle = React.useRef({}); // text scroll animation
  const contStyle = React.useRef({}); // position fixed
  const charStyle = React.useRef({}); // text extend animation
  //const oldScrollY = usePrevious(scrollY); // 직전 scroll 위치 값

  const _scrollHandler = e => {
    setAnimationScrollY(window.scrollY); // 이전 scroll Y값 저장
  };

  const _resetStartPoint = () => {
    if (rollingRef.current?.styles?.position !== 'fixed') {
      startPoint.current = rollingRef.current?.getBoundingClientRect().top + (WINDOW_Object.current?.scrollY ?? 0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', _scrollHandler, { passive: false });
    window.addEventListener('wheel', _scrollHandler, { passive: false });
    window.addEventListener('touchmove', _scrollHandler, { passive: false });
    window.addEventListener('resize', _resetStartPoint);
    startPoint.current = rollingRef.current?.getBoundingClientRect().top + window.scrollY;
    WINDOW_Object.current = window;
  }, []);

  _resetStartPoint();

  useEffect(() => {
    const DEVICE_WIDTH = WINDOW_Object.current.innerWidth;
    //console.log(DEVICE_WIDTH);
    //const crit = rollingRef.current?.getBoundingClientRect().top;
    const stPoint = DEVICE_WIDTH < 768 ? 1143 : 1559;
    const dur1 = (scrollDuration * 2) / 3; // expertise animation 시간

    //console.log(crit + animationScrollY);
    if (animationScrollY > stPoint && animationScrollY <= stPoint + dur1) {
      // 첫번째 애니메이션 구간
      contStyle.current = {
        position: 'fixed',
        zIndex: 1,
        top: 0,
      };
      charStyle.current = {
        transform: `scale(1) translateY(0px)`,
      };
      wrapStyle.current =
        DEVICE_WIDTH < 768
          ? {
              marginLeft: `${33 - (278 / dur1) * (animationScrollY - stPoint)}vh`,
            }
          : {
              marginLeft: `${53 - (276 / dur1) * (animationScrollY - stPoint)}vh`,
            };
    } else if (animationScrollY > stPoint + dur1 && animationScrollY <= stPoint + scrollDuration) {
      // 두번째 애니메이션 구간
      const dur2 = scrollDuration - dur1;
      const cur2 = (animationScrollY - stPoint - dur1) / dur2;
      contStyle.current = {
        position: 'fixed',
        zIndex: 1,
        top: 0,
      };
      wrapStyle.current = DEVICE_WIDTH < 768 ? { marginLeft: `-245vh` } : { marginLeft: `-223vh` };
      charStyle.current = {
        transform: `scale(${50 * cur2 + 1}) translateY(-${20 * cur2}px)`,
      };
    } else if (animationScrollY <= stPoint) {
      // 첫번째 애니메이션 이전 구간
      contStyle.current = { position: 'relative' };
      charStyle.current = { transform: `scale(1) translateY(0px)` };
      wrapStyle.current = DEVICE_WIDTH < 768 ? { marginLeft: '33vh' } : { marginLeft: '53vh' };
    } else {
      // 두번째 애니메이션 이후 구간
      contStyle.current = { position: 'relative' };
      charStyle.current = {
        transform: `scale(51) translateY(-20px)`,
      };
      wrapStyle.current = DEVICE_WIDTH < 768 ? { marginLeft: '-245vh', overflow: 'hidden' } : { marginLeft: '-223vh', overflow: 'hidden' };
    }
  }, [animationScrollY]);

  return (
    <article ref={rollingRef} {...GET_CLASSNAME} style={contStyle.current}>
      <div className="scroll_wrap" style={wrapStyle.current}>
        <span className="scroll_text text_first">{firstText}</span>
        <span className="scroll_text text_second" style={charStyle.current}>
          {secondText}
        </span>
        <div className="scroll_image_wrap">{IMAGE_ARR_MAP}</div>
      </div>
    </article>
  );
}
