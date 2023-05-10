import headerFooter from 'helper/data/json/contents/headerFooter.json';

import BaseArticle from '@/components/BaseArticle/BaseArticle';
import Btn from '@/components/Btn/Btn';
import DepthTitle from '@/components/DepthTitle/DepthTitle';
import Description from '@/components/Description/Description';
import Disclaimer from '@/components/Disclaimer/Disclaimer';
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
      <Visual imgUrl="/assets/images/contents/about/img_keyvisual_office.jpg" />
      {/* E: Key Visual 영역*/}

      {/* S: Description 영역*/}
      <div className="about_intro_text_wrap section_div is_photo">
        <Description innerHTMLOption="Y" data={aboutIntro.introText.textEn} />
        <Description data={aboutIntro.introText.textKo} />
      </div>
      {/* E: Description 영역*/}

      {/* S: about intro swiper 영역*/}
      <div className="about_intro_swiper section_div is_photo">
        <DepthTitle depthLevel="1" blindOption="hidden">
          Anchors Intro Swiper
        </DepthTitle>
        <SwiperArea
          key="swiper01"
          type="double"
          firstClassName="image_swiper"
          secondClassName="text_swiper"
          firstContent={aboutIntro.introduction.map((cont, idx) => (
            <img
              key={`sw01-img-${idx}`}
              src={aboutIntro.imgUrl + cont.img}
              alt={cont.alt}
            />
          ))}
          secondContent={aboutIntro.introduction.map((cont, idx) => (
            <div className="intro_text" key={`sw01-div-${idx}`}>
              <pre>{cont.highlightText}</pre>
              <p>{cont.text}</p>
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
      </div>
      {/* E: about intro swiper 영역*/}

      {/* S: anchors profile 영역*/}
      <div className="anchors_profile section_div is_black">
        <DepthTitle depthLevel="1" blindOption="visible">
          Anchors Profile
        </DepthTitle>
        <div className="profile_development">
          <DepthTitle depthLevel="2" blindOption="hidden">
            Anchors Profile Development
          </DepthTitle>
          <Description
            className="profile_grow_text"
            data={aboutProfile.introProfile.profileDevelopment}
          />
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
        </div>
        <div className="profile_award">
          <DepthTitle depthLevel="2" blindOption="hidden">
            Anchors Profile Award
          </DepthTitle>
          <Description
            innerHTMLOption="Y"
            className="profile_award_description"
            data={aboutProfile.introProfile.profileAward}
          />
          <img
            className="profile_award_icon"
            src="/assets/images/ico/ico_webaward.svg"
            alt="web award icon image"
          />
          <div>
            <BaseArticle
              className="profile_award_list"
              elementTitle={aboutProfile.award[0].name}
              description={aboutProfile.award[0].description}
            />
            <BaseArticle
              className="profile_award_list"
              elementTitle={aboutProfile.award[1].name}
              description={aboutProfile.award[1].description}
            />
          </div>
        </div>
        <div className="profile_partner">
          <DepthTitle depthLevel="2" blindOption="hidden">
            Anchors Profile Partner
          </DepthTitle>
          <Description
            innerHTMLOption="Y"
            data={aboutProfile.introProfile.profilePartner}
          />
          <div>
            <InfiniteRolling className="about_partner">
              {aboutProfile.customerLogo.map((cont, idx) => (
                <img
                  key={idx}
                  src={aboutProfile.imgUrl + cont.img}
                  alt={cont.alt}
                />
              ))}
            </InfiniteRolling>
            <InfiniteRolling className="about_partner" reverse="Y">
              {aboutProfile.customerLogo.map((cont, idx) => (
                <img
                  key={idx}
                  src={aboutProfile.imgUrl + cont.img}
                  alt={cont.alt}
                />
              ))}
            </InfiniteRolling>
          </div>
          <Disclaimer data={<>Want to know about us</>} />
          <Btn className="download_btn" type="a">
            Download
            <br />
            Profiles
          </Btn>
        </div>
      </div>
      {/* E: anchors profile 영역*/}

      <div className="about_members section_div is_photo">
        <Visual imgUrl="/assets/images/contents/about/img_visual_members.jpg" />
        <div className="about_members_desc">
          <Description
            innerHTMLOption="Y"
            data={aboutMembers.membersText.textEn}
          />
          <Description
            innerHTMLOption="Y"
            data={aboutMembers.membersText.textKo}
          />
        </div>
        {/* S: about members swiper 영역*/}
        <DepthTitle depthLevel="1" blindOption="hidden">
          Anchors Intro Swiper
        </DepthTitle>
        <SwiperArea
          key="swiper04"
          type="single"
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
          }}
          className="about_members_swiper scroll-linear"
          swiperContent={aboutMembers.members.map((cont, idx) => (
            <div key={`sw04-${idx}`}>
              <p className="member_name_en">{cont.nameEn}</p>
              <MoreDetail
                imgUrl={aboutMembers.imgUrl + cont.img}
                imgAlt={cont.alt}
                children={
                  <div>
                    <b>{cont.nameKo}</b>
                    <p className="member_team">{cont.part}</p>
                    <pre className="member_hashtag">{cont.hashtag}</pre>
                  </div>
                }
              />
            </div>
          ))}
        />
        {/* E: about members swiper 영역*/}
      </div>
    </main>
  );
}

export default About;
