'use client';

import React from 'react';
import DepthTitle from '@/components/DepthTitle/DepthTitle'
import ImageArray from '@/components/ImageArray/ImageArray'
import works from '@/helper/data/json/contents/works/works.json'

const CommercePlatform = ({pageId}) => {
  const FILTERED = works.content.find( (data) => data.id === pageId);
  return (
      <section className="image_array_wrap">
        <DepthTitle depthLevel="1" blindOption="hidden">
          Website example image
        </DepthTitle>
        <ImageArray
          imgUrl={works.imgUrl}
          data={FILTERED.custom.img_array}
          bgColor={FILTERED.custom.bg_color}
        />
      </section>
  );
};

export default CommercePlatform;
 