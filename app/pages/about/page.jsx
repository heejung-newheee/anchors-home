import headerFooter from 'helper/data/json/contents/headerFooter.json';

import BaseArticle from '@/components/BaseArticle/BaseArticle';
import Btn from '@/components/Btn/Btn';
import DepthTitle from '@/components/DepthTitle/DepthTitle';
import Description from '@/components/Description/Description';
import Disclaimer from '@/components/Disclaimer/Disclaimer';
import ElementTitle from '@/components/ElementTitle/ElementTitle';
import InfiniteRolling from '@/components/InfiniteRolling/InfiniteRolling';
import MoreDetail from '@/components/MoreDetail/MoreDetail';
import PageTitle from '@/components/PageTitle/PageTitle';
import ScrollTriggerArea from '@/components/ScrollTriggerArea/ScrollTriggerArea';
import SwiperArea from '@/components/SwiperArea/SwiperArea';
import Visual from '@/components/Visual/Visual';
import aboutMembers from '@/helper/data/json/contents/about/aboutMembers.json';
import seo from '@/helper/data/json/contents/SEO.json';

import aboutProfile from '/helper/data/json/contents/about/aboutProfile.json';
import aboutIntro from '/helper/data/json/contents/about/aboutIntro.json';

import lottie_arrow from '@/public/assets/images/lottie/lottieAboutusUpArrow.json';

import './scss/about.scss';

export const metadata = {
  title: seo.title.subPage.about,
};

const LOTTIE_OPTION = {
  data: lottie_arrow,
  autoplay: false,
  loop: false,
};

const TRIGGER_START = {
  mobile: '-710px',
  table: '-710px',
  desktop: '-710px',
  wide: '-750px',
};

const TRIGGER_END = {
  mobile: '700px',
  table: '700px',
  desktop: '700px',
  wide: '700px',
};

function About() {
  return (
    <main className="about">
      {/* S: PageTitle 영역*/}
      <PageTitle data={headerFooter.menuList[1].name} />
      {/* E: PageTitle 영역*/}

      {/* S: Key Visual 영역*/}
      <Visual defaultId="scroll_main_visual" imgUrl="/assets/images/contents/about/img_keyvisual_office.jpg" />
      {/* E: Key Visual 영역*/}

      {/* S: Description 영역*/}
      <section className="about_intro_text_wrap section_div is_photo">
        <Description innerHTMLOption="Y" data={aboutIntro.introText.textEn} />
        <Description innerHTMLOption="Y" data={aboutIntro.introText.textKo} />
      </section>
      {/* E: Description 영역*/}

      {/* S: about intro swiper 영역*/}
      <section className="about_intro_swiper section_div is_photo">
        <DepthTitle depthLevel="1" blindOption="hidden">
          Anchors Introduction
        </DepthTitle>
        <SwiperArea
          key="swiper01"
          type="double"
          firstClassName="image_swiper"
          secondClassName="text_swiper"
          firstContent={aboutIntro.introduction.map((cont, idx) => (
            <span key={`sw01-img-${idx}`}>
              <img src={aboutIntro.imgUrl + cont.img} alt={cont.alt} />
            </span>
          ))}
          secondContent={aboutIntro.introduction.map((cont, idx) => (
            <div className="intro_text" key={`sw01-div-${idx}`}>
              <ElementTitle className="intro_title" innerHTMLOption="Y" data={cont.highlightText} />
              <Disclaimer className="intro_disclaimer" data={cont.text} />
            </div>
          ))}
          firstSwiperOption={{
            effect: 'cards',
          }}
          secondSwiperOption={{
            navigation: false,
            pagination: false,
            spaceBetween: 24,
          }}
        />
      </section>
      {/* E: about intro swiper 영역*/}

      {/* S: anchors profile 영역*/}
      <section className="anchors_profile section_div is_black">
        <DepthTitle depthLevel="1" blindOption="visible">
          Anchors Profile
        </DepthTitle>
        <section className="profile_development">
          <DepthTitle depthLevel="2" blindOption="hidden">
            About Anchors Development History
          </DepthTitle>
          <Description innerHTMLOption="Y" className="profile_grow_text" data={aboutProfile.introProfile.profileDevelopment} />
          <Description
            className="profile_grow_number"
            data={
              <>
                {aboutProfile.scale.annual.number}
                <span>{aboutProfile.scale.annual.text}</span>
                <br />
                {aboutProfile.scale.members.number}
                <span>{aboutProfile.scale.members.text}</span>
                <br />
                {aboutProfile.scale.total.number}
                <span>{aboutProfile.scale.total.text}</span>
              </>
            }
          />
          <ScrollTriggerArea
            type="lottieTrigger"
            lottieOption={LOTTIE_OPTION}
            triggerOffset={'center'}
            triggerStart={TRIGGER_START}
            triggerEnd={TRIGGER_END}
          />
        </section>
        <section className="profile_award">
          <DepthTitle depthLevel="2" blindOption="hidden">
            About Anchors Awards List
          </DepthTitle>
          <Description innerHTMLOption="Y" className="profile_award_description" data={aboutProfile.introProfile.profileAward} />
          <span className="profile_award_icon">
            <img src="/assets/images/ico/ico_webaward.svg" alt="web award icon image" />
          </span>
          <section>
            <BaseArticle className="profile_award_list" elementTitle={aboutProfile.award[0].name} description={aboutProfile.award[0].description} />
            <BaseArticle className="profile_award_list" elementTitle={aboutProfile.award[1].name} description={aboutProfile.award[1].description} />
          </section>
        </section>
        <section className="profile_partner">
          <DepthTitle depthLevel="2" blindOption="hidden">
            About Anchors Partners List
          </DepthTitle>
          <Description innerHTMLOption="Y" data={aboutProfile.introProfile.profilePartner} />
          <article>
            <InfiniteRolling className="about_partner" reverse="Y">
              {aboutProfile.customerLogo.map((cont, idx) => (
                <span key={idx}>
                  <img src={aboutProfile.imgUrl + cont.img} alt={cont.alt} />
                </span>
              ))}
            </InfiniteRolling>
            <InfiniteRolling className="about_partner">
              {aboutProfile.customerLogo.map((cont, idx) => (
                <span key={idx}>
                  <img src={aboutProfile.imgUrl + cont.img} alt={cont.alt} />
                </span>
              ))}
            </InfiniteRolling>
          </article>
          <Disclaimer data={<>Want to know about us</>} />
          <Btn className="download_btn" type="a" url="/assets/images/pdf/[Anchors]Company_Profile_A4_230320.pdf" target="_blank">
            Download
            <br />
            Profiles
          </Btn>
        </section>
      </section>
      {/* E: anchors profile 영역*/}

      <section className="about_members section_div is_photo">
        <Visual defaultId="scroll_sub_visual" imgUrl="/assets/images/contents/about/img_visual_members.jpg" />
        <section className="about_members_desc">
          <Description innerHTMLOption="Y" data={aboutMembers.membersText.textEn} />
          <Description innerHTMLOption="Y" data={aboutMembers.membersText.textKo} />
        </section>
        {/* S: about members swiper 영역*/}
        <DepthTitle depthLevel="1" blindOption="hidden">
          About Anchors Members Introduction
        </DepthTitle>
        <SwiperArea
          key="swiper04"
          type="single"
          autoPlayStop="Y"
          swiperOption={{
            slidesPerView: 'auto',
            navigation: false,
            pagination: false,
            scrollbar: {
              draggable: true,
            },
            spaceBetween: 16,
            slidesOffsetBefore: 24,
            slidesOffsetAfter: 24,
            autoplay: {
              delay: 1,
            },
            loop: true,
            speed: 8000,
            breakpoints: {
              768: {
                spaceBetween: 24,
              },
              1280: {
                spaceBetween: 32,
                slidesOffsetBefore: 32,
                slidesOffsetAfter: 32,
              },
              1536: {
                spaceBetween: 48,
                slidesOffsetBefore: 48,
                slidesOffsetAfter: 48,
              },
              1920: {
                slidesOffsetBefore: 240,
              },
            },
          }}
          className="about_members_swiper scroll-linear"
          swiperContent={[...aboutMembers.members, ...aboutMembers.members].map((cont, idx) => (
            <article key={`sw04-${idx}`}>
              <ElementTitle data={cont.nameEn} className="member_name_en" />
              <MoreDetail imgUrl={aboutMembers.imgUrl + cont.img} imgAlt={cont.alt}>
                <article className="tooltip">
                  <ElementTitle data={cont.nameKo} />
                  <Description className="member_team" data={cont.part} />
                  <Description innerHTMLOption="Y" className="member_hashtag" data={cont.hashtag} />
                </article>
              </MoreDetail>
            </article>
          ))}
        />
        {/* E: about members swiper 영역*/}
      </section>
    </main>
  );
}

export default About;
