'use client';
import React, { useState } from 'react';
import { useEffect } from 'react';

import './scss/PageTitle.scss';

export default function PageTitle({ data, className }) {
  const GET_CLASSNAME =
    className == undefined
      ? { className: 'page_title' }
      : { className: 'page_title ' + className };
  const [animation, setAnimation] = useState('');

  return (
    <div {...GET_CLASSNAME}>
      <h2 className={`page_title_h2 ${animation}`}>
        {data.map((words, index) => (
          <span key={index} className={`span${index}`}>
            {words.words}
          </span>
        ))}
      </h2>
    </div>
  );
}
