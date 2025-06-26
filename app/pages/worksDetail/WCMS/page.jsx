import WorksTemplate from '@/components/WorksTemplate/WorksTemplate';
import WCMSCustom from '@/components/DetailCustom/WCMS'
import seo from '@/helper/data/json/contents/SEO.json';

import './scss/WCMS.scss';

const PAGE_ID = "0010";
const TITLE = seo.title.subPage.worksDetail;
const KEYWORDS = seo.keywords.worksDetail;
const DESCRIPTION = seo.description.worksDetail;

export const metadata = {
  title: TITLE.WCMS + ' : ' + seo.title.subPage.works,
  keywords: KEYWORDS.WCMS,
  description: DESCRIPTION.WCMS,
};

export default function WCMS() {
  return <WorksTemplate pageId={PAGE_ID} customChildren={<WCMSCustom pageId={PAGE_ID} />} webSiteUrl="Y" />;
}
