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
  innerHTMLOption = 'N',
}) {
  const GET_CLASSNAME =
    className == undefined
      ? { className: 'base_article' }
      : { className: 'base_article ' + className };
  return (
    <article {...GET_CLASSNAME}>
      {imgUrl != '' && (
        <span className="base_article_img_box">
          <img src={imgUrl} alt={imgAlt} />
        </span>
      )}
      {elementTitle != '' && (
        <ElementTitle data={elementTitle} innerHTMLOption={innerHTMLOption} />
      )}
      {description != '' && (
        <Description data={description} innerHTMLOption={innerHTMLOption} />
      )}
      {disclaimer != '' && (
        <Disclaimer data={disclaimer} innerHTMLOption={innerHTMLOption} />
      )}
    </article>
  );
}
