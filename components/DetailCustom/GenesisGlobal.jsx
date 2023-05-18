'use client';

import React from 'react';
import DepthTitle from '@/components/DepthTitle/DepthTitle'
import ImageArray from '@/components/ImageArray/ImageArray'
import Device from '@/components/Device/Device'
import works from '@/helper/data/json/contents/works/works.json'

const GenesisGlobal = ({pageId}) => {
  const FILTERED = works.content.find( (data) => data.id === pageId);
  return (
    <>
      {/* S: image_array 영역*/}
      <section className="image_array_wrap">
        <DepthTitle depthLevel="1" blindOption="hidden">
          Website example image
        </DepthTitle>
        <ImageArray
          imgUrl={works.imgUrl}
          data={FILTERED.custom[0].img_array.img}
          bgColor={FILTERED.custom[0].img_array.bg_color}
        />
      </section>
      {/* S: image_array 영역*/}

      {/* S: Device 영역*/}
      <section className="device_wrap">
        <DepthTitle depthLevel="1" blindOption="hidden">
          Device example image
        </DepthTitle>
        <Device
          elementTitle={FILTERED.custom[1].device.elementTitle}
          description={FILTERED.custom[1].device.description}
          caption={FILTERED.custom[1].device.caption}
          imgUrl={FILTERED.custom[1].device.imgUrl.map( (url) => works.imgUrl + url )}
          alt={FILTERED.custom[1].device.alt}
          type={FILTERED.custom[1].device.type}
        />
      </section>
      {/* E: Device 영역*/}
    </>
  );
};

export default GenesisGlobal;
 