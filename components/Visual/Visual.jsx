'use client';

import './scss/Visual.scss';
import ScrollTriggerArea from '@/components/ScrollTriggerArea/ScrollTriggerArea';

export default function Visual({
  imgUrl,
  alt,
  dimm = 'N',
  children,
  className,
  pageTitleData,
}) {
  const DIMM_CLASS = dimm === 'Y' ? ' dimmed' : '';
  const GET_CLASSNAME = !className
    ? { className: 'visual' + DIMM_CLASS }
    : { className: 'visual ' + className + DIMM_CLASS };
  return (
    <article {...GET_CLASSNAME}>
      <ScrollTriggerArea
        type="multiTrigger"
        triggerStart={{
          mobile: '50%',
          table: '50%',
          desktop: '50%',
          wide: '50%',
        }}
        triggerEnd={{
          mobile: '100%',
          table: '100%',
          desktop: '100%',
          wide: '100%',
        }}
        triggerOffset={'center'}
        triggerMarkers={false}
        YAxes={[{ mobile: '5%', table: '5%', desktop: '5%', wide: '5%' }]}
      >
        <img src={imgUrl} alt={alt} />
      </ScrollTriggerArea>
      {pageTitleData && <h2>{pageTitleData}</h2>}
      {children}
    </article>
  );
}
