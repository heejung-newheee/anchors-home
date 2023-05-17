import Btn from '@/components/Btn/Btn';
import DepthTitle from '@/components/DepthTitle/DepthTitle';
import Description from '@/components/Description/Description';
import Disclaimer from '@/components/Disclaimer/Disclaimer';
import FinderWorksList from '@/components/FinderWorksList/FinderWorksList';
import InfiniteRolling from '@/components/InfiniteRolling/InfiniteRolling';
import LottiePlayer from '@/components/LottiePlayer/LottiePlayer';
import ScrollTriggerArea from '@/components/ScrollTriggerArea/ScrollTriggerArea';
import SwiperArea from '@/components/SwiperArea/SwiperArea';
import WebGlCarousel from '@/components/WebGlCarousel/WebGlCarousel';

import main from '@/helper/data/json/contents/main/main.json';
/* import lottieMainKeyVisualOurwork from '@/public/assets/images/lottie/lottieMainKeyVisualOurwork.json';
import lottieMainKeyVisualSmile from '@/public/assets/images/lottie/lottieMainKeyVisualSmile.json';
import lottieMainKeyVisualText from '@/public/assets/images/lottie/lottieMainKeyVisualText.json';
import lottieMainKeyVisualUnderline from '@/public/assets/images/lottie/lottieMainKeyVisualUnderline.json'; */
import lottieMainKeyVisual from '@/public/assets/images/lottie/lottieMainKeyVisual.json';
import './scss/main.scss';

function Main() {
  return (
    <>
      <main className="main">
        {/* S: about us */}
        <section className="section_div is_black about_us">
          <DepthTitle depthLevel="1">About US</DepthTitle>
          {/* S: intro + rotate keyvisual */}
          <section className="keyvisual_wrap">
            <LottiePlayer className="lottie" data={lottieMainKeyVisual} loop={false} />
            {/* <div className="text_keyvisual_wrap">
              <LottiePlayer className="text_keyvisual" data={lottieMainKeyVisualText} loop={false} />
            </div>
            <LottiePlayer className="smile_keyvisual" data={lottieMainKeyVisualSmile} loop={false} />
            <LottiePlayer className="underline_keyvisual" data={lottieMainKeyVisualUnderline} loop={false} />
            <LottiePlayer className="ourwork_keyvisual" data={lottieMainKeyVisualOurwork} loop={false} /> */}
            <Disclaimer className="keyvisual_disclaimer" data={main.aboutUs.keyVisualText} />
          </section>
          <WebGlCarousel />
          {/* E: intro + rotate keyvisual */}
          {/* S: intro text + button */}
          <section className="intro_area">
            <Description className="intro_en" data={main.aboutUs.introduction.en} innerHTMLOption="Y" />
            <Description className="intro_ko" data={main.aboutUs.introduction.ko} />
            <Btn type="link" className="btn_about_us" url="/pages/about" alt="About Us">
              About Us
            </Btn>
          </section>
          {/* E: intro text + button */}
        </section>
        {/* E: about us */}

        {/* S: service */}
        <section className="service">
          <DepthTitle depthLevel="1">Service</DepthTitle>
          {/* S: Expertise scroll 영역 */}
          <section className="section_div is_black bg_blue rolling_wrap">
            {/* Expertise 텍스트 영역 'Expertis' */}
            <ScrollTriggerArea
              className="line1_flow scroll_expertise"
              defaultID="scroll_trigger01"
              type="multiTrigger"
              triggerStart={{
                mobile: '0',
                table: '0',
                desktop: '0',
                wide: '0',
              }}
              triggerEnd={{
                mobile: '2200vh',
                table: '2200vh',
                desktop: '2200vh',
                wide: '2200vh',
              }}
              triggerMarkers={false}
              XAxes={[
                {
                  mobile: '-360vh',
                  table: '-400vh',
                  desktop: '-600vh',
                  wide: '-600vh',
                },
              ]}
              duration={0.001}
            >
              <artice className="rolling_text">
                <div className="text_expertis">
                  {main.service.rollingBigText[0]}
                  {/* Expertise 첫번째 이미지 */}
                  <ScrollTriggerArea
                    className="expertise_img"
                    defaultID="scroll_trigger02"
                    type="multiTrigger"
                    triggerStart={{
                      mobile: '-160px',
                      table: '-300px',
                      desktop: '-110px',
                      wide: '-100px',
                    }}
                    triggerEnd={{
                      mobile: '1000vh',
                      table: '1500vh',
                      desktop: '3000vh',
                      wide: '3000vh',
                    }}
                    triggerMarkers={false}
                    XAxes={[
                      {
                        mobile: '-200%',
                        table: '-200%',
                        desktop: '-200%',
                        wide: '-200%',
                      },
                    ]}
                    duration={0.01}
                  >
                    <img src={main.imgUrl + main.service.blueBgRollingImages[0].image} alt={main.service.blueBgRollingImages[0].alt} />
                  </ScrollTriggerArea>

                  {/* Expertise 두번째 이미지 */}
                  <ScrollTriggerArea
                    className="expertise_img"
                    defaultID="scroll_trigger03"
                    type="multiTrigger"
                    triggerStart={{
                      mobile: '-350px',
                      table: '-550px',
                      desktop: '-410px',
                      wide: '-550px',
                    }}
                    triggerEnd={{
                      mobile: '1000vh',
                      table: '1500vh',
                      desktop: '2000vh',
                      wide: '2000vh',
                    }}
                    triggerMarkers={false}
                    XAxes={[
                      {
                        mobile: '-200%',
                        table: '-200%',
                        desktop: '-200%',
                        wide: '-200%',
                      },
                    ]}
                    duration={0.01}
                  >
                    <img src={main.imgUrl + main.service.blueBgRollingImages[1].image} alt={main.service.blueBgRollingImages[1].alt} />
                  </ScrollTriggerArea>

                  {/* Expertise 세번째 이미지 */}
                  <ScrollTriggerArea
                    className="expertise_img"
                    defaultID="scroll_trigger04"
                    type="multiTrigger"
                    triggerStart={{
                      mobile: '0',
                      table: '-200px',
                      desktop: '-150px',
                      wide: '50px',
                    }}
                    triggerEnd={{
                      mobile: '1000vh',
                      table: '1500vh',
                      desktop: '3000vh',
                      wide: '3000vh',
                    }}
                    triggerMarkers={false}
                    XAxes={[
                      {
                        mobile: '-200%',
                        table: '-200%',
                        desktop: '-200%',
                        wide: '-200%',
                      },
                    ]}
                    duration={0.01}
                  >
                    <img src={main.imgUrl + main.service.blueBgRollingImages[2].image} alt={main.service.blueBgRollingImages[2].alt} />
                  </ScrollTriggerArea>
                </div>

                {/* Expertise 텍스트 영역 'e' */}
                <ScrollTriggerArea
                  defaultID="scroll_trigger05"
                  type="multiTrigger"
                  triggerStart={{
                    mobile: '280px',
                    table: '130px',
                    desktop: '350px',
                    wide: '530px',
                  }}
                  triggerEnd={{
                    mobile: '3000vh',
                    table: '4000vh',
                    desktop: '5300vh',
                    wide: '6900vh',
                  }}
                  triggerMarkers={false}
                  fromScale={[
                    {
                      mobile: 1,
                      table: 1,
                      desktop: 1,
                      wide: 1,
                    },
                  ]}
                  toScale={[
                    {
                      mobile: 30,
                      table: 40,
                      desktop: 60,
                      wide: 30,
                    },
                  ]}
                  YAxes={[
                    {
                      mobile: '-200%',
                      table: '-150%',
                      desktop: '-200%',
                      wide: '-200%',
                    },
                  ]}
                  duration={0.001}
                >
                  <span className="text_e">{main.service.rollingBigText[1]}</span>
                </ScrollTriggerArea>
              </artice>
            </ScrollTriggerArea>
          </section>
          {/* E: Expertise scroll 영역 */}
          {/* S: InfiniteRolling swiper + text 영역 */}
          <section className="section_div is_photo bg_white">
            {/* infinite rolling swiepr */}
            <section className="rolling_area_wrap">
              <InfiniteRolling className="rolling_area" duration="10" length="solo" key="infiniteRoling1">
                {main.service.whiteBgRolling.line1.map((data, index) => (
                  <>
                    <span key={'text' + index}>{data.text}</span>
                    <img key={'img' + index} src={main.imgUrl + data.image} alt={data.alt} />
                  </>
                ))}
              </InfiniteRolling>
              <InfiniteRolling className="rolling_area" reverse="Y" duration="6" length="solo" key="infiniteRoling2">
                {main.service.whiteBgRolling.line2.map((data, index) => (
                  <>
                    <span key={'text' + index}>{data.text}</span>
                    <img key={'img' + index} src={main.imgUrl + data.image} alt={data.alt} />
                  </>
                ))}
              </InfiniteRolling>
              <InfiniteRolling className="rolling_area" duration="6" length="solo" key="infiniteRoling3">
                {main.service.whiteBgRolling.line3.map((data, index) => (
                  <>
                    <span key={'text' + index}>{data.text}</span>
                    <img key={'img' + index} src={main.imgUrl + data.image} alt={data.alt} />
                  </>
                ))}
              </InfiniteRolling>
            </section>
            {/* text + button */}
            <section className="intro_area">
              <Description className="intro_en" data={main.service.introduction.en} innerHTMLOption="Y" />
              <Description className="intro_ko" data={main.service.introduction.ko} innerHTMLOption="Y" />
              <Btn type="link" className="" url="/pages/service" alt="Service">
                Service
              </Btn>
            </section>
          </section>
          {/* E: InfiniteRolling swiper + text 영역 */}
        </section>
        {/* E: service */}

        {/* S: our works */}
        <section className="our_works">
          <DepthTitle depthLevel="1">Our Works</DepthTitle>
          {/* S: our works scroll 영역 */}
          <section className="section_div is_black rolling_wrap">
            {/* Our works 텍스트 영역 */}
            <ScrollTriggerArea
              className="line1_flow"
              defaultID="scroll_trigger06"
              type="multiTrigger"
              triggerStart={{
                mobile: '0',
                table: '0',
                desktop: '0',
                wide: '0',
              }}
              triggerEnd={{
                mobile: '4000vh',
                table: '4000vh',
                desktop: '4000vh',
                wide: '4000vh',
              }}
              triggerMarkers={false}
              XAxes={[
                {
                  mobile: '-200%',
                  table: '-200%',
                  desktop: '-300%',
                  wide: '-300%',
                },
              ]}
              duration={0.001}
            >
              <article className="rolling_text">
                <div className="text_ourworks">
                  {main.ourWorks.rollingBigText}
                  {/* Our works 첫번째 이미지 */}
                  <ScrollTriggerArea
                    className="ourworks_img"
                    defaultID="scroll_trigger07"
                    type="multiTrigger"
                    triggerStart={{
                      mobile: '-215px',
                      table: '-390px',
                      desktop: '-220px',
                      wide: '-230px',
                    }}
                    triggerEnd={{
                      mobile: '1500vh',
                      table: '1500vh',
                      desktop: '1500vh',
                      wide: '1500vh',
                    }}
                    triggerMarkers={false}
                    XAxes={[
                      {
                        mobile: '-200%',
                        table: '-200%',
                        desktop: '-200%',
                        wide: '-200%',
                      },
                    ]}
                    duration={0.01}
                  >
                    <img src={main.imgUrl + main.ourWorks.rollingImages[0].image} alt={main.ourWorks.rollingImages[0].alt} />
                  </ScrollTriggerArea>

                  {/* Our works 두번째 이미지 */}
                  <ScrollTriggerArea
                    className="ourworks_img"
                    defaultID="scroll_trigger08"
                    type="multiTrigger"
                    triggerStart={{
                      mobile: '-350px',
                      table: '-500px',
                      desktop: '-420px',
                      wide: '-540px',
                    }}
                    triggerEnd={{
                      mobile: '1500vh',
                      table: '1500vh',
                      desktop: '1500vh',
                      wide: '1500vh',
                    }}
                    triggerMarkers={false}
                    XAxes={[
                      {
                        mobile: '-200%',
                        table: '-200%',
                        desktop: '-200%',
                        wide: '-200%',
                      },
                    ]}
                    duration={0.01}
                  >
                    <img src={main.imgUrl + main.ourWorks.rollingImages[1].image} alt={main.ourWorks.rollingImages[1].alt} />
                  </ScrollTriggerArea>

                  {/* Our works 세번째 이미지 */}
                  <ScrollTriggerArea
                    className="ourworks_img"
                    defaultID="scroll_trigger09"
                    type="multiTrigger"
                    triggerStart={{
                      mobile: '-220px',
                      table: '-220px',
                      desktop: '-200px',
                      wide: '-150px',
                    }}
                    triggerEnd={{
                      mobile: '2000vh',
                      table: '2000vh',
                      desktop: '2000vh',
                      wide: '2000vh',
                    }}
                    triggerMarkers={false}
                    XAxes={[
                      {
                        mobile: '-200%',
                        table: '-200%',
                        desktop: '-200%',
                        wide: '-200%',
                      },
                    ]}
                    duration={0.01}
                  >
                    <img src={main.imgUrl + main.ourWorks.rollingImages[2].image} alt={main.ourWorks.rollingImages[2].alt} />
                  </ScrollTriggerArea>
                </div>
              </article>
            </ScrollTriggerArea>
          </section>
          {/* E: our works scroll 영역 */}
          {/* S: card swiper 영역 */}
          <ScrollTriggerArea
            className="scroll_swiper"
            defaultID="scroll_trigger10"
            type="multiTrigger"
            triggerStart={{
              mobile: '0',
              table: '0',
              desktop: '0',
              wide: '-200px',
            }}
            triggerEnd={{
              mobile: '4500vh',
              table: '4500vh',
              desktop: '4500vh',
              wide: '4500vh',
            }}
            triggerOffset={'center'}
            triggerMarkers={false}
            duration={0.01}
          >
            <div className="portfolio_wrap">
              <SwiperArea
                type="single"
                swiperOption={{
                  slidesPerView: 'auto',
                  effect: 'cards',
                  cardsEffect: {
                    perSlideRotate: 30,
                    perSlideOffset: 100,
                  },
                  speed: 1000,
                }}
                className="section_div is_photo scroll-linear portfolio"
                swiperContent={
                  <>
                    {main.ourWorks.portfolio.map((data, index) => (
                      <FinderWorksList key={index} arrLength={index} />
                    ))}
                  </>
                }
              />
            </div>
          </ScrollTriggerArea>
          {/* E: card swiper 영역 */}
        </section>
        {/* E: our works */}
      </main>
    </>
  );
}

export default Main;
