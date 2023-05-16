'use client';
import React, { useState } from 'react';

import AccordionChild from '@/components/AccordionChild/AccordionChild';

export default function Accordion({ contents, className }) {
  const GET_CLASSNAME = !className
    ? { className: 'accordion' }
    : { className: 'accordion ' + className };
  const [selected, setSelected] = useState(0);

  const TOGGLE = (e) => {
    const target = e.currentTarget;
    target.classList.contains('active') ? target.classList.remove('active') : target.classList.add('active');
  }
  return (
    <dl {...GET_CLASSNAME}>
      {contents.map((accordionChild, index) => (
        <AccordionChild
          key={index}
          titleData={accordionChild.title}
          onClick={TOGGLE}
          index={index}
        >
          {accordionChild.content}
        </AccordionChild>
      ))}
    </dl>
  );
}
