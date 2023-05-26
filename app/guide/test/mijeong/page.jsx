import React from 'react';

import LottiePlayer from '@/components/LottiePlayer/LottiePlayer';
import ScrollTriggerArea from '@/components/ScrollTriggerArea/ScrollTriggerArea';
import Tab from '@/components/Tab/Tab';
import worksList from '@/helper/data/json/contents/works/works.json';
import lottieMainKeyVisual from '@/public/assets/images/lottie/lottieMainKeyVisual.json';

const LOTTIE_TYPE = {
  style: {
    height: '600px',
    width: '600px',
    backgroundColor: '#1D1D1F',
  },
};

const SCROLL_TRIGGER_OPTION = {
  triggerStart: [
    { mobile: '0px', table: '0px', desktop: '0px', wide: '200px' },
    { mobile: '0px', table: '0px', desktop: '0px', wide: '200px' },
    { mobile: '0px', table: '0px', desktop: '0px', wide: '200px' },
  ],
  triggerEnd: [
    { mobile: '0px', table: '0px', desktop: '600px', wide: '600px' },
    { mobile: '0px', table: '0px', desktop: '200px', wide: '600px' },
    { mobile: '0px', table: '0px', desktop: '600px', wide: '600px' },
  ],
  XAxes: {
    multiTrigger: [
      { mobile: '0px', table: '0px', desktop: '200px', wide: '200px' },
      { mobile: '0px', table: '0px', desktop: '200px', wide: '200px' },
    ],
    test: [
      { mobile: '0px', table: '0px', desktop: '200px', wide: '200px' },
      { mobile: '0px', table: '0px', desktop: '500px', wide: '200px' },
    ],
  },
  fromScale: {
    test: [
      { mobile: 1, table: 1, desktop: 1, wide: 1 },
      { mobile: 1, table: 1, desktop: 1, wide: 1 },
    ],
  },
  toScale: {
    test: [
      { mobile: 1, table: 1, desktop: 1, wide: 1 },
      { mobile: 1, table: 1, desktop: 1, wide: 1 },
    ],
  },
  lottie: {
    option: {
      data: lottieMainKeyVisual,
      autoplay: false,
    },
    style: {
      height: '600px',
      backgroundColor: '#1D1D1F',
    },
  },
};

function Mijeong() {
  return (
    <>
      <p> LottiePlayer 컴모넌트 적용</p>
      <LottiePlayer className="lottieName" data={lottieMainKeyVisual} style={LOTTIE_TYPE.style} />
      <p>
        ScrollTriggerArea 컴포넌트의 타입 로티
        <br />
        lottie Class 명은 ScrollTriggerArea의 타입 명과 동일합니다.
      </p>
      <ScrollTriggerArea
        type="lottieTrigger"
        lottieOption={SCROLL_TRIGGER_OPTION.lottie.option}
        triggerStart={SCROLL_TRIGGER_OPTION.triggerStart[0]}
        triggerEnd={SCROLL_TRIGGER_OPTION.triggerEnd[0]}
        triggerOffset={'center'}
        triggerMarkers={true}
        lottieStyle={SCROLL_TRIGGER_OPTION.lottie.style}
      />
      <p> ScrollTriggerArea 컴포넌트의 타입 멀티 컨텐츠 </p>
      <ScrollTriggerArea
        type="multiTrigger"
        triggerStart={SCROLL_TRIGGER_OPTION.triggerStart[1]}
        triggerEnd={SCROLL_TRIGGER_OPTION.triggerEnd[1]}
        triggerOffset={'center'}
        triggerMarkers={true}
        XAxes={SCROLL_TRIGGER_OPTION.XAxes.multiTrigger}
        defaultID="multiTrigger"
      >
        <div className="area01" style={{ width: '100px', height: '100px', background: '#ccc' }} />
        <div className="area02" style={{ width: '100px', height: '100px', background: '#999' }} />
      </ScrollTriggerArea>

      <p> Tab 컴포넌트의 타입 article </p>
      <Tab tabList={worksList.sort}>
        <div>Tab 컨텐츠 1</div>
        <div>Tab 컨텐츠 2</div>
        <div>Tab 컨텐츠 3</div>
      </Tab>

      <p> Tab 컴포넌트의 타입 sortList </p>
      <Tab type="sortList" json={worksList} tabList={worksList.sort} />

      <p> ScrollTriggerArea 컴포넌트의 타입 Timeline </p>
      <div style={{ height: '600px' }}>
        <ScrollTriggerArea
          type="timeLine"
          triggerStart={SCROLL_TRIGGER_OPTION.triggerStart[2]}
          triggerEnd={SCROLL_TRIGGER_OPTION.triggerEnd[2]}
          triggerOffset={'center'}
          triggerMarkers={true}
          XAxes={SCROLL_TRIGGER_OPTION.XAxes.test}
          toScale={SCROLL_TRIGGER_OPTION.toScale.test}
          fromScale={SCROLL_TRIGGER_OPTION.fromScale.test}
          defaultID="timeLine"
        >
          <div>Expertis</div>
          <div className="timeLine" style={{ width: '24px' }}>
            e
          </div>
        </ScrollTriggerArea>
      </div>
    </>
  );
}
export default Mijeong;
