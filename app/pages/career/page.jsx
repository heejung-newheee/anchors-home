import Accordion from '@/components/Accordion/Accordion';
import DepthTitle from '@/components/DepthTitle/DepthTitle';
import Description from '@/components/Description/Description';
import Disclaimer from '@/components/Disclaimer/Disclaimer';
import ElementTitle from '@/components/ElementTitle/ElementTitle';
import MoreDetail from '@/components/MoreDetail/MoreDetail';
import PageTitle from '@/components/PageTitle/PageTitle';
import SwiperArea from '@/components/SwiperArea/SwiperArea';
import Tab from '@/components/Tab/Tab';
import Visual from '@/components/Visual/Visual';
import Welfare from '@/components/Welfare/Welfare';
import careerComment from '@/helper/data/json/contents/career/careerComment.json';
import careerEmployment from '@/helper/data/json/contents/career/careerEmployment.json';
import careerMembers from '@/helper/data/json/contents/career/careerMembers.json';
import career from '@/helper/data/json/contents/career/career.json';
import careerWelfare from '@/helper/data/json/contents/career/careerWelfare.json';
import headerFooter from '@/helper/data/json/contents/headerFooter.json';
import seo from '@/helper/data/json/contents/SEO.json';

import './scss/ career.scss';

export const metadata = {
  title: seo.title.subPage.career,
  keywords: seo.keywords.career,
  description: seo.description.career,
  alternates : {
    canonical : seo.canonical.career,
  }
};

function Career() {
  return (
    <main className="career section_div is_photo">
      <PageTitle data={headerFooter.menuList[5].name} />

      {/* S: key_visual 영역 */}
      <Visual defaultId="scroll_main_visual" imgUrl="/assets/images/contents/career/img_keyvisual_members.jpg" />

      {/* S: 비주얼 이미지 아래 텍스트 */}
      <div className="career_text">
        <Description innerHTMLOption="Y" data={career.textList.textEn} />
        <Description data={career.textList.textKo} />
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
              <img src={career.imgUrl + img.img} alt={img.alt} />
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
        <Description className="swiper_comment_text" innerHTMLOption="Y" data={career.textList.commentText} />
        <SwiperArea
          type="single"
          autoPlayStop="Y"
          swiperContent={[...careerComment.content, ...careerComment.content].map((cont, idx) => (
            <div key={idx}>
                <MoreDetail key={`detail${idx}`} imgUrl={career.imgUrl + cont.img}>
                  <Description innerHTMLOption="Y" data={cont.highlightText} />
                  <Disclaimer data={cont.text} />
                </MoreDetail>
            </div>
          ))}
          swiperOption={{
            spaceBetween: 16,
            navigation: false,
            pagination: {
              clickable: true,
            },
            autoplay: {
              delay: 1,
            },
            loop: true,
            speed: 4000,
            breakpoints: {
              360: { slidesPerView: 1, autoplay: false },
              768: { slidesPerView: 2, autoplay: false },
              1280: { slidesPerView: 3 },
            },
          }}
          className="single swiper_comment_swiper"
        />
      </section>
      {/* E: swiper_comment 영역 */}


      {/* S: welfare 영역 */}
      <Welfare description={career.textList.welfareText} dataList={careerWelfare.content} imgUrl={career.imgUrl} />
      {/* E: welfare 영역 */}

      {/*S: sub_visual 영역 */}
      <div className="sub_visual">
        <Visual defaultId="scroll_sub_visual" imgUrl="/assets/images/contents/career/img_visual_lights.jpg" alt="사무실 조명 이미지" />
      </div>
      {/* E: sub_visual 영역 */}

      {/* S: 채용 tab 영역 */}
      <section className="employment_area">
        <DepthTitle blindOption="hidden" depthLevel="1">
          How to join Anchors
        </DepthTitle>
        <Description className="employment_text" data={career.textList.employmentText} />
        <Tab type="article" tabList={careerEmployment.tabList}>

          <article className="process_tab">
            <div className="process_number_wrap">
              {careerEmployment.process.map((data, idx) => (
                <div key={idx} className="process_number">
                  <Description data={data.number} />
                  <Description data={data.text} />
                </div>
              ))}
            </div>
            <div className="process_description">
              <Description data={careerEmployment.description[0].text1} />
              <Description data={careerEmployment.description[0].text2} />
            </div>
            <div className="process_detail_description">
              {careerEmployment.detail_description.map((data, idx) => (
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
              contents={careerEmployment.faq.map((data, idx) => ({
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
