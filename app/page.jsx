import Btn from '@/components/Btn/Btn';
import DepthTitle from '@/components/DepthTitle/DepthTitle';
import Description from '@/components/Description/Description';
import Disclaimer from '@/components/Disclaimer/Disclaimer';
import InfiniteRolling from '@/components/InfiniteRolling/InfiniteRolling';
import LottiePlayer from '@/components/LottiePlayer/LottiePlayer';
import WebGlCarousel from '@/components/WebGlCarousel/WebGlCarousel';
import Expertise from '@/components/MainScrollInteration/Expertise';
import OurWorks from '@/components/MainScrollInteration/OurWorks';

import main from '@/helper/data/json/contents/main/main.json';
import lottieMainKeyVisualOurwork from '@/public/assets/images/lottie/lottieMainKeyVisualOurwork.json';
import lottieMainKeyVisualSmile from '@/public/assets/images/lottie/lottieMainKeyVisualSmile.json';
import lottieMainKeyVisualText from '@/public/assets/images/lottie/lottieMainKeyVisualText.json';
import lottieMainKeyVisualUnderline from '@/public/assets/images/lottie/lottieMainKeyVisualUnderline.json';

import './scss/main.scss';

function Main() {
  return (
    <main className="main">
      {/* S: about us */}
      <section className="section_div is_black about_us">
        <DepthTitle depthLevel="1">About US</DepthTitle>
        {/* S: intro + rotate keyvisual */}
        <section className="keyvisual_wrap">
          {/* multi lottie */}
          <div className="text_keyvisual_wrap">
            <LottiePlayer className="text_keyvisual" data={lottieMainKeyVisualText} loop={false} />
          </div>
          <LottiePlayer className="smile_keyvisual" data={lottieMainKeyVisualSmile} loop={false} />
          <LottiePlayer className="underline_keyvisual" data={lottieMainKeyVisualUnderline} loop={false} />
          <LottiePlayer className="ourwork_keyvisual" data={lottieMainKeyVisualOurwork} loop={false} />
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
          <Expertise
            firstText={main.service.rollingBigText[0]}
            secondText={main.service.rollingBigText[1]}
            scrollImage={main.service.blueBgRollingImages.map((content, idx) => (
              <img key={idx} src={main.imgUrl + content.image} alt={content.alt} />
            ))}
            scrollDuration={1000}
          />
        </section>
        {/* E: Expertise scroll 영역 */}

        {/* S: InfiniteRolling swiper + text 영역 */}
        <section className="section_div is_photo bg_white">
          {/* infinite rolling swiepr */}
          <section className="rolling_area_wrap">
            <InfiniteRolling className="rolling_area" duration="20" widthFixed="Y">
              {main.service.whiteBgRolling.line1.map((data, index) => (
                <div key={index}>
                  <span key={'text' + index}>{data.text}</span>
                  <img key={'img' + index} src={main.imgUrl + data.image} alt={data.alt} />
                </div>
              ))}
            </InfiniteRolling>
            <InfiniteRolling className="rolling_area" reverse="Y" duration="20" widthFixed="Y">
              {main.service.whiteBgRolling.line2.map((data, index) => (
                <div key={index}>
                  <span key={'text' + index}>{data.text}</span>
                  <img key={'img' + index} src={main.imgUrl + data.image} alt={data.alt} />
                </div>
              ))}
            </InfiniteRolling>
            <InfiniteRolling className="rolling_area" duration="20" widthFixed="Y">
              {main.service.whiteBgRolling.line3.map((data, index) => (
                <div key={index}>
                  <span key={'text' + index}>{data.text}</span>
                  <img key={'img' + index} src={main.imgUrl + data.image} alt={data.alt} />
                </div>
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
        <OurWorks
          scrollText={main.ourWorks.rollingBigText}
          scrollImage={main.ourWorks.rollingImages.map((content, idx) => (
            <img key={idx} src={main.imgUrl + content.image} alt={content.alt} />
          ))}
          scrollDuration={1000}
        />
        {/* S: our works scroll 영역 */}
      </section>
      {/* E: our works */}
    </main>
  );
}

export default Main;
