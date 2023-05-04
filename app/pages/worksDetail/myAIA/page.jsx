import React from 'react';

import WorksTemplate from '@/components/WorksTemplate/WorksTemplate';
import works from '@/helper/data/json/contents/works/works.json';

export default function MyAIA() {
  return (
    <>
      <WorksTemplate
        visualImgUrl={works.imgUrl + works.content[4].visual}
        visualChildren={works.content[4].title}
        disclaimerChildren={works.content[4].description}
        detailTextDescEn={works.content[4].text.en}
        detailTextDescKo={works.content[4].text.ko}
        subVisualImgUrl={works.imgUrl + works.content[4].subVisual}
        workContent={works.content[4].projectInfomation}
        firstNextWork={works.content[5]}
        secondNextWork={works.content[6]}
        thirdNextWork={works.content[7]}
      />
    </>
  );
}
