'use client';
import React, { useState } from 'react';

import './scss/AccordionChild.scss';
import Image from 'next/image';
import Link from 'next/link';

import Btn from '@/components/Btn/Btn';

export default function AccordionChild({
  children,
  titleData,
  activeOption = 'N',
  onClick,
}) {
  const classNameObj = activeOption === 'Y' ? { className: 'active' } : {};
  return (
    <>
      <dt {...classNameObj} onClick={onClick}>
        <Btn type="button">{titleData}</Btn>
      </dt>
      <dd>{children}</dd>
      {/*<dt className={activeOption === "Y" ? "active" : ""}></dt>*/}
    </>
  );
}
