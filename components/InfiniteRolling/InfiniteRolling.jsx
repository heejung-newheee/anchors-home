'use client';
import React from 'react';

import './scss/InfiniteRolling.scss';

export default function InfiniteRolling({
  children,
  className,
  reverse = 'N',
  duration = '40',
  widthFixed = 'N'
}) {
  const REVERSE_CLASS = reverse === 'Y' ? ' reverse' : '';
  const WIDTHFIXED_CLASS = widthFixed === 'Y' ? ' width_fixed' : '' ;
  const GET_CLASSNAME = !className
    ? { className: 'infinite_rolling' + REVERSE_CLASS + WIDTHFIXED_CLASS }
    : { className: 'infinite_rolling ' + className + REVERSE_CLASS + WIDTHFIXED_CLASS };

  const CHILD_ARR = Array.isArray(children) ? children : [children];

  const CHILD_ARR_MAP = [
    CHILD_ARR.map((contentArrays, idx) => <li key={idx}>{contentArrays}</li>)
  ];

  return (
    <div {...GET_CLASSNAME}>
      <div
        className="infinite_rolling_inner"
        style={{ animationDuration: duration + 's' }}
      >
        {widthFixed === 'N' && <><ul>{CHILD_ARR_MAP}</ul>
          <ul>{CHILD_ARR_MAP}</ul></>}

        {widthFixed === 'Y' && <><ul>{CHILD_ARR_MAP}</ul>
          <ul>{CHILD_ARR_MAP}</ul><ul>{CHILD_ARR_MAP}</ul></>}

      </div>
    </div>
  );
}
