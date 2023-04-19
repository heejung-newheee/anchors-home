'use client';
import React from 'react';
import './scss/BaseArticle.scss';

import Image from 'next/image';
import Link from 'next/link';

import Description from '@/components/Description/Description';
import Disclaimer from '@/components/Disclaimer/Disclaimer';
import ElementTitle from '@/components/ElementTitle/ElementTitle';

export default function BaseArticle({
  imgUrl = '',
  imgAlt = '',
  elementTitle = '',
  description = '',
  disclaimer = '',
  className,
}) {
  const getClassNm =
    className == undefined
      ? { className: 'base-article' }
      : { className: 'base-article ' + className };
  return (
    <article {...getClassNm}>
      {imgUrl != '' && <img src={imgUrl} alt={imgAlt} />}
      {elementTitle != '' && <ElementTitle data={elementTitle} />}
      {description != '' && <Description data={description} />}
      {disclaimer != '' && <Disclaimer data={disclaimer} />}
    </article>
  );
}
