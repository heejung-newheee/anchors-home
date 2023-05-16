'use client';

import './scss/Visual.scss';
import ScrollTriggerArea from '@/components/ScrollTriggerArea/ScrollTriggerArea';

export default function Visual({ imgUrl, alt, dimm = 'N', children, className, pageTitleData }) {
  const DIMM_CLASS = dimm === 'Y' ? ' dimmed' : '';
  const GET_CLASSNAME = !className ? { className: 'visual' + DIMM_CLASS } : { className: 'visual ' + className + DIMM_CLASS };
  return (
    <article {...GET_CLASSNAME}>
      <ScrollTriggerArea
        type="multiTrigger"
        triggerStart={{
          mobile: '20%',
          table: '20%',
          desktop: '20%',
          wide: '20%',
        }}
        triggerEnd={{
          mobile: '2000vh',
          table: '2000vh',
          desktop: '2000vh',
          wide: '2000vh',
        }}
        defaultID="visual_article" // [2022-05-11 : CHO] scrollTrigger 설정을 위합 값 이벤트를 실행 하기 위한 target 값입니다.
        triggerOffset={'center'}
        triggerMarkers={false}
        YAxes={[{ mobile: '10%', table: '10%', desktop: '10%', wide: '10%' }]}
      >
        <img src={imgUrl} alt={alt} />
      </ScrollTriggerArea>
      {pageTitleData && <h2>{pageTitleData}</h2>}
      {children}
    </article>
  );
}
