
import DepthTitle from '@/components/DepthTitle/DepthTitle';
import Description from '@/components/Description/Description';
import Disclaimer from '@/components/Disclaimer/Disclaimer';
import ElementTitle from '@/components/ElementTitle/ElementTitle';
import MoreDetail from '@/components/MoreDetail/MoreDetail';
import PageTitle from '@/components/PageTitle/PageTitle';
import SwiperArea from '@/components/SwiperArea/SwiperArea';
import Visual from '@/components/Visual/Visual';

import Profile from './_components/Profile';

import aboutIntro from '/helper/data/json/contents/about/aboutIntro.json';
import aboutMembers from '@/helper/data/json/contents/about/aboutMembers.json';
import aboutProfile from '/helper/data/json/contents/about/aboutProfile.json';
import headerFooter from 'helper/data/json/contents/headerFooter.json';
import seo from '@/helper/data/json/contents/SEO.json';

import './scss/about.scss';

export const metadata = {
  title: seo.title.subPage.about,
  keywords: seo.keywords.about,
  description: seo.description.about,
  alternates : {
    canonical : seo.canonical.about,
  }
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
      <Profile data={aboutProfile} />
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
            spaceBetween: 16,
            slidesOffsetBefore: 24,
            slidesOffsetAfter: 24,
            autoplay: {
              delay: 1,
            },
            loop: true,
            speed: 4000,
            breakpoints: {
              360: {
                autoplay: false,
              },
              768: {
                spaceBetween: 24,
                autoplay: false,
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
          className="about_members_swiper"
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
