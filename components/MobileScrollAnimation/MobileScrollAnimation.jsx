'use client';

import React, { useEffect, useState } from 'react';

import './scss/MobileScrollAnimation.scss';

export default function MobileScrollAnimation({ className, firstText, secondText, animationImage, animationDuration, type = 'singleText' }) {
  const windowObject = React.useRef();
  const GET_CLASSNAME = !className ? { className: 'rolling_animation bg_blue' } : { className: 'rolling_animation bg_blue ' + className };
  const IMAGE_ARR = Array.isArray(animationImage) ? animationImage : [animationImage];
  const IMAGE_ARR_MAP = [
    IMAGE_ARR.map((content, idx) => (
      <span key={idx} className="animation_image">
        {content}
      </span>
    )),
  ];
  const [animationScrollY, setAnimationScrollY] = useState(0);
  //const animating = React.useRef(false);
  const rollingRef = React.useRef(); // article dom
  const startPoint = React.useRef(0); // article Y coordinate
  const marginLeft = React.useRef(33);
  const wrapStyle = React.useRef({}); // text scroll animation
  const contStyle = React.useRef({}); // position fixed
  const charStyle = React.useRef({}); // text extend animation
  //const oldScrollY = usePrevious(scrollY); // 직전 scroll 위치 값

  const _scrollHandler = e => {
    setAnimationScrollY(window.scrollY); // 이전 scroll Y값 저장
  };

  const _resetStartPoint = () => {
    if (rollingRef.current?.styles?.position !== 'fixed') {
      startPoint.current = rollingRef.current?.getBoundingClientRect().top + (windowObject.current?.scrollY ?? 0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', _scrollHandler, { passive: false });
    window.addEventListener('wheel', _scrollHandler, { passive: false });
    window.addEventListener('touchmove', _scrollHandler, { passive: false });
    window.addEventListener('resize', _resetStartPoint);
    startPoint.current = rollingRef.current?.getBoundingClientRect().top + window.scrollY;
    windowObject.current = window;
  }, []);

  _resetStartPoint();

  useEffect(() => {
    //const crit = rollingRef.current?.getBoundingClientRect().top;
    const stPoint = 1143;
    const dur1 = (animationDuration * 2) / 3; // expertise animation 시간
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
      wrapStyle.current = {
        marginLeft: `${33 - (278 / dur1) * (animationScrollY - stPoint)}vh`,
      };
    } else if (animationScrollY > stPoint + dur1 && animationScrollY <= stPoint + animationDuration) {
      // 두번째 애니메이션 구간
      const dur2 = animationDuration - dur1;
      const cur2 = (animationScrollY - stPoint - dur1) / dur2;
      contStyle.current = {
        position: 'fixed',
        zIndex: 1,
        top: 0,
      };
      wrapStyle.current = {
        marginLeft: `-245vh`,
      };
      charStyle.current = {
        transform: `scale(${50 * cur2 + 1}) translateY(-${20 * cur2}px)`,
      };
    } else if (animationScrollY <= stPoint) {
      // 첫번째 애니메이션 이전 구간
      contStyle.current = { position: 'relative' };
      charStyle.current = { transform: `scale(1) translateY(0px)` };
      wrapStyle.current = { marginLeft: '33vh' };
    } else {
      // 두번째 애니메이션 이후 구간
      contStyle.current = { position: 'relative' };
      charStyle.current = {
        transform: `scale(51) translateY(-20px)`,
      };
      wrapStyle.current = { marginLeft: '-245vh', overflow: 'hidden' };
    }
  }, [animationScrollY]);

  return (
    <article ref={rollingRef} {...GET_CLASSNAME} style={contStyle.current}>
      <div className="rolling_animation_wrap" style={wrapStyle.current}>
        {type === 'doubleText' ? (
          <>
            <span className="animation_text text_first">{firstText}</span>
            <span className="animation_text text_second" style={charStyle.current}>
              {secondText}
            </span>
            <div className="animation_image">{IMAGE_ARR_MAP}</div>
          </>
        ) : (
          <>
            <span className="animation_text text_first">{firstText}</span>
            <div className="animation_image">{IMAGE_ARR_MAP}</div>
          </>
        )}
      </div>
    </article>
  );
}
