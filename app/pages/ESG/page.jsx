import PageTitle from '@/components/PageTitle/PageTitle';
import headerFooter from '@/helper/data/json/contents/headerFooter.json';
import seo from '@/helper/data/json/contents/SEO.json';
import './scss/esg.scss';

export const metadata = {
  title: seo.title.subPage.contact,
};

function Esg() {
  return (
    <main className="esg section_div is_photo">
      {/* S: PageTitle 영역 */}
      <PageTitle data={headerFooter.menuList[5].name} />
      {/* E: PageTitle 영역 */}

      {/* S: Image 영역 */}
      <img src='/assets/images/contents/img_esg.png' alt='ESG' className='esg_img'/>
      {/* E: Image 영역 */}
    </main>
  );
}

export default Esg;
