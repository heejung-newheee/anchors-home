import WorksTemplate from '@/components/WorksTemplate/WorksTemplate';
import seo from '@/helper/data/json/contents/SEO.json';
export const metadata = {
  title: seo.title.subPage.detail.myAIA + ' : ' + seo.title.subPage.works,
};

export default function MyAIA() {

  const PAGE_ID = "0017";

  return (
    <>
      <WorksTemplate
        pageId={PAGE_ID}
        webSiteUrl="Y"
      />
    </>
  );
}
