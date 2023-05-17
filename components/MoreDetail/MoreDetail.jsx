'use client';
import React from 'react';

import './scss/MoreDetail.scss';
import Btn from '@/components/Btn/Btn';

function MoreDetail({ className, imgUrl, imgAlt, children }) {
  const SHOW_DETAIL = e => {
    const DETAIL_BTN = e.target.parentElement;
    SHOW_DETAIL_EVENT(DETAIL_BTN);
    console.log(DETAIL_BTN);
  };
  const SHOW_DETAIL_EVENT = MORE_DETAIL_BTN => {
    MORE_DETAIL_BTN.lastElementChild.classList.add('on');
    MORE_DETAIL_BTN.children[1].classList.add('on');
  };
  const HIDE_DETAIL = e => {
    const HIDE_DETAIL_BTN = e.target.parentElement.closest('.detail');
    HIDE_DETAIL_EVENT(HIDE_DETAIL_BTN);
  };
  const HIDE_DETAIL_EVENT = HIDE_DETAIL_BTN => {
    HIDE_DETAIL_BTN.classList.remove('on');
    HIDE_DETAIL_BTN.previousElementSibling.classList.remove('on');
  };
  const GET_CLASSNAME = !className ? { className: 'detail_slide' } : { className: 'detail_slide' + className };
  return (
    <article {...GET_CLASSNAME}>
      <img src={imgUrl} alt={imgAlt} onClick={SHOW_DETAIL} />
      <Btn className="detail_btn" type="button" />
      <div className="detail" onClick={HIDE_DETAIL}>
        {children}
      </div>
    </article>
  );
}

export default MoreDetail;
