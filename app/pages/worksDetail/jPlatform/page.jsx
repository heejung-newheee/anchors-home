import DepthTitle from '@/components/DepthTitle/DepthTitle';
import Description from '@/components/Description/Description';
import Device from '@/components/Device/Device';
import ElementTitle from '@/components/ElementTitle/ElementTitle';
import Video from '@/components/Video/Video';
import WorksTemplate from '@/components/WorksTemplate/WorksTemplate';
import seo from '@/helper/data/json/contents/SEO.json';
import works from '@/helper/data/json/contents/works/works.json';

import './scss/jPlatform.scss';

export const metadata = {
  title: seo.title.subPage.detail.jPlatform + ' : ' + seo.title.subPage.works,
};
export default function JPlatform() {

  const JPLATFORM = works.content[2]

  return (
    <>
      <WorksTemplate
        custom="Y"
        visualImgUrl={works.imgUrl + JPLATFORM.visual}
        visualChildren={JPLATFORM.title}
        disclaimerChildren={JPLATFORM.description}
        detailTextDescEn={JPLATFORM.text.en}
        detailTextDescKo={JPLATFORM.text.ko}
        subVisualImgUrl={works.imgUrl + JPLATFORM.subVisual}
        workContent={JPLATFORM.projectInfomation}
        webSiteUrl={JPLATFORM.websiteUrl}
        customChildren={
          <>
            <section className="video_wrap">
              <DepthTitle depthLevel="1" blindOption="hidden">
                Promotion Video
              </DepthTitle>
              <Video videoUrl={works.videoUrl + JPLATFORM.custom[0].video} />
            </section>

            {/* S: main 설명 영역 */}
            <section className="main_section_wrap">
              <DepthTitle depthLevel="1" blindOption="hidden">
                Website Introduction
              </DepthTitle>
              <article className="main_text">
                <ElementTitle data={JPLATFORM.custom[1].text} />
                <Description
                  data={JPLATFORM.custom[2].text}
                  innerHTMLOption="Y"
                />
              </article>
              <article className="main_img">
                <img src={works.imgUrl + JPLATFORM.custom[3].image} alt={JPLATFORM.custom[3].alt} />
                <img src={works.imgUrl + JPLATFORM.custom[4].image} alt={JPLATFORM.custom[4].alt} />
              </article>
            </section>
            {/* E: main 설명 영역 */}

            {/* S: full_img 영역 */}
            <img src={works.imgUrl + JPLATFORM.custom[5].image} alt={JPLATFORM.custom[5].alt} />
            {/* E: full_img 영역 */}

            {/* S: PIP 설명 영역 */}
            <section className="pip_section_wrap">
              <DepthTitle depthLevel="1" blindOption="hidden">
                PIP Introduction
              </DepthTitle>
              <article className="pip_text">
                <ElementTitle data={JPLATFORM.custom[6].text} />
                <Description
                  data={JPLATFORM.custom[7].text}
                  innerHTMLOption="Y"
                />
              </article>
              <Video videoUrl={works.videoUrl + JPLATFORM.custom[8].video} />
            </section>
            {/* E: PIP 설명 영역 */}

            {/* S: device 영역 */}
            <section className="device_wrap">
              <DepthTitle depthLevel="1" blindOption="hidden">
                Mobile example image
              </DepthTitle>
              <article className="Configurator_mobile">
                <DepthTitle depthLevel="2" blindOption="hidden">
                  Configurator mobile image
                </DepthTitle>
                <Device
                  elementTitle={JPLATFORM.custom[9].device.elementTitle}
                  description={JPLATFORM.custom[9].device.description}
                  caption={JPLATFORM.custom[9].device.caption}
                  imgUrl={JPLATFORM.custom[9].device.imgUrl.map( (url) => works.imgUrl + url )}
                  alt={JPLATFORM.custom[9].device.alt}
                  type={JPLATFORM.custom[9].device.type}
                />
              </article>
              <article className="eCommerce_mobile">
                <DepthTitle depthLevel="2" blindOption="hidden">
                  E-Commerce mobile image
                </DepthTitle>
                <Device
                  elementTitle={JPLATFORM.custom[10].device.elementTitle}
                  description={JPLATFORM.custom[10].device.description}
                  caption={JPLATFORM.custom[10].device.caption}
                  imgUrl={JPLATFORM.custom[10].device.imgUrl.map( (url) => works.imgUrl + url )}
                  alt={JPLATFORM.custom[10].device.alt}
                  type={JPLATFORM.custom[10].device.type}
                />
              </article>
            </section>
            {/* E: device 영역 */}

            {/* S: Identity system 설명 영역 */}
            <section className="identity_section_wrap">
              <DepthTitle depthLevel="1" blindOption="hidden">
                Website Identity Introduction
              </DepthTitle>
              <article className="identity_text">
                <ElementTitle data={JPLATFORM.custom[11].text} />
                <Description
                  data={JPLATFORM.custom[12].text}
                  innerHTMLOption="Y"
                />
              </article>
              <article className="identify_img">
                <img src={works.imgUrl + JPLATFORM.custom[13].image} alt={JPLATFORM.custom[13].alt} />
                <img src={works.imgUrl + JPLATFORM.custom[14].image} alt={JPLATFORM.custom[14].alt} />
              </article>
            </section>
            {/* E: Identity system 설명 영역 */}
          </>
        }
        firstNextWork={works.content[3]}
        secondNextWork={works.content[4]}
        thirdNextWork={works.content[5]}
      />
    </>
  );
}
