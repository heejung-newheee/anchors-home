import WorksTemplate from '@/components/WorksTemplate/WorksTemplate';
import NbrandCustom from '@/components/DetailCustom/NBrand'
import seo from '@/helper/data/json/contents/SEO.json';
import './scss/nBrand.scss';

export const metadata = {
  title: seo.title.subPage.detail.nBrand + ' : ' + seo.title.subPage.works,
};

export default function Nbrand() {

  const PAGE_ID = "0006";
  
  return (
    <>
      <WorksTemplate
        pageId={PAGE_ID}
        customChildren={<NbrandCustom pageId={PAGE_ID} />}
        webSiteUrl="Y"
      />
    </>
  );
}
