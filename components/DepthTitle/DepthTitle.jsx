'use client';
import React, { useState } from 'react';

export default function DepthTitle({
  children,
  blindOption = 'hidden',
  depthLevel = '1',
  className,
}) {
  const blindOptionObj = blindOption === 'visible' ? 'visible' : 'hidden';
  const getClassNm =
    className == undefined
      ? { className: blindOptionObj }
      : { className: blindOptionObj + ' ' + className };
  return (
    <>
      {depthLevel === '1' && <h3 {...getClassNm}>{children}</h3>}
      {depthLevel === '2' && <h4 {...getClassNm}>{children}</h4>}
      {depthLevel === '3' && <h5 {...getClassNm}>{children}</h5>}
      {depthLevel === '4' && <h6 {...getClassNm}>{children}</h6>}
    </>
  );
}
