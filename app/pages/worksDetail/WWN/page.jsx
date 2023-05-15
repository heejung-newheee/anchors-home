import DepthTitle from '@/components/DepthTitle/DepthTitle';
import Device from '@/components/Device/Device';
import ImageArray from '@/components/ImageArray/ImageArray';
import WorksTemplate from '@/components/WorksTemplate/WorksTemplate';
import seo from '@/helper/data/json/contents/SEO.json';
import works from '@/helper/data/json/contents/works/works.json';

export const metadata = {
  title: seo.title.subPage.detail.WWN+ ' : ' + seo.title.subPage.works,
};
export default function WWN() {
  
  const WWN=works.content[11]
  
  return (
    <>
      <WorksTemplate
        custom="Y"
        visualImgUrl={works.imgUrl + WWN.visual}
        visualChildren={WWN.title}
        disclaimerChildren={WWN.description}
        detailTextDescEn={WWN.text.en}
        detailTextDescKo={WWN.text.ko}
        customChildren={
          <>
            <DepthTitle depthLevel="1" blindOption="hidden">
              About WWNWebsite and App
            </DepthTitle>
            <ImageArray
              data={WWN.custom[0].img_array.img}
              bgColor={WWN.custom[0].img_array.bg_color}
              imgUrl={works.imgUrl}
            />
            <Device
              elementTitle={WWN.custom[1].device.elementTitle}
              description={WWN.custom[1].device.description}
              caption={WWN.custom[1].device.caption}
              imgUrl={WWN.custom[1].device.imgUrl.map( (url) => works.imgUrl + url )}
              alt={WWN.custom[1].device.alt}
              type={WWN.custom[1].device.type}
            />
          </>
        }
        subVisualImgUrl={works.imgUrl + WWN.subVisual}
        workContent={WWN.projectInfomation}
        webSiteUrl={WWN.websiteUrl}
        firstNextWork={works.content[12]}
        secondNextWork={works.content[0]}
        thirdNextWork={works.content[1]}
      />
    </>
  );
}
