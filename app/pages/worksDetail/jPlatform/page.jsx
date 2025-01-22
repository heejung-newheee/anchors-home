import WorksTemplate from '@/components/WorksTemplate/WorksTemplate';
import JPlatformCustom from '@/components/DetailCustom/JPlatform'
import seo from '@/helper/data/json/contents/SEO.json';

import './scss/jPlatform.scss';

const PAGE_ID = "0023";
const TITLE = seo.title.subPage.worksDetail;
const KEYWORDS = seo.keywords.worksDetail;
const DESCRIPTION = seo.description.worksDetail;

export const metadata = {
  title: TITLE.jPlatform + ' : ' + seo.title.subPage.works,
  keywords: KEYWORDS.jPlatform,
  description: DESCRIPTION.jPlatform,
};

export default function JPlatform() {
  return <WorksTemplate pageId={PAGE_ID} customChildren={<JPlatformCustom pageId={PAGE_ID} />} webSiteUrl="Y" />;
}
