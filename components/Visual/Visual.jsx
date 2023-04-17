'use client';
import Image from 'next/image';
import Link from 'next/link';
import './Visual.scss';

export default function Visual({ imgUrl, dimm = 'N', children, className }) {
  const dimmClass = dimm === 'Y' ? ' dimmed' : '';
  const getClassNm =
    className == undefined
      ? { className: 'visual' + dimmClass }
      : { className: 'visual ' + className + dimmClass };
  return (
    <article {...getClassNm} style={{ backgroundImage: `url(${imgUrl})` }}>
      {children}
    </article>
  );
}
