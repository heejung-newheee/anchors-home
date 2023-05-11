import React from 'react';

import Device from '@/components/Device/Device';
import ImageArray from '@/components/ImageArray/ImageArray';
import WorksTemplate from '@/components/WorksTemplate/WorksTemplate';
import seo from '@/helper/data/json/contents/SEO.json';
import works from '@/helper/data/json/contents/works/works.json';

import './scss/WCMS.scss';
import DepthTitle from '@/components/DepthTitle/DepthTitle';

export const metadata = {
  title: seo.title.subPage.detail.WCMS + ' : ' + seo.title.subPage.works,
};
export default function WCMS() {
  return (
    <>
      <WorksTemplate
        custom="Y"
        visualImgUrl={works.imgUrl + works.content[6].visual}
        visualChildren={works.content[6].title}
        disclaimerChildren={works.content[6].description}
        detailTextDescEn={works.content[6].text.en}
        detailTextDescKo={works.content[6].text.ko}
        customChildren={
          <>
            <section className="web_img_wrap">
              <span>
                <img
                  className="kia_web_img"
                  src="/assets/images/contents/works/img_web_kia.jpg"
                  alt="KIA web 이미지"
                />
              </span>
            </section>
            <div>
              <DepthTitle depthLevel="1" blindOption="hidden">
                About WCMS Website and Mobile Website
              </DepthTitle>
              <ImageArray
                data={works.content[6].img_array.img}
                bgColor={works.content[6].img_array.bg_color}
                imgUrl={works.imgUrl}
              />
              <Device
                className="wcms_device"
                type="B"
                elementTitle="Mobile Web"
                description="온라인 샵과 홈페이지를 통합함으로서 출시 쇼케이스부터 전시/시승/상담/구매에 이르기까지 고객의 디지털 경험을 강화하였습니다."
                imgUrl={[
                  '/assets/images/contents/works/img_phone_mobile1_kia.png',
                  '/assets/images/contents/works/img_phone_mobile2_kia.png',
                  '/assets/images/contents/works/img_phone_mobile3_kia.png',
                ]}
                caption={['1. Showroom', '2. Exterior', '3. Interior']}
                alt="WWN app 이미지"
              />
            </div>
          </>
        }
        subVisualImgUrl={works.imgUrl + works.content[6].subVisual}
        workContent={works.content[6].projectInfomation}
        webSiteUrl={works.content[6].websiteUrl}
        firstNextWork={works.content[7]}
        secondNextWork={works.content[8]}
        thirdNextWork={works.content[9]}
      />
    </>
  );
}
