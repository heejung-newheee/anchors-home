'use client';

export default function Disclaimer({ data, className }) {
  // props list = data

  return (
    <span className={`disclaimer ${className}`}>
      {/* <!-- {data.json} || {data.string} --> */}
      {data}
    </span>
  );
}
