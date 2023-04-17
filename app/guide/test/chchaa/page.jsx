'use client';
import React from 'react';

import Accordion from '@/components/Accordion/Accordion';
import BaseArticle from '@/components/BaseArticle/BaseArticle';
import Btn from '@/components/Btn/Btn';
import DepthTitle from '@/components/DepthTitle/DepthTitle';
import Logo from '@/components/Logo/Logo';
import PageTitle from '@/components/PageTitle/PageTitle';
import variables from '@/public/assets/scss/_variables.module.scss';

const ACCORDION_CONTENTS = [
  { title: '1', content: 'a' },
  { title: '2', content: 'b' },
  { title: '3', content: <span>span tag</span> },
];
const PAGETITLE_DATA = [{ word: 'Our' }, { word: 'Works' }];

export default function chchaa() {
  return (
    <>
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
      <Accordion contents={ACCORDION_CONTENTS} />
      <br />
      <br />
      3. &lt;BaseArticle&gt;
      <br />
      <BaseArticle elementTitle="text" />
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
    </>
  );
}
