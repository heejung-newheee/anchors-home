import WorksTemplate from '@/components/WorksTemplate/WorksTemplate';
import BMSCustom from '@/components/DetailCustom/BMS';
import seo from '@/helper/data/json/contents/SEO.json';

import './scss/BMS.scss';

const PAGE_ID = "0034";
const TITLE = seo.title.subPage.worksDetail;
const KEYWORDS = seo.keywords.worksDetail;
const DESCRIPTION = seo.description.worksDetail;

export const metadata = {
  title: TITLE.BMS + ' : ' + seo.title.subPage.works,
  keywords: KEYWORDS.BMS,
  description: DESCRIPTION.BMS,
};

export default function BMS() {
  return <WorksTemplate pageId={PAGE_ID} customChildren={<BMSCustom pageId={PAGE_ID} />} webSiteUrl="Y" />;
}
