'use client';

export default function Description({ data, className }) {
  // props list = data

  return <p className={`description ${className}`}>{data}</p>;
}
