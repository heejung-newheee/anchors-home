'use client';

import React from 'react';
import DepthTitle from '@/components/DepthTitle/DepthTitle';
import Disclaimer from '@/components/Disclaimer/Disclaimer';
import Description from '@/components/Description/Description';
import MoreDetail from '@/components/MoreDetail/MoreDetail';
import SwiperArea from '@/components/SwiperArea/SwiperArea';

const SWIPEROPTION = {
  spaceBetween: 16,
  navigation: false,
  pagination: {
    clickable: true,
  },
  autoplay: {
    delay: 1,
  },
  loop: true,
  speed: 4000,
  breakpoints: {
    360: { slidesPerView: 1, autoplay: false },
    768: { slidesPerView: 2, autoplay: false },
    1280: { slidesPerView: 3 },
  },
}

const Comment = ({data, imgUrl}) => {
  const { depthTitle, description, content } = data;
  
  function swiperContent(){
    return content.map((item, idx) => 
      <div key={idx}>
          <MoreDetail key={`detail${idx}`} imgUrl={imgUrl+ item.img}>
            <Description innerHTMLOption="Y" data={item.highlightText} />
            <Disclaimer data={item.text} />
          </MoreDetail>
      </div>
    );
  }

  return (
    <section className="swiper_comment">
      <DepthTitle blindOption="hidden" depthLevel="1">{depthTitle}</DepthTitle>
      <Description className="swiper_comment_text" innerHTMLOption="Y" data={description} />
      <SwiperArea
        type="single"
        autoPlayStop="Y"
        swiperContent={swiperContent()}
        swiperOption={SWIPEROPTION}
        className="single swiper_comment_swiper"
      />
    </section>
  );
};

export default Comment;
 