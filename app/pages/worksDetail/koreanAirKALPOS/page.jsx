import WorksTemplate from '@/components/WorksTemplate/WorksTemplate';
import KoreanAirKALPOSCustom from '@/components/DetailCustom/KoreanAirKALPOS'
import seo from '@/helper/data/json/contents/SEO.json';

import './scss/koreanAirKALPOS.scss';

const PAGE_ID = "0015";
const TITLE = seo.title.subPage.worksDetail;
const KEYWORDS = seo.keywords.worksDetail;
const DESCRIPTION = seo.description.worksDetail;

export const metadata = {
  title: TITLE.koreanAirKALPOS + ' : ' + seo.title.subPage.works,
  keywords: KEYWORDS.koreanAirKALPOS,
  description: DESCRIPTION.koreanAirKALPOS,
};

export default function KoreanAirKALPOS() {
  return <WorksTemplate pageId={PAGE_ID} customChildren={<KoreanAirKALPOSCustom pageId={PAGE_ID} />} />;
}
