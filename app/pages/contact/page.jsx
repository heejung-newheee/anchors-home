import BaseArticle from '@/components/BaseArticle/BaseArticle';
import Description from '@/components/Description/Description';
import PageTitle from '@/components/PageTitle/PageTitle';
import ScrollTriggerArea from '@/components/ScrollTriggerArea/ScrollTriggerArea';
import Visual from '@/components/Visual/Visual';
import contact from '@/helper/data/json/contents/contact/contact.json';
import headerFooter from '@/helper/data/json/contents/headerFooter.json';
import './scss/contact.scss';

export const metadata = {
  title: 'Anchors',
  description: '',
};

const TRIGGER_START = {
  mobile: '-50px',
  table: '-50px',
  desktop: '-30px',
  wide: '0',
};

const TRIGGER_END = {
  mobile: '100vh',
  table: '100vh',
  desktop: '100vh',
  wide: '100vh',
};

function Contact() {
  return (
    <main className="contact">
      <PageTitle data={headerFooter.menuList[3].name} />
      <Visual imgUrl={contact.imgUrl + contact.img}>
        <ScrollTriggerArea
          type="multiTrigger"
          triggerStart={TRIGGER_START}
          triggerEnd={TRIGGER_END}
          YAxes={{
            mobile: ['-30px'],
            table: ['-30px'],
            desktop: ['-150px'],
            wide: ['-50px'],
          }}
        >
          <div className="contact_cont_wrap">
            <span className="wordbubble">
              <img
                src={contact.imgUrl + contact.bubbleImg}
                alt={contact.bubbleAlt}
              />
            </span>
            <article className="contact_address">
              <Description data={contact.address} />
            </article>
            <article className="contact_info">
              <BaseArticle elementTitle="Email" description={contact.email} />
              <BaseArticle elementTitle="Phone" description={contact.phone} />
              <BaseArticle elementTitle="Fax" description={contact.fax} />
            </article>
          </div>
        </ScrollTriggerArea>
      </Visual>
    </main>
  );
}

export default Contact;
