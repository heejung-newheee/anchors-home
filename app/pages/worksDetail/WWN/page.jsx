import React from 'react';

import Device from '@/components/Device/Device';
import ImageArray from '@/components/ImageArray/ImageArray';
import WorksTemplate from '@/components/WorksTemplate/WorksTemplate';
import seo from '@/helper/data/json/contents/SEO.json';
import works from '@/helper/data/json/contents/works/works.json';

export const metadata = {
  title: seo.title.subPage.detail.WWN + ' : ' + seo.title.subPage.works,
};
export default function WWN() {
  return (
    <>
      <WorksTemplate
        custom="Y"
        visualImgUrl={works.imgUrl + works.content[11].visual}
        visualChildren={works.content[11].title}
        disclaimerChildren={works.content[11].description}
        detailTextDescEn={works.content[11].text.en}
        detailTextDescKo={works.content[11].text.ko}
        customChildren={
          <>
            <ImageArray
              data={works.content[11].img_array.img}
              bgColor={works.content[11].img_array.bg_color}
              imgUrl={works.imgUrl}
            />
            <Device
              className="wwn_device"
              type="B"
              elementTitle="App"
              description="현대닷컴 Global Template을 신규 구축하고 직관적인 UI를 통해 사용자 편의성을 높였습니다."
              imgUrl={[
                '/assets/images/contents/works/img_phone_app1_wwn.png',
                '/assets/images/contents/works/img_phone_app2_wwn.png',
                '/assets/images/contents/works/img_phone_app3_wwn.png',
              ]}
              caption={['1. Estimation', '2. Hyundai Shop', '3. Find my car']}
              alt="WWN app 이미지"
            />
          </>
        }
        subVisualImgUrl={works.imgUrl + works.content[11].subVisual}
        workContent={works.content[11].projectInfomation}
        firstNextWork={works.content[12]}
        secondNextWork={works.content[0]}
        thirdNextWork={works.content[1]}
      />
    </>
  );
}
