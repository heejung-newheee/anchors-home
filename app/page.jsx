import Btn from '@/components/Btn/Btn';
import Description from '@/components/Description/Description';
import Disclaimer from '@/components/Disclaimer/Disclaimer';
import FinderWorksList from '@/components/finderWorksList';
import InfiniteRolling from '@/components/InfiniteRolling/InfiniteRolling';
import LottiePlayer from '@/components/LottiePlayer/LottiePlayer';
import ScrollTriggerArea from '@/components/ScrollTriggerArea/ScrollTriggerArea';
import SwiperArea from '@/components/SwiperArea/SwiperArea';
import WebGlCarousel from '@/components/WebGlCarousel/WebGlCarousel';
/* import WebGlCarousel from '@/components/WebGlCarousel/WebGlCarousel'; */
import main from '@/helper/data/json/contents/main/main.json';
import lottieMainKeyVisualOurwork from '@/public/assets/images/lottie/lottieMainKeyVisualOurwork.json';
import lottieMainKeyVisualSmile from '@/public/assets/images/lottie/lottieMainKeyVisualSmile.json';
import lottieMainKeyVisualText from '@/public/assets/images/lottie/lottieMainKeyVisualText.json';
import lottieMainKeyVisualUnderline from '@/public/assets/images/lottie/lottieMainKeyVisualUnderline.json';
import './scss/main.scss';

function Main() {
  return (
    <>
      <main className="main">
        <section className="section_div is_black">
          {/*<WebGlCarousel />*/}
        </section>
        {/* S: about us */}
        <section className="section_div is_black about_us">
          <div className="keyvisual_wrap">
            <div className="text_keyvisual_wrap">
              <LottiePlayer
                className="text_keyvisual"
                data={lottieMainKeyVisualText}
                loop={false}
              />
            </div>
            <LottiePlayer
              className="smile_keyvisual"
              data={lottieMainKeyVisualSmile}
              loop={false}
            />
            <LottiePlayer
              className="underline_keyvisual"
              data={lottieMainKeyVisualUnderline}
              loop={false}
            />
            <LottiePlayer
              className="ourwork_keyvisual"
              data={lottieMainKeyVisualOurwork}
              loop={false}
            />
            <Disclaimer
              className="keyvisual_disclaimer"
              data="At Anchors, our executives and employees are hard at work to improve customer service with their professional expertise."
            />
          </div>
          {/*RotateRolling*/}
          <div className="intro_area">
            <Description
              className="intro_en"
              data={main.aboutUs.introduction.en}
              innerHTMLOption="Y"
            />
            <Description
              className="intro_ko"
              data={main.aboutUs.introduction.ko}
              innerHTMLOption="Y"
            />
            <Btn
              type="link"
              className="btn_about_us"
              url="/pages/about"
              alt="About Us"
            >
              About Us
            </Btn>
          </div>
        </section>
        {/* E: about us */}

        {/* S: service */}
        <section className="service">
          <div className="section_div is_black bg_blue rolling_wrap">
            {/* Expertise 텍스트 영역 'Expertis' */}
            <ScrollTriggerArea
              type="multiTrigger"
              triggerStart={{
                mobile: '0',
                tablet: '0px',
                desktop: '0px',
                wide: '0px',
              }}
              triggerEnd={{
                mobile: '2200vh',
                tablet: '0px',
                desktop: '0px',
                wide: '0px',
              }}
              triggerMarkers={false}
              XAxes={[
                {
                  mobile: '-360vh',
                  tablet: '-400vh',
                  desktop: '-400vh',
                  wide: '-400vh',
                },
              ]}
              duration={0.001}
            >
              <span className="rolling_text">
                <span className="text_expertis">
                  {main.service.rollingBigText[0]}
                  {/* Expertise 첫번째 이미지 */}
                  <ScrollTriggerArea
                    type="multiTrigger"
                    triggerStart={{
                      mobile: '-120%',
                      tablet: '0px',
                      desktop: '0px',
                      wide: '0px',
                    }}
                    triggerEnd={{
                      mobile: '1000vh',
                      tablet: '0px',
                      desktop: '0px',
                      wide: '0px',
                    }}
                    triggerMarkers={true}
                    XAxes={[
                      {
                        mobile: '-200%',
                        tablet: '-200%',
                        desktop: '-200%',
                        wide: '-200%',
                      },
                    ]}
                    duration={0.01}
                  >
                    <img
                      src={
                        main.imgUrl + main.service.blueBgRollingImages[0].image
                      }
                      alt={main.service.blueBgRollingImages[0].alt}
                    />
                  </ScrollTriggerArea>

                  {/* Expertise 두번째 이미지 */}
                  <ScrollTriggerArea
                    type="multiTrigger"
                    triggerStart={{
                      mobile: '-300%',
                      tablet: '0px',
                      desktop: '0px',
                      wide: '0px',
                    }}
                    triggerEnd={{
                      mobile: '1000vh',
                      tablet: '0px',
                      desktop: '0px',
                      wide: '0px',
                    }}
                    triggerMarkers={true}
                    XAxes={[
                      {
                        mobile: '-200%',
                        tablet: '-200%',
                        desktop: '-200%',
                        wide: '-200%',
                      },
                    ]}
                    duration={0.01}
                  >
                    <img
                      src={
                        main.imgUrl + main.service.blueBgRollingImages[1].image
                      }
                      alt={main.service.blueBgRollingImages[1].alt}
                    />
                  </ScrollTriggerArea>

                  {/* Expertise 세번째 이미지 */}
                  <ScrollTriggerArea
                    type="multiTrigger"
                    triggerStart={{
                      mobile: '20%',
                      tablet: '0px',
                      desktop: '0px',
                      wide: '0px',
                    }}
                    triggerEnd={{
                      mobile: '1000vh',
                      tablet: '0px',
                      desktop: '0px',
                      wide: '0px',
                    }}
                    triggerMarkers={true}
                    XAxes={[
                      {
                        mobile: '-200%',
                        tablet: '-200%',
                        desktop: '-200%',
                        wide: '-200%',
                      },
                    ]}
                    duration={0.01}
                  >
                    <img
                      src={
                        main.imgUrl + main.service.blueBgRollingImages[2].image
                      }
                      alt={main.service.blueBgRollingImages[2].alt}
                    />
                  </ScrollTriggerArea>
                </span>

                {/* Expertise 텍스트 영역 'e' */}
                <ScrollTriggerArea
                  type="multiTrigger"
                  triggerStart={{
                    mobile: '65%',
                    tablet: '0px',
                    desktop: '0px',
                    wide: '0px',
                  }}
                  triggerEnd={{
                    mobile: '2000vh',
                    tablet: '0px',
                    desktop: '0px',
                    wide: '0px',
                  }}
                  triggerMarkers={true}
                  toScale={[{ mobile: 30, table: 30, desktop: 30, wide: 30 }]}
                  YAxes={[
                    {
                      mobile: '-200%',
                      tablet: '-200%',
                      desktop: '-200%',
                      wide: '-200%',
                    },
                  ]}
                  duration={0.001}
                >
                  <span className="text_e">
                    {main.service.rollingBigText[1]}
                  </span>
                </ScrollTriggerArea>
              </span>
            </ScrollTriggerArea>
          </div>
          <div className="section_div is_white bg_white">
            <div className="rolling_area_wrap">
              <InfiniteRolling className="rolling_area" duration="20">
                {main.service.whiteBgRolling.line1.map((data, index) => (
                  <>
                    <span key={'text' + index}>{data.text}</span>
                    <img
                      key={'img' + index}
                      src={main.imgUrl + data.image}
                      alt={data.alt}
                    />
                  </>
                ))}
              </InfiniteRolling>
              <InfiniteRolling
                className="rolling_area"
                reverse="Y"
                duration="20"
              >
                {main.service.whiteBgRolling.line2.map((data, index) => (
                  <>
                    <span key={'text' + index}>{data.text}</span>
                    <img
                      key={'img' + index}
                      src={main.imgUrl + data.image}
                      alt={data.alt}
                    />
                  </>
                ))}
              </InfiniteRolling>
              <InfiniteRolling className="rolling_area" duration="20">
                {main.service.whiteBgRolling.line3.map((data, index) => (
                  <>
                    <span key={'text' + index}>{data.text}</span>
                    <img
                      key={'img' + index}
                      src={main.imgUrl + data.image}
                      alt={data.alt}
                    />
                  </>
                ))}
              </InfiniteRolling>
            </div>
            <div className="intro_area">
              <Description
                className="intro_en"
                data={main.service.introduction.en}
                innerHTMLOption="Y"
              />
              <Description
                className="intro_ko"
                data={main.service.introduction.ko}
                innerHTMLOption="Y"
              />
              <Btn type="link" className="" url="/pages/service" alt="Service">
                Service
              </Btn>
            </div>
          </div>
        </section>
        {/* E: service */}

        {/* S: our works */}
        <section className="our_works">
          <div className="section_div is_white rolling_wrap">
            {/* Our works 텍스트 영역 */}
            <ScrollTriggerArea
              type="multiTrigger"
              triggerStart={{
                mobile: '0',
                tablet: '0px',
                desktop: '0px',
                wide: '0px',
              }}
              triggerEnd={{
                mobile: '1000vh',
                tablet: '0px',
                desktop: '0px',
                wide: '0px',
              }}
              triggerMarkers={false}
              XAxes={[
                {
                  mobile: '-200%',
                  tablet: '-200%',
                  desktop: '-200%',
                  wide: '-200%',
                },
              ]}
              duration={0.001}
            >
              <span className="rolling_text">
                <span className="text_ourworks">
                  {main.ourWorks.rollingBigText}
                  {/* Our works 첫번째 이미지 */}
                  <ScrollTriggerArea
                    type="multiTrigger"
                    triggerStart={{
                      mobile: '-215%',
                      tablet: '0px',
                      desktop: '0px',
                      wide: '0px',
                    }}
                    triggerEnd={{
                      mobile: '1500vh',
                      tablet: '0px',
                      desktop: '0px',
                      wide: '0px',
                    }}
                    triggerMarkers={true}
                    XAxes={[
                      {
                        mobile: '-200%',
                        tablet: '-200%',
                        desktop: '-200%',
                        wide: '-200%',
                      },
                    ]}
                    duration={0.01}
                  >
                    <img
                      src={main.imgUrl + main.ourWorks.rollingImages[0].image}
                      alt={main.ourWorks.rollingImages[0].alt}
                    />
                  </ScrollTriggerArea>

                  {/* Our works 두번째 이미지 */}
                  <ScrollTriggerArea
                    type="multiTrigger"
                    triggerStart={{
                      mobile: '-260%',
                      tablet: '0px',
                      desktop: '0px',
                      wide: '0px',
                    }}
                    triggerEnd={{
                      mobile: '1500vh',
                      tablet: '0px',
                      desktop: '0px',
                      wide: '0px',
                    }}
                    triggerMarkers={true}
                    XAxes={[
                      {
                        mobile: '-200%',
                        tablet: '-200%',
                        desktop: '-200%',
                        wide: '-200%',
                      },
                    ]}
                    duration={0.01}
                  >
                    <img
                      src={main.imgUrl + main.ourWorks.rollingImages[1].image}
                      alt={main.ourWorks.rollingImages[1].alt}
                    />
                  </ScrollTriggerArea>

                  {/* Our works 세번째 이미지 */}
                  <ScrollTriggerArea
                    type="multiTrigger"
                    triggerStart={{
                      mobile: '-100%',
                      tablet: '0px',
                      desktop: '0px',
                      wide: '0px',
                    }}
                    triggerEnd={{
                      mobile: '2000vh',
                      tablet: '0px',
                      desktop: '0px',
                      wide: '0px',
                    }}
                    triggerMarkers={true}
                    XAxes={[
                      {
                        mobile: '-200%',
                        tablet: '-200%',
                        desktop: '-200%',
                        wide: '-200%',
                      },
                    ]}
                    duration={0.01}
                  >
                    <img
                      src={main.imgUrl + main.ourWorks.rollingImages[2].image}
                      alt={main.ourWorks.rollingImages[2].alt}
                    />
                  </ScrollTriggerArea>
                </span>
              </span>
            </ScrollTriggerArea>
          </div>
          <ScrollTriggerArea
            type="multiTrigger"
            triggerStart={{
              mobile: '4000vh',
              tablet: '0px',
              desktop: '0px',
              wide: '0px',
            }}
            triggerEnd={{
              mobile: '4500vh',
              tablet: '0px',
              desktop: '0px',
              wide: '0px',
            }}
            triggerOffset={'center'}
            triggerMarkers={false}
            XAxes={[
              {
                mobile: '-100%',
                tablet: '-100%',
                desktop: '-100%',
                wide: '-100%',
              },
            ]}
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
        </section>
        {/* E: our works */}
      </main>
    </>
  );
}

export default Main;
