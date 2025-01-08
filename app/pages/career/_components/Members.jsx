'use client';

import React from 'react';
import DepthTitle from '@/components/DepthTitle/DepthTitle';
import Disclaimer from '@/components/Disclaimer/Disclaimer';
import Description from '@/components/Description/Description';
import ElementTitle from '@/components/ElementTitle/ElementTitle';
import SwiperArea from '@/components/SwiperArea/SwiperArea';

const FIRSTSWIPEROPTION = {
  effect: 'cards',
  // touchAngle: 180,
}
const SECONDWIPEROPTION = {
  pagination: false,
  navigation: false,
}

const Members = ({data, imgUrl}) => {
  function firstContent(){
    return data.map((item, idx) => (
      <div key={idx} className="first_swiper_cards">
        <img src={imgUrl + item.img} alt={item.alt} />
      </div>
    ));
  }

  function secondContent(){
    return data.map((item, idx) => (
      <>
        <ElementTitle key={`title${idx}`} data={item.name} />
        <Disclaimer key={`part${idx}`} data={item.part} />
        <Description key={`text1_${idx}`} data={item.text[0]} />
        <Description key={`text2_${idx}`} data={item.text[1]} />
      </>
    ));
  }

  return (
    <section className="swiper_members">
      <DepthTitle blindOption="hidden" depthLevel="1">Member Introduction</DepthTitle>
      <SwiperArea
        type="double"
        firstContent={firstContent()}
        secondContent={secondContent()}
        firstSwiperOption={FIRSTSWIPEROPTION}
        secondSwiperOption={SECONDWIPEROPTION}
      />
    </section>
  );
};

export default Members;
 