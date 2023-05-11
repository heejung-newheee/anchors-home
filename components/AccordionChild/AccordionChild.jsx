'use client';
import React from 'react';

import Btn from '@/components/Btn/Btn';
import './scss/AccordionChild.scss';

export default function AccordionChild({
  children,
  titleData,
  activeOption = 'N',
  onClick,
}) {
  const CLASSNAME_OPTION = activeOption === 'Y' ? { className: 'active' } : {};
  return (
    <>
      <dt {...CLASSNAME_OPTION} onClick={onClick}>
        {titleData}
        <Btn type="button">목록 버튼</Btn>
      </dt>
      <dd>{children}</dd>
    </>
  );
}
1;
