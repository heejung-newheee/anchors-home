import DepthTitle from '@/components/DepthTitle/DepthTitle';
import Description from '@/components/Description/Description';
import Disclaimer from '@/components/Disclaimer/Disclaimer';
import ElementTitle from '@/components/ElementTitle/ElementTitle';
import PageTitle from '@/components/PageTitle/PageTitle';
import ScrollTriggerArea from '@/components/ScrollTriggerArea/ScrollTriggerArea';
import Visual from '@/components/Visual/Visual';
import headerFooter from '@/helper/data/json/contents/headerFooter.json';
import seo from '@/helper/data/json/contents/SEO.json';
import service from '@/helper/data/json/contents/service/service.json';
import './scss/service.scss';

export const metadata = {
  title: seo.title.subPage.service,
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
      {/* S: PageTitle 영역 */}
      <PageTitle data={headerFooter.menuList[2].name} />
      {/* E: PageTitle 영역 */}

      {/* S: visual 영역 */}
      <section className="visual_comment">
        <Visual imgUrl="/assets/images/contents/service/img_keyvisual_officewide.jpg" />
        <Description
          className="en_comment"
          data={service.textList.textEn}
          innerHTMLOption="Y"
        />
        <Description className="ko_comment" data={service.textList.textKo} />
      </section>
      {/* E: visual 영역 */}

      {/* S: part 영역 */}
      <section className="anchors_part">
        <DepthTitle depthLevel="1" blindOption="hidden">
          Anchors Part Introduction
        </DepthTitle>
        {service.introduction.map((cont, idx) => (
          <article key={idx}>
            <DepthTitle depthLevel="2" blindOption="hidden">
              {cont.name + ' part'}
            </DepthTitle>
            <ScrollTriggerArea
              type="multiTrigger"
              triggerStart={TRIGGER_START}
              triggerMarkers={false}
              triggerOffset={'center'}
              defaultID={`scrollTriggerArea_0${idx}`}
            >
              <article className="part_img" key={`part_img${idx}`}>
                <ScrollTriggerArea
                  type="multiTrigger"
                  triggerStart={MULTI_TRIGGER_START}
                  triggerEnd={MULTI_TRIGGER_END}
                  triggerOffset={'center'}
                  triggerMarkers={false}
                  defaultID={`scrollTriggerArea_0${idx}_01`}
                  YAxes={[
                    {
                      mobile: '20px',
                      table: '25px',
                      desktop: '30px',
                      wide: '35px',
                    },
                  ]}
                >
                  <img src={service.imgUrl + cont.img} alt={cont.alt} />
                </ScrollTriggerArea>
              </article>
            </ScrollTriggerArea>
            <article
              className="part_introduction_wrap"
              key={`part_introduction_wrap${idx}`}
            >
              <ElementTitle data={cont.name} />
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
                    {cont.hashtag.map((tag, idx2) => (
                      <span key={idx2} className="hashtag">
                        {tag}
                      </span>
                    ))}
                  </>
                }
              />
            </article>
          </article>
        ))}
      </section>
      {/* E: part 영역 */}
    </main>
  );
}

export default Service;
