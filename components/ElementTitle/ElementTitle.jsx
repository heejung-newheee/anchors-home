'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function ElementTitle({ data, className }) {
  return <strong className={`element-title ${className}`}>{data}</strong>;
}
