'use client';
import React, { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import AccordionChild from '@/components/AccordionContents/AccordionChild';

export default function Accordion({ contents, className }) {
  const [selected, setSelected] = useState(0);
  return (
    <dl className={`accordion ${className}`}>
      {contents.map((accordionChild, index) => (
        <AccordionChild
          key={index}
          titleData={accordionChild.title}
          activeOption={selected === index ? 'Y' : 'N'}
          onClick={() => setSelected(index)}
        >
          {accordionChild.content})
        </AccordionChild>
      ))}
    </dl>
  );
}
