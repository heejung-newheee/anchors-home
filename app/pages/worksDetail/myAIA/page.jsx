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
        detailTextDescEn={
          <>
            Global insurance company AIA Life Insurance claim screen, MY AIA
            enhance project. The
            <span> user interface has been improved </span>
            to make insurance claims more convenient. Anchors carried out the
            project based on <span>our experienced AEM know-how,</span> and we
            are recognized for its ability to perform. MY AIA annual operation
            project is also underway.
          </>
        }
        detailTextDescKo={works.content[4].text.ko}
        subVisualImgUrl={works.imgUrl + works.content[4].subVisual}
        workContent={works.content[4].projectInfomation}
        firstNextWork={works.content[5]}
        secondNextWork={works.content[6]}
        thirdNextWork={works.content[7]}
      ></WorksTemplate>
    </>
  );
}
