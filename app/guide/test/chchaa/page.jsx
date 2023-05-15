'use client';
import React, { useEffect, useState, useRef } from 'react';
import './chchaa.scss';

export default function Chchaa() {

  const area01Span = useRef(0);
  const HandleScroll = () => {
    // const INTRO_EN = document.querySelector('.intro_en');
    // const INTRO_EN_TOP = INTRO_EN.getBoundingClientRect().top;

    // INTRO_EN_TOP < 0 ? setIsVisible(false) : setIsVisible(true);


    const area01 = document.querySelector('.area01')
    const area01_top = area01.getBoundingClientRect().top;
    const area01_bottom = area01.getBoundingClientRect().bottom;

    // console.log(area01_offset);
    area01_top < 0  && area01_bottom > 0 ? area01Span.current.style.left = area01_bottom* 0.1 + 'px': console.log('나감')


  };

  useEffect(() => {
    window.addEventListener('scroll', HandleScroll);
    return () => {
      window.removeEventListener('scroll', HandleScroll); //clean up
    };
  }, []);

  return (
    <>
      <div className="area" />
      <div className="area area01">
          <span className="area01_span" ref={area01Span}>test word</span>
      </div>

      <div className="area area02">
        <span className="area02_span">test word</span>
      </div>
    </>
  );
}
