import React from 'react';

import Device from '@/components/Device/Device';
import ImageArray from '@/components/ImageArray/ImageArray';
import WorksTemplate from '@/components/WorksTemplate/WorksTemplate';
import works from '@/helper/data/json/contents/works/works.json';

import './koreanAir_Android.scss';

export const metadata = {
  title: 'Our works',
};

export default function koreanAir_Android() {
  return (
    <>
      <WorksTemplate
        custom="Y"
        visualImgUrl={works.imgUrl + works.content[7].visual}
        visualChildren={works.content[7].title}
        disclaimerChildren={works.content[7].description}
        detailTextDescEn={works.content[7].text.en}
        detailTextDescKo={works.content[7].text.ko}
        subVisualImgUrl={works.imgUrl + works.content[7].subVisual}
        workContent={works.content[7].projectInfomation}
        customChildren={
          <>
            <Device
              elementTitle={['App']}
              description={
                <>
                  대한항공과 사용자가 지속적인 여행 파트너가 될 수 있도록
                  구현하고 직관적인 UI를 통해 사용자의 디지털 경험을
                  강화했습니다.
                </>
              }
              caption={['1. 항공기 안내', '2. 기종안내', '3. 기종안내']}
              imgUrl={[
                '/assets/images/contents/works/img_phone_app1_koreanairandroid.png',
                '/assets/images/contents/works/img_phone_app2_koreanairandroid.png',
                '/assets/images/contents/works/img_phone_app3_koreanairandroid.png',
              ]}
              alt={['대한항공 App 항공기 안내, 기종안내 화면 이미지']}
              type="A"
            />
          </>
        }
        firstNextWork={works.content[8]}
        secondNextWork={works.content[9]}
        thirdNextWork={works.content[10]}
      />
    </>
  );
}
