import DepthTitle from '@/components/DepthTitle/DepthTitle';
import Device from '@/components/Device/Device';
import WorksTemplate from '@/components/WorksTemplate/WorksTemplate';
import seo from '@/helper/data/json/contents/SEO.json';
import works from '@/helper/data/json/contents/works/works.json';

import './scss/koreanAirAndroid.scss';
import React from 'react'

export const metadata = {
  title: seo.title.subPage.detail.koreanAirAndroid + ' : ' + seo.title.subPage.works,
};

export default function KoreanAir_Android() {

  const ANDROID  = works.content[7]

  return (
    <>
      <WorksTemplate
        custom="Y"
        visualImgUrl={works.imgUrl + ANDROID.visual}
        visualChildren={ANDROID.title}
        disclaimerChildren={ANDROID.description}
        detailTextDescEn={ANDROID.text.en}
        detailTextDescKo={ANDROID.text.ko}
        subVisualImgUrl={works.imgUrl + ANDROID.subVisual}
        workContent={ANDROID.projectInfomation}
        customChildren={
          <>
            <section className="device_wrap">
              <DepthTitle depthLevel="1" blindOption="hidden">
                Application example image
              </DepthTitle>
              <Device
                elementTitle={ANDROID.custom[0].device.elementTitle}
                description={ANDROID.custom[0].device.description}
                caption={ANDROID.custom[0].device.caption}
                imgUrl={ANDROID.custom[0].device.imgUrl.map( (url) => works.imgUrl + url )}
                alt={ANDROID.custom[0].device.alt}
                type={ANDROID.custom[0].device.type}
              />
            </section>
          </>
        }
        firstNextWork={works.content[8]}
        secondNextWork={works.content[9]}
        thirdNextWork={works.content[10]}
      />
    </>
  );
}
