'use client';

import Disclaimer from '@/components/Disclaimer/Disclaimer';
import Video from '@/components/Video/Video';
import Image from 'next/image';

export default function Doi() {
  return (
    <>
      <Disclaimer data="disclaimer" />
      <Video videoUrl="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" />
    </>
  );
}
