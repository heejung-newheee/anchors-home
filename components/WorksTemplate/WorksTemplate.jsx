'use client';

import React from 'react';

import Link from 'next/link';

import BaseArticle from '@/components/BaseArticle/BaseArticle';
import Btn from '@/components/Btn/Btn';
import DepthTitle from '@/components/DepthTitle/DepthTitle';
import Description from '@/components/Description/Description';
import Disclaimer from '@/components/Disclaimer/Disclaimer';
import Visual from '@/components/Visual/Visual';
import ScrollTriggerArea from '@/components/ScrollTriggerArea/ScrollTriggerArea';
import works from '@/helper/data/json/contents/works/works.json';
import './scss/WorkTemplate.scss';

export default function WorksTemplate({
  className,
  visualImgUrl,
  visualChildren,
  disclaimerChildren,
  detailTextDescEn,
  detailTextDescKo,
  customChildren,
  subVisualImgUrl,
  workContent,
  firstNextWork,
  secondNextWork,
  thirdNextWork,
  custom = 'N',
}) {
  const HAS_CUSTOM = custom === 'Y' ? ' custom' : '';
  const GET_CLASSNAME =
    className == undefined
      ? { className: 'works_template' + HAS_CUSTOM }
      : { className: 'works_template ' + className + HAS_CUSTOM };

  const TRIGGER_START = {
    mobile: '1848px',
    table: '2338px',
    desktop: '2498px',
    wide: '2800px',
  };

  const TRIGGER_END = {
    mobile: '2000px',
    table: '4000px',
    desktop: '4000px',
    wide: '4500px',
  };

  return (
    <section {...GET_CLASSNAME}>
      {/* S: Key Visual 영역 */}
      <div className="detail_key_visual_wrap">
        <Visual
          dimm="Y"
          className="detail_key_visual"
          imgUrl={visualImgUrl}
          pageTitleData={visualChildren}
        >
          <Disclaimer data={disclaimerChildren} />
        </Visual>
        <img
          className="scroll_icon"
          src="/assets/images/contents/works/img_scroll.png"
          alt="scroll for more image"
        />
      </div>
      {/* E: Key Visual 영역 */}

      {/* S: View Website Button 영역 */}
      <ScrollTriggerArea
        type="multiTrigger"
        triggerOffset={'center'}
        triggerMarkers={true}
        triggerStart={TRIGGER_START}
        triggerEnd={TRIGGER_END}
        YAxes={{
          mobile: ['200px'],
          table: ['0px'],
          desktop: ['500px'],
          wide: ['700px'],
        }}
      >
        <Btn className="view_website_btn" type="a" title="view website button">
          View <br /> Website
        </Btn>
      </ScrollTriggerArea>
      {/* E: View Website Button 영역 */}

      {/* S: Text 영역 */}
      <div className="detail_text_wrap">
        <Description data={detailTextDescEn} />
        <Description data={detailTextDescKo} />
        {/* works.json => 받아와야 할 순서의 contents key값 중에 'projectInformation' 받아와서 적용 */}
        {/* 해당 값은 각 페이지 workContent props에 담아줘야 함 */}
        {workContent.map((data, index) => (
          <BaseArticle
            key={index}
            elementTitle={data.title}
            description={data.contents}
          />
        ))}
      </div>
      {/* E: Text 영역 */}

      {/* S: custom 영역 */}
      <div className="custom_area">{customChildren}</div>
      {/* E: custom 영역 */}

      {/* S: Sub Visual 영역 */}
      <Visual
        dimm="Y"
        className="detail_sub_visual_wrap"
        imgUrl={subVisualImgUrl}
      >
        <div className="sub_visual_text">
          <Description data="Thank you!" />
          {/* works.json => 받아와야 할 순서의 contents key값 중에 'projectInformation' 받아와서 적용 */}
          {/* 해당 값은 각 페이지 workContent props에 담아줘야 함 */}
          {workContent.map((data, index) => (
            <BaseArticle
              key={index}
              업
              elementTitle={data.title}
              description={data.contents}
            />
          ))}
        </div>
      </Visual>
      {/* E: Sub Visual 영역 */}

      {/* S: Next work 영역 */}
      <div className="detail_next_work_wrap">
        <DepthTitle depthLevel="1" blindOption="visible">
          Next Work
        </DepthTitle>
        <div>
          <a href={firstNextWork.websiteUrl}>
            <BaseArticle
              imgUrl={works.imgUrl + firstNextWork.thumbnail}
              imgAlt={firstNextWork.thumbnailAlt}
              elementTitle={firstNextWork.title}
              description={firstNextWork.description}
            />
          </a>
          <a href={secondNextWork.websiteUrl}>
            <BaseArticle
              imgUrl={works.imgUrl + secondNextWork.thumbnail}
              imgAlt={secondNextWork.thumbnailAlt}
              elementTitle={secondNextWork.title}
              description={secondNextWork.description}
            />
          </a>
          <a href={thirdNextWork.websiteUrl}>
            <BaseArticle
              imgUrl={works.imgUrl + thirdNextWork.thumbnail}
              imgAlt={thirdNextWork.thumbnailAlt}
              elementTitle={thirdNextWork.title}
              description={thirdNextWork.description}
            />
          </a>
        </div>
      </div>
      {/* E: Next work 영역 */}

      {/* S: Portfolio list button 영역 */}
      <Btn
        className="portfolio_list_btn"
        type="a"
        title="portfolio list button"
      >
        Portfolio list
      </Btn>
      {/* E: Portfolio list button 영역 */}
    </section>
  );
}
