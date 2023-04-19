'use client';
import './scss/Disclaimer.scss';

export default function Disclaimer({ data, className }) {
  const GET_CLASSNAME =
    className == undefined
      ? { className: 'disclaimer' }
      : { className: 'disclaimer ' + className };
  return <span {...GET_CLASSNAME}>{data}</span>;
}
