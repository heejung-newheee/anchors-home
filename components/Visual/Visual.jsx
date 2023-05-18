'use client';

import React, { useState, useEffect } from 'react'
import ScrollTriggerArea from '@/components/ScrollTriggerArea/ScrollTriggerArea';
import './scss/Visual.scss';

export default function Visual({ imgUrl, alt, dimm = 'N', children, className, pageTitleData, defaultId }) {
  const DIMM_CLASS = dimm === 'Y' ? ' dimmed' : '';
  const GET_CLASSNAME = !className ? { className: 'visual' + DIMM_CLASS } : { className: 'visual ' + className + DIMM_CLASS };
  return (
    <article {...GET_CLASSNAME}>
      <ScrollTriggerArea
        type="multiTrigger"
        triggerStart={{
          mobile: '0',
          table: '0',
          desktop: '0',
          wide: '0',
        }}
        triggerEnd={{
          mobile: '2000vh',
          table: '2000vh',
          desktop: '2000vh',
          wide: '2000vh',
        }}
        defaultID={defaultId} // [2022-05-11 : CHO] scrollTrigger 설정을 위합 값 이벤트를 실행 하기 위한 target 값입니다.
        triggerOffset={'top'}
        triggerMarkers={true}
        YAxes={[{ mobile: '15%', table: '15%', desktop: '15%', wide: '15%' }]}
      >
        <img src={imgUrl} alt={alt} />
      </ScrollTriggerArea>
      {pageTitleData && <h2>{pageTitleData}</h2>}
      {children}
    </article>
  );
}
