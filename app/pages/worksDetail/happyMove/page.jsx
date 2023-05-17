import React from 'react';

import ImageArray from '@/components/ImageArray/ImageArray';
import WorksTemplate from '@/components/WorksTemplate/WorksTemplate';
import seo from '@/helper/data/json/contents/SEO.json';
import works from '@/helper/data/json/contents/works/works.json';

export const metadata = {
  title: seo.title.subPage.detail.happyMove + ' : ' + seo.title.subPage.works,
};
export default function HappyMove() {
  
  const HAPPYMOVE = works.content[9]
  
  return (
    <>
      <WorksTemplate
        custom="Y"
        visualImgUrl={works.imgUrl + HAPPYMOVE.visual}
        visualChildren={HAPPYMOVE.title}
        disclaimerChildren={HAPPYMOVE.description}
        detailTextDescEn={HAPPYMOVE.text.en}
        detailTextDescKo={HAPPYMOVE.text.ko}
        customChildren={
          <>
            <ImageArray
              data={HAPPYMOVE.custom[0].img_array.img}
              bgColor={HAPPYMOVE.custom[0].img_array.bg_color}
              imgUrl={works.imgUrl}
            />
          </>
        }
        subVisualImgUrl={works.imgUrl + HAPPYMOVE.subVisual}
        workContent={HAPPYMOVE.projectInfomation}
        webSiteUrl={HAPPYMOVE.websiteUrl}
        firstNextWork={works.content[10]}
        secondNextWork={works.content[11]}
        thirdNextWork={works.content[12]}
      />
    </>
  );
}
