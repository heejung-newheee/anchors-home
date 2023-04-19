'use client';

import Image from 'next/image';

import Disclaimer from '@/components/Disclaimer/Disclaimer';
import Video from '@/components/Video/Video';

export default function Doi() {
  return (
    <>
      <Disclaimer data="disclaimer" />
      <Video videoUrl="http://commondatastorage.googleapis.com/gtv_videos_bucket/sample/ElephantsDream.mp4" />
    </>
  );
}
