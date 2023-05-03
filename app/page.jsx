import Btn from '@/components/Btn/Btn';
import Description from '@/components/Description/Description';
import Disclaimer from '@/components/Disclaimer/Disclaimer';
import FinderWorksList from '@/components/finderWorksList';
import LottiePlayer from '@/components/LottiePlayer/LottiePlayer';
import ScrollTriggerArea from '@/components/ScrollTriggerArea/ScrollTriggerArea';
import SwiperArea from '@/components/SwiperArea/SwiperArea';
import WebGlCarousel from '@/components/WebGlCarousel/WebGlCarousel';
import InfiniteRolling from '@/components/InfiniteRolling/InfiniteRolling';
import main from '@/helper/data/json/contents/main/main.json';
import lottieMainKeyVisual from '@/public/assets/images/lottie/lottieMainKeyVisual.json';
import './scss/main.scss';

export const metadata = {
  title: 'Anchors',
  description: '',
};

function Main() {
  return (
    <>
      <main className="main">
        <section className="section_div is_black">
          <WebGlCarousel />
        </section>
        {/* S: about us */}
        <section className="section_div is_black about_us">
          <div className="keyvisual_wrap">
            <LottiePlayer
              className="text_keyvisual"
              data={lottieMainKeyVisual}
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
            <ScrollTriggerArea
              type="multiTrigger"
              triggerStart={{
                mobile: '1200vh',
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
              triggerOffset={'center'}
              triggerMarkers={false}
              XAxes={{
                mobile: ['-360vh'],
                tablet: ['-400vh'],
                desktop: ['-400vh'],
                wide: ['-400vh'],
              }}
              duration={0.001}
            >
              <span className="rolling_text">
                <span>
                  {main.service.rollingBigText[0]}
                  <ScrollTriggerArea
                    type="multiTrigger"
                    triggerStart={{
                      mobile: '1150vh',
                      tablet: '0px',
                      desktop: '0px',
                      wide: '0px',
                    }}
                    triggerEnd={{
                      mobile: '1650vh',
                      tablet: '0px',
                      desktop: '0px',
                      wide: '0px',
                    }}
                    triggerOffset={'center'}
                    triggerMarkers={false}
                    XAxes={{
                      mobile: ['-200%'],
                      tablet: ['-200%'],
                      desktop: ['-200%'],
                      wide: ['-200%'],
                    }}
                    duration={0.01}
                  >
                    <img
                      src={
                        main.imgUrl + main.service.blueBgRollingImages[0].image
                      }
                      alt={main.service.blueBgRollingImages[0].alt}
                    />
                  </ScrollTriggerArea>

                  <ScrollTriggerArea
                    type="multiTrigger"
                    triggerStart={{
                      mobile: '800vh',
                      tablet: '0px',
                      desktop: '0px',
                      wide: '0px',
                    }}
                    triggerEnd={{
                      mobile: '1300vh',
                      tablet: '0px',
                      desktop: '0px',
                      wide: '0px',
                    }}
                    triggerOffset={'center'}
                    triggerMarkers={false}
                    XAxes={{
                      mobile: ['-200%'],
                      tablet: ['-200%'],
                      desktop: ['-200%'],
                      wide: ['-200%'],
                    }}
                    duration={0.01}
                  >
                    <img
                      src={
                        main.imgUrl + main.service.blueBgRollingImages[1].image
                      }
                      alt={main.service.blueBgRollingImages[1].alt}
                    />
                  </ScrollTriggerArea>

                  <ScrollTriggerArea
                    type="multiTrigger"
                    triggerStart={{
                      mobile: '1200vh',
                      tablet: '0px',
                      desktop: '0px',
                      wide: '0px',
                    }}
                    triggerEnd={{
                      mobile: '1700vh',
                      tablet: '0px',
                      desktop: '0px',
                      wide: '0px',
                    }}
                    triggerOffset={'center'}
                    triggerMarkers={false}
                    XAxes={{
                      mobile: ['-200%'],
                      tablet: ['-200%'],
                      desktop: ['-200%'],
                      wide: ['-200%'],
                    }}
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

                <ScrollTriggerArea
                  type="multiTrigger"
                  triggerStart={{
                    mobile: '1650vh',
                    tablet: '0px',
                    desktop: '0px',
                    wide: '0px',
                  }}
                  triggerEnd={{
                    mobile: '2150vh',
                    tablet: '0px',
                    desktop: '0px',
                    wide: '0px',
                  }}
                  triggerOffset={'center'}
                  triggerMarkers={false}
                  toScale={[30]}
                  YAxes={{
                    mobile: ['-200%'],
                    tablet: ['-200%'],
                    desktop: ['-200%'],
                    wide: ['-200%'],
                  }}
                  duration={0.001}
                >
                  <span>{main.service.rollingBigText[1]}</span>
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
            <ScrollTriggerArea
              type="multiTrigger"
              triggerStart={{
                mobile: '3500vh',
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
              XAxes={{
                mobile: ['-360vh'],
                tablet: ['-400vh'],
                desktop: ['-400vh'],
                wide: ['-400vh'],
              }}
              duration={0.001}
            >
              <span className="rolling_text">
                {main.ourWorks.rollingBigText}
                <ScrollTriggerArea
                  type="multiTrigger"
                  triggerStart={{
                    mobile: '3500vh',
                    tablet: '0px',
                    desktop: '0px',
                    wide: '0px',
                  }}
                  triggerEnd={{
                    mobile: '4000vh',
                    tablet: '0px',
                    desktop: '0px',
                    wide: '0px',
                  }}
                  triggerOffset={'center'}
                  triggerMarkers={false}
                  XAxes={{
                    mobile: ['-200%'],
                    tablet: ['-200%'],
                    desktop: ['-200%'],
                    wide: ['-200%'],
                  }}
                  duration={0.01}
                >
                  <img
                    src={main.imgUrl + main.ourWorks.rollingImages[0].image}
                    alt={main.ourWorks.rollingImages[0].alt}
                  />
                </ScrollTriggerArea>

                <ScrollTriggerArea
                  type="multiTrigger"
                  triggerStart={{
                    mobile: '3400vh',
                    tablet: '0px',
                    desktop: '0px',
                    wide: '0px',
                  }}
                  triggerEnd={{
                    mobile: '3900vh',
                    tablet: '0px',
                    desktop: '0px',
                    wide: '0px',
                  }}
                  triggerOffset={'center'}
                  triggerMarkers={false}
                  XAxes={{
                    mobile: ['-200%'],
                    tablet: ['-200%'],
                    desktop: ['-200%'],
                    wide: ['-200%'],
                  }}
                  duration={0.01}
                >
                  <img
                    src={main.imgUrl + main.ourWorks.rollingImages[1].image}
                    alt={main.ourWorks.rollingImages[1].alt}
                  />
                </ScrollTriggerArea>

                <ScrollTriggerArea
                  type="multiTrigger"
                  triggerStart={{
                    mobile: '3500vh',
                    tablet: '0px',
                    desktop: '0px',
                    wide: '0px',
                  }}
                  triggerEnd={{
                    mobile: '4000vh',
                    tablet: '0px',
                    desktop: '0px',
                    wide: '0px',
                  }}
                  triggerOffset={'center'}
                  triggerMarkers={false}
                  XAxes={{
                    mobile: ['-200%'],
                    tablet: ['-200%'],
                    desktop: ['-200%'],
                    wide: ['-200%'],
                  }}
                  duration={0.01}
                >
                  <img
                    src={main.imgUrl + main.ourWorks.rollingImages[2].image}
                    alt={main.ourWorks.rollingImages[2].alt}
                  />
                </ScrollTriggerArea>
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
            XAxes={{
              mobile: ['-100%'],
              tablet: ['-100%'],
              desktop: ['-100%'],
              wide: ['-100%'],
            }}
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
