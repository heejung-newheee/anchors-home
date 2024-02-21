'use client';

import React from 'react';
import ImageArray from '@/components/ImageArray/ImageArray'
import DepthTitle from '@/components/DepthTitle/DepthTitle'
import Device from '@/components/Device/Device'
import works from '@/helper/data/json/contents/works/works.json'

const WWN = ({pageId}) => {
  const FILTERED = works.content.find( (data) => data.id === pageId);
  return (
    <>
      <DepthTitle depthLevel="1" blindOption="hidden">
        About WWNWebsite and App
      </DepthTitle>
      <ImageArray
        data={FILTERED.custom[0].img_array.img}
        bgColor={FILTERED.custom[0].img_array.bg_color}
        imgUrl={works.imgUrl}
      />
      <Device
        elementTitle={FILTERED.custom[1].device.elementTitle}
        description={FILTERED.custom[1].device.description}
        caption={FILTERED.custom[1].device.caption}
        imgUrl={FILTERED.custom[1].device.imgUrl.map( (url) => works.imgUrl + url )}
        alt={FILTERED.custom[1].device.alt}
        type={FILTERED.custom[1].device.type}
      />
    </>
  );
};

export default WWN;
 