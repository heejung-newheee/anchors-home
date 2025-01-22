import WorksTemplate from '@/components/WorksTemplate/WorksTemplate';
import seo from '@/helper/data/json/contents/SEO.json';

import './scss/hyundaiDCXT.scss';

const PAGE_ID = "0001";
const TITLE = seo.title.subPage.worksDetail;
const KEYWORDS = seo.keywords.worksDetail;
const DESCRIPTION = seo.description.worksDetail;

export const metadata = {
  title: TITLE.DCXT + ' : ' + seo.title.subPage.works,
  keywords: KEYWORDS.DCXT,
  description: DESCRIPTION.DCXT,
};

export default function HyundaiDCXT() {
  return <WorksTemplate pageId={PAGE_ID} />;
}
