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
  keywords: seo.keywords.contact,
  description: seo.description.contact,
  alternates : {
    canonical : seo.canonical.contact,
  }
};

function Contact() {
  return (
    <main className="contact section_div is_photo">
      {/* S: PageTitle 영역 */}
      <PageTitle data={headerFooter.menuList[4].name} />
      {/* E: PageTitle 영역 */}

      {/* S: visual 영역 */}
      <Visual defaultId="scroll_main_visual" imgUrl={contact.imgUrl + contact.visual.img} alt={contact.visual.alt}>
        <section className="contact_cont_wrap">
          <DepthTitle depthLevel="1" blindOption="hidden">
            Anchors Contact Infomation
          </DepthTitle>
          {/* S: 말풍선 영역 */}
          <span className="wordbubble">
            <img src={contact.imgUrl + contact.visual.bubbleImg} alt={contact.visual.bubbleAlt} />
          </span>
          {/* E: 말풍선 영역 */}

          {/* S: content 영역 */}
          <div className="contact_address">
            <Description data={contact.visual.address} />
          </div>
          <div className="contact_info">
            <BaseArticle elementTitle="Email" description={contact.visual.email} />
            <BaseArticle elementTitle="Phone" description={contact.visual.phone} />
            <BaseArticle elementTitle="Fax" description={contact.visual.fax} />
          </div>
          {/* E: content 영역 */}
        </section>
      </Visual>
      {/* E: visual 영역 */}

      {/* S: esg 영역 */}
      <div className="esg">
        {contact.esg.map((cont, idx) => (
          <div className={cont.className} key={idx}>
            {cont.contents.map((data, index) => (<img key={index} src={contact.imgUrl + data.img} alt={data.alt} />))} 
          </div>
        ))}
      </div>
      {/* E: esg 영역 */}
    </main>
  );
}

export default Contact;
