import React from 'react';

import DepthTitle from '@/components/DepthTitle/DepthTitle';
import Description from '@/components/Description/Description';
import ElementTitle from '@/components/ElementTitle/ElementTitle';
import Video from '@/components/Video/Video';
import WorksTemplate from '@/components/WorksTemplate/WorksTemplate';
import seo from '@/helper/data/json/contents/SEO.json';
import works from '@/helper/data/json/contents/works/works.json';

import './scss/nBrand.scss';

export const metadata = {
  title: seo.title.subPage.detail.nBrand + ' : ' + seo.title.subPage.works,
};

export default function Nbrand() {
  return (
    <>
      <WorksTemplate
        custom="Y"
        visualImgUrl={works.imgUrl + works.content[10].visual}
        visualChildren={works.content[10].title}
        disclaimerChildren={works.content[10].description}
        detailTextDescEn={works.content[10].text.en}
        detailTextDescKo={works.content[10].text.ko}
        customChildren={
          <>
            <Video className="nbrand_video" videoUrl="/assets/images/video/video_nbrand.mp4" />
            <section className="nbrand_main_wrap">
              <DepthTitle depthLevel="1" blindOption="hidden">
                NBrand Website Introduction
              </DepthTitle>
              <div className="main_text_wrap">
                <ElementTitle className="custom_element_title" data="Main" />
                <Description
                  className="custom_description"
                  data={
                    <>
                      산업에 대한 높은 이해도와 IT 지식을 통해 현대 모터스포트와 N브랜드 차종을 일원화된 콘텐츠로 운영하였습니다. 특히, 글로벌
                      웹사이트 특성의 다국어 표현에 최적화된 화면을 표출하고, 시스템에 부하가 적은 스크립트와 소스를 적용하여 소비자들의 정보 접근성을
                      높였습니다.
                    </>
                  }
                />
              </div>
              <div className="main_img_wrap">
                <img className="main_img" src="/assets/images/contents/works/img_web1_nbrand.jpg" alt="NBrand main 이미지" />
                <img className="main_img" src="/assets/images/contents/works/img_web2_nbrand.jpg" alt="NBrand main 이미지" />
              </div>
              <span>
                <img
                  className="main_detail_img"
                  src="/assets/images/contents/works/img_full_nbrand.jpg"
                  alt="NBrand website 상세페이지 관련 이미지"
                />
              </span>
            </section>
            <section className="nbrand_sub_wrap">
              <DepthTitle depthLevel="1" blindOption="hidden">
                About NBrand Website Sub Works
              </DepthTitle>
              <ElementTitle className="custom_element_title" data="Sub" />
              <Description
                className="custom_description"
                data={<>Back-end 와 Front-end 간의 최적화된 플로우로 고성능 차량의 역동적 표현을 섬세하게 구현해 냈습니다.</>}
              />
              <div className="sub_img_wrap">
                <img className="sub_img" src="/assets/images/contents/works/img_web_sub1_nbrand.jpg" alt="NBrand sub 이미지" />
                <img className="sub_img" src="/assets/images/contents/works/img_web_sub2_nbrand.jpg" alt="NBrand sub 이미지" />
                <img className="sub_img" src="/assets/images/contents/works/img_web_sub3_nbrand.jpg" alt="NBrand sub 이미지" />
              </div>
            </section>
          </>
        }
        subVisualImgUrl={works.imgUrl + works.content[10].subVisual}
        workContent={works.content[10].projectInfomation}
        webSiteUrl={works.content[10].websiteUrl}
        firstNextWork={works.content[11]}
        secondNextWork={works.content[12]}
        thirdNextWork={works.content[0]}
      />
    </>
  );
}
