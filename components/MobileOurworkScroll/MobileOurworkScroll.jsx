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
  const contStyle = React.useRef({}); // position fixed

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
    // const stPoint = 2520 + window.innerHeight * 2.2;

    const elementMain = rollingRef.current?.parentNode.parentNode.parentNode;
    const section1 = elementMain?.querySelector('.about_us');
    const section2 = elementMain?.querySelector('.service');
    const section1Height = section1?.getBoundingClientRect().height;
    const section2Height = section2?.getBoundingClientRect().height;
    const stPoint = section1Height + section2Height;
    const dur1 = scrollDuration; // expertise animation 시간

    if (animationScrollY > stPoint && animationScrollY <= stPoint + dur1) {
      // 첫번째 애니메이션 구간
      rollingRef.current?.classList.add('active');
      rollingRef.current?.parentNode.parentNode.classList.add('active');
      //rollingRef.current?.parentNode.nextElementSibling.classList.add('remove');
      contStyle.current = {
        position: 'fixed',
        top: '0',
        zIndex: '2',
        backgroundColor: '#1d1d1f',
      };
      wrapStyle.current = {
        marginLeft: `${10 - (700 / dur1) * (animationScrollY - stPoint)}vw`,
        color: '#fff',
      };
      rollingRef.current?.parentNode.classList.add('bg_black');
    } else if (animationScrollY <= stPoint) {
      // 첫번째 애니메이션 이전 구간
      contStyle.current = { position: 'relative', backgroundColor: '#fff' };
      wrapStyle.current = { marginLeft: '10vw' };
      rollingRef.current?.parentNode.classList.remove('bg_black');
    } else {
      // 애니메이션 이후 구간
      rollingRef.current?.parentNode.classList.add('bg_black');
      rollingRef.current?.classList.remove('active');
      rollingRef.current?.parentNode.parentNode.classList.remove('active');
      contStyle.current = {
        backgroundColor: '#1d1d1f',
      };
      wrapStyle.current = { marginLeft: '690vw' };
    }
  }, [animationScrollY]);

  return (
    <article ref={rollingRef} {...GET_CLASSNAME} style={contStyle.current}>
      <div className="scroll_wrap" style={wrapStyle.current}>
        <span className="scroll_text text_first">{scrollText}</span>
        <div className="scroll_image_wrap">{IMAGE_ARR_MAP}</div>
      </div>
    </article>
  );
}
