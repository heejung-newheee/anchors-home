import WorksTemplate from '@/components/WorksTemplate/WorksTemplate';
import KoreanAirKALPOSCustom from '@/components/DetailCustom/KoreanAirKALPOS'
import seo from '@/helper/data/json/contents/SEO.json';
import './scss/koreanAirKALPOS.scss';

export const metadata = {
  title: seo.title.subPage.detail.koreanAirKALPOS + ' : ' + seo.title.subPage.works,
};
export default function KoreanAirKALPOS() {

  const PAGE_ID = "0015";
  
  return (
    <>
      <WorksTemplate
        pageId={PAGE_ID}
        customChildren={<KoreanAirKALPOSCustom pageId={PAGE_ID} />}
      />
    </>
  );
}
