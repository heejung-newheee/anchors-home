'use client';
import React from 'react';

// import Accordion from '@/components/Accordion/Accordion';
// import BaseArticle from '@/components/BaseArticle/BaseArticle';
// import Btn from '@/components/Btn/Btn';
// import DepthTitle from '@/components/DepthTitle/DepthTitle';
// import Description from '@/components/Description/Description';
// import Disclaimer from '@/components/Disclaimer/Disclaimer';
// import Header from '@/components/Header/Header';
// import ImageArray from '@/components/ImageArray/ImageArray';
// import Logo from '@/components/Logo/Logo';
// import PageTitle from '@/components/PageTitle/PageTitle';
// import Visual from '@/components/Visual/Visual';
import WebGlCarousel from '@/components/WebGlCarousel/WebGlCarousel';
// import headerFooter from '@/helper/data/json/contents/headerFooter.json';
// import variables from '@/public/assets/scss/_variables.module.scss';
import './chchaa.scss';

// const ACCORDION_CONTENTS = [
//   {
//     title: '1',
//     content: (
//       <>
//         fff
//         <br />
//         asdfasdf
//       </>
//     ),
//   },
//   { title: '2', content: <span>asdf</span> },
//   { title: '3', content: <div>name</div> },
// ];
//headerFooter.menuList[0].name

// const PAGETITLE_DATA = [{ word: 'Our' }, { word: 'Works' }];
//
// const DESCRIPTION_DATA = 'description<b>tag text</b>';
//
// const IMGARR_DATA = [{ url: '/assets/images/이미지', alt: 'alt값' }];
export default function Chchaa() {
  return (
    <>
      <WebGlCarousel />
      {/*<ImageArray data={IMGARR_DATA} bgColor="#ff0000" />*/}
      {/*<Description data={DESCRIPTION_DATA} innerHTMLOption="Y" />*/}
      {/*<Description data={DESCRIPTION_DATA} innerHTMLOption="N" />*/}
      {/*<Description data={DESCRIPTION_DATA} />*/}
      {/*/!*<Accordion contents={headerFooter.test} />*!/*/}
      {/*/!*<Description dangerouslySetInnerHTML={{ __html: headerFooter.test }} />*!/*/}
      {/*<Header className="new_header is_black" />*/}
      {/*<div className="is_black" />*/}
      {/*<div*/}
      {/*  className="section_div is_black"*/}
      {/*  style={{*/}
      {/*    backgroundColor: variables.colorBlue,*/}
      {/*    color: variables.colorWhite,*/}
      {/*    height: '200px',*/}
      {/*  }}*/}
      {/*>*/}
      {/*  어두운 배경*/}
      {/*</div>*/}
      {/*<PageTitle data={headerFooter.menuList[0].name} />*/}
      {/*<div*/}
      {/*  className="section_div is_white"*/}
      {/*  style={{*/}
      {/*    backgroundColor: variables.colorLightgrey,*/}
      {/*    color: variables.colorWhite,*/}
      {/*    height: '200px',*/}
      {/*  }}*/}
      {/*>*/}
      {/*  밝은 배경*/}
      {/*</div>*/}
      {/*<div*/}
      {/*  className="section_div is_black"*/}
      {/*  style={{*/}
      {/*    backgroundColor: variables.colorBlack,*/}
      {/*    color: variables.colorWhite,*/}
      {/*    height: '200px',*/}
      {/*  }}*/}
      {/*>*/}
      {/*  어두운 배경*/}
      {/*</div>*/}
      {/*<div*/}
      {/*  className="section02"*/}
      {/*  style={{*/}
      {/*    backgroundColor: variables.colorWhite,*/}
      {/*    color: variables.colorWhite,*/}
      {/*    height: '200px',*/}
      {/*  }}*/}
      {/*>*/}
      {/*  void*/}
      {/*</div>*/}
      {/*<div*/}
      {/*  className="section_div is_photo"*/}
      {/*  style={{*/}
      {/*    backgroundColor: variables.colorLightblue,*/}
      {/*    color: variables.colorWhite,*/}
      {/*    height: '200px',*/}
      {/*  }}*/}
      {/*>*/}
      {/*  사진 배경*/}
      {/*</div>*/}
      {/*1. &lt;Btn&gt;*/}
      {/*<br />*/}
      {/*<Btn design="btnSecondaryUp">테스트 버튼</Btn>*/}
      {/*<br />*/}
      {/*<br />*/}
      {/*2. &lt;Logo&gt;*/}
      {/*<br />*/}
      {/*<Logo />*/}
      {/*<br />*/}
      {/*<br />*/}
      {/*2. &lt;Accordion&gt; <br />*/}
      {/*<p style={{ backgroundColor: variables.colorBlue }}>*/}
      {/*  data props(contents) [&#123;title : "data", content : "data"&#125; , ...*/}
      {/*  ]*/}
      {/*</p>*/}
      {/*<br />*/}
      {/*<Accordion*/}
      {/*  className="accordion1"*/}
      {/*  contents={[*/}
      {/*    {*/}
      {/*      title: '1',*/}
      {/*      content: (*/}
      {/*        <>*/}
      {/*          fff123123123123*/}
      {/*          <br />*/}
      {/*          asdfasdf*/}
      {/*        </>*/}
      {/*      ),*/}
      {/*    },*/}
      {/*    { title: '2', content: <span>asdf</span> },*/}
      {/*    { title: '3', content: <div>name</div> },*/}
      {/*  ]}*/}
      {/*/>*/}
      {/*<br />*/}
      {/*<br />*/}
      {/*3. &lt;BaseArticle&gt;*/}
      {/*<br />*/}
      {/*<BaseArticle className="bascArticle1" elementTitle="text" />*/}
      {/*<br />*/}
      {/*<br />*/}
      {/*4. &lt;PageTitle&gt; <br />*/}
      {/*<p>data props(data) [&#123;word : "data"&#125;, ...]</p>*/}
      {/*<PageTitle data={PAGETITLE_DATA} />*/}
      {/*<br />*/}
      {/*<br />*/}
      {/*5. &lt;DepthTitle&gt; <br />*/}
      {/*<p />*/}
      {/*/!*<PageTitle data={PAGETITLE_DATA} />*!/*/}
      {/*<DepthTitle blindOption="" depthLevel="2">*/}
      {/*  depthTitle*/}
      {/*</DepthTitle>*/}
      {/*6. disclaimer <br />*/}
      {/*<Disclaimer className="disclaimer1 disclaimer2" data="disclaimer" />*/}
      {/*<br />*/}
      {/*6. visual <br />*/}
      {/*<Visual className="visual1" />*/}
      {/*<BaseArticle disclaimer="disclaimer" description="description" />*/}
    </>
  );
}
