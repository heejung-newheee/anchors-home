
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
  function TabContents() {
    return (
      <>
        <div className="tab_content_00">
          <img src='/assets/images/contents/esg/img_tab00_img00.png' className='img_00' alt="" />
          <div className='img_01'>
          <img src='/assets/images/contents/esg/img_tab00_img01.png' alt="" />
          </div>
          <img src='/assets/images/contents/esg/img_tab00_img02.png' className='img_02' alt="" />
        </div>

        <div className="tab_content_01">
          <img src='/assets/images/contents/esg/img_tab01_img00.png' className='img_00' alt="" />
        </div>
        <div className="tab_content_02">
          <img src='/assets/images/contents/esg/img_tab02_img00.png' className='img_00' alt="" />
        </div>
        <div className="tab_content_03" >
          <img src='/assets/images/contents/esg/img_tab03_img01.png' className='img_00' alt="" />
          <img src='/assets/images/contents/esg/img_tab03_img00.png' className='img_01' alt="" />
        </div>
        <div className="tab_content_04">
          <img src='/assets/images/contents/esg/img_tab04_img00.png' className='img_00' alt="" />
        </div>
      </>
    );
  }


  return (
    <main className="esg section_div is_photo">
      {/* S: PageTitle 영역 */}
      <PageTitle data={headerFooter.menuList[5].name} />
      {/* E: PageTitle 영역 */}

      {/* S: Visual 영역 */}
      <div className="esg_visual">
        <Visual defaultId="scroll_main_visual" imgUrl="/assets/images/contents/esg/img_visual.png" />
        <Description className="en_comment" data={esg.textList.textEn} innerHTMLOption="Y" />
        <Description className="ko_comment" data={esg.textList.textKo} />
      </div>
      {/* E: Visual 영역 */}

      <Tab className="esg_tab_wrapper" type="article" tabList={esg.tabList}>
        {TabContents()}
      </Tab>
    </main>
  );
}

export default Esg;
