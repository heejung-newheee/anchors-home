'use client';

export default function Description({ data, className }) {
  const getClassNm =
    className == undefined
      ? { className: 'description' }
      : { className: 'description ' + className };
  return <p {...getClassNm}>{data}</p>;
}
