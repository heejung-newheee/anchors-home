'use client';
import React, { useState } from 'react';
import { useEffect } from 'react';

import Logo from '@/components/Logo/Logo';
import Menu from '@/components/Menu/Menu';
import './scss/Header.scss';

export default function Header() {
  const [headerBgType, setHeaderBgType] = useState('');

  const HandleScroll = () => {
    const HEADER = document.querySelector('.header');
    const HEADER_HEIGHT = HEADER.getBoundingClientRect().height;
    const SECTIONS = document.querySelectorAll('.section_div');
    const SECTIONS_ARRAY = [];
    SECTIONS.forEach((el) => SECTIONS_ARRAY.push(el));
    const SECTIONS_UNDER_HEADER = SECTIONS_ARRAY?.map((s) =>
      s.getBoundingClientRect(),
    )
      .map(({ y, height }) => ({
        start: y - HEADER_HEIGHT,
        end: y + height - HEADER_HEIGHT,
      }))
      .findIndex((se) => se.start < 0 && se.end >= 0);

    switch (SECTIONS_UNDER_HEADER) {
      case -1:
        // console.log('기본 className'); // 아무 것도 정의된 항목이 헤더 아래에 없으니
        setHeaderBgType('is_white');
        break;
      default:
        const CLASSNAME = SECTIONS[SECTIONS_UNDER_HEADER].className;
        const IS_WHITE = CLASSNAME.includes('is_white');
        const IS_BLACK = CLASSNAME.includes('is_black');
        const IS_PHOTO = CLASSNAME.includes('is_photo');
        // console.log(`${SECTIONS_UNDER_HEADER}번째 인덱스 위에 헤더 있음`, CLASSNAME);
        IS_WHITE && setHeaderBgType('is_white');
        IS_BLACK && setHeaderBgType('is_black');
        IS_PHOTO && setHeaderBgType('is_photo');
        break;
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', HandleScroll);
    return () => {
      window.removeEventListener('scroll', HandleScroll);
    };
  }, []);
  return (
    <header className={`header ${headerBgType}`}>
      <Logo />
      <Menu />
    </header>
  );
}
