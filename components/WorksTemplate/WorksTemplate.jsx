'use client';

import { useEffect, useState } from 'react';

import BaseArticle from '@/components/BaseArticle/BaseArticle';
import Btn from '@/components/Btn/Btn';
import DepthTitle from '@/components/DepthTitle/DepthTitle';
import Description from '@/components/Description/Description';
import Disclaimer from '@/components/Disclaimer/Disclaimer';
import Visual from '@/components/Visual/Visual';
import works from '@/helper/data/json/contents/works/works.json';
import './scss/WorkTemplate.scss';

export default function WorksTemplate({
  className,
  pageId,
  customChildren,
  webSiteUrl ="N"
}) {
  const customChildrenExtended = customChildren ?? customChildren;
  // const HAS_CUSTOM = custom === 'Y' ? ' custom' : '';
  const HAS_CUSTOM = !customChildren ? ' custom' : '';
  const GET_CLASSNAME = !className ? { className: 'works_template' + HAS_CUSTOM } : { className: 'works_template ' + className + HAS_CUSTOM };

  const [hideClass, setHideClass] = useState('');
  const HandleScroll = () => {
    const VIEWPORT_HEIGHT = window.innerHeight;
    const VIEW_BTN = document.querySelector('.view_website_btn');
    const VIEW_BTN_HEIGHT = VIEW_BTN?.getBoundingClientRect().height;
    const NEXTWORK = document.querySelector('.detail_next_work_wrap');
    const NEXTWORK_OFFSET = NEXTWORK?.getBoundingClientRect().top;
    const SCROLL_TOP = document.documentElement.scrollTop;
    const ENVENT_OFFSET = NEXTWORK_OFFSET + SCROLL_TOP - VIEWPORT_HEIGHT + VIEW_BTN_HEIGHT + 50;

    SCROLL_TOP < ENVENT_OFFSET ? setHideClass('') : setHideClass(' hide');
  };

  const FILTERED = works.content.find( (data) => data.id === pageId); //pageId
  const THIS_INDEX_ARR = works.content.map((data, idx)=> (data.id === FILTERED.id ? idx : null) );
  const THIS_INDEX = THIS_INDEX_ARR.find( (data) => data !== null )
  const [isFirstNumber, setIsFirstNumber] = useState(0);
  const [isSecondNumber, setIsSecondNumber] = useState(0);
  const [isThirdNumber, setIsThirdNumber] = useState(0);


  useEffect(()=> {
    THIS_INDEX === works.content.length-1 ? setIsFirstNumber(0) : setIsFirstNumber(THIS_INDEX + 1)
    THIS_INDEX === works.content.length-1 ? setIsSecondNumber(1) : THIS_INDEX === works.content.length-2 ? setIsSecondNumber(0) : setIsSecondNumber(THIS_INDEX + 2)
    THIS_INDEX === works.content.length-1 ? setIsThirdNumber(2) : THIS_INDEX === works.content.length-2 ? setIsThirdNumber(1) : THIS_INDEX === works.content.length-3 ? setIsThirdNumber(0) : setIsThirdNumber(THIS_INDEX + 3)

    window.addEventListener('scroll', HandleScroll);
    return () => {
      window.removeEventListener('scroll', HandleScroll);
    };
  }, []);

  return (
    <section {...GET_CLASSNAME}>
      {/* S: Key Visual 영역 */}
      <section className="detail_key_visual_wrap section_div is_black">
        <Visual dimm="Y" defaultId="scroll_main_visual" className="detail_key_visual" imgUrl={works.imgUrl + FILTERED.visual} pageTitleData={FILTERED.title}>
          <Disclaimer data={FILTERED.description} />
        </Visual>
        <img className="scroll_icon" src="/assets/images/contents/works/img_scroll.png" alt="scroll for more image" />
      </section>
      {/* E: Key Visual 영역 */}

      {/* S: Text 영역 */}
      <section className="detail_text_wrap section_div is_photo">
        <Description data={FILTERED.text.en} innerHTMLOption="Y" />
        <Description data={FILTERED.text.ko} innerHTMLOption="Y" />
        {/* works.json => 받아와야 할 순서의 contents key값 중에 'projectInformation' 받아와서 적용 */}
        {/* 해당 값은 각 페이지 workContent props에 담아줘야 함 */}
        {FILTERED.projectInfomation.map((data, index) => (
          <BaseArticle key={index} elementTitle={data.title} description={data.contents} innerHTMLOption="Y" />
        ))}
      </section>
      {/* E: Text 영역 */}

      {/* S: custom 영역 */}
      {!!customChildrenExtended && <section className="custom_area section_div is_photo">{customChildrenExtended}</section>}
      {/* E: custom 영역 */}

      {/* S: Sub Visual 영역 */}
      <section>
        <Visual dimm="Y" defaultId="scroll_sub_visual" className="detail_sub_visual_wrap section_div is_black" imgUrl={works.imgUrl + FILTERED.subVisual}>
          <div className="sub_visual_text">
            <Description data="Thank you!" />
            {/* works.json => 받아와야 할 순서의 contents key값 중에 'projectInformation' 받아와서 적용 */}
            {/* 해당 값은 각 페이지 workContent props에 담아줘야 함 */}
            {FILTERED.projectInfomation.map((data, index) => (
              <BaseArticle key={index} elementTitle={data.title} description={data.contents} innerHTMLOption="Y" />
            ))}
          </div>
        </Visual>
      </section>
      {/* E: Sub Visual 영역 */}

      {/* S: Next work 영역 */}
      <section className="detail_next_work_wrap section_div is_photo">
        <DepthTitle depthLevel="1" blindOption="visible">
          Next Work
        </DepthTitle>
        <div>
          <Btn className="next_work_list" type="link" url={works.content[isFirstNumber].pageUrl}>
            <BaseArticle
              imgUrl={works.imgUrl + works.content[isFirstNumber].thumbnail}
              imgAlt={works.content[isFirstNumber].thumbnailAlt}
              elementTitle={works.content[isFirstNumber].title}
              description={works.content[isFirstNumber].description}
              defaultID="next_works_first"
            />
          </Btn>
          <Btn className="next_work_list" type="link" url={works.content[isSecondNumber].pageUrl}>
            <BaseArticle
              imgUrl={works.imgUrl + works.content[isSecondNumber].thumbnail}
              imgAlt={works.content[isSecondNumber].thumbnailAlt}
              elementTitle={works.content[isSecondNumber].title}
              description={works.content[isSecondNumber].description}
              defaultID="next_works_second"
            />
          </Btn>
          <Btn className="next_work_list" type="link" url={works.content[isThirdNumber].pageUrl}>
            <BaseArticle
              imgUrl={works.imgUrl + works.content[isThirdNumber].thumbnail}
              imgAlt={works.content[isThirdNumber].thumbnailAlt}
              elementTitle={works.content[isThirdNumber].title}
              description={works.content[isThirdNumber].description}
              defaultID="next_works_third"
            />
          </Btn>
        </div>

        {/* S: Portfolio list button 영역 */}
        <Btn className="portfolio_list_btn" type="link" title="portfolio list button" url="/pages/works">
          Portfolio list
        </Btn>
        {/* E: Portfolio list button 영역 */}
      </section>

      {/* S: View Website Button 영역 */}
      {webSiteUrl === "Y" && (
        <Btn className={`view_website_btn${hideClass}`} type="a" title="view website button" url={FILTERED.websiteUrl} target="_black">
          View <br /> Website
        </Btn>
      )}
      {/* E: View Website Button 영역 */}

      {/* E: Next work 영역 */}
    </section>
  );
}
