'use client';
import React from 'react';

import Accordion from '@/components/Accordion/Accordion';
import AccordionChild from '@/components/AccordionContents/AccordionChild';
import Btn from '@/components/Btn/Btn';
import Logo from '@/components/Logo/Logo';

const ACCORDION_CONTENTS = [
  { title: '1', content: 'a' },
  { title: '2', content: 'b' },
  { title: '3', content: <span>span tag</span> },
];

export default function chchaa() {
  return (
    <>
      1. &lt;Btn&gt;
      <br />
      <Btn design="btnSecondaryUp">테스트 버튼</Btn>
      <br />
      <br />
      2. &lt;Logo&gt;
      <br />
      <Logo />
      <br />
      <br />
      2. &lt;Accordion&gt;
      <br />
      <Accordion contents={ACCORDION_CONTENTS} />
      <br />
      <br />
    </>
  );
}
