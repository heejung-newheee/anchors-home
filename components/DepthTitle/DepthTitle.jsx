'use client';
import React, { useState } from 'react';

export default function DepthTitle({
  children,
  blindOption = 'hidden',
  depthLevel = '1',
  className,
}) {
  const blindOptionObj = blindOption === 'visible' ? 'visible' : 'hidden';
  return (
    <>
      {depthLevel === '1' && (
        <h3 className={`${blindOptionObj} ${className}`}>{children}</h3>
      )}
      {depthLevel === '2' && (
        <h4 className={`${blindOptionObj} ${className}`}>{children}</h4>
      )}
      {depthLevel === '3' && (
        <h5 className={`${blindOptionObj} ${className}`}>{children}</h5>
      )}
      {depthLevel === '4' && (
        <h6 className={`${blindOptionObj} ${className}`}>{children}</h6>
      )}
    </>
  );
}
