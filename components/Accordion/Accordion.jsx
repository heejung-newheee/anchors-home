'use client';
import React, { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import AccordionChild from '@/components/AccordionChild/AccordionChild';

export default function Accordion({ contents, className }) {
  const getClassNm =
    className == undefined
      ? { className: 'accordion' }
      : { className: 'accordion ' + className };
  const [selected, setSelected] = useState(0);
  return (
    <dl {...getClassNm}>
      {contents.map((accordionChild, index) => (
        <AccordionChild
          key={index}
          titleData={accordionChild.title}
          activeOption={selected === index ? 'Y' : 'N'}
          onClick={() => setSelected(index)}
        >
          {accordionChild.content}
        </AccordionChild>
      ))}
    </dl>
  );
}
