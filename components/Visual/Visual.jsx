'use client';

import React from 'react';
import ScrollTriggerArea from '@/components/ScrollTriggerArea/ScrollTriggerArea';
import './scss/Visual.scss';

export default function Visual({ imgUrl, alt, dimm = 'N', children, className, pageTitleData }) {
  const DIMM_CLASS = dimm === 'Y' ? ' dimmed' : '';
  const GET_CLASSNAME = !className ? { className: 'visual' + DIMM_CLASS } : { className: 'visual ' + className + DIMM_CLASS };
  const RANDOM_NUMBER = Math.floor(Math.random() * 99);
  return (
    <article {...GET_CLASSNAME}>
      <ScrollTriggerArea
        type="multiTrigger"
        triggerStart={{
          mobile: '100px',
          table: '100px',
          desktop: '100px',
          wide: '100px',
        }}
        triggerEnd={{
          mobile: '2000vh',
          table: '2000vh',
          desktop: '2000vh',
          wide: '2000vh',
        }}
        defaultID={`visual_article${RANDOM_NUMBER}`} // [2022-05-11 : CHO] scrollTrigger 설정을 위합 값 이벤트를 실행 하기 위한 target 값입니다.
        triggerOffset={'top'}
        triggerMarkers={false}
        YAxes={[{ mobile: '15%', table: '15%', desktop: '15%', wide: '15%' }]}
      >
        <img src={imgUrl} alt={alt} />
      </ScrollTriggerArea>
      {pageTitleData && <h2>{pageTitleData}</h2>}
      {children}
    </article>
  );
}
