import Btn from '@/components/Btn/Btn';
import Disclaimer from '@/components/Disclaimer/Disclaimer';
import DepthTitle from '@/components/DepthTitle/DepthTitle';
import Description from '@/components/Description/Description';
import ElementTitle from '@/components/ElementTitle/ElementTitle';
import PageTitle from '@/components/PageTitle/PageTitle';
import SwiperArea from '@/components/SwiperArea/SwiperArea';
import Visual from '@/components/Visual/Visual'
import Welfare from '@/components/Welfare/Welfare'; 
import headerFooter from '@/helper/data/json/contents/headerFooter.json';
import seo from '@/helper/data/json/contents/SEO.json';
import platform from '@/helper/data/json/contents/platform/platform.json';

import './scss/platform.scss';

export const metadata = {
  title: seo.title.subPage.platform,
  keywords: seo.keywords.platform,
  description: seo.description.platform,
  alternates : {
    canonical : seo.canonical.platform,
  }
};

function Platform() {
  return (
    <main className="platform section_div is_photo">
      {/* S: PageTitle 영역 */}
      <PageTitle data={headerFooter.menuList[3].name} />
      {/* E: PageTitle 영역 */}

      {/* S: Visual 영역 */}
      <div className="platform_visual">
        <Visual defaultId="scroll_main_visual" imgUrl={platform.imgUrl + platform.visual.img} alt={platform.visual.alt} />
        <Description className="en_comment" data={platform.textList.textEn} innerHTMLOption="Y" />
        <Description className="ko_comment" data={platform.textList.textKo} />
      </div>
      {/* E: Visual 영역 */}
      
      {/* S: welfare 영역 */}
      <Welfare description={platform.textList.welfareText} dataList={platform.welfare} imgUrl={platform.imgUrl} />
      {/* E: welfare 영역 */}

      {/* S: platform_introduction 영역 */}
      <section className="platform_introduction">
        <DepthTitle className="depthTitle" depthLevel="1" blindOption="visible">{platform.introduction.depthTitle}</DepthTitle>
        <Description innerHTMLOption="Y" data={platform.introduction.description} />
        <span className='img_area'><img src={platform.imgUrl + platform.introduction.images} alt={platform.introduction.alt} /></span>
        <ul className='platform_contactUs'>
          {platform.introduction.contactUs.map((item, index) => (
            <li key={index}>
              <Disclaimer data={item.disclaimer} />
              <ElementTitle innerHTMLOption="Y" data={item.elementTitle} />
              <Description innerHTMLOption="Y" data={item.description} />
              <Btn type='a' url={`mailto:${item.sendEmail}`}>{item.buttonText}</Btn>
            </li>
          ))}
        </ul>
      </section>
      {/* E: platform_introduction 영역 */}

      {/*S: sub_visual 영역 */}
      <Visual defaultId="scroll_sub_visual" className={'sub_visual'} imgUrl={platform.imgUrl + platform.subVisual.img} alt={platform.subVisual.alt} />
      {/* E: sub_visual 영역 */}

      {/* S: about intro swiper 영역*/}
      <section className="platform_features">
        <DepthTitle className="depthTitle" depthLevel="1" blindOption="visible">{"더 많은 고객을 만날 수 있는 쇼핑몰 Anchors 커머스 플랫폼과 함께 시작해 보세요"}</DepthTitle>
        <div className='features_swiper is_photo'>
        <SwiperArea
          key="swiper01"
          type="double"
          firstClassName="image_swiper"
          secondClassName="text_swiper"
          firstContent={platform.features.map((cont, idx) => (
            <span key={`sw01-img-${idx}`}>
              <img src={platform.imgUrl + cont.img} alt={cont.alt} />
            </span>
          ))}
          secondContent={platform.features.map((cont, idx) => (
            <div className="intro_text" key={`sw01-div-${idx}`}>
              <ElementTitle className="intro_title" innerHTMLOption="Y" data={cont.highlightText} />
              <Disclaimer className="intro_disclaimer" data={cont.text} />
            </div>
          ))}
          firstSwiperOption={{
            effect: 'cards',
          }}
          secondSwiperOption={{
            navigation: false,
            pagination: false,
            spaceBetween: 24,
          }}
        />
        </div>
      </section>
      {/* E: about intro swiper 영역*/}

    </main>
  );
}

export default Platform;
