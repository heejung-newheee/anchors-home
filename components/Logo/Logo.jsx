'use client';

import Btn from '@/components/Btn/Btn';
import './scss/Logo.scss';

export default function Logo() {
  return (
    <h1 className="logo">
      <Btn type="link" url="/" alt="Anchors">
        주식회사 앵커스 | ANCHORS.Inc
      </Btn>
    </h1>
  );
}
