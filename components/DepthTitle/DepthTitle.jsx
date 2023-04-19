'use client';
import React from 'react';
import './scss/DepthTitle.scss';

export default function DepthTitle({
  children,
  blindOption = 'hidden',
  depthLevel = '1',
  className,
}) {
  const BLIND_OPTIOIN = blindOption === 'visible' ? 'visible' : 'hidden';
  const GET_CLASSNAME =
    className == undefined
      ? { className: BLIND_OPTIOIN }
      : { className: BLIND_OPTIOIN + ' ' + className };
  return (
    <>
      {depthLevel === '1' && <h3 {...GET_CLASSNAME}>{children}</h3>}
      {depthLevel === '2' && <h4 {...GET_CLASSNAME}>{children}</h4>}
      {depthLevel === '3' && <h5 {...GET_CLASSNAME}>{children}</h5>}
      {depthLevel === '4' && <h6 {...GET_CLASSNAME}>{children}</h6>}
    </>
  );
}
