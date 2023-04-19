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
  const DIMM_CLASS = dimm === 'Y' ? ' dimmed' : '';
  const getClassNm =
    className == undefined
      ? { className: 'visual' + DIMM_CLASS }
      : { className: 'visual ' + className + DIMM_CLASS };
  return (
    <article {...getClassNm} style={{ backgroundImage: `url(${imgUrl})` }}>
      {pageTitleData && <h2>{pageTitleData}</h2>}
      {children}
    </article>
  );
}
