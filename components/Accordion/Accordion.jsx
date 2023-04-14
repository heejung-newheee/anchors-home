'use client';
import React, { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import AccordionChild from '@/components/AccordionContents/AccordionChild';

// import AccordionChild from "@/components/AccordionChild/AccordionChild";

export default function Accordion({ contents }) {
  const [selected, setSelected] = useState(0);
  console.log(selected);
  return (
    <dl className="accordion">
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
