import React from 'react';

import About from '@/app/pages/about/page';
import WCMS from '@/app/pages/worksDetail/WCMS/page';
import Nbrand from '@/app/pages/worksDetail/nBrand/page';

import aboutProfile from '/helper/data/json/contents/about/aboutProfile.json';

export default function Doi() {
  return (
    <>
      {/* <Disclaimer data="disclaimer" /> */}
      {/* <Video videoUrl="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" /> */}
      {/* <Footer /> */}
      <About />
      {/*<MyAIA />*/}
      {/*<BMS />*/}
      {/*<MyHyundai />*/}
      {/*<HappyMove />*/}
      {/*<WWN />*/}
      {/*<WCMS />*/}
      {/*<Nbrand />*/}
    </>
  );
}
