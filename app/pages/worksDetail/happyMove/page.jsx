import React from 'react';

import WorksTemplate from '@/components/WorksTemplate/WorksTemplate';
import HappyMoveCustom from '@/components/DetailCustom/HappyMove'
import seo from '@/helper/data/json/contents/SEO.json';

export const metadata = {
  title: seo.title.subPage.detail.happyMove + ' : ' + seo.title.subPage.works,
};
export default function HappyMove() {

  const PAGE_ID = "0007";
  
  return (
    <>
      <WorksTemplate
        pageId={PAGE_ID}
        customChildren={<HappyMoveCustom pageId={PAGE_ID} />}
        webSiteUrl="Y"
      />
    </>
  );
}
