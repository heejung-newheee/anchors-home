import DepthTitle from '@/components/DepthTitle/DepthTitle';
import Device from '@/components/Device/Device';
import ImageArray from '@/components/ImageArray/ImageArray';
import WorksTemplate from '@/components/WorksTemplate/WorksTemplate';
import seo from '@/helper/data/json/contents/SEO.json';
import works from '@/helper/data/json/contents/works/works.json';

import './scss/genesisGlobal.scss';
export const metadata = {
  title:
    seo.title.subPage.detail.genesisGlobal + ' : ' + seo.title.subPage.works,
};
export default function GenesisGlobal() {
  
  const GENESIS =works.content[12]
  
  return (
    <>
      <WorksTemplate
        custom="Y"
        visualImgUrl={works.imgUrl + GENESIS.visual}
        visualChildren={GENESIS.title}
        disclaimerChildren={GENESIS.description}
        detailTextDescEn={GENESIS.text.en}
        detailTextDescKo={GENESIS.text.ko}
        subVisualImgUrl={works.imgUrl + GENESIS.subVisual}
        workContent={GENESIS.projectInfomation}
        webSiteUrl={GENESIS.websiteUrl}
        customChildren={
          <>
            {/* S: image_array 영역*/}
            <section className="image_array_wrap">
              <DepthTitle depthLevel="1" blindOption="hidden">
                Website example image
              </DepthTitle>
              <ImageArray
                imgUrl={works.imgUrl}
                data={GENESIS.custom[0].img_array.img}
                bgColor={GENESIS.custom[0].img_array.bg_color}
              />
            </section>
            {/* S: image_array 영역*/}

            {/* S: Device 영역*/}
            <section className="device_wrap">
              <DepthTitle depthLevel="1" blindOption="hidden">
                Device example image
              </DepthTitle>
              <Device
                elementTitle={GENESIS.custom[1].device.elementTitle}
                description={GENESIS.custom[1].device.description}
                caption={GENESIS.custom[1].device.caption}
                imgUrl={GENESIS.custom[1].device.imgUrl.map( (url) => works.imgUrl + url )}
                alt={GENESIS.custom[1].device.alt}
                type={GENESIS.custom[1].device.type}
              />
            </section>
          </>
        }
        firstNextWork={works.content[0]}
        secondNextWork={works.content[1]}
        thirdNextWork={works.content[2]}
      />
      {/* E: Device 영역*/}
    </>
  );
}
