import DepthTitle from '@/components/DepthTitle/DepthTitle';
import Device from '@/components/Device/Device';
import ImageArray from '@/components/ImageArray/ImageArray';
import WorksTemplate from '@/components/WorksTemplate/WorksTemplate';
import seo from '@/helper/data/json/contents/SEO.json';
import works from '@/helper/data/json/contents/works/works.json';

import './scss/WCMS.scss';

export const metadata = {
  title: seo.title.subPage.detail.WCMS + ' : ' + seo.title.subPage.works,
};
export default function WCMS() {
  
  const WCMS =works.content[6]
  
  return (
    <>
      <WorksTemplate
        custom="Y"
        visualImgUrl={works.imgUrl + WCMS.visual}
        visualChildren={WCMS.title}
        disclaimerChildren={WCMS.description}
        detailTextDescEn={WCMS.text.en}
        detailTextDescKo={WCMS.text.ko}
        customChildren={
          <>
            <section className="web_img_wrap">
              <span>
                <img
                  className="kia_web_img"
                  src={works.imgUrl + WCMS.custom[0].image}
                  alt={WCMS.custom[0].alt}
                />
              </span>
            </section>
            <div>
              <DepthTitle depthLevel="1" blindOption="hidden">
                About WCMS Website and Mobile Website
              </DepthTitle>
              <ImageArray
                data={WCMS.custom[1].img_array.img}
                bgColor={WCMS.custom[1].img_array.bg_color}
                imgUrl={works.imgUrl}
              />
              <Device
                elementTitle={WCMS.custom[2].device.elementTitle}
                description={WCMS.custom[2].device.description}
                caption={WCMS.custom[2].device.caption}
                imgUrl={WCMS.custom[2].device.imgUrl.map( (url) => works.imgUrl + url )}
                alt={WCMS.custom[2].device.alt}
                type={WCMS.custom[2].device.type}
              />
            </div>
          </>
        }
        subVisualImgUrl={works.imgUrl + WCMS.subVisual}
        workContent={WCMS.projectInfomation}
        webSiteUrl={WCMS.websiteUrl}
        firstNextWork={works.content[7]}
        secondNextWork={works.content[8]}
        thirdNextWork={works.content[9]}
      />
    </>
  );
}
