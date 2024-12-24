import WorksTemplate from '@/components/WorksTemplate/WorksTemplate';
import seo from '@/helper/data/json/contents/SEO.json';

import './scss/platform.scss';

export const metadata = {
  title: seo.title.subPage.detail.platform + ' : ' + seo.title.subPage.works,
};

export default function Chanel() {

  const PAGE_ID = "0013";

  return (
    <>
      <WorksTemplate
        pageId={PAGE_ID}
      />
    </>
  );
}
