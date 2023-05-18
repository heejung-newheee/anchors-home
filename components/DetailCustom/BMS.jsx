'use client';

import React from 'react';
import Video from '@/components/Video/Video'
import DepthTitle from '@/components/DepthTitle/DepthTitle'
import ElementTitle from '@/components/ElementTitle/ElementTitle'
import Description from '@/components/Description/Description'
import works from '@/helper/data/json/contents/works/works.json'

const BMS = ({pageId}) => {
  const FILTERED = works.content.find( (data) => data.id === pageId);
  return (
    <>
      <Video className="bms_video" videoUrl={works.videoUrl + FILTERED.custom[0].video} />
      <section className="main_wrap">
        <DepthTitle depthLevel="1" blindOption="hidden">
          BMS Website Introduction
        </DepthTitle>
        <div className="main_text_wrap">
          <ElementTitle className="custom_element_title" data={FILTERED.custom[1].text} />
          <Description
            className="custom_description"
            data={FILTERED.custom[2].text}
            innerHTMLOption="Y"
          />
        </div>
        <div className="main_img_wrap">
          <img className="main_img" src={works.imgUrl + FILTERED.custom[3].image} alt={FILTERED.custom[3].alt} />
        </div>
        <span>
                <img className="main_detail_img" src={works.imgUrl + FILTERED.custom[4].image} alt={FILTERED.custom[4].alt}/>
              </span>
      </section>
      <section className="brand_asset_wrap">
        <div className="brand_asset_content">
          <DepthTitle depthLevel="1" blindOption="hidden">
            BMS Media Asset Introduction
          </DepthTitle>
          <ElementTitle className="custom_element_title" data={FILTERED.custom[5].text} />
          <Description
            className="custom_description"
            data={FILTERED.custom[6].text}
            innerHTMLOption="Y"
          />
          <div className="asset_list">
            <Description data={FILTERED.custom[7].text} />
            <img src={works.imgUrl + FILTERED.custom[8].image} alt={FILTERED.custom[8].alt}/>
          </div>
          <div className="asset_list">
            <Description data={FILTERED.custom[9].text} />
            <img src={works.imgUrl + FILTERED.custom[10].image} alt={FILTERED.custom[10].alt}/>
          </div>
          <div className="asset_list">
            <Description data={FILTERED.custom[11].text} />
            <img src={works.imgUrl + FILTERED.custom[12].image} alt={FILTERED.custom[12].alt}/>
          </div>
        </div>
      </section>
      <section className="identity_system_wrap">
        <DepthTitle depthLevel="1" blindOption="hidden">
          BMS Identity System Introduction
        </DepthTitle>
        <ElementTitle className="custom_element_title" data={FILTERED.custom[13].text} />
        <Description
          className="custom_description"
          data={FILTERED.custom[14].text}
        />
        <span className="identity_img">
                  <img src={works.imgUrl + FILTERED.custom[15].image} alt={FILTERED.custom[15].alt}/>
              </span>
      </section>
    </>
  );
};

export default BMS;
 