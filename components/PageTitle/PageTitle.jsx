'use client';
import React, { useState } from 'react';
import { useEffect } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import variables from '@/public/assets/scss/_variables.module.scss';
import './scss/PageTitle.scss';

export default function PageTitle({ data, className }) {
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
    <div className={`page-title ${className}`}>
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
