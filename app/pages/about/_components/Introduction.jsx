'use client';

import React from 'react';
import DepthTitle from '@/components/DepthTitle/DepthTitle';
import Disclaimer from '@/components/Disclaimer/Disclaimer';
import Description from '@/components/Description/Description';
import ElementTitle from '@/components/ElementTitle/ElementTitle';
import SwiperArea from '@/components/SwiperArea/SwiperArea';

const FIRSTSWIPEROPTION = {
  effect: 'cards',
}
const SECONDWIPEROPTION = {
  navigation: false,
  pagination: false,
  spaceBetween: 24,
}

const Introduction = ({data, imgUrl}) => {
  const { introduction, introText, depthTitle } = data;

  function firstContent(){
    return introduction.map((item, idx) => (
      <span key={`sw01-img-${idx}`}>
        <img src={imgUrl + item.img} alt={item.alt} />
      </span>
    ));
  }

  function secondContent(){
    return introduction.map((item, idx) => (
      <div className="intro_text" key={`sw01-div-${idx}`}>
        <ElementTitle className="intro_title" innerHTMLOption="Y" data={item.highlightText} />
        <Disclaimer className="intro_disclaimer" data={item.text} />
      </div>
    ));
  }

  return (
    <>
      <section className="about_intro_text_wrap section_div is_photo">
        <Description innerHTMLOption="Y" data={introText.textEn} />
        <Description innerHTMLOption="Y" data={introText.textKo} />
      </section>

      <section className="about_intro_swiper section_div is_photo">
        <DepthTitle depthLevel="1" blindOption="hidden">{depthTitle}</DepthTitle>
        <SwiperArea
          key="swiper01"
          type="double"
          firstClassName="image_swiper"
          secondClassName="text_swiper"
          firstContent={firstContent()}
          secondContent={secondContent()}
          firstSwiperOption={FIRSTSWIPEROPTION}
          secondSwiperOption={SECONDWIPEROPTION}
        />
      </section>
    </>
  );
};

export default Introduction;
 