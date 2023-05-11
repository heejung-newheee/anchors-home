import BaseArticle from '@/components/BaseArticle/BaseArticle';
import DepthTitle from '@/components/DepthTitle/DepthTitle';
import Description from '@/components/Description/Description';
import PageTitle from '@/components/PageTitle/PageTitle';
import Visual from '@/components/Visual/Visual';
import contact from '@/helper/data/json/contents/contact/contact.json';
import headerFooter from '@/helper/data/json/contents/headerFooter.json';
import seo from '@/helper/data/json/contents/SEO.json';
import './scss/contact.scss';

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

function Contact() {
  return (
    <main className="contact section_div is_photo">
      {/* S: PageTitle 영역 */}
      <PageTitle data={headerFooter.menuList[3].name} />
      {/* E: PageTitle 영역 */}

      {/* S: visual 영역 */}
      <Visual imgUrl={contact.imgUrl + contact.img}>
        <section className="contact_cont_wrap">
          <DepthTitle depthLevel="1" blindOption="hidden">
            Anchors Contact Infomation
          </DepthTitle>
          {/* S: 말풍선 영역 */}
          <span className="wordbubble">
            <img
              src={contact.imgUrl + contact.bubbleImg}
              alt={contact.bubbleAlt}
            />
          </span>
          {/* E: 말풍선 영역 */}

          {/* S: content 영역 */}
          <div className="contact_address">
            <Description data={contact.address} />
          </div>
          <div className="contact_info">
            <BaseArticle elementTitle="Email" description={contact.email} />
            <BaseArticle elementTitle="Phone" description={contact.phone} />
            <BaseArticle elementTitle="Fax" description={contact.fax} />
          </div>
          {/* E: content 영역 */}
        </section>
      </Visual>
      {/* E: visual 영역 */}
    </main>
  );
}

export default Contact;
