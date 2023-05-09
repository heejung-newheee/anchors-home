import React from 'react';

import Device from '@/components/Device/Device';
import WorksTemplate from '@/components/WorksTemplate/WorksTemplate';
import seo from '@/helper/data/json/contents/SEO.json';
import works from '@/helper/data/json/contents/works/works.json';

import './scss/myHyundai.scss';

export const metadata = {
  title: seo.title.subPage.detail.myHyundai + ' : ' + seo.title.subPage.works,
};
export default function MyHyundai() {
  return (
    <>
      <WorksTemplate
        custom="Y"
        visualImgUrl={works.imgUrl + works.content[8].visual}
        visualChildren={works.content[8].title}
        disclaimerChildren={works.content[8].description}
        detailTextDescEn={works.content[8].text.en}
        detailTextDescKo={works.content[8].text.ko}
        customChildren={
          <div className="myhyundai_device_wrap">
            <Device
              className="myhyundai_device"
              type="A"
              elementTitle="App"
              description="차량정보 확인, 차량 유지비 관리를 포함한 쉬운 차량 관리 기능을 도입하고, 보유 차량에 따라 맞춤 정보를 카드형 UI로 확인 가능하도록 하여 고객들의 접근 편의성을 향상했습니다."
              imgUrl={[
                '/assets/images/contents/works/img_phone_app1_myhyundai.png',
                '/assets/images/contents/works/img_phone_app3_myhyundai.png',
                '/assets/images/contents/works/img_phone_app2_myhyundai.png',
              ]}
              caption={['1. 스플래시 화면', '2. 소모품 교환이력', '3. 이벤트']}
              alt="myhyundai app 이미지"
            />
          </div>
        }
        subVisualImgUrl={works.imgUrl + works.content[8].subVisual}
        workContent={works.content[8].projectInfomation}
        firstNextWork={works.content[9]}
        secondNextWork={works.content[10]}
        thirdNextWork={works.content[11]}
      />
    </>
  );
}
