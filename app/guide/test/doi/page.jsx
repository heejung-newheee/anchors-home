'use client';
import React from 'react';

import Disclaimer from '@/components/Disclaimer/Disclaimer';
import Video from '@/components/Video/Video';
import Footer from '@/components/Footer/Footer';
import Image from 'next/image';
import RootLayout from '@/app/layout';
import WorksTemplate from '@/components/WorksTemplate/WorksTemplate';
import { content } from '@/helper/data/json/contents/works/works.json';

export default function Doi() {
  return (
    <>
      {/* <Disclaimer data="disclaimer" /> */}
      <Video videoUrl="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" />
      <Footer />
      <WorksTemplate />
    </>
  );
}
