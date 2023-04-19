'use client';
import Image from 'next/image';
import Link from 'next/link';

import './scss/Device.scss';

export default function Device({ imgUrl, alt, caption, className, type }) {
  const typeOption = type === 'B' ? ' typeB' : '';
  const getClassNm =
    className == undefined
      ? { className: 'device' + typeOption }
      : { className: 'device ' + className + typeOption };
  return (
    <article {...getClassNm}>
      <div>
        <span>{caption[0]}</span>
        <img src={imgUrl[0]} alt={alt[0]} />
      </div>
      <div>
        <span>{caption[1]}</span>
        <img src={imgUrl[1]} alt={alt[0]} />
      </div>
      <div>
        <span>{caption[2]}</span>
        <img src={imgUrl[2]} alt={alt[0]} />
      </div>
    </article>
  );
}
