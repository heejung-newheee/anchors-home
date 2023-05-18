'use client';

import React from 'react';
import DepthTitle from '@/components/DepthTitle/DepthTitle'
import Device from '@/components/Device/Device'
import works from '@/helper/data/json/contents/works/works.json'

const MyHyundai = ({pageId}) => {
  const FILTERED = works.content.find( (data) => data.id === pageId);
  return (
    <>
      <div className="myhyundai_device_wrap">
        <DepthTitle depthLevel="1" blindOption="hidden">
          About MyHyundai App Device
        </DepthTitle>
        <Device
          elementTitle={FILTERED.custom[0].device.elementTitle}
          description={FILTERED.custom[0].device.description}
          caption={FILTERED.custom[0].device.caption}
          imgUrl={FILTERED.custom[0].device.imgUrl.map(url => works.imgUrl + url)}
          alt={FILTERED.custom[0].device.alt}
          type={FILTERED.custom[0].device.type}
        />
      </div>
    </>
  );
};

export default MyHyundai;
 