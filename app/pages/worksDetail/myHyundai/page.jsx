import WorksTemplate from '@/components/WorksTemplate/WorksTemplate';
import MyHyundaiCustom from '@/components/DetailCustom/MyHyundai'
import seo from '@/helper/data/json/contents/SEO.json';
import './scss/myHyundai.scss';

export const metadata = {
  title: seo.title.subPage.detail.myHyundai + ' : ' + seo.title.subPage.works,
};
export default function MyHyundai() {

  const PAGE_ID = "0008";

  return (
    <>
      <WorksTemplate
        pageId={PAGE_ID}
        customChildren={<MyHyundaiCustom pageId={PAGE_ID} />}
        webSiteUrl="Y"
      />
    </>
  );
}
