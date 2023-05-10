'use client';
import React from 'react';

import './scss/InfiniteRolling.scss';

export default function InfiniteRolling({
  children,
  className,
  reverse = 'N',
  duration = '40',
}) {
  const REVERSE_CLASS = reverse === 'Y' ? ' reverse' : '';
  const GET_CLASSNAME = !className
    ? { className: 'InfiniteRolling' + REVERSE_CLASS }
    : { className: 'InfiniteRolling ' + className + REVERSE_CLASS };

  const CHILD_ARR = Array.isArray(children) ? children : [children];

  const CHILD_ARR_MAP = [
    CHILD_ARR.map((contentArrays, idx) => <li key={idx}>{contentArrays}</li>),
  ];

  return (
    <div {...GET_CLASSNAME}>
      <div
        className="rolling_inner"
        style={{ animationDuration: duration + 's' }}
      >
        <ul>{CHILD_ARR_MAP}</ul>
        <ul>{CHILD_ARR_MAP}</ul>
        <ul>{CHILD_ARR_MAP}</ul>
        <ul>{CHILD_ARR_MAP}</ul>
        <ul>{CHILD_ARR_MAP}</ul>
        <ul>{CHILD_ARR_MAP}</ul>
        <ul>{CHILD_ARR_MAP}</ul>
        <ul>{CHILD_ARR_MAP}</ul>
        <ul>{CHILD_ARR_MAP}</ul>
        <ul>{CHILD_ARR_MAP}</ul>
        <ul>{CHILD_ARR_MAP}</ul>
      </div>
    </div>
  );
}
