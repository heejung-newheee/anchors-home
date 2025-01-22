import WorksTemplate from '@/components/WorksTemplate/WorksTemplate';
import GenesisGlobalCustom from '@/components/DetailCustom/GenesisGlobal'
import seo from '@/helper/data/json/contents/SEO.json';

import './scss/genesisGlobal.scss';

const PAGE_ID = "0004";
const TITLE = seo.title.subPage.worksDetail;
const KEYWORDS = seo.keywords.worksDetail;
const DESCRIPTION = seo.description.worksDetail;

export const metadata = {
  title: TITLE.genesisGlobal + ' : ' + seo.title.subPage.works,
  keywords: KEYWORDS.genesisGlobal,
  description: DESCRIPTION.genesisGlobal,
};

export default function GenesisGlobal() {
  return <WorksTemplate pageId={PAGE_ID} customChildren={<GenesisGlobalCustom pageId={PAGE_ID} />} webSiteUrl="Y" />;
}
