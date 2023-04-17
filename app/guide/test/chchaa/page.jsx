'use client';
import React from 'react';

import Accordion from '@/components/Accordion/Accordion';
import BaseArticle from '@/components/BaseArticle/BaseArticle';
import Btn from '@/components/Btn/Btn';
import DepthTitle from '@/components/DepthTitle/DepthTitle';
import Disclaimer from '@/components/Disclaimer/Disclaimer';
import Header from '@/components/Header/Header';
import Logo from '@/components/Logo/Logo';
import PageTitle from '@/components/PageTitle/PageTitle';
import Visual from '@/components/Visual/Visual';
import variables from '@/public/assets/scss/_variables.module.scss';

const ACCORDION_CONTENTS = [
  { title: '1', content: 'a' },
  { title: '2', content: 'b' },
  { title: '3', content: <span>span tag</span> },
];
const PAGETITLE_DATA = [{ word: 'Our' }, { word: 'Works' }];

export default function Chchaa() {
  return (
    <>
      <Header />
      <PageTitle data={PAGETITLE_DATA} />
      <div
        className="section-div type-bg-white"
        style={{
          backgroundColor: variables.colorLightgrey,
          color: variables.colorWhite,
          height: '200px',
        }}
      >
        밝은 배경
      </div>
      <div
        className="section-div type-bg-black"
        style={{
          backgroundColor: variables.colorBlack,
          color: variables.colorWhite,
          height: '200px',
        }}
      >
        어두운 배경
      </div>
      <div
        className="section02"
        style={{
          backgroundColor: variables.colorWhite,
          color: variables.colorWhite,
          height: '200px',
        }}
      >
        void
      </div>
      <div
        className="section-div type-bg-photo"
        style={{
          backgroundColor: variables.colorLightblue,
          color: variables.colorWhite,
          height: '200px',
        }}
      >
        사진 배경
      </div>
      1. &lt;Btn&gt;
      <br />
      <Btn design="btnSecondaryUp">테스트 버튼</Btn>
      <br />
      <br />
      2. &lt;Logo&gt;
      <br />
      <Logo />
      <br />
      <br />
      2. &lt;Accordion&gt; <br />
      <p style={{ backgroundColor: variables.colorBlue }}>
        data props(contents) [&#123;title : "data", content : "data"&#125; , ...
        ]
      </p>
      <br />
      <Accordion className="accordion1" contents={ACCORDION_CONTENTS} />
      <br />
      <br />
      3. &lt;BaseArticle&gt;
      <br />
      <BaseArticle className="bascArticle1" elementTitle="text" />
      <br />
      <br />
      4. &lt;PageTitle&gt; <br />
      <p>data props(data) [&#123;word : "data"&#125;, ...]</p>
      <PageTitle data={PAGETITLE_DATA} />
      <br />
      <br />
      5. &lt;DepthTitle&gt; <br />
      <p />
      {/*<PageTitle data={PAGETITLE_DATA} />*/}
      <DepthTitle blindOption="" depthLevel="2">
        depthTitle
      </DepthTitle>
      6. disclaimer <br />
      <Disclaimer className="disclaimer1 disclaimer2" data="disclaimer" />
      <br />
      6. visual <br />
      <Visual className="visual1" />
    </>
  );
}
