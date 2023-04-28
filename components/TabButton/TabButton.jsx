'use client';

import Link from 'next/link';
import Btn from '@/components/Btn/Btn';

export default function TabButton({ dataList = [] }) {
  const BUTTON_ARR = Array.isArray(dataList) ? dataList : [dataList];

  return (
    <ul className="tab_btn_wrap">
      {BUTTON_ARR.map((button, idx) => (
        <li className="tab-button" data-tab-index={idx} key={idx}>
          <Btn type="button">{button}</Btn>
        </li>
      ))}
    </ul>
  );
}
