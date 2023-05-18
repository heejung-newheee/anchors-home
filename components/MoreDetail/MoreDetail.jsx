'use client';

import React, { useState } from 'react';
import Btn from '@/components/Btn/Btn';
import './scss/MoreDetail.scss';

function MoreDetail({ className, imgUrl, imgAlt, children }) {
  const [isClick, setIsClick] = useState(false);
  const TOGGLE_BTN = (e) => {
    const CLICK_AREA = e.target.parentElement;
    isClick ? (HIDE_EVENT(CLICK_AREA), setIsClick(false)) : (SHOW_EVENT(CLICK_AREA), setIsClick(true));
  }
  const SHOW_EVENT = clickArea => {
    const IS_DETAIL_SLIDE = clickArea.querySelector('.detail')
    clickArea.classList.contains('detail_slide') ? IS_DETAIL_SLIDE.classList.add('on') : clickArea.classList.add('on');
  };
  const HIDE_EVENT = clickArea => {
    const IS_DETAIL_SLIDE = clickArea.querySelector('.detail')
    const IS_PARENTS = clickArea.parentElement;
    clickArea.classList.contains('detail_slide') ? IS_DETAIL_SLIDE.classList.remove('on') : clickArea.classList.contains('tooltip') ? IS_PARENTS.classList.remove('on') : clickArea.classList.remove('on');
  };

  const GET_CLASSNAME = !className ? { className: 'detail_slide' } : { className: 'detail_slide' + className };
  return (
    <article {...GET_CLASSNAME} onClick={TOGGLE_BTN}>
      <img src={imgUrl} alt={imgAlt} /> {/* bg img */}
      <div className="detail" > {/* popup */}
        {children}
      </div>
      <Btn className="detail_btn" type="button" /> {/* toggle btn */}
    </article>
  );
}
export default MoreDetail;
