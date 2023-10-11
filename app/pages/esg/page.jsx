
import PageTitle from '@/components/PageTitle/PageTitle';
import Tab from '@/components/Tab/Tab'
import headerFooter from '@/helper/data/json/contents/headerFooter.json';
import seo from '@/helper/data/json/contents/SEO.json';
import Description from '@/components/Description/Description'
import './scss/esg.scss';
import Visual from '@/components/Visual/Visual'

export const metadata = {
  title: seo.title.subPage.contact,
};

// const TRIGGER_START = {
//   mobile: '-50px',
//   table: '-50px',
//   desktop: '-30px',
//   wide: '0',
// };
//
// const TRIGGER_END = {
//   mobile: '100vh',
//   table: '100vh',
//   desktop: '100vh',
//   wide: '100vh',
// };

function Esg() {
  return (
    <main className="esg section_div is_photo">
      {/* S: PageTitle 영역 */}
      <PageTitle data={headerFooter.menuList[5].name} />
      {/* E: PageTitle 영역 */}

      {/* S: Visual 영역 */}
      <div className="esg_visual">
        <Visual defaultId="scroll_main_visual" imgUrl="/assets/images/contents/esg/img_visual.png" />
        <Description innerHTMLOption="Y" data="Anchors takes the lead in <span>environmental protection</span>, carries out <span>social contribution activities</span> such as supporting the socially disadvantaged, and <span>complies with laws and ethics.</span>"/>
        <Description innerHTMLOption="Y" data="주식회사 앵커스는 환경보호에 앞장서며, 사회적 약자 지원 등 사회공헌 활동을 전개하며, 법규와 윤리를 준수합니다."/>
      </div>
      {/* E: Visual 영역 */}

      <Tab className="esg_tab_wrapper" type="article" tabList={["환경 경영방침", "인권 경영 현장","안전 보건 방침", "윤리 강영", "ESG 정보방"]}>
        <article className="tab_content_00">
          <img src='/assets/images/contents/esg/img_tab00_img00.png' className='img_00'/>
          <div className='img_01'>
            <img src='/assets/images/contents/esg/img_tab00_img01.png'/>
          </div>
          <img src='/assets/images/contents/esg/img_tab00_img02.png' className='img_02'/>
        </article>
        <article className="tab_content_01">
          <img src='/assets/images/contents/esg/img_tab01_img00.png' className='img_00'/>
        </article>
        <article className="tab_content_02">
          <img src='/assets/images/contents/esg/img_tab02_img00.png' className='img_00'/>
        </article>
        <article className="tab_content_03" >
          <img src='/assets/images/contents/esg/img_tab03_img01.png' className='img_00'/>
          <img src='/assets/images/contents/esg/img_tab03_img00.png' className='img_01'/>
        </article>
        <article className="tab_content_04">
          <img src='/assets/images/contents/esg/img_tab04_img00.png' className='img_00'/>
        </article>
      </Tab>

    </main>
  );
}

export default Esg;
