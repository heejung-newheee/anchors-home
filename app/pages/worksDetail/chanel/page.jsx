import WorksTemplate from '@/components/WorksTemplate/WorksTemplate';
import seo from '@/helper/data/json/contents/SEO.json';

import './scss/chanel.scss';

export const metadata = {
  title: seo.title.subPage.detail.chanel + ' : ' + seo.title.subPage.works,
};

export default function Chanel() {

  const PAGE_ID = "0000";

  return (
    <>
      <WorksTemplate
        pageId={PAGE_ID}
      />
    </>
  );
}
