'use client';
import React, { useState } from 'react';

import AccordionChild from '@/components/AccordionChild/AccordionChild';

export default function Accordion({ contents, className }) {
  const GET_CLASSNAME =
    className == undefined
      ? { className: 'accordion' }
      : { className: 'accordion ' + className };
  const [selected, setSelected] = useState(0);
  return (
    <dl {...GET_CLASSNAME}>
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
