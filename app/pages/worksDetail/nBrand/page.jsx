import WorksTemplate from '@/components/WorksTemplate/WorksTemplate';
import NbrandCustom from '@/components/DetailCustom/NBrand'
import seo from '@/helper/data/json/contents/SEO.json';
import './scss/nBrand.scss';

const PAGE_ID = "0006";
const TITLE = seo.title.subPage.worksDetail;
const KEYWORDS = seo.keywords.worksDetail;
const DESCRIPTION = seo.description.worksDetail;

export const metadata = {
  title: TITLE.nBrand + ' : ' + seo.title.subPage.works,
  keywords: KEYWORDS.nBrand,
  description: DESCRIPTION.nBrand,
};

export default function Nbrand() {
  return <WorksTemplate pageId={PAGE_ID} customChildren={<NbrandCustom pageId={PAGE_ID} />} webSiteUrl="Y" />;
}
