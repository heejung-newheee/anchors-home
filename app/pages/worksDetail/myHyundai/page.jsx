import WorksTemplate from '@/components/WorksTemplate/WorksTemplate';
import MyHyundaiCustom from '@/components/DetailCustom/MyHyundai'
import seo from '@/helper/data/json/contents/SEO.json';

import './scss/myHyundai.scss';

const PAGE_ID = "0008";
const TITLE = seo.title.subPage.worksDetail;
const KEYWORDS = seo.keywords.worksDetail;
const DESCRIPTION = seo.description.worksDetail;

export const metadata = {
  title: TITLE.myHyundai + ' : ' + seo.title.subPage.works,
  keywords: KEYWORDS.myHyundai,
  description: DESCRIPTION.myHyundai,
};

export default function MyHyundai() {
  return <WorksTemplate pageId={PAGE_ID} customChildren={<MyHyundaiCustom pageId={PAGE_ID} />} webSiteUrl="Y" />;
}
