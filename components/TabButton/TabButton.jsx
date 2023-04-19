'use client';
import Image from 'next/image';
import Link from 'next/link';

import Btn from '@/components/Btn/Btn';

const TAB_TEXT = ['tab1', 'tab2', 'tab3', 'tab4'];

export default function TabButton() {
  return (
    <li className="tab-button">
      <Btn type="button">{TAB_TEXT[0]}</Btn>
    </li>
  );
}
