import React from 'react';

import DepthTitle from '@/components/DepthTitle/DepthTitle';
import Description from '@/components/Description/Description';
import Device from '@/components/Device/Device';
import ElementTitle from '@/components/ElementTitle/ElementTitle';
import Video from '@/components/Video/Video';
import WorksTemplate from '@/components/WorksTemplate/WorksTemplate';
import seo from '@/helper/data/json/contents/SEO.json';
import works from '@/helper/data/json/contents/works/works.json';

import './scss/jPlatform.scss';

export const metadata = {
  title: seo.title.subPage.detail.jPlatform + ' : ' + seo.title.subPage.works,
};
export default function JPlatform() {
  return (
    <>
      <WorksTemplate
        custom="Y"
        visualImgUrl={works.imgUrl + works.content[2].visual}
        visualChildren={works.content[2].title}
        disclaimerChildren={works.content[2].description}
        detailTextDescEn={works.content[2].text.en}
        detailTextDescKo={works.content[2].text.ko}
        subVisualImgUrl={works.imgUrl + works.content[2].subVisual}
        workContent={works.content[2].projectInfomation}
        webSiteUrl={works.content[2].websiteUrl}
        customChildren={
          <>
            <section className="video_wrap">
              <DepthTitle depthLevel="1" blindOption="hidden">
                Promotion Video
              </DepthTitle>
              <Video videoUrl="/assets/images/video/video_jplatform_main.mp4" />
            </section>

            {/* S: main 설명 영역 */}
            <section className="main_section_wrap">
              <DepthTitle depthLevel="1" blindOption="hidden">
                Website Introduction
              </DepthTitle>
              <article className="main_text">
                <ElementTitle data="Main" />
                <Description
                  data="Customer life cycle 전반의 통합된 고객 경험을 제공하였습니다. <br/> 현대자동차 commerce 영역과 owners 영역을 연계/확장하며 전달력을 높이고, <br/> 입체적인 디자인을 도입하여 고객의 시선과 흥미를 이끌었습니다."
                  innerHTMLOption="Y"
                />
              </article>
              <article className="main_img">
                <img src="/assets/images/contents/works/img_web1_jplatform.jpg" alt="현대자동차 J플랫폼 Main 화면 이미지" />
                <img src="/assets/images/contents/works/img_web2_jplatform.jpg" alt="현대자동차 J플랫폼 Main 화면 이미지" />
              </article>
            </section>
            {/* E: main 설명 영역 */}

            {/* S: full_img 영역 */}
            <img src="/assets/images/contents/works/img_full_jplatform.jpg" alt="현대자동차 J플랫폼 구축 Ideation 화면 이미지" />
            {/* E: full_img 영역 */}

            {/* S: PIP 설명 영역 */}
            <section className="pip_section_wrap">
              <DepthTitle depthLevel="1" blindOption="hidden">
                PIP Introduction
              </DepthTitle>
              <article className="pip_text">
                <ElementTitle data="PIP" />
                <Description
                  data="E-Commerce를 통합함으로써 소비까지 이어지는 사용자 경험을 성공적으로 이끌어냈습니다.<br/> 특히, 짜임새 있는 스토리로 하여금 두 모델이 가지고 있는 기능과 효율을 고객들에게 효과적으로 전달하였습니다."
                  innerHTMLOption="Y"
                />
              </article>
              <Video videoUrl="/assets/images/video/video_jplatform_3D.mp4" />
            </section>
            {/* E: PIP 설명 영역 */}

            {/* S: device 영역 */}
            <section className="device_wrap">
              <DepthTitle depthLevel="1" blindOption="hidden">
                Mobile example image
              </DepthTitle>
              <article className="Configurator_mobile">
                <DepthTitle depthLevel="2" blindOption="hidden">
                  Configurator mobile image
                </DepthTitle>
                <Device
                  elementTitle={['Configurator']}
                  description={<>3D Configurator 및 쇼룸을 통해 원하는 차량 커스텀 및 간접적 체험이 가능하고, 예상 견적을 제공합니다.</>}
                  caption={['1. Step setting', '2. Step setting', '3. Total']}
                  imgUrl={[
                    '/assets/images/contents/works/img_phone_configurator1_jplatform.png',
                    '/assets/images/contents/works/img_phone_configurator2_jplatform.png',
                    '/assets/images/contents/works/img_phone_configurator3_jplatform.png',
                  ]}
                  alt={['현대자동차 J플랫폼 Step setting, Total 화면 이미지']}
                  type="A"
                />
              </article>
              <article className="eCommerce_mobile">
                <DepthTitle depthLevel="2" blindOption="hidden">
                  E-Commerce mobile image
                </DepthTitle>
                <Device
                  elementTitle={['e-Commerce']}
                  description={<>차량 및 부품 구매가 가능한 온라인 샵을 홈페이지와 통합함으로서, 고객의 구매까지 이어지도록 하였습니다.</>}
                  caption={['1. Purchase', '2. Shop', '3. Shop category']}
                  imgUrl={[
                    '/assets/images/contents/works/img_phone_ecommerce1_jplatform.png',
                    '/assets/images/contents/works/img_phone_ecommerce2_jplatform.png',
                    '/assets/images/contents/works/img_phone_ecommerce3_jplatform.png',
                  ]}
                  alt={['현대자동차 J플랫폼 Purchase, Shop, Shop category 화면 이미지']}
                  type="B"
                />
              </article>
            </section>
            {/* E: device 영역 */}

            {/* S: Identity system 설명 영역 */}
            <section className="identity_section_wrap">
              <DepthTitle depthLevel="1" blindOption="hidden">
                Website Identity Introduction
              </DepthTitle>
              <article className="identity_text">
                <ElementTitle data="Identity system" />
                <Description
                  data="현대의 주컬러를 활용하여 아이덴티티를 명확히 보여주고, 아이콘을 활용한 일관성 있는 UI를 제공합니다."
                  innerHTMLOption="Y"
                />
              </article>
              <article className="identify_img">
                <img src="/assets/images/contents/works/img_color_jplatform.jpg" alt="현대자동차 J플랫폼 Identity system 이미지" />
                <img src="/assets/images/contents/works/img_icon_jplatform.jpg" alt="현대자동차 J플랫폼 Identity system 이미지" />
              </article>
            </section>
            {/* E: Identity system 설명 영역 */}
          </>
        }
        firstNextWork={works.content[3]}
        secondNextWork={works.content[4]}
        thirdNextWork={works.content[5]}
      />
    </>
  );
}
