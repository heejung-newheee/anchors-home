'use client';
import React from 'react';

import ElementTitle from '@/components/ElementTitle/ElementTitle';
import Menu from '@/components/Menu/Menu';
import SwiperArea from '@/components/SwiperArea/SwiperArea';
import Visual from '@/components/Visual/Visual';
import aboutIntro from '@/helper/data/json/contents/about/aboutIntro.json';
import aboutMembers from '@/helper/data/json/contents/about/aboutMembers.json';
import variables from '@/public/assets/scss/_variables.module.scss';

/* function swiperContent(cont) {
  return (
    <div>
      <p>{cont.nameEn}</p>
      <div>
        <p>{cont.nameKo}</p>
        <p>{cont.part}</p>
        <p>{cont.hashtag}</p>
      </div>
    </div>
  );
} */

function firstContent(cont2) {
  return (
    <div>
      <p>{cont2.highlightText}</p>
    </div>
  );
}

function secondContent(cont3) {
  return (
    <div>
      <p>{cont3.text}</p>
    </div>
  );
}

export default function Jueun() {
  return (
    <>
      {/* Menu component test */}
      <Menu />

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
        swiperContent={function (cont) {
          return (
            <div>
              <p>{cont.nameEn}</p>
              <div>
                <p>{cont.nameKo}</p>
                <p>{cont.part}</p>
                <p>{cont.hashtag}</p>
              </div>
            </div>
          );
        }}
        swiperContentData={aboutMembers.members}
        swiperOption={{
          navigation: false,
          pagination: false,
          scrollbar: {
            draggable: true,
          },
        }}
        className="single"
      />
      <SwiperArea
        type="double"
        firstContent={firstContent}
        secondContent={secondContent}
        swiperContentData={aboutIntro.introduction}
        firstSwiperOption={{}}
        secondSwiperOption={{
          navigation: false,
          pagination: false,
        }}
        firstClassName="first-test"
        secondClassName="second-test"
      />
    </>
  );
}
