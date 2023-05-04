import Description from '@/components/Description/Description';
import Disclaimer from '@/components/Disclaimer/Disclaimer';
import ElementTitle from '@/components/ElementTitle/ElementTitle';
import PageTitle from '@/components/PageTitle/PageTitle';
import ScrollTriggerArea from '@/components/ScrollTriggerArea/ScrollTriggerArea';
import Visual from '@/components/Visual/Visual';
import headerFooter from '@/helper/data/json/contents/headerFooter.json';
import service from '@/helper/data/json/contents/service/service.json';

import './scss/service.scss';

export const metadata = {
  title: 'Anchors',
  description: '',
};

const TRIGGER_START = {
  mobile: '-130px',
  table: '-130px',
  desktop: '-130px',
  wide: '-130px',
};

const MULTI_TRIGGER_START = {
  mobile: '-30px',
  table: '-30px',
  desktop: '-30px',
  wide: '-30px',
};

const MULTI_TRIGGER_END = {
  mobile: '100px',
  table: '100px',
  desktop: '100px',
  wide: '100px',
};

function Service() {
  return (
    <main className="service section_div is_photo">
      <PageTitle data={headerFooter.menuList[2].name} />
      <section className="visual_comment">
        <Visual imgUrl="/assets/images/contents/service/img_keyvisual_officewide.jpg" />
        <Description
          className="en_comment"
          data={
            <>
              Anchors is a <span>software development</span> company established
              in 2018. Although short in history, we are Powered by
              <span>Technology</span> and Driven by <span>Talent.</span>
            </>
          }
        />
        <Description
          className="ko_comment"
          data="앵커스는 2018년에 설립된 소프트웨어 개발 회사입니다.
회사의 짧은 역사지만, 우리는 기술에 의해 구동되고 인재에 의해 구동됩니다."
        />
      </section>
      <section className="anchors_part">
        {service.introduction.map((cont, idx) => (
          <>
            <div key={idx} className="container">
              <ScrollTriggerArea
                type="multiTrigger"
                triggerStart={TRIGGER_START}
                triggerMarkers={false}
                triggerOffset={'center'}
              >
                <span className="part_img">
                  <ScrollTriggerArea
                    type="multiTrigger"
                    triggerStart={MULTI_TRIGGER_START}
                    triggerEnd={MULTI_TRIGGER_END}
                    triggerOffset={'center'}
                    triggerMarkers={false}
                    YAxes={{
                      mobile: ['20px'],
                      table: ['25px'],
                      desktop: ['30px'],
                      wide: ['35px'],
                    }}
                  >
                    <span className="img_scroll_wrap">
                      <img src={service.imgUrl + cont.img} alt={cont.alt} />
                    </span>
                  </ScrollTriggerArea>
                </span>
              </ScrollTriggerArea>
              <article className="part_introduction_wrap">
                <ElementTitle data={cont.name} />
                <div className="description_wrap">
                  <Description
                    data={
                      <>
                        <span>{cont.textLine1}</span>
                        <span>{cont.textLine2}</span>
                      </>
                    }
                  />
                  <Disclaimer
                    data={
                      <>
                        {cont.hashtag.map((tag, idx) => (
                          <span key={idx} className="hashtag">
                            {tag}
                          </span>
                        ))}
                      </>
                    }
                  />
                </div>
              </article>
            </div>
          </>
        ))}
      </section>
    </main>
  );
}

export default Service;
