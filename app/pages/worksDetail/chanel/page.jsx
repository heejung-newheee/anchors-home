import WorksTemplate from '@/components/WorksTemplate/WorksTemplate';
import seo from '@/helper/data/json/contents/SEO.json';

import './scss/chanel.scss';

const PAGE_ID = "0000";
const TITLE = seo.title.subPage.worksDetail;
const KEYWORDS = seo.keywords.worksDetail;
const DESCRIPTION = seo.description.worksDetail;

export const metadata = {
  title: TITLE.chanel + ' : ' + seo.title.subPage.works,
  keywords: KEYWORDS.chanel,
  description: DESCRIPTION.chanel,
};

export default function Chanel() {
  return <WorksTemplate pageId={PAGE_ID} />;
}
