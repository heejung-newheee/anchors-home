import DepthTitle from '@/components/DepthTitle/DepthTitle';
import Device from '@/components/Device/Device';
import WorksTemplate from '@/components/WorksTemplate/WorksTemplate';
import seo from '@/helper/data/json/contents/SEO.json';
import works from '@/helper/data/json/contents/works/works.json';
import './scss/koreanAirKALPOS.scss';

export const metadata = {
  title: seo.title.subPage.detail.koreanAirKALPOS + ' : ' + seo.title.subPage.works,
};
export default function KoreanAir_KALPOS() {
  
  const KALPOS = works.content[5]
  
  return (
    <>
      <WorksTemplate
        custom="Y"
        visualImgUrl={works.imgUrl + KALPOS.visual}
        visualChildren={KALPOS.title}
        disclaimerChildren={KALPOS.description}
        detailTextDescEn={KALPOS.text.en}
        detailTextDescKo={KALPOS.text.ko}
        subVisualImgUrl={works.imgUrl + KALPOS.subVisual}
        workContent={KALPOS.projectInfomation}
        customChildren={
          <>
            <section className="device_wrap">
              <DepthTitle depthLevel="1" blindOption="hidden">
                Application example image
              </DepthTitle>
              <Device
                elementTitle={KALPOS.custom[0].device[0].elementTitle}
                description={KALPOS.custom[0].device[0].description}
                caption={KALPOS.custom[0].device[0].caption}
                imgUrl={KALPOS.custom[0].device[0].imgUrl.map( (url) => works.imgUrl + url )}
                alt={KALPOS.custom[0].device[0].alt}
                type={KALPOS.custom[0].device[0].type}
              />
            </section>
          </>
        }
        firstNextWork={works.content[6]}
        secondNextWork={works.content[7]}
        thirdNextWork={works.content[8]}
      />
    </>
  );
}
