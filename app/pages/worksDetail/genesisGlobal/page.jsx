import React from 'react';

import Device from '@/components/Device/Device';
import ImageArray from '@/components/ImageArray/ImageArray';
import WorksTemplate from '@/components/WorksTemplate/WorksTemplate';
import works from '@/helper/data/json/contents/works/works.json';

import './genesisGlobal.scss';

export default function GenesisGlobal() {
  return (
    <>
      <WorksTemplate
        custom="Y"
        visualImgUrl={works.imgUrl + works.content[12].visual}
        visualChildren={works.content[12].title}
        disclaimerChildren={works.content[12].description}
        detailTextDescEn={works.content[12].text.en}
        detailTextDescKo={works.content[12].text.ko}
        subVisualImgUrl={works.imgUrl + works.content[12].subVisual}
        workContent={works.content[12].projectInfomation}
        customChildren={
          <>
            <ImageArray
              imgUrl={works.imgUrl}
              data={works.content[12].img_array.img}
              bgColor={works.content[12].img_array.bg_color}
            />
            {/*bgColor={works.content[12].img_array.bg_color} */}
            <Device
              elementTitle={['Responsive Web']}
              description={
                <>
                  제네시스 브랜드 사이트를 반응형 웹으로 구현하였고, 한국을
                  비롯하여 캐나다, 호주, 중동 등 13개의 해외 주요 글로벌
                  사이트로의 확산을 효과적으로 하였습니다.
                </>
              }
              caption={['Korea', 'Middle East', 'Canada, Australia']}
              imgUrl={[
                '/assets/images/contents/works/img_phone_responsiveweb1_genesis.png',
                '/assets/images/contents/works/img_phone_responsiveweb2_genesis.png',
                '/assets/images/contents/works/img_phone_responsiveweb3_genesis.png',
              ]}
              alt={['Hyundai Genesis의 국문, 중동, 유럽 Main 화면 이미지']}
              type="B"
            />
          </>
        }
        firstNextWork={works.content[0]}
        secondNextWork={works.content[1]}
        thirdNextWork={works.content[2]}
      />
    </>
  );
}
