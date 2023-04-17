'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Description({ data }) {
  // props list = data

  return <p className="description">{data}</p>;
}
