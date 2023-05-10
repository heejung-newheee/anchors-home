'use client';
import React, { useState } from 'react';
import { useEffect } from 'react';

import { usePathname } from 'next/navigation';

import Logo from '@/components/Logo/Logo';
import Menu from '@/components/Menu/Menu';
import './scss/Header.scss';
import { pagesIsBgBlack, pagesIsBgWhite } from '@/helper/headerHelper';

/*
HEADER_NEXT : 상수
HeaderNext : 클래스 or 선언
headerNext : 실제 값을 가지는 변수
header_next : (대소문자 구별하지 않는) 프로퍼티, Attributes
*/

export default function Header({ className }) {
  const LOCATION = usePathname();

  const CL = React.useMemo(
    () =>
      pagesIsBgBlack.includes(LOCATION)
        ? 'is_black'
        : pagesIsBgWhite.includes(LOCATION)
        ? 'is_white'
        : 'is_photo',
    [LOCATION],
  );

  const [headerBgType, setHeaderBgType] = useState(CL);

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
        // setHeaderBgType('is_white');
        break;
      default:
        const CLASSNAME = SECTIONS[SECTIONS_UNDER_HEADER].className;
        CLASSNAME.includes('is_white') && setHeaderBgType('is_white');
        CLASSNAME.includes('is_black') && setHeaderBgType('is_black');
        CLASSNAME.includes('is_photo') && setHeaderBgType('is_photo');
        break;
    }
  };

  useEffect(() => {
    // resetColorType();
    window.addEventListener('scroll', HandleScroll);
    return () => {
      window.removeEventListener('scroll', HandleScroll);
    };
  }, []);

  // const linkLocation = use
  // const routers = useRouter();
  useEffect(() => {
    setHeaderBgType(CL);
  }, [CL, LOCATION]);

  const GET_CLASSNAME = !className
    ? { className: 'header ' + headerBgType }
    : { className: 'header ' + className + ' ' + headerBgType };

  return (
    <header {...GET_CLASSNAME}>
      <Logo />
      <Menu />
    </header>
  );
}
