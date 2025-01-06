
import PageTitle from '@/components/PageTitle/PageTitle';
import Description from '@/components/Description/Description'
import Visual from '@/components/Visual/Visual'
import Tab from '@/components/Tab/Tab'
import headerFooter from '@/helper/data/json/contents/headerFooter.json';
import seo from '@/helper/data/json/contents/SEO.json';
import esg from '@/helper/data/json/contents/esg/esg.json';

import './scss/esg.scss';

export const metadata = {
  title: seo.title.subPage.esg,
  keywords: seo.keywords.esg,
  description: seo.description.esg,
  alternates : {
    canonical : seo.canonical.esg,
  }
};

function Esg() {
  return (
    <main className="esg section_div is_photo">
      {/* S: PageTitle 영역 */}
      <PageTitle data={headerFooter.menuList[6].name} />
      {/* E: PageTitle 영역 */}

      {/* S: Visual 영역 */}
      <div className="esg_visual">
        <Visual defaultId="scroll_main_visual" imgUrl="/assets/images/contents/esg/img_visual.png" />
        <Description className="en_comment" data={esg.textList.textEn} innerHTMLOption="Y" />
        <Description className="ko_comment" data={esg.textList.textKo} />
      </div>
      {/* E: Visual 영역 */}

      <Tab className="esg_tab_wrapper" type="article" tabList={esg.tabList}>
        {/* S : TabContents 영역 */}
        {esg.tabContents.map((cont, idx) => (
          <div key={idx} className={cont.className}>
            {cont.contents.map((data, index) => (
              data.useArea === "Y" ? <div key={index} className={data.className}><img src={esg.imgUrl + data.img} alt={data.alt} /></div> : <img key={index} src={esg.imgUrl + data.img} className={data.className} alt={data.alt} />
            ))}
          </div>
        ))}
        {/* E : TabContents 영역 */}
      </Tab>
    </main>
  );
}

export default Esg;
