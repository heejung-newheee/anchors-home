'use client';

import React from 'react';
import DepthTitle from '@/components/DepthTitle/DepthTitle'
import Device from '@/components/Device/Device'
import works from '@/helper/data/json/contents/works/works.json'

const KoreanAirAndroid = ({pageId}) => {
  const FILTERED = works.content.find( (data) => data.id === pageId);
  return (
    <>
      <section className="device_wrap">
        <DepthTitle depthLevel="1" blindOption="hidden">
          Application example image
        </DepthTitle>
        <Device
          elementTitle={FILTERED.custom[0].device.elementTitle}
          description={FILTERED.custom[0].device.description}
          caption={FILTERED.custom[0].device.caption}
          imgUrl={FILTERED.custom[0].device.imgUrl.map( (url) => works.imgUrl + url )}
          alt={FILTERED.custom[0].device.alt}
          type={FILTERED.custom[0].device.type}
        />
      </section>
    </>
  );
};

export default KoreanAirAndroid;
 