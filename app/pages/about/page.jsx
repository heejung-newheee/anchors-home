import { Inter } from 'next/font/google';
import headerFooter from 'helper/data/json/contents/headerFooter.json';

import './about.scss';
import PageTitle from '@/components/PageTitle/PageTitle';
import Visual from '@/components/Visual/Visual';
import Description from '@/components/Description/Description';
import LottiePlayer from '@/components/LottiePlayer/LottiePlayer';
import lottie_arrow from '@/public/assets/images/lottie/lottieAboutusUpArrow.json';
import DepthTitle from '@/components/DepthTitle/DepthTitle';
import BaseArticle from '@/components/BaseArticle/BaseArticle';
import Disclaimer from '@/components/Disclaimer/Disclaimer';
import Btn from '@/components/Btn/Btn';
import aboutProfile from '/helper/data/json/contents/about/aboutProfile.json';
import aboutIntro from '/helper/data/json/contents/about/aboutIntro.json';
import SwiperArea from '@/components/SwiperArea/SwiperArea';
import aboutMembers from '@/helper/data/json/contents/about/aboutMembers.json';
import MoreDetail from '@/components/MoreDetail/MoreDetail';

// export const metadata = {
//   title: 'Anchors',
//   description: '',
// };

function About() {
  return (
    <main className="about">
      {/* S: PageTitle 영역*/}
      <PageTitle data={headerFooter.menuList[1].name} />
      {/* E: PageTitle 영역*/}

      {/* S: Key Visual 영역*/}
      <Visual imgUrl="/assets/images/contents/about/img_keyvisual_office.png" />
      {/* E: Key Visual 영역*/}

      {/* S: Description 영역*/}
      <div className="about_intro_text_wrap">
        <Description
          data={
            <>
              Innovative solutions, excellence in execution. We take your
              <span>technological obstacles</span> and convert them into
              opportunities for <span>digital growth.</span>
            </>
          }
        />
        <Description
          data={
            <>
              혁신적인 솔루션, 탁월한 실행력. 앵커스는 각 분야의 전문가들이 모여
              기술적 풍랑을 디지털 성장의 기회로 만드는 회사입니다.
            </>
          }
        />
      </div>
      {/* E: Description 영역*/}

      {/* S: about intro swiper 영역*/}
      <SwiperArea
        type="double"
        firstClassName="image_swiper"
        secondClassName="text_swiper"
        firstContent={aboutIntro.introduction.map((cont, idx) => (
          <div key={idx}>
            <img src={aboutIntro.imgUrl + cont.img} alt={cont.alt} />
          </div>
        ))}
        secondContent={aboutIntro.introduction.map((cont, idx) => (
          <div key={idx}>
            <p>{cont.highlightText}</p>
            <p>{cont.text}</p>
          </div>
        ))}
        firstSwiperOption={{
          pagination: false,
          effect: 'cards',
        }}
        secondSwiperOption={{
          navigation: false,
        }}
      />
      {/* E: about intro swiper 영역*/}

      {/* S: anchors profile 영역*/}
      <div className="anchors_profile">
        <DepthTitle depthLevel="1" blindOption="visible">
          Anchors Profile
        </DepthTitle>
        <div className="profile_development">
          <Description
            className="profile_grow_text"
            data={<>Anchors is a development company established in 2018.</>}
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
          <LottiePlayer className="profile_lottie_arrow" data={lottie_arrow} />
        </div>
        <div className="profile_award">
          <Description
            className="profile_award_description"
            data={<>Anchors have traveled a long road within a small period.</>}
          />
          <img
            className="profile_award_icon"
            src="/assets/images/ico/ico_webaward.svg"
            alt="web award icon image"
          />
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
        <div className="profile_partner">
          <Description
            data={
              <>We've been partnering with our customers for a long time.</>
            }
          />
          <SwiperArea
            type="single"
            swiperOption={{
              slidesPerView: 'auto',
              navigation: false,
              pagination: false,
              scrollbar: false,
              allowTouchMove: false,
              autoplay: {
                delay: 1,
              },
              loop: true,
              speed: 4000,
            }}
            className="single scroll-linear"
            swiperContent={aboutProfile.customerLogo.map((cont, idx) => (
              <div key={idx}>
                <img src={aboutProfile.imgUrl + cont.img} alt={cont.alt} />
              </div>
            ))}
          />
          <SwiperArea
            type="single"
            swiperOption={{
              slidesPerView: 'auto',
              navigation: false,
              pagination: false,
              scrollbar: false,
              allowTouchMove: false,
              autoplay: {
                delay: 1,
                reverseDirection: true,
              },
              loop: true,
              speed: 4000,
            }}
            className="single scroll-linear"
            swiperContent={aboutProfile.customerLogo.map((cont, idx) => (
              <div key={idx}>
                <img src={aboutProfile.imgUrl + cont.img} alt={cont.alt} />
              </div>
            ))}
          />
          <Disclaimer data={<>Want to know about us</>} />
          <Btn className="download_btn" type="a">
            Download
            <br />
            Profiles
          </Btn>
        </div>
      </div>
      {/* E: anchors profile 영역*/}

      <div className="about_members">
        <Visual imgUrl="/assets/images/contents/about/img_visual_members.png" />
        <Description
          data={
            <>
              We work with people <span>challenging and fun</span> to work with
              than alone.
              <span>Synergy</span> is a great driving force to sail through any
              problem ahead.
            </>
          }
        />
        <Description
          data={
            <>
              우리는 혼자보다 함께 일할 때 더 즐거운 사람들과 일하고 있습니다.
              신뢰감 있는 동료와 함께 일할 때 나는 시너지는 어떠한 문제도
              헤쳐나갈 수 있는 가장 큰 원동력입니다.
            </>
          }
        />
        {/* S: about members swiper 영역*/}
        <SwiperArea
          type="single"
          swiperOption={{
            slidesPerView: 'auto',
            navigation: false,
            pagination: false,
            scrollbar: true,
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
            <div key={idx}>
              <p className="member_name_en">{cont.nameEn}</p>
              <MoreDetail
                imgUrl={aboutMembers.imgUrl + cont.img}
                imgAlt={cont.alt}
                children={
                  <div>
                    <b>{cont.nameKo}</b>
                    <p className="member_team">{cont.part}</p>
                    <p className="member_hashtag">{cont.hashtag}</p>
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
