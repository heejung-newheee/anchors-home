'use client';
import React, { useState } from 'react';
import { useEffect } from 'react';

import './scss/PageTitle.scss';

export default function PageTitle({ data, className }) {
  const GET_CLASSNAME = !className
    ? { className: 'page_title' }
    : { className: 'page_title ' + className };
  const [animation, setAnimation] = useState('');

  const HandleScroll = () => {
    window.scrollY < 10 ? setAnimation('fadeIn') : setAnimation('fadeOut');
  };

  useEffect(() => {
    window.scrollY < 10 ? setAnimation('fadeIn') : setAnimation('fadeOut');
    window.addEventListener('scroll', HandleScroll);
    return () => {
      window.removeEventListener('scroll', HandleScroll); //clean up
    };
  }, []);
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
