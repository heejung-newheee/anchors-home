'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function ElementTitle({ data, className }) {
  const getClassNm =
    className == undefined
      ? { className: 'element-title' }
      : { className: 'element-title ' + className };
  return <strong {...getClassNm}>{data}</strong>;
}
