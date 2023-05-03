/*import { Inter } from 'next/font/google';*/

import BaseArticle from '@/components/BaseArticle/BaseArticle';
import Description from '@/components/Description/Description';
import Disclaimer from '@/components/Disclaimer/Disclaimer';
import ElementTitle from '@/components/ElementTitle/ElementTitle';
import MoreDetail from '@/components/MoreDetail/MoreDetail';
import PageTitle from '@/components/PageTitle/PageTitle';
import SwiperArea from '@/components/SwiperArea/SwiperArea';
import Visual from '@/components/Visual/Visual';
import careerComment from '@/helper/data/json/contents/career/careerComment.json';
import careerMembers from '@/helper/data/json/contents/career/careerMembers.json';
import careerText from '@/helper/data/json/contents/career/careerText.json';
import careerWelfare from '@/helper/data/json/contents/career/careerWelfare.json';
import headerFooter from '@/helper/data/json/contents/headerFooter.json';

// import Elements from 'aos/src/js/helpers/elements';

import './scss/ career.scss';

export const metadata = {
  title: 'Anchors',
  description: '',
};

function Career() {
  return (
    <main className="career">
      <PageTitle data={headerFooter.menuList[4].name} />
      <Visual imgUrl="/assets/images/contents/career/img_keyvisual_members.jpg" />

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
            // breakpoints: {
            //   360: {},
            //   768: {},
            //   1280: {},
            //   1536: {},
            // },
          }}
        />
      </section>
      {/* E: swiper_members 영역 */}

      {/* S: swiper_comment 영역 */}
      <section className="swiper_comment">
        <Description
          className="swiper_comment_text"
          innerHTMLOption="Y"
          data={careerText.textList[1].text1}
        />
        <SwiperArea
          type="single"
          swiperContent={[
            ...careerComment.content,
            ...careerComment.content,
          ].map((cont, idx) => (
            <div key={idx}>
              <Visual imgUrl={careerComment.imgUrl + cont.img} />
              <MoreDetail
                children={
                  <>
                    <Description
                      innerHTMLOption="Y"
                      data={cont.highlightText}
                    />
                    <Disclaimer data={cont.text} />
                  </>
                }
              />
            </div>
          ))}
          swiperOption={{
            spaceBetween: 16,
            breakpoints: {
              360: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1280: { slidesPerView: 3 },
            },
            navigation: false,
            pagination: false,
            scrollbar: {
              draggable: true,
            },
            autoplay: {
              delay: 1,
            },
            loop: true,
            speed: 4000,
          }}
          className="single scroll-linear swiper_comment_swiper"
        />
      </section>
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
