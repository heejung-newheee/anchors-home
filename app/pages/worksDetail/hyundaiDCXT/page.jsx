import WorksTemplate from '@/components/WorksTemplate/WorksTemplate';
import seo from '@/helper/data/json/contents/SEO.json';
import './scss/hyundaiDCXT.scss';
export const metadata = {
  title: seo.title.subPage.detail.DCXT + ' : ' + seo.title.subPage.works,
};

export default function HyundaiDCXT() {

  const PAGE_ID = "0001";

  return (
    <>
      <WorksTemplate
        pageId={PAGE_ID}
      />
    </>
  );
}
