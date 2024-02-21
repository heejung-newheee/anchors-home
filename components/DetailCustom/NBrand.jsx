'use client';

import React from 'react';
import Video from '@/components/Video/Video'
import DepthTitle from '@/components/DepthTitle/DepthTitle'
import ElementTitle from '@/components/ElementTitle/ElementTitle'
import Description from '@/components/Description/Description'
import works from '@/helper/data/json/contents/works/works.json'

const NBrand = ({pageId}) => {
  const FILTERED = works.content.find( (data) => data.id === pageId);
  return (
    <>
      <Video className="nbrand_video" videoUrl={works.videoUrl + FILTERED.custom[0].video} />
      <section className="nbrand_main_wrap">
        <DepthTitle depthLevel="1" blindOption="hidden">
          FILTERED Website Introduction
        </DepthTitle>
        <div className="main_text_wrap">
          <ElementTitle className="custom_element_title" data={FILTERED.custom[1].text} />
          <Description
            className="custom_description"
            data={FILTERED.custom[2].text}
          />
        </div>
        <div className="main_img_wrap">
          <img className="main_img" src={works.imgUrl + FILTERED.custom[3].image} alt={FILTERED.custom[3].alt} />
          <img className="main_img" src={works.imgUrl + FILTERED.custom[4].image} alt={FILTERED.custom[4].alt} />
        </div>
        <span>
                <img className="main_detail_img" src={works.imgUrl + FILTERED.custom[5].image} alt={FILTERED.custom[5].alt} />
              </span>
      </section>
      <section className="nbrand_sub_wrap">
        <DepthTitle depthLevel="1" blindOption="hidden">
          About FILTERED Website Sub Works
        </DepthTitle>
        <ElementTitle className="custom_element_title" data={FILTERED.custom[6].text} />
        <Description
          className="custom_description"
          data={FILTERED.custom[7].text}
        />
        <div className="sub_img_wrap">
          <img className="sub_img" src={works.imgUrl + FILTERED.custom[8].image} alt={FILTERED.custom[8].alt} />
          <img className="sub_img" src={works.imgUrl + FILTERED.custom[9].image} alt={FILTERED.custom[9].alt} />
          <img className="sub_img" src={works.imgUrl + FILTERED.custom[10].image} alt={FILTERED.custom[10].alt} />
        </div>
      </section>
    </>
  );
};

export default NBrand;
 