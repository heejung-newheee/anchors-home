import WorksTemplate from '@/components/WorksTemplate/WorksTemplate';
import seo from '@/helper/data/json/contents/SEO.json';

const PAGE_ID = "0017";
const TITLE = seo.title.subPage.worksDetail;
const KEYWORDS = seo.keywords.worksDetail;
const DESCRIPTION = seo.description.worksDetail;

export const metadata = {
  title: TITLE.myAIA + ' : ' + seo.title.subPage.works,
  keywords: KEYWORDS.myAIA,
  description: DESCRIPTION.myAIA,
};

export default function MyAIA() {
  return <WorksTemplate pageId={PAGE_ID} webSiteUrl="Y" />;
}
