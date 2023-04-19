'use client';
import Image from 'next/image';
import Link from 'next/link';
import './scss/Visual.scss';

export default function Visual({
  imgUrl,
  dimm = 'N',
  children,
  className,
  pageTitleData,
}) {
  const dimmClass = dimm === 'Y' ? ' dimmed' : '';
  const getClassNm =
    className == undefined
      ? { className: 'visual' + dimmClass }
      : { className: 'visual ' + className + dimmClass };
  return (
    <article {...getClassNm} style={{ backgroundImage: `url(${imgUrl})` }}>
      {pageTitleData && <h2>{pageTitleData}</h2>}
      {children}
    </article>
  );
}
