'use client';

import { useEffect, useState } from 'react';

import BaseArticle from '@/components/BaseArticle/BaseArticle';
import Btn from '@/components/Btn/Btn';
import DepthTitle from '@/components/DepthTitle/DepthTitle';
import Description from '@/components/Description/Description';
import Disclaimer from '@/components/Disclaimer/Disclaimer';
import ScrollTriggerArea from '@/components/ScrollTriggerArea/ScrollTriggerArea';
import Visual from '@/components/Visual/Visual';
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
  webSiteUrl = '',
}) {
  const HAS_CUSTOM = custom === 'Y' ? ' custom' : '';
  const GET_CLASSNAME =
    className == undefined
      ? { className: 'works_template' + HAS_CUSTOM }
      : { className: 'works_template ' + className + HAS_CUSTOM };

  const [hideClass, setHideClass] = useState('');
  const HandleScroll = () => {
    const VIEWPORT_HEIGHT = window.innerHeight;
    const VIEW_BTN = document.querySelector('.view_website_btn');
    const VIEW_BTN_HEIGHT = VIEW_BTN?.getBoundingClientRect().height;
    const NEXTWORK = document.querySelector('.detail_next_work_wrap');
    const NEXTWORK_OFFSET = NEXTWORK?.getBoundingClientRect().top;
    const SCROLL_TOP = document.documentElement.scrollTop;
    const ENVENT_OFFSET =
      NEXTWORK_OFFSET + SCROLL_TOP - VIEWPORT_HEIGHT + VIEW_BTN_HEIGHT + 50;

    SCROLL_TOP < ENVENT_OFFSET ? setHideClass('') : setHideClass(' hide');
  };
  useEffect(() => {
    window.addEventListener('scroll', HandleScroll);
    return () => {
      window.removeEventListener('scroll', HandleScroll);
    };
  }, []);

  return (
    <section {...GET_CLASSNAME}>
      {/* S: Key Visual 영역 */}
      <section className="detail_key_visual_wrap section_div is_black">
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
      </section>
      {/* E: Key Visual 영역 */}

      {/* S: Text 영역 */}
      <section className="detail_text_wrap section_div is_photo">
        <Description data={detailTextDescEn} innerHTMLOption="Y" />
        <Description data={detailTextDescKo} />
        {/* works.json => 받아와야 할 순서의 contents key값 중에 'projectInformation' 받아와서 적용 */}
        {/* 해당 값은 각 페이지 workContent props에 담아줘야 함 */}
        {workContent.map((data, index) => (
          <BaseArticle
            key={index}
            elementTitle={data.title}
            description={data.contents}
            innerHTMLOption="Y"
          />
        ))}
      </section>
      {/* E: Text 영역 */}

      {/* S: custom 영역 */}
      <section className="custom_area section_div is_photo">
        {customChildren}
      </section>
      {/* E: custom 영역 */}

      {/* S: Sub Visual 영역 */}
      <Visual
        dimm="Y"
        className="detail_sub_visual_wrap section_div is_black"
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
              innerHTMLOption="Y"
            />
          ))}
        </div>
      </Visual>
      {/* E: Sub Visual 영역 */}

      {/* S: Next work 영역 */}
      <section className="detail_next_work_wrap section_div is_photo">
        <DepthTitle depthLevel="1" blindOption="visible">
          Next Work
        </DepthTitle>
        <div>
          <Btn type="link" url={firstNextWork.pageUrl}>
            <BaseArticle
              imgUrl={works.imgUrl + firstNextWork.thumbnail}
              imgAlt={firstNextWork.thumbnailAlt}
              elementTitle={firstNextWork.title}
              description={firstNextWork.description}
            />
          </Btn>
          <Btn type="link" url={secondNextWork.pageUrl}>
            <BaseArticle
              imgUrl={works.imgUrl + secondNextWork.thumbnail}
              imgAlt={secondNextWork.thumbnailAlt}
              elementTitle={secondNextWork.title}
              description={secondNextWork.description}
            />
          </Btn>
          <Btn type="link" url={thirdNextWork.pageUrl}>
            <BaseArticle
              imgUrl={works.imgUrl + thirdNextWork.thumbnail}
              imgAlt={thirdNextWork.thumbnailAlt}
              elementTitle={thirdNextWork.title}
              description={thirdNextWork.description}
            />
          </Btn>
        </div>

        {/* S: Portfolio list button 영역 */}
        <Btn
          className="portfolio_list_btn"
          type="link"
          title="portfolio list button"
          url="/pages/works"
        >
          Portfolio list
        </Btn>
        {/* E: Portfolio list button 영역 */}
      </section>

      {/* S: View Website Button 영역 */}
      {webSiteUrl != '' && (
        <Btn
          className={`view_website_btn${hideClass}`}
          type="a"
          title="view website button"
          url={webSiteUrl}
        >
          View <br /> Website
        </Btn>
      )}
      {/* E: View Website Button 영역 */}

      {/* E: Next work 영역 */}
    </section>
  );
}
