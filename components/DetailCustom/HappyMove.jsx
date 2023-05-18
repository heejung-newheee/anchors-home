'use client';

import React from 'react';
import ImageArray from '@/components/ImageArray/ImageArray'
import works from '@/helper/data/json/contents/works/works.json'

const HappyMove = ({pageId}) => {
  const FILTERED = works.content.find( (data) => data.id === pageId);
  return (
    <>
      <ImageArray
        data={FILTERED.custom[0].img_array.img}
        bgColor={FILTERED.custom[0].img_array.bg_color}
        imgUrl={works.imgUrl}
      />
    </>
  );
};

export default HappyMove;
 