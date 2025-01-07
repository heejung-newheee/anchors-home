import Description from '@/components/Description/Description';
import PageTitle from '@/components/PageTitle/PageTitle';
import Visual from '@/components/Visual/Visual'
import Welfare from '@/components/Welfare/Welfare';

import Features from './_components/Features';
import Introduction from './_components/Introduction';

import platform from '@/helper/data/json/contents/platform/platform.json';
import headerFooter from '@/helper/data/json/contents/headerFooter.json';
import seo from '@/helper/data/json/contents/SEO.json';

import './scss/platform.scss';

export const metadata = {
  title: seo.title.subPage.platform,
  keywords: seo.keywords.platform,
  description: seo.description.platform,
  alternates : {
    canonical : seo.canonical.platform,
  }
};

function Platform() {
  return (
    <main className="platform section_div is_photo">
      {/* S: PageTitle 영역 */}
      <PageTitle data={headerFooter.menuList[3].name} />
      {/* E: PageTitle 영역 */}

      {/* S: Visual 영역 */}
      <div className="platform_visual">
        <Visual defaultId="scroll_main_visual" imgUrl={platform.imgUrl + platform.visual.img} alt={platform.visual.alt} />
        <Description className="en_comment" data={platform.textList.textEn} innerHTMLOption="Y" />
        <Description className="ko_comment" data={platform.textList.textKo} />
      </div>
      {/* E: Visual 영역 */}
      
      {/* S: welfare 영역 */}
      <Welfare data={platform.welfare} imgUrl={platform.imgUrl} />
      {/* E: welfare 영역 */}

      {/* S: platform_introduction 영역 */}
      <Introduction data={platform.introduction} imgUrl={platform.imgUrl} />
      {/* E: platform_introduction 영역 */}

      {/*S: sub_visual 영역 */}
      <Visual defaultId="scroll_sub_visual" className={'platform_sub_visual'} imgUrl={platform.imgUrl + platform.subVisual.img} alt={platform.subVisual.alt} />
      {/* E: sub_visual 영역 */}

      {/* S: swiper 영역*/}
      <Features data={platform.features} imgUrl={platform.imgUrl} />
      {/* E: swiper 영역*/}

    </main>
  );
}

export default Platform;
