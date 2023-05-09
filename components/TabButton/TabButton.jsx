'use client';
import Btn from '@/components/Btn/Btn';
import React from 'react';

function TabButton({ current, index, children, event }) {
  return (
    <li className={'tab-button' + (index == current ? ' isActive' : '')}>
      <Btn type="button" onClick={event}>
        {children}
      </Btn>
    </li>
  );
}

export default TabButton;
