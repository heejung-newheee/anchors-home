import WorksTemplate from '@/components/WorksTemplate/WorksTemplate';
import WWNCustom from '@/components/DetailCustom/WWN'
import seo from '@/helper/data/json/contents/SEO.json';

const PAGE_ID = "0005";
const TITLE = seo.title.subPage.worksDetail;
const KEYWORDS = seo.keywords.worksDetail;
const DESCRIPTION = seo.description.worksDetail;

export const metadata = {
  title: TITLE.WWN + ' : ' + seo.title.subPage.works,
  keywords: KEYWORDS.WWN,
  description: DESCRIPTION.WWN,
};

export default function WWN() {
  return <WorksTemplate pageId={PAGE_ID} customChildren={<WWNCustom pageId={PAGE_ID} />} webSiteUrl="Y" />;
}
