'use client';
import React from 'react';

import ElementTitle from '@/components/ElementTitle/ElementTitle';
import SwiperArea from '@/components/SwiperArea/SwiperArea';
import Visual from '@/components/Visual/Visual';
import jquery from '@/helper/libs/jquery_loader';
import variables from '@/public/assets/scss/_variables.module.scss';

function swiperContent() {
  return <div>single swiper</div>;
}

function firstContent() {
  return <div>first swiper</div>;
}

function secondContent() {
  return <div>double swiper</div>;
}

export default function Jueun() {
  return (
    <>
      {/* ElementTitle component test */}
      <p
        style={{
          backgroundColor: variables.colorBlack,
          color: '#fff',
          padding: '10px 0',
        }}
      >
        ElementTitle Component
      </p>
      <ElementTitle data="Element Title" />

      {/* Visual component test */}
      <p
        style={{
          backgroundColor: variables.colorBlack,
          color: '#fff',
          padding: '10px 0',
          marginTop: '30px',
        }}
      >
        Visual Component
      </p>
      <Visual imgUrl="https://picsum.photos/1920/800">
        <div>
          <p>Title</p>
          <span>Description</span>
        </div>
      </Visual>

      {/* SwiperArea component test */}
      <p
        style={{
          backgroundColor: '#000',
          color: '#fff',
          padding: '10px 0',
          marginTop: '30px',
        }}
      >
        SwiperArea Component
      </p>
      <SwiperArea
        type="single"
        swiperContent={swiperContent}
        swiperOption={{
          slidesPerView: 1,
        }}
      />
      <SwiperArea
        type="double"
        firstContent={firstContent}
        secondContent={secondContent}
      />
    </>
  );
}
