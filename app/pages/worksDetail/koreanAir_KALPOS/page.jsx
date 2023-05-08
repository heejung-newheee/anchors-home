import React from 'react';

import Device from '@/components/Device/Device';
import ImageArray from '@/components/ImageArray/ImageArray';
import WorksTemplate from '@/components/WorksTemplate/WorksTemplate';
import works from '@/helper/data/json/contents/works/works.json';

import './ koreanAir_KALPOS.scss';

export default function koreanAir_KALPOS() {
  return (
    <>
      <WorksTemplate
        custom="Y"
        visualImgUrl={works.imgUrl + works.content[5].visual}
        visualChildren={works.content[5].title}
        disclaimerChildren={works.content[5].description}
        detailTextDescEn={works.content[5].text.en}
        detailTextDescKo={works.content[5].text.ko}
        subVisualImgUrl={works.imgUrl + works.content[5].subVisual}
        workContent={works.content[5].projectInfomation}
        customChildren={
          <>
            <Device
              elementTitle={['App']}
              description={
                <>
                  KALPOS 블루투스 통신 모듈을
                  <br />
                  개발하였습니다.
                </>
              }
              caption={['1. Index', '2. Meal Inventory', '2. Meal Inventory']}
              imgUrl={[
                '/assets/images/contents/works/img_phone_app1_koreanair.png',
                '/assets/images/contents/works/img_phone_app2_koreanair.png',
                '/assets/images/contents/works/img_phone_app3_koreanair.png',
              ]}
              alt={[
                '대한항공 KALPOS App Index, Meal Inventory, Meal Order 화면 이미지',
              ]}
              type="B"
            />
          </>
        }
        firstNextWork={works.content[6]}
        secondNextWork={works.content[7]}
        thirdNextWork={works.content[8]}
      />
    </>
  );
}
