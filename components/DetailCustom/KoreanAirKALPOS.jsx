'use client';

import React from 'react';
import DepthTitle from '@/components/DepthTitle/DepthTitle'
import Device from '@/components/Device/Device'
import works from '@/helper/data/json/contents/works/works.json'

const KoreanAirKALPOS = ({pageId}) => {
  const FILTERED = works.content.find( (data) => data.id === pageId);
  return (
    <>
      <section className="device_wrap">
        <DepthTitle depthLevel="1" blindOption="hidden">
          Application example image
        </DepthTitle>
        <Device
          elementTitle={FILTERED.custom[0].device[0].elementTitle}
          description={FILTERED.custom[0].device[0].description}
          caption={FILTERED.custom[0].device[0].caption}
          imgUrl={FILTERED.custom[0].device[0].imgUrl.map( (url) => works.imgUrl + url )}
          alt={FILTERED.custom[0].device[0].alt}
          type={FILTERED.custom[0].device[0].type}
        />
      </section>
    </>
  );
};

export default KoreanAirKALPOS;
 