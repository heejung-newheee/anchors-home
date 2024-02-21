'use client';

import React from 'react';
import ImageArray from '@/components/ImageArray/ImageArray'
import DepthTitle from '@/components/DepthTitle/DepthTitle'
import Device from '@/components/Device/Device'
import works from '@/helper/data/json/contents/works/works.json'

const HappyMove = ({pageId}) => {
  const FILTERED = works.content.find( (data) => data.id === pageId);
  return (
    <>
      <section className="web_img_wrap">
              <span>
                <img className="kia_web_img" src={works.imgUrl + FILTERED.custom[0].image} alt={FILTERED.custom[0].alt} />
              </span>
      </section>
      <div>
        <DepthTitle depthLevel="1" blindOption="hidden">
          About FILTERED Website and Mobile Website
        </DepthTitle>
        <ImageArray data={FILTERED.custom[1].img_array.img} bgColor={FILTERED.custom[1].img_array.bg_color} imgUrl={works.imgUrl} />
        <Device
          elementTitle={FILTERED.custom[2].device.elementTitle}
          description={FILTERED.custom[2].device.description}
          caption={FILTERED.custom[2].device.caption}
          imgUrl={FILTERED.custom[2].device.imgUrl.map(url => works.imgUrl + url)}
          alt={FILTERED.custom[2].device.alt}
          type={FILTERED.custom[2].device.type}
        />
      </div>
    </>
  );
};

export default HappyMove;
 