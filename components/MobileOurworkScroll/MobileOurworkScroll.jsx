'use client';

import React, { useEffect, useState } from 'react';

import './scss/MobileOurworkScroll.scss';

export default function MobileScrollAnimation({ className, scrollText, scrollImage, scrollDuration }) {
  const WINDOW_Object = React.useRef();
  const GET_CLASSNAME = !className ? { className: 'bg_blue ourwork_scroll' } : { className: 'bg_blue ourwork_scroll ' + className };
  const IMAGE_ARR = Array.isArray(scrollImage) ? scrollImage : [scrollImage];
  const IMAGE_ARR_MAP = [IMAGE_ARR.map((content, idx) => <span key={idx}>{content}</span>)];
  const [animationScrollY, setAnimationScrollY] = useState(0);
  //const animating = React.useRef(false);
  const rollingRef = React.useRef(); // article dom
  const startPoint = React.useRef(0); // article Y coordinate
  const marginLeft = React.useRef(10);
  const wrapStyle = React.useRef({}); // text scroll animation
  //const contStyle = React.useRef({}); // position fixed

  const _scrollHandler = e => {
    setAnimationScrollY(window.scrollY);
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
    //const crit = rollingRef.current?.getBoundingClientRect().top;
    const stPoint = 2520 + window.innerHeight * 2.2;
    const dur1 = scrollDuration; // expertise animation 시간

    //console.log(document.body.clientHeight);

    if (animationScrollY > stPoint && animationScrollY <= stPoint + dur1) {
      // 첫번째 애니메이션 구간
      rollingRef.current?.classList.add('active');
      // contStyle.current = {
      //   position: 'fixed',
      //   zIndex: 2,
      //   top: 0,
      //   backgroundColor: '#1d1d1f',
      // };
      wrapStyle.current = {
        marginLeft: `${10 - (700 / dur1) * (animationScrollY - stPoint)}vw`,
        color: '#fff',
      };
    } else {
      // 애니메이션 이후 구간
      rollingRef.current?.classList.remove('active');
      //contStyle.current = { position: 'relative' };
      wrapStyle.current = { marginLeft: '10vw' };
    }
  }, [animationScrollY]);

  return (
    <article ref={rollingRef} {...GET_CLASSNAME}>
      <div className="scroll_wrap" style={wrapStyle.current}>
        <span className="scroll_text text_first">{scrollText}</span>
        <div className="scroll_image_wrap">{IMAGE_ARR_MAP}</div>
      </div>
    </article>
  );
}
