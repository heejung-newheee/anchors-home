'use client';
import React from 'react';

import Description from '@/components/Description/Description';
import Disclaimer from '@/components/Disclaimer/Disclaimer';
import ElementTitle from '@/components/ElementTitle/ElementTitle';
import './scss/BaseArticle.scss';
import ScrollTriggerArea from '@/components/ScrollTriggerArea/ScrollTriggerArea';

export default function BaseArticle({
  imgUrl,
  imgAlt,
  elementTitle,
  description,
  disclaimer,
  className,
  defaultID,
  innerHTMLOption = 'N',
}) {
  const GET_CLASSNAME = !className
    ? { className: 'base_article' }
    : { className: 'base_article ' + className };
  return (
    <article {...GET_CLASSNAME}>
      {!!imgUrl && (
        <span className="base_article_img_box">
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
            defaultID={defaultID}
            triggerOffset={'center'}
            triggerMarkers={false}
            YAxes={[{ mobile: '5%', table: '5%', desktop: '5%', wide: '5%' }]}
          >
            <img src={imgUrl} alt={imgAlt} />
          </ScrollTriggerArea>
        </span>
      )}
      {!!elementTitle && (
        <ElementTitle data={elementTitle} innerHTMLOption={innerHTMLOption} />
      )}
      {!!description && (
        <Description data={description} innerHTMLOption={innerHTMLOption} />
      )}
      {!!disclaimer && (
        <Disclaimer data={disclaimer} innerHTMLOption={innerHTMLOption} />
      )}
    </article>
  );
}
