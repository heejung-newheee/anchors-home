import React, { memo } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

import PageTitle from '@/components/PageTitle/PageTitle';
import Visual from '@/components/Visual/Visual';

const Profile = memo(dynamic(() => import('./_components/Profile')));
const Members = memo(dynamic(() => import('./_components/Members')));
const Introduction = memo(dynamic(() => import('./_components/Introduction')));


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

      {/* S: about intro 영역*/}
      <Introduction data={aboutIntro} imgUrl={aboutIntro.imgUrl} />
      {/* E: about intro swiper 영역*/}

      {/* S: anchors profile 영역*/}
      <Profile data={aboutProfile} />
      {/* E: anchors profile 영역*/}

      {/* S: about members swiper 영역*/}
      <Members data={aboutMembers} imgUrl={aboutMembers.imgUrl} />
      {/* E: about members swiper 영역*/}
    </main>
  );
}

export default About;
