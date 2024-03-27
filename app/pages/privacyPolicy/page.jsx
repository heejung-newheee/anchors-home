import './scss/privacyPolicy.scss';
import seo from '@/helper/data/json/contents/SEO.json';

export const metadata = {
  title: seo.title.subPage.privacyPolicy,
  keywords: seo.keywords.privacyPolicy,
  description: seo.description.privacyPolicy,
};

function PrivacyPolicy() {
  return (
    <main className="policy section_div is_photo">
      <article>
        <img src="/assets/images/contents/privacyPolicy/img_policy.png" alt="policy img" />
      </article>
    </main>
  );
}

export default PrivacyPolicy;
