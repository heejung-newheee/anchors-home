'use client';
import React from 'react';

import RootLayout from '@/app/layout';
import Disclaimer from '@/components/Disclaimer/Disclaimer';
import Footer from '@/components/Footer/Footer';
import Video from '@/components/Video/Video';
import WorksTemplate from '@/components/WorksTemplate/WorksTemplate';
import { content } from '@/helper/data/json/contents/works/works.json';
import About from '@/app/pages/about/page';
import MoreDetail from '@/components/MoreDetail/MoreDetail';
import Accordion from '@/components/Accordion/Accordion';

export default function Doi() {
  return (
    <>
      {/* <Disclaimer data="disclaimer" /> */}
      {/* <Video videoUrl="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" /> */}
      {/* <Footer /> */}
      {/* <WorksTemplate /> */}
      <About />
    </>
  );
}
