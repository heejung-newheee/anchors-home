import WorksTemplate from '@/components/WorksTemplate/WorksTemplate';
import WWNCustom from '@/components/DetailCustom/WWN'
import seo from '@/helper/data/json/contents/SEO.json';

export const metadata = {
  title: seo.title.subPage.detail.WWN+ ' : ' + seo.title.subPage.works,
};
export default function WWN() {

  const PAGE_ID = "0005";
  
  return (
    <>
      <WorksTemplate
        pageId={PAGE_ID}
        customChildren={<WWNCustom pageId={PAGE_ID} />}
        webSiteUrl="Y"
      />
    </>
  );
}
