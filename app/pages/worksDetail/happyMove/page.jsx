import React from 'react';

import ImageArray from '@/components/ImageArray/ImageArray';
import WorksTemplate from '@/components/WorksTemplate/WorksTemplate';
import works from '@/helper/data/json/contents/works/works.json';

export const metadata = {
  title: 'Our works',
};
export default function HappyMove() {
  return (
    <>
      <WorksTemplate
        custom="Y"
        visualImgUrl={works.imgUrl + works.content[9].visual}
        visualChildren={works.content[9].title}
        disclaimerChildren={works.content[9].description}
        detailTextDescEn={works.content[9].text.en}
        detailTextDescKo={works.content[9].text.ko}
        customChildren={
          <>
            <ImageArray
              data={works.content[9].img_array.img}
              bgColor={works.content[9].img_array.bg_color}
              imgUrl={works.imgUrl}
            />
          </>
        }
        subVisualImgUrl={works.imgUrl + works.content[9].subVisual}
        workContent={works.content[9].projectInfomation}
        firstNextWork={works.content[10]}
        secondNextWork={works.content[11]}
        thirdNextWork={works.content[12]}
      />
    </>
  );
}
