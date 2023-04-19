'use client';

import React from 'react';

import Link from 'next/link';

import BaseArticle from '@/components/BaseArticle/BaseArticle';
import Btn from '@/components/Btn/Btn';
import DepthTitle from '@/components/DepthTitle/DepthTitle';
import Description from '@/components/Description/Description';
import Disclaimer from '@/components/Disclaimer/Disclaimer';
import Visual from '@/components/Visual/Visual';
import works from '@/helper/data/json/contents/works/works.json';
import './scss/WorkTemplate.scss';

export default function WorksTemplate({ className }) {
  const GET_CLASSNAME =
    className == undefined
      ? { className: 'works_template' }
      : { className: 'works_template ' + className };
  return (
    <section {...GET_CLASSNAME}>
      {/* S: Key Visual 영역 */}
      <div className="detail_key_visual_wrap">
        <Visual
          className="detail_key_visual"
          imgUrl="/assets/images/contents/works/img_keyvisual_aia.png"
          pageTitleData={
            <>
              AIA Life insurance
              <br />
              ‘MY AIA’ site
            </>
          }
        >
          <Disclaimer data={works.content[0].description} />
        </Visual>
        <img
          className="scroll_icon"
          src="/assets/images/contents/works/img_scroll.png"
          alt="scroll for more image"
        />
      </div>
      {/* E: Key Visual 영역 */}

      {/* S: View Website Button 영역 */}
      <Btn className="view_website_btn" type="a" title="view website button">
        View Website
      </Btn>
      {/* E: View Website Button 영역 */}

      {/* S: Text 영역 */}
      <div className="detail_text_wrap">
        <Description
          data={
            <>
              Global insurance company AIA Life Insurance claim screen, MY AIA
              enhance project. The <span>user interface has been improved</span>
              to make insurance claims more convenient. Anchors carried out the
              project based on <span>our experienced AEM know-how,</span> and we
              are recognized for its ability to perform. MY AIA annual operation
              project is also underway.
            </>
          }
        />
        <Description
          data={
            <>
              글로벌 보험사 AIA생명의 MY AIA 보험금 청구 화면 개편 사업으로 보다
              <br />
              편리하게 보험금 청구가 가능하도록 User Interface를 개선하였습니다.
              <br />
              자사의 숙련된 AEM Know-how를 바탕으로 프로젝트를 수행하였으며,
              수행
              <br />
              능력을 인정받아 MY AIA 연간 운영 사업도 진행하고 있습니다.
            </>
          }
        />
        {/* works.json => 'projectInformation' key값 순서 가져와서 적용 */}
        {works.content[4].projectInfomation.map((data, index) => (
          <BaseArticle
            key={index}
            elementTitle={data.title}
            description={data.contents}
          />
        ))}
      </div>
      {/* E: Text 영역 */}

      {/* S: Sub Visual 영역 */}
      <Visual
        dimm="Y"
        className="detail_sub_visual_wrap"
        imgUrl="/assets/images/contents/works/img_subvisual_aia.png"
      >
        <div className="sub_visual_text">
          <Description data="Thank you!" />
          {/* works.json => 'projectInformation' key값 순서 가져와서 적용 */}
          {works.content[4].projectInfomation.map((data, index) => (
            <BaseArticle
              key={index}
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
          <a href="#">
            <BaseArticle
              imgUrl={works.content[4].thumbnail}
              imgAlt="next work thumnail image"
              elementTitle={works.content[4].title}
              description={works.content[4].description}
            />
          </a>
          <a href="#">
            <BaseArticle
              imgUrl={works.content[4].thumbnail}
              imgAlt="next work thumnail image"
              elementTitle={works.content[4].title}
              description={works.content[4].description}
            />
          </a>
          <a href="#">
            <BaseArticle
              imgUrl={works.content[4].thumbnail}
              imgAlt="next work thumnail image"
              elementTitle={works.content[4].title}
              description={works.content[4].description}
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
