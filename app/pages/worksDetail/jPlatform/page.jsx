import WorksTemplate from '@/components/WorksTemplate/WorksTemplate';
import JPlatformCustom from '@/components/DetailCustom/JPlatform'
import seo from '@/helper/data/json/contents/SEO.json';
import './scss/jPlatform.scss';

export const metadata = {
  title: seo.title.subPage.detail.jPlatform + ' : ' + seo.title.subPage.works,
};
export default function JPlatform() {

  const PAGE_ID = "0023";

  return (
    <>
      <WorksTemplate
        pageId={PAGE_ID}
        customChildren={<JPlatformCustom pageId={PAGE_ID} />}
        webSiteUrl="Y"
      />
    </>
  );
}
