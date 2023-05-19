'use client';

import React, { useState, useRef } from 'react';
import Btn from '@/components/Btn/Btn';
import './scss/MoreDetail.scss';

function MoreDetail({ className, imgUrl, imgAlt, children }) {
  const [isClick, setIsClick] = useState(false);
  const DETAIL_SLIDE_AREA = useRef();
  const TOGGLE_BTN = () => {
    const CLICK_AREA = DETAIL_SLIDE_AREA.current.parentElement;
    isClick ? HIDE_EVENT(CLICK_AREA) : SHOW_EVENT(CLICK_AREA)
  }
  const SHOW_EVENT = clickArea => {
    setIsClick(true)
    const IS_DETAIL_SLIDE = clickArea.querySelector('.detail')
    IS_DETAIL_SLIDE.classList.add('on')
  };
  const HIDE_EVENT = clickArea => {
    setIsClick(false)
    const IS_DETAIL_SLIDE = clickArea.querySelector('.detail')
    IS_DETAIL_SLIDE.classList.remove('on')
  };

  const GET_CLASSNAME = !className ? { className: 'detail_slide' } : { className: 'detail_slide' + className };
  return (
    <article ref={DETAIL_SLIDE_AREA} {...GET_CLASSNAME} onClick={TOGGLE_BTN}>
      <img src={imgUrl} alt={imgAlt} /> {/* bg img */}
      <div className="detail" > {/* popup */}
        {children}
      </div>
      <Btn className="detail_btn" type="button" /> {/* toggle btn */}
    </article>
  );
}
export default MoreDetail;
