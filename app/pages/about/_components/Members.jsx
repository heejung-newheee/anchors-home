'use client';

import React from 'react';
import DepthTitle from '@/components/DepthTitle/DepthTitle';
import Description from '@/components/Description/Description';
import ElementTitle from '@/components/ElementTitle/ElementTitle';
import MoreDetail from '@/components/MoreDetail/MoreDetail';
import SwiperArea from '@/components/SwiperArea/SwiperArea';
import Visual from '@/components/Visual/Visual';

const SWIPEROPTION = {
  slidesPerView: 'auto',
  navigation: false,
  spaceBetween: 16,
  slidesOffsetBefore: 24,
  slidesOffsetAfter: 24,
  autoplay: {
    delay: 1,
  },
  loop: true,
  speed: 4000,
  breakpoints: {
    360: {
      autoplay: false,
    },
    768: {
      spaceBetween: 24,
      autoplay: false,
    },
    1280: {
      spaceBetween: 32,
      slidesOffsetBefore: 32,
      slidesOffsetAfter: 32,
    },
    1536: {
      spaceBetween: 48,
      slidesOffsetBefore: 48,
      slidesOffsetAfter: 48,
    },
    1920: {
      slidesOffsetBefore: 240,
    },
  },
};

const Members = ({data, imgUrl}) => {
  const { depthTitle, visualImg, membersText, members } = data;
  
  const renderSwiperContent = () => {
    return [...members, ...members].map((item, idx) => (
      <article key={`sw04-${idx}`}>
        <ElementTitle data={item.nameEn} className="member_name_en" />
        <MoreDetail imgUrl={imgUrl + item.img} imgAlt={item.alt}>
          <article className="tooltip">
            <ElementTitle data={item.nameKo} />
            <Description className="member_team" data={item.part} />
            <Description innerHTMLOption="Y" className="member_hashtag" data={item.hashtag} />
          </article>
        </MoreDetail>
      </article>
    ));
  };

  return (
    <section className="about_members section_div is_photo">
      <Visual defaultId="scroll_sub_visual" imgUrl={imgUrl + visualImg} />
      <div className="about_members_desc">
        <Description innerHTMLOption="Y" data={membersText.textEn} />
        <Description innerHTMLOption="Y" data={membersText.textKo} />
      </div>
      
      <DepthTitle depthLevel="1" blindOption="hidden">{depthTitle}</DepthTitle>
      <SwiperArea
        key="swiper04"
        type="single"
        autoPlayStop="Y"
        swiperOption={SWIPEROPTION}
        className="about_members_swiper"
        swiperContent={renderSwiperContent()}
      />
    </section>
  );
};

export default Members;
 