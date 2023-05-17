import Accordion from '@/components/Accordion/Accordion';
import BaseArticle from '@/components/BaseArticle/BaseArticle';
import DepthTitle from '@/components/DepthTitle/DepthTitle';
import Description from '@/components/Description/Description';
import Disclaimer from '@/components/Disclaimer/Disclaimer';
import ElementTitle from '@/components/ElementTitle/ElementTitle';
import MoreDetail from '@/components/MoreDetail/MoreDetail';
import PageTitle from '@/components/PageTitle/PageTitle';
import SwiperArea from '@/components/SwiperArea/SwiperArea';
import Tab from '@/components/Tab/Tab';
import Visual from '@/components/Visual/Visual';
import careerComment from '@/helper/data/json/contents/career/careerComment.json';
import careerEmployment from '@/helper/data/json/contents/career/careerEmployment.json';
import careerFaq from '@/helper/data/json/contents/career/careerFaq.json';
import careerMembers from '@/helper/data/json/contents/career/careerMembers.json';
import careerProcess from '@/helper/data/json/contents/career/careerProcess.json';
import careerText from '@/helper/data/json/contents/career/careerText.json';
import careerWelfare from '@/helper/data/json/contents/career/careerWelfare.json';
import headerFooter from '@/helper/data/json/contents/headerFooter.json';
import seo from '@/helper/data/json/contents/SEO.json';

import './scss/ career.scss';

export const metadata = {
  title: seo.title.subPage.career,
};
// const TRIGGER_START = {
//   mobile: '10px',
//   table: '10px',
//   desktop: '10px',
//   wide: '10px',
// };
//
// const TRIGGER_END = {
//   mobile: '500px',
//   table: '500px',
//   desktop: '1000px',
//   wide: '1000px',
// };

function Career() {
  return (
    <main className="career section_div is_photo">
      <PageTitle data={headerFooter.menuList[4].name} />

      {/* S: key_visual 영역 */}
      <Visual
        imgUrl="/assets/images/contents/career/img_keyvisual_members.jpg"
        // className="key_visual"
      />

      {/* S: 비주얼 이미지 아래 텍스트 */}
      <div className="career_text">
        <Description innerHTMLOption="Y" data={careerText.textList[0].textEn} />
        <Description data={careerText.textList[0].textKo} />
      </div>
      {/* E: 비주얼 이미지 아래 텍스트 */}

      {/* S: swiper_members 영역 */}
      <section className="swiper_members">
        <DepthTitle blindOption="hidden" depthLevel="1">
          Member Introduction
        </DepthTitle>
        <SwiperArea
          type="double"
          firstContent={careerMembers.members.map((img, idx) => (
            <div key={idx} className="first_swiper_cards">
              <img src={careerMembers.imgUrl + img.img} alt={img.alt} />
            </div>
          ))}
          secondContent={careerMembers.members.map((txt, idx) => (
            <>
              <ElementTitle key={`title${idx}`} data={txt.name} />
              <Disclaimer key={`part${idx}`} data={txt.part} />
              <Description key={`text1_${idx}`} data={txt.text[0]} />
              <Description key={`text2_${idx}`} data={txt.text[1]} />
            </>
          ))}
          firstSwiperOption={{
            effect: 'cards',
            // touchAngle: 180,
          }}
          secondSwiperOption={{
            pagination: false,
            navigation: false,
          }}
        />
      </section>
      {/* E: swiper_members 영역 */}

      {/* S: swiper_comment 영역 */}
      <section className="swiper_comment">
        <DepthTitle blindOption="hidden" depthLevel="1">
          Our Philosophy
        </DepthTitle>
        <Description className="swiper_comment_text" innerHTMLOption="Y" data={careerText.textList[0].commentText} />
        <SwiperArea
          type="single"
          autoPlayStop="Y"
          swiperContent={[...careerComment.content, ...careerComment.content].map((cont, idx) => (
            <div key={idx}>
              <>
                {/*<Visual*/}
                {/*  key={`visual${idx}`}*/}
                {/*  imgUrl={careerComment.imgUrl + cont.img}*/}
                {/*/>*/}
                <MoreDetail key={`detail${idx}`} imgUrl={careerComment.imgUrl + cont.img}>
                  <Description innerHTMLOption="Y" data={cont.highlightText} />
                  <Disclaimer data={cont.text} />
                </MoreDetail>
              </>
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
        <DepthTitle blindOption="hidden" depthLevel="1">
          Welfare List
        </DepthTitle>
        <Description className="welfare_text" innerHTMLOption="Y" data={careerText.textList[0].welfareText} />
        <article className="welfare_list">
          {careerWelfare.content.map((data, idx) => (
            <BaseArticle key={idx} imgUrl={careerWelfare.imgUrl + data.img} imgAlt={data.alt} description={data.title} disclaimer={data.text} />
          ))}
        </article>
      </section>
      {/* E: welfare 영역 */}

      {/*S: sub_visual 영역 */}
      <div className="sub_visual">
        <Visual imgUrl="/assets/images/contents/career/img_visual_lights.jpg" alt="사무실 조명 이미지" />
      </div>
      {/* E: sub_visual 영역 */}

      {/* S: 채용 tab 영역 */}
      <section className="employment_area">
        <DepthTitle blindOption="hidden" depthLevel="1">
          How to join Anchors
        </DepthTitle>
        <Description className="employment_text" data={careerText.textList[0].employmentText} />
        <Tab type="article" tabList={careerEmployment.title}>
          <article className="process_tab">
            <div className="process_number_wrap">
              {careerProcess.process.map((data, idx) => (
                <div key={idx} className="process_number">
                  <Description data={data.number} />
                  <Description data={data.text} />
                </div>
              ))}
            </div>
            <div className="process_description">
              <Description data={careerProcess.description[0].text1} />
              <Description data={careerProcess.description[0].text2} />
            </div>
            <div className="process_detail_description">
              {careerProcess.detail_description.map((data, idx) => (
                <div key={idx} className="detail_description_list">
                  <ElementTitle data={data.number} />
                  <ElementTitle data={data.title} />
                  <Description data={data.text} />
                </div>
              ))}
            </div>
          </article>
          <article className="faq_tab">
            <Accordion
              contents={careerFaq.content.map((data, idx) => ({
                key: idx,
                title: data.title,
                content: data.text,
              }))}
            />
          </article>
        </Tab>
      </section>
      {/* E: 채용 tab 영역*/}
    </main>
  );
}

export default Career;
