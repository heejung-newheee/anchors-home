'use client';

export default function Description({ data, className }) {
  const GET_CLASS_NM =
    className == undefined
      ? { className: 'description' }
      : { className: 'description ' + className };
  return <p {...GET_CLASS_NM}>{data}</p>;
}
