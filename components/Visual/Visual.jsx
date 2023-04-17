'use client';
import Image from 'next/image';
import Link from 'next/link';
import './Visual.scss';

export default function Visual({ imgUrl, dimm = 'N', children, className }) {
  const dimmClass = dimm === 'Y' ? ' dimmed' : '';

  return (
    <article
      className={`visual ${dimmClass} ${className}`}
      style={{ backgroundImage: `url(${imgUrl})` }}
    >
      {children}
    </article>
  );
}
