'use client';

import ScrollTriggerArea from '@/components/ScrollTriggerArea/ScrollTriggerArea';
import './scss/Visual.scss';

export default function Visual({ imgUrl, alt, dimm = 'N', children, className, pageTitleData, defaultId, scrollTrigger = 'Y' }) {
  const DIMM_CLASS = dimm === 'Y' ? ' dimmed' : '';
  const GET_CLASSNAME = !className ? { className: 'visual' + DIMM_CLASS } : { className: 'visual ' + className + DIMM_CLASS };
  return (
    <article {...GET_CLASSNAME}>

      {
        scrollTrigger === 'N'
          ? <div className='wrapper no_scrollTrigger'><img src={imgUrl} alt={alt} /></div>
          : <ScrollTriggerArea
            type="multiTrigger"
            triggerStart={{
              mobile: '0',
              table: '0',
              desktop: '0',
              wide: '0',
            }}
            triggerEnd={{
              mobile: '4000vh',
              table: '4000vh',
              desktop: '4000vh',
              wide: '4000vh',
            }}
            defaultID={defaultId} // [2022-05-11 : CHO] scrollTrigger 설정을 위합 값 이벤트를 실행 하기 위한 target 값입니다.
            triggerOffset={'top'}
            triggerMarkers={false}
            YAxes={[{ mobile: '35%', table: '35%', desktop: '35%', wide: '35%' }]}
          >
            <img src={imgUrl} alt={alt} />
          </ScrollTriggerArea>
      }
      {pageTitleData && <h2>{pageTitleData}</h2>}
      {children}
    </article>
  );
}
