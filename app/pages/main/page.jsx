import FinderWorksList from '@/app/pages/main/finderWorksList';
import Btn from '@/components/Btn/Btn';
import Description from '@/components/Description/Description';
import Disclaimer from '@/components/Disclaimer/Disclaimer';
import Header from '@/components/Header/Header';
import LottiePlayer from '@/components/LottiePlayer/LottiePlayer';
import SwiperArea from '@/components/SwiperArea/SwiperArea';
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
      <Header className="new_header is_black" />
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
          {/*          src="/assets/images/contents/main/img_expertise03.png"*/}
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
        <section className="service rolling_wrap">
          <div className="section_div is_black bg_blue">
            <div className="rolling_wrap">
              <span className="rolling_text">
                {main.service.rollingBigText[0]}
                <span>{main.service.rollingBigText[1]}</span>
              </span>
              {main.service.blueBgRollingImages.map((data, index) => (
                <img
                  key={index}
                  src={main.imgUrl + data.image}
                  alt={data.alt}
                />
              ))}
            </div>
          </div>
        </section>
        {/* E: service */}

        {/* S: our works */}
        <section className="our_works">
          <div className="section_div is_white rolling_wrap">
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
          </div>
        </section>
        {/* E: our works */}
      </main>
    </>
  );
}

export default Main;
