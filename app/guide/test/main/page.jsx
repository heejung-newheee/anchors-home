import Btn from '@/components/Btn/Btn';
import Description from '@/components/Description/Description';
import Disclaimer from '@/components/Disclaimer/Disclaimer';
import FinderWorksList from '@/components/finderWorksList';
import LottiePlayer from '@/components/LottiePlayer/LottiePlayer';
import ScrollTriggerArea from '@/components/ScrollTriggerArea/ScrollTriggerArea';
import SwiperArea from '@/components/SwiperArea/SwiperArea';
import main from '@/helper/data/json/contents/main/main.json';
import lottieMainKeyVisual from '@/public/assets/images/lottie/lottieMainKeyVisual.json';
import './scss/main.scss';

export const metadata = {
  title: 'Anchors',
  description: '',
};

function MainTest() {
  return (
    <>
      <main className="main">
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
          {/*<SwiperArea*/}
          {/*  type="single"*/}
          {/*  swiperOption={{*/}
          {/*    */}
          {/*    */}
          {/*    slidesPerView: 3,*/}
          {/*    allowTouchMove: false,*/}
          {/*    navigation: false,*/}
          {/*    pagination: false,*/}
          {/*    autoplay: {*/}
          {/*      delay: 1,*/}
          {/*    },*/}
          {/*    loop: true,*/}
          {/*    speed: 1000,*/}
          {/*  }}*/}
          {/*  className="scroll-linear"*/}
          {/*  swiperContent={*/}
          {/*    <>*/}
          {/*      <div>*/}
          {/*        <img*/}
          {/*          src="/assets/images/contents/main/img_expertise03.jpg"*/}
          {/*          alt=""*/}
          {/*        />*/}
          {/*      </div>*/}
          {/*    </>*/}
          {/*  }*/}
          {/*/>*/}
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
            <span className="rolling_text">
              <ScrollTriggerArea
                type="multiTrigger"
                triggerStart={{
                  mobile: '100vh',
                  tablet: '0px',
                  desktop: '0px',
                  wide: '0px',
                }}
                triggerEnd={{
                  mobile: '5000vh',
                  tablet: '0px',
                  desktop: '0px',
                  wide: '0px',
                }}
                triggerOffset={'center'}
                triggerMarkers={false}
                XAxes={{
                  mobile: ['-400vh', '-400vh'],
                  tablet: ['-400vh', '-400vh'],
                  desktop: ['-400vh', '-400vh'],
                  wide: ['-400vh', '-400vh'],
                }}
                duration={0.01}
                // toScale={}
              >
                {/*{main.service.rollingBigText.map((data, index) => (*/}
                {/*  <span key={index}>{data}</span>*/}
                {/*))}*/}
                <span>
                  {main.service.rollingBigText[0]}
                  <ScrollTriggerArea
                    type="multiTrigger"
                    triggerStart={{
                      mobile: '100vh',
                      tablet: '0px',
                      desktop: '0px',
                      wide: '0px',
                    }}
                    triggerEnd={{
                      mobile: '5000vh',
                      tablet: '0px',
                      desktop: '0px',
                      wide: '0px',
                    }}
                    triggerOffset={'center'}
                    triggerMarkers={false}
                    XAxes={{
                      mobile: ['-150vh', '-150vh', '-150vh'],
                      tablet: ['-150vh', '-150vh', '-150vh'],
                      desktop: ['-150vh', '-150vh', '-150vh'],
                      wide: ['-150vh', '-150vh', '-150vh'],
                    }}
                    duration={0.01}
                  >
                    {main.service.blueBgRollingImages.map((data, index) => (
                      <img
                        key={index}
                        src={main.imgUrl + data.image}
                        alt={data.alt}
                      />
                    ))}
                  </ScrollTriggerArea>
                </span>
                <span>{main.service.rollingBigText[1]}</span>
              </ScrollTriggerArea>
            </span>
          </div>
          <div className="section_div is_white bg_white">
            <div className="swiper_bundle">
              <SwiperArea
                type="single"
                swiperOption={{
                  slidesPerView: 'auto',
                  navigation: false,
                  pagination: false,
                  allowTouchMove: false,
                  autoplay: {
                    delay: 1,
                  },
                  loop: true,
                  speed: 4000,
                }}
                className="scroll-linear"
                swiperContent={main.service.whiteBgRolling.line1.map(
                  (data, index) => (
                    <>
                      <span key={'text' + index}>{data.text}</span>
                      <img
                        key={'img' + index}
                        src={main.imgUrl + data.image}
                        alt={data.alt}
                      />
                    </>
                  ),
                )}
              />
              <SwiperArea
                type="single"
                swiperOption={{
                  slidesPerView: 'auto',
                  navigation: false,
                  pagination: false,
                  allowTouchMove: false,
                  autoplay: {
                    delay: 1,
                    reverseDirection: true,
                  },
                  loop: true,
                  speed: 4000,
                }}
                className="scroll-linear"
                swiperContent={main.service.whiteBgRolling.line2.map(
                  (data, index) => (
                    <>
                      <span key={'text' + index}>{data.text}</span>
                      <img
                        key={'img' + index}
                        src={main.imgUrl + data.image}
                        alt={data.alt}
                      />
                    </>
                  ),
                )}
              />
              <SwiperArea
                type="single"
                swiperOption={{
                  slidesPerView: 'auto',
                  navigation: false,
                  pagination: false,
                  allowTouchMove: false,
                  autoplay: {
                    delay: 1,
                  },
                  loop: true,
                  speed: 4000,
                }}
                className="scroll-linear"
                swiperContent={main.service.whiteBgRolling.line3.map(
                  (data, index) => (
                    <>
                      <span key={'text' + index}>{data.text}</span>
                      <img
                        key={'img' + index}
                        src={main.imgUrl + data.image}
                        alt={data.alt}
                      />
                    </>
                  ),
                )}
              />
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
            {/*<ScrollTriggerArea*/}
            {/*  type="multiTrigger"*/}
            {/*  triggerStart={{*/}
            {/*    mobile: '50vh',*/}
            {/*    table: '0px',*/}
            {/*    desktop: '50px',*/}
            {/*    wide: '50px',*/}
            {/*  }}*/}
            {/*  triggerEnd={{*/}
            {/*    mobile: '10000vh',*/}
            {/*    table: '0px',*/}
            {/*    desktop: '600px',*/}
            {/*    wide: '600px',*/}
            {/*  }}*/}
            {/*  triggerOffset={'center'}*/}
            {/*  triggerMarkers={true}*/}
            {/*  XAxes={{*/}
            {/*    mobile: ['-600vw'],*/}
            {/*    table: ['0px'],*/}
            {/*    desktop: ['500px'],*/}
            {/*    wide: ['700px'],*/}
            {/*  }}*/}
            {/*  duration={20}*/}
            {/*>*/}
            <span className="rolling_text">{main.ourWorks.rollingBigText}</span>
            <div className="rolling_imgs">
              {main.ourWorks.rollingImages.map((data, index) => (
                <img
                  key={index}
                  src={main.imgUrl + data.image}
                  alt={data.alt}
                />
              ))}
            </div>
            {/*</ScrollTriggerArea>*/}
          </div>
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
        </section>
        {/* E: our works */}
      </main>
    </>
  );
}

export default MainTest;
