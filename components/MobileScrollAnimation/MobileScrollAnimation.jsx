'use client';

import React, { useEffect, useState } from 'react';

import './scss/MobileScrollAnimation.scss';
import { usePrevious } from '@/helper/utils';

export default function MobileScrollAnimation({ className, firstText, secondText, animationImage, animationDuration, type = 'singleText' }) {
  const GET_CLASSNAME = !className ? { className: 'rolling_animation bg_blue' } : { className: 'rolling_animation bg_blue ' + className };
  const IMAGE_ARR = Array.isArray(animationImage) ? animationImage : [animationImage];
  const IMAGE_ARR_MAP = [
    IMAGE_ARR.map((content, idx) => (
      <span key={idx} className="animation_image">
        {content}
      </span>
    )),
  ];
  const [scrollY, setScrollY] = useState(0);
  //const animating = React.useRef(false);
  const rollingRef = React.useRef();
  const marginLeft = React.useRef(33);
  const wrapStyle = React.useRef({});
  const contStyle = React.useRef({});
  const charStyle = React.useRef({});
  // const [lastScrollY, setLastScrollY] = useState(scrollY);

  const _scrollHandler = e => {
    setScrollY(window.scrollY);
  };

  /*
  const HandleScroll = (currentY, lastY) => {
    const rolling = rollingRef.current;
    //const ANIMATION_SELECTOR = document.querySelector('.rolling_animation');

    const SELECTOR_TOP = rolling?.getBoundingClientRect().top;
    const SELECTOR_BOTTOM = rolling?.getBoundingClientRect().bottom;

    //console.log(EXPERTISE_TOP);
    // let lastScrollY;
    if (SELECTOR_TOP <= 0 && currentY > lastY) {
      rolling?.classList.add('action');
      if (animating.current === false) {
        console.log('위에서 아래로', rolling?.offsetTop);
        setTimeout(() => {
          console.log('끝');
          animating.current = false;
        }, animationDuration);
      }
      if (animating.current === false) {
        animating.current = window.scrollY;
      } else {
        window.scrollTo(0, animating.current);
      }
    } else {
      rolling?.classList.remove('action');
    }

    if (SELECTOR_BOTTOM === 0 && currentY < lastY) {
      rolling.classList.add('reverse');
      if (animating.current === false) {
        console.log('아래서 위로');
        setTimeout(() => {
          console.log('끝');
          animating.current = false;
        }, animationDuration);
      }
      if (animating.current === false) {
        animating.current = window.scrollY;
      } else {
        window.scrollTo(0, animating.current);
      }
    } else {
      rolling.classList.remove('reverse');
    }

    // console.log(currentY, lastY, SELECTOR_TOP, SELECTOR_BOTTOM);
    // lastScrollY = scrollY;
    // window.addEventListener('scroll', e => {
    //   const scrollY = window.scrollY;
    //
    //   //const scrollDirection = scrollY > lastScrollY ? console.log('scroll down') : console.log('scroll up');
    //
    //   //console.log(scrollDirection);
    //   console.log('last scroll y ' + lastScrollY + ', scroll y ' + scrollY);
    //   SELECTOR_TOP <= 0 ? ANIMATION_SELECTOR?.classList.add('action') : ANIMATION_SELECTOR?.classList.remove('action');
    //   lastScrollY = scrollY;
    // });
    //

    //SELECTOR_TOP <= 0 && scrollY > lastScrollY ? ANIMATION_SELECTOR?.classList.add('action') : ANIMATION_SELECTOR?.classList.remove('action');
    //
  };*/

  useEffect(() => {
    // window.addEventListener('scroll', HandleScroll);
    // return () => {
    //   window.removeEventListener('scroll', HandleScroll);
    // };

    window.addEventListener('scroll', _scrollHandler, { passive: false });
    window.addEventListener('wheel', _scrollHandler, { passive: false });
    window.addEventListener('touchmove', _scrollHandler, { passive: false });
  }, []);

  //const oldScrollY = usePrevious(scrollY);
  useEffect(() => {
    const crit = rollingRef.current.getBoundingClientRect().top;
    const dur1 = (animationDuration / 3) * 2;
    if (scrollY > crit && scrollY < crit + dur1) {
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
        marginLeft: `${33 - (278 / dur1) * (scrollY - crit)}vh`,
      };
    } else if (scrollY > crit + dur1 && scrollY < crit + animationDuration) {
      // 두번째 애니메이션 구간
      const dur2 = animationDuration - dur1;
      const cur2 = (scrollY - crit - dur1) / dur2;
      contStyle.current = {
        position: 'fixed',
        zIndex: 1,
        top: 0,
      };
      wrapStyle.current = {
        marginLeft: `-245vh`,
      };
      charStyle.current = {
        transform: `scale(${30 * cur2 + 1}) translateY(-${20 * cur2}px)`,
      };
    } else if (scrollY <= crit) {
      // 첫번째 애니메이션 이전 구간
      contStyle.current = { position: 'relative' };
      charStyle.current = { transform: `scale(1) translateY(0px)` };
      wrapStyle.current = { marginLeft: '33vh' };
    } else {
      // 두번째 애니메이션 이후 구간
      contStyle.current = { position: 'relative' };
      charStyle.current = {
        transform: `scale(31) translateY(-20px)`,
      };
      wrapStyle.current = { marginLeft: '-245vh' };
    }
  }, [scrollY]);

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
