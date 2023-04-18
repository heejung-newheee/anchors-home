'use client';
import React, { useState } from 'react';
import { useEffect } from 'react';

import './scss/PageTitle.scss';

export default function PageTitle({ data, className }) {
  const getClassNm =
    className == undefined
      ? { className: 'page-title' }
      : { className: 'page-title ' + className };
  const [animation, setAnimation] = useState('fadeIn');

  const handleScroll = () => {
    window.scrollY < 10 ? setAnimation('fadeIn') : setAnimation('fadeOut');
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); //clean up
    };
  }, []);
  return (
    <div {...getClassNm}>
      <h2 className={`page-title-h2 ${animation}`}>
        {data.map((words, index) => (
          <span key={index} className={`span${index}`}>
            {words.word}
          </span>
        ))}
      </h2>
    </div>
  );
}
