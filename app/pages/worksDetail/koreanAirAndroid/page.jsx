import WorksTemplate from '@/components/WorksTemplate/WorksTemplate';
import KoreanAirAndroidCustom from '@/components/DetailCustom/KoreanAirAndroid'
import seo from '@/helper/data/json/contents/SEO.json';

import './scss/koreanAirAndroid.scss';

const PAGE_ID = "0009";
const TITLE = seo.title.subPage.worksDetail;
const KEYWORDS = seo.keywords.worksDetail;
const DESCRIPTION = seo.description.worksDetail;

export const metadata = {
  title: TITLE.koreanAirAndroid + ' : ' + seo.title.subPage.works,
  keywords: KEYWORDS.koreanAirAndroid,
  description: DESCRIPTION.koreanAirAndroid,
};

export default function KoreanAirAndroid() {
  return <WorksTemplate pageId={PAGE_ID} customChildren={<KoreanAirAndroidCustom pageId={PAGE_ID} />} />;
}
