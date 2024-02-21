import WorksTemplate from '@/components/WorksTemplate/WorksTemplate';
import GenesisGlobalCustom from '@/components/DetailCustom/GenesisGlobal'
import seo from '@/helper/data/json/contents/SEO.json';
import './scss/genesisGlobal.scss';
export const metadata = {
  title:
    seo.title.subPage.detail.genesisGlobal + ' : ' + seo.title.subPage.works,
};
export default function GenesisGlobal() {

  const PAGE_ID = "0004";
  
  return (
    <>
      <WorksTemplate
        pageId={PAGE_ID}
        customChildren={<GenesisGlobalCustom pageId={PAGE_ID} />}
        webSiteUrl="Y"
      />
    </>
  );
}
