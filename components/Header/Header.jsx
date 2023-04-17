'use client';
import React, { useState } from 'react';
import { useEffect } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import Logo from '@/components/Logo/Logo';
import Menu from '@/components/Menu/Menu';
import variables from '@/public/assets/scss/_variables.module.scss';

const HEADER_HEIGHT = 60;

export default function Header({ sectionRefs, headerPosition }) {
  const [headerBgType, setHeaderBgType] = useState('');
  const handleScroll = () => {
    const sections = document.querySelectorAll('.section-div');
    const sectionsArray = [];
    sections.forEach((el) => sectionsArray.push(el));
    const sectionUnderHeader = sectionsArray
      ?.map((s) => s.getBoundingClientRect())
      .map(({ y, height }) => ({
        start: y - HEADER_HEIGHT,
        end: y + height - HEADER_HEIGHT,
      }))
      .findIndex((se) => se.start < 0 && se.end >= 0);

    switch (sectionUnderHeader) {
      case -1:
        // console.log('기본 className'); // 아무 것도 정의된 항목이 헤더 아래에 없으니
        setHeaderBgType('type-bg-white');
        break;
      default:
        const classNm = sections[sectionUnderHeader].className;
        const isWhite = classNm.includes('type-bg-white');
        const isBlack = classNm.includes('type-bg-black');
        const isPhoto = classNm.includes('type-bg-photo');
        // console.log(`${sectionUnderHeader}번째 인덱스 위에 헤더 있음`, classNm);
        isWhite && setHeaderBgType('isWhite');
        isBlack && setHeaderBgType('isBlack');
        isPhoto && setHeaderBgType('isPhoto');
        break;
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header className={`header ${headerBgType}`}>
      <Logo />
      <Menu />
    </header>
  );
}
