'use client';
import React from 'react';

import Description from '@/components/Description/Description';
import Disclaimer from '@/components/Disclaimer/Disclaimer';
import ElementTitle from '@/components/ElementTitle/ElementTitle';
import './scss/BaseArticle.scss';
import ScrollTriggerArea from '@/components/ScrollTriggerArea/ScrollTriggerArea';

export default function BaseArticle({ imgUrl, imgAlt, elementTitle, description, disclaimer, className, defaultID, innerHTMLOption = 'N' }) {
  const GET_CLASSNAME = !className ? { className: 'base_article' } : { className: 'base_article ' + className };
  return (
    <article {...GET_CLASSNAME}>
      {!!imgUrl && (
        <span className="base_article_img_box">
          <ScrollTriggerArea
            type="multiTrigger"
            triggerStart={{
              mobile: '-70%',
              table: '-70%',
              desktop: '-70%',
              wide: '-70%',
            }}
            triggerEnd={{
              mobile: '4000vh',
              table: '4000vh',
              desktop: '4000vh',
              wide: '4000vh',
            }}
            defaultID={defaultID} // [2022-05-11 : CHO] scrollTrigger 설정을 위합 값 이벤트를 실행 하기 위한 target 값입니다.
            triggerOffset={'top'}
            triggerMarkers={false}
            YAxes={[{ mobile: '20%', table: '20%', desktop: '20%', wide: '20%' }]}
          >
            <img src={imgUrl} alt={imgAlt} />
          </ScrollTriggerArea>
        </span>
      )}
      {!!elementTitle && <ElementTitle data={elementTitle} innerHTMLOption={innerHTMLOption} />}
      {!!description && <Description data={description} innerHTMLOption={innerHTMLOption} />}
      {!!disclaimer && <Disclaimer data={disclaimer} innerHTMLOption={innerHTMLOption} />}
    </article>
  );
}
