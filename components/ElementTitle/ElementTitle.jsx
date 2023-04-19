'use client';
import './scss/ElementTitle.scss';

export default function ElementTitle({ data, className }) {
  const GET_CLASSNAME =
    className == undefined
      ? { className: 'element_title' }
      : { className: 'element_title ' + className };
  return <strong {...GET_CLASSNAME}>{data}</strong>;
}
