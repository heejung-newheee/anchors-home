import React from 'react';

import About from '@/app/pages/about/page';
import InfiniteRolling from '@/components/InfiniteRolling/InfiniteRolling';
import aboutProfile from '/helper/data/json/contents/about/aboutProfile.json';

export default function Doi() {
  return (
    <>
      {/* <Disclaimer data="disclaimer" /> */}
      {/* <Video videoUrl="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" /> */}
      {/* <Footer /> */}
      {/* <WorksTemplate /> */}
      <About />
      {/* <ImageRolling className="about_logo"> */}
      {/*   {aboutProfile.customerLogo.map((cont, idx) => ( */}
      {/*     <img */}
      {/*       key={`rolling-${idx}`} */}
      {/*       src={aboutProfile.imgUrl + cont.img} */}
      {/*       alt={cont.alt} */}
      {/*     /> */}
      {/*   ))} */}
      {/* </InfiniteRolling> */}
    </>
  );
}
