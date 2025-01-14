'use client';

import React from 'react';
import DepthTitle from '@/components/DepthTitle/DepthTitle';
import Disclaimer from '@/components/Disclaimer/Disclaimer';
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

const Features = ({data, imgUrl}) => {
  const { depthTitle, contents } = data;

  const renderFirstContent = () => {
    return contents.map((cont, idx) => (
      <span key={`sw01-img-${idx}`}>
        <img src={imgUrl + cont.img} alt={cont.alt} />
      </span>
    ));
  }

  const renderSecondContent = () => {
    return contents.map((cont, idx) => (
      <div className="intro_text" key={`sw01-div-${idx}`}>
        <ElementTitle className="intro_title" innerHTMLOption="Y" data={cont.highlightText} />
        <Disclaimer className="intro_disclaimer" data={cont.text} />
      </div>
    ));
  }

  return (
    <section className="platform_features">
      <DepthTitle className="depthTitle" depthLevel="1" blindOption="visible">{depthTitle}</DepthTitle>

      {contents && <div className='features_swiper is_photo'>
        <SwiperArea
          key="swiper01"
          type="double"
          firstClassName="image_swiper"
          secondClassName="text_swiper"
          firstContent={renderFirstContent()}
          secondContent={renderSecondContent()}
          firstSwiperOption={FIRSTSWIPEROPTION}
          secondSwiperOption={SECONDWIPEROPTION}
        />
      </div> || null}
    </section>
  );
};

export default Features;
 