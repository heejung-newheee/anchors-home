/*import { Inter } from 'next/font/google';*/

import Description from '@/components/Description/Description';
import Disclaimer from '@/components/Disclaimer/Disclaimer';
import ElementTitle from '@/components/ElementTitle/ElementTitle';
import PageTitle from '@/components/PageTitle/PageTitle';
import SwiperArea from '@/components/SwiperArea/SwiperArea';
import Visual from '@/components/Visual/Visual';
import careerMembers from '@/helper/data/json/contents/career/careerMembers.json';
import careerText from '@/helper/data/json/contents/career/careerText.json';
import careerWelfare from '@/helper/data/json/contents/career/careerWelfare.json';
import headerFooter from '@/helper/data/json/contents/headerFooter.json';

import './scss/ career.scss';
// import Elements from 'aos/src/js/helpers/elements';

import BaseArticle from '@/components/BaseArticle/BaseArticle';

export const metadata = {
  title: 'Anchors',
  description: '',
};

function Career() {
  return (
    <main className="career">
      <PageTitle data={headerFooter.menuList[4].name} />
      <Visual imgUrl="/assets/images/contents/career/img_keyvisual_members.png" />

      {/* S: 비주얼 이미지 아래 텍스트 */}
      <div className="career_text">
        <Description innerHTMLOption="Y" data={careerText.textList[0].text1} />
        <Description data={careerText.textList[0].text2} />
      </div>
      {/* E: 비주얼 이미지 아래 텍스트 */}

      {/* S: swiper_members 영역 */}
      <section className="swiper_members">
        <SwiperArea
          type="double"
          firstContent={careerMembers.members.map((img, idx) => (
            <div key={idx} className="first_swiper_cards">
              <img src={careerMembers.imgUrl + img.img} alt={img.alt} />
            </div>
          ))}
          secondContent={careerMembers.members.map((txt, idx) => (
            <div key={idx}>
              <ElementTitle data={txt.name} />
              <Disclaimer data={txt.part} />
              <Description data={txt.text[0]} />
              <Description data={txt.text[1]} />
            </div>
          ))}
          firstSwiperOption={{
            effect: 'cards',
          }}
          secondSwiperOption={{
            pagination: false,
            navigation: false,
          }}
        />
      </section>
      {/* E: swiper_members 영역 */}

      {/* S: swiper_comment 영역 */}
      <section className="swiper_comment" />
      {/* E: swiper_comment 영역 */}

      {/* S: welfare 영역 */}
      <section className="welfare">
        <Description
          className="welfare_text"
          innerHTMLOption="Y"
          data={careerText.textList[2].text1}
        />
        <article className="welfare_list">
          {careerWelfare.content.map((data, idx) => (
            <BaseArticle
              key={idx}
              imgUrl={careerWelfare.imgUrl + data.img}
              imgAlt={data.alt}
              description={data.title}
              disclaimer={data.text}
            />
          ))}
        </article>
      </section>
      {/* E: welfare 영역 */}
    </main>
  );
}

export default Career;
