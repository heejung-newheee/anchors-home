import React from 'react';

import WorksTemplate from '@/components/WorksTemplate/WorksTemplate';
import works from '@/helper/data/json/contents/works/works.json';

export default function HyundaiDCXT() {
  return (
    <>
      <WorksTemplate
        visualImgUrl={works.imgUrl + works.content[1].visual}
        visualChildren={works.content[1].title}
        disclaimerChildren={works.content[1].description}
        detailTextDescEn={works.content[1].text.en}
        detailTextDescKo={works.content[1].text.ko}
        subVisualImgUrl={works.imgUrl + works.content[1].subVisual}
        workContent={works.content[1].projectInfomation}
        firstNextWork={works.content[2]}
        secondNextWork={works.content[3]}
        thirdNextWork={works.content[4]}
      />
    </>
  );
}
