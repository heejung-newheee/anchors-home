import WorksTemplate from '@/components/WorksTemplate/WorksTemplate';
import KoreanAirAndroidCustom from '@/components/DetailCustom/KoreanAirAndroid'
import seo from '@/helper/data/json/contents/SEO.json';
import './scss/koreanAirAndroid.scss';

export const metadata = {
  title: seo.title.subPage.detail.koreanAirAndroid + ' : ' + seo.title.subPage.works,
};

export default function KoreanAirAndroid() {

  const PAGE_ID = "0009";

  return (
    <>
      <WorksTemplate
        pageId={PAGE_ID}
        customChildren={<KoreanAirAndroidCustom pageId={PAGE_ID} />}
      />
    </>
  );
}
