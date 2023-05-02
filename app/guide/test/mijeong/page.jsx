import LottiePlayer from '@/components/LottiePlayer/LottiePlayer';
import ScrollTriggerArea from '@/components/ScrollTriggerArea/ScrollTriggerArea';
import Tab from '@/components/Tab/Tab';
import LottieTest from '@/components/Test/LottieTest';
import worksList from '@/helper/data/json/contents/works/works.json';
import lottieMainKeyVisual from '@/public/assets/images/lottie/lottieMainKeyVisual.json';

const LOTTIE_STYLE = {
  height: '600px',
  width: '600px',
  backgroundColor: '#1D1D1F',
};

const LOTTIE_STYLE2 = {
  height: '600px',
  backgroundColor: '#1D1D1F',
};

const LOTTIE_OPTION = {
  // lottie Class 명은 ScrollTriggerArea의 타입 명과 동일합니다.
  data: lottieMainKeyVisual,
  autoplay: false,
  loop: false,
};

const TRIGGER_START = {
  mobile: '0px',
  table: '0px',
  desktop: '50px',
  wide: '50px',
};

const TRIGGER_END = {
  mobile: '0px',
  table: '0px',
  desktop: '600px',
  wide: '600px',
};

const TAB_CONTENTS = {};

function Mijeong() {
  return (
    <>
      <p> LottiePlayer 컴모넌트 적용</p>
      <LottiePlayer
        className="lottieName"
        data={lottieMainKeyVisual}
        style={LOTTIE_STYLE}
      />
      <p>
        ScrollTriggerArea 컴포넌트의 타입 로티
        <br />
        lottie Class 명은 ScrollTriggerArea의 타입 명과 동일합니다.
      </p>
      <ScrollTriggerArea
        type="lottieTrigger"
        lottieOption={LOTTIE_OPTION}
        triggerStart={TRIGGER_START}
        triggerEnd={TRIGGER_END}
        triggerOffset={'center'}
        triggerMarkers={true}
        lottieStyle={LOTTIE_STYLE2}
      />
      <p> ScrollTriggerArea 컴포넌트의 타입 멀티 컨텐츠 </p>
      <ScrollTriggerArea
        type="multiTrigger"
        triggerStart={TRIGGER_START}
        triggerEnd={TRIGGER_END}
        triggerOffset={'center'}
        triggerMarkers={true}
        XAxes={{
          mobile: ['0px', '0px'],
          table: ['0px', '0px'],
          desktop: ['500px', '300px'],
          wide: ['700px', '500px'],
        }}
      >
        <div
          className="area01"
          style={{ width: '100px', height: '100px', background: '#ccc' }}
        />
        <div
          className="area02"
          style={{ width: '100px', height: '100px', background: '#999' }}
        />
      </ScrollTriggerArea>

      <p> Tab 컴포넌트의 타입 article </p>
      <Tab type="article" tabList={worksList.sort} />

      {/*

      <LottieTest />


      <p> 탭 - link </p>
      <Tab type="link" tabList={LINK_BTN_LIST} />

      <p> 탭 - sortList </p>
      <Tab type="sortList" tabList={SORT_BTN_LIST} />
 */}
      {/*  */}
    </>
  );
}
export default Mijeong;
