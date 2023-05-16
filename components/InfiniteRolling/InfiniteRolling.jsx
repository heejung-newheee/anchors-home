'use client';
import React from 'react';

import './scss/InfiniteRolling.scss';

export default function InfiniteRolling({
  children,
  className,
  reverse = 'N',
  duration = '40',
  length = 'auto',
  key
}) {
  const REVERSE_CLASS = reverse === 'Y' ? ' reverse' : '';
  const GET_CLASSNAME = !className
    ? { className: 'infinite_rolling' + REVERSE_CLASS + ' ' + length }
    : { className: 'infinite_rolling ' + className + REVERSE_CLASS + ' ' + length };

  const CHILD_ARR = Array.isArray(children) ? children : [children];

  const CHILD_ARR_MAP = [
    length === 'auto' &&  CHILD_ARR.map((contentArrays, idx) => <li key={idx}>{contentArrays}</li>),
    length === 'solo' &&  <><li>{CHILD_ARR}</li><li>{CHILD_ARR}</li><li>{CHILD_ARR}</li></>
  ];

  return (
    <div {...GET_CLASSNAME} key={key}>
      <div
        className="infinite_rolling_inner"
        style={{ animationDuration: duration + 's' }}
      >
        {length === 'auto' && <><ul>{CHILD_ARR_MAP}</ul>
          <ul>{CHILD_ARR_MAP}</ul></>}

        {length === 'solo' && <ul>{CHILD_ARR_MAP}</ul>}

      </div>
    </div>
  );
}
