'use client';
import React, { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

export default function DepthTitle({
  children,
  blindOption = 'hidden',
  depthLevel = '1',
}) {
  const blindOptionObj = blindOption === 'visible' ? 'visible' : 'hidden';
  return (
    <>
      {depthLevel === '1' && (
        <h3 className={`${blindOptionObj}`}>{children}</h3>
      )}
      {depthLevel === '2' && (
        <h4 className={`${blindOptionObj}`}>{children}</h4>
      )}
      {depthLevel === '3' && (
        <h5 className={`${blindOptionObj}`}>{children}</h5>
      )}
      {depthLevel === '4' && (
        <h6 className={`${blindOptionObj}`}>{children}</h6>
      )}
    </>
  );
}
