import WorksTemplate from '@/components/WorksTemplate/WorksTemplate';
import HappyMoveCustom from '@/components/DetailCustom/HappyMove'
import seo from '@/helper/data/json/contents/SEO.json';

const PAGE_ID = "0007";
const TITLE = seo.title.subPage.worksDetail;
const KEYWORDS = seo.keywords.worksDetail;
const DESCRIPTION = seo.description.worksDetail;

export const metadata = {
  title: TITLE.happyMove + ' : ' + seo.title.subPage.works,
  keywords: KEYWORDS.happyMove,
  description: DESCRIPTION.happyMove,
};

export default function HappyMove() {
  return <WorksTemplate pageId={PAGE_ID} customChildren={<HappyMoveCustom pageId={PAGE_ID} />} webSiteUrl="Y" />;
}
