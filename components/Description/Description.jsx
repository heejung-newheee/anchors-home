'use client';
import './scss/Description.scss';

export default function Description({ data, className }) {
  const GET_CLASSNAME =
    className == undefined
      ? { className: 'description' }
      : { className: 'description ' + className };
  return <p {...GET_CLASSNAME}>{data}</p>;
}
