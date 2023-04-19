'use client';
import React from 'react';

import Description from '@/components/Description/Description';
import Disclaimer from '@/components/Disclaimer/Disclaimer';
import ElementTitle from '@/components/ElementTitle/ElementTitle';
import './scss/BaseArticle.scss';

export default function BaseArticle({
  imgUrl = '',
  imgAlt = '',
  elementTitle = '',
  description = '',
  disclaimer = '',
  className,
}) {
  const GET_CLASSNAME =
    className == undefined
      ? { className: 'base_article' }
      : { className: 'base_article ' + className };
  return (
    <article {...GET_CLASSNAME}>
      {imgUrl != '' && <img src={imgUrl} alt={imgAlt} />}
      {elementTitle != '' && <ElementTitle data={elementTitle} />}
      {description != '' && <Description data={description} />}
      {disclaimer != '' && <Disclaimer data={disclaimer} />}
    </article>
  );
}
