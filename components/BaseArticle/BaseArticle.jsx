'use client';
import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import ElementTitle from '@/components/ElementTitle/ElementTitle';

export default function BaseArticle({
  imgUrl = '',
  imgAlt = '',
  elementTitle = '',
  description = '',
  disclaimer = '',
}) {
  return (
    <article className="base-article">
      {imgUrl != '' && (
        <Image src={imgUrl} width={100} height={100} alt={imgAlt} />
      )}
      {elementTitle != '' && <ElementTitle data={elementTitle} />}
      {/*{description != '' && <ElementTitle data={description} />}*/}
      {/*{disclaimer != '' && <ElementTitle data={disclaimer} />}*/}
    </article>
  );
}
