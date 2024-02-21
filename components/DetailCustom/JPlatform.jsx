'use client';

import React from 'react';
import DepthTitle from '@/components/DepthTitle/DepthTitle'
import Video from '@/components/Video/Video'
import ElementTitle from '@/components/ElementTitle/ElementTitle'
import Description from '@/components/Description/Description'
import Device from '@/components/Device/Device'
import works from '@/helper/data/json/contents/works/works.json'

const JPlatform = ({pageId}) => {
  const FILTERED = works.content.find( (data) => data.id === pageId);
  return (
    <>
      <section className="video_wrap">
        <DepthTitle depthLevel="1" blindOption="hidden">
          Promotion Video
        </DepthTitle>
        <Video videoUrl={works.videoUrl + FILTERED.custom[0].video} />
      </section>

      {/* S: main 설명 영역 */}
      <section className="main_section_wrap">
        <DepthTitle depthLevel="1" blindOption="hidden">
          Website Introduction
        </DepthTitle>
        <article className="main_text">
          <ElementTitle data={FILTERED.custom[1].text} />
          <Description
            data={FILTERED.custom[2].text}
            innerHTMLOption="Y"
          />
        </article>
        <article className="main_img">
          <img src={works.imgUrl + FILTERED.custom[3].image} alt={FILTERED.custom[3].alt} />
          <img src={works.imgUrl + FILTERED.custom[4].image} alt={FILTERED.custom[4].alt} />
        </article>
      </section>
      {/* E: main 설명 영역 */}

      {/* S: full_img 영역 */}
      <img src={works.imgUrl + FILTERED.custom[5].image} alt={FILTERED.custom[5].alt} />
      {/* E: full_img 영역 */}

      {/* S: PIP 설명 영역 */}
      <section className="pip_section_wrap">
        <DepthTitle depthLevel="1" blindOption="hidden">
          PIP Introduction
        </DepthTitle>
        <article className="pip_text">
          <ElementTitle data={FILTERED.custom[6].text} />
          <Description
            data={FILTERED.custom[7].text}
            innerHTMLOption="Y"
          />
        </article>
        <Video videoUrl={works.videoUrl + FILTERED.custom[8].video} />
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
            elementTitle={FILTERED.custom[9].device.elementTitle}
            description={FILTERED.custom[9].device.description}
            caption={FILTERED.custom[9].device.caption}
            imgUrl={FILTERED.custom[9].device.imgUrl.map( (url) => works.imgUrl + url )}
            alt={FILTERED.custom[9].device.alt}
            type={FILTERED.custom[9].device.type}
          />
        </article>
        <article className="eCommerce_mobile">
          <DepthTitle depthLevel="2" blindOption="hidden">
            E-Commerce mobile image
          </DepthTitle>
          <Device
            elementTitle={FILTERED.custom[10].device.elementTitle}
            description={FILTERED.custom[10].device.description}
            caption={FILTERED.custom[10].device.caption}
            imgUrl={FILTERED.custom[10].device.imgUrl.map( (url) => works.imgUrl + url )}
            alt={FILTERED.custom[10].device.alt}
            type={FILTERED.custom[10].device.type}
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
          <ElementTitle data={FILTERED.custom[11].text} />
          <Description
            data={FILTERED.custom[12].text}
            innerHTMLOption="Y"
          />
        </article>
        <article className="identify_img">
          <img src={works.imgUrl + FILTERED.custom[13].image} alt={FILTERED.custom[13].alt} />
          <img src={works.imgUrl + FILTERED.custom[14].image} alt={FILTERED.custom[14].alt} />
        </article>
      </section>
      {/* E: Identity system 설명 영역 */}
    </>
  );
};

export default JPlatform;
 