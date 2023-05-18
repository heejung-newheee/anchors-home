import WorksTemplate from '@/components/WorksTemplate/WorksTemplate';
import BMSCustom from '@/components/DetailCustom/BMS';
import seo from '@/helper/data/json/contents/SEO.json';
import './scss/BMS.scss';
export const metadata = {
  title: seo.title.subPage.detail.BMS + ' : ' + seo.title.subPage.works,
};
export default function BMS() {

  const PAGE_ID = "0034";

  return (
    <>
      <WorksTemplate
        pageId={PAGE_ID}
        customChildren={<BMSCustom pageId={PAGE_ID} />}
        webSiteUrl="Y"
      />
    </>
  );
}
