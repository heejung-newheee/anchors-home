'use client';

import React from 'react';

import Btn from '@/components/Btn/Btn';

function TabButton({ type = 'button', current, index, children, event }) {
  return (
    <li className={'tab-button' + (index === current ? ' is_active' : '')}>
      <Btn type={type} onClick={event}>
        {children}
      </Btn>
    </li>
  );
}

export default TabButton;
