'use client';
import React from 'react';

import './scss/MoreDetail.scss';
import Btn from '@/components/Btn/Btn';

function MoreDetail({ className, imgUrl, imgAlt, children }) {
  const SHOW_DETAIL = (e) => {
    const DETAIL_BTN = e.target;
    SHOW_DETAIL_EVENT(DETAIL_BTN);
  };
  const SHOW_DETAIL_EVENT = (MORE_DETAIL_BTN) => {
    MORE_DETAIL_BTN.classList.toggle('on');
    MORE_DETAIL_BTN.nextElementSibling.classList.toggle('on');
  };
  const GET_CLASSNAME =
    className == undefined
      ? { className: 'detail_slide' }
      : { className: 'detail_slide' + className };
  return (
    <div {...GET_CLASSNAME}>
      <img src={imgUrl} alt={imgAlt} />
      <Btn className="detail_btn" type="button" onClick={SHOW_DETAIL} />
      <div className="detail">{children}</div>
    </div>
  );
}

export default MoreDetail;
