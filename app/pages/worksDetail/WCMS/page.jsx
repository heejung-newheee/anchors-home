import WorksTemplate from '@/components/WorksTemplate/WorksTemplate';
import WCMSCustom from '@/components/DetailCustom/WCMS'
import seo from '@/helper/data/json/contents/SEO.json';
import './scss/WCMS.scss';

export const metadata = {
  title: seo.title.subPage.detail.WCMS + ' : ' + seo.title.subPage.works,
};
export default function WCMS() {

  const PAGE_ID = "0010";

  return (
    <>
      <WorksTemplate
        pageId={PAGE_ID}
        customChildren={<WCMSCustom pageId={PAGE_ID} />}
        webSiteUrl="Y"
      />
    </>
  );
}
