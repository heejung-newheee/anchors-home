import WorksTemplate from '@/components/WorksTemplate/WorksTemplate';
import CommercePlatformCustom from '@/components/DetailCustom/CommercePlatform';
import seo from '@/helper/data/json/contents/SEO.json';

import './scss/platform.scss';

const PAGE_ID = "0013";
const TITLE = seo.title.subPage.worksDetail;
const KEYWORDS = seo.keywords.worksDetail;
const DESCRIPTION = seo.description.worksDetail;

export const metadata = {
  title: TITLE.platform + ' : ' + seo.title.subPage.works,
  keywords: KEYWORDS.platform,
  description: DESCRIPTION.platform,
};

export default function CommercePlatform() {
  return <WorksTemplate pageId={PAGE_ID} customChildren={<CommercePlatformCustom pageId={PAGE_ID} />} webSiteUrl="Y" targetBlackYn="N" />;
}
