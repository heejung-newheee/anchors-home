"use client";


import Disclaimer from '@/components/Disclaimer/Disclaimer';
import Video from '@/components/Video/Video';


export default function Doi() {
  return (
      <>
        <Disclaimer data="disclaimer" />
        <Video videoUrl="https://picsum.photos/id/870/200/300?grayscale&blur=2" />
      </>
  )
}
