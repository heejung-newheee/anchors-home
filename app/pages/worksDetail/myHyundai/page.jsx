import DepthTitle from '@/components/DepthTitle/DepthTitle';
import Device from '@/components/Device/Device';
import WorksTemplate from '@/components/WorksTemplate/WorksTemplate';
import seo from '@/helper/data/json/contents/SEO.json';
import works from '@/helper/data/json/contents/works/works.json';

import './scss/myHyundai.scss';

export const metadata = {
  title: seo.title.subPage.detail.myHyundai + ' : ' + seo.title.subPage.works,
};
export default function MyHyundai() {
  const MYHYUNDAI = works.content[8];

  return (
    <>
      <WorksTemplate
        className="my_hyundai"
        custom="Y"
        visualImgUrl={works.imgUrl + MYHYUNDAI.visual}
        visualChildren={MYHYUNDAI.title}
        disclaimerChildren={MYHYUNDAI.description}
        detailTextDescEn={MYHYUNDAI.text.en}
        detailTextDescKo={MYHYUNDAI.text.ko}
        customChildren={
          <div className="myhyundai_device_wrap">
            <DepthTitle depthLevel="1" blindOption="hidden">
              About MyHyundai App Device
            </DepthTitle>
            <Device
              elementTitle={MYHYUNDAI.custom[0].device.elementTitle}
              description={MYHYUNDAI.custom[0].device.description}
              caption={MYHYUNDAI.custom[0].device.caption}
              imgUrl={MYHYUNDAI.custom[0].device.imgUrl.map(url => works.imgUrl + url)}
              alt={MYHYUNDAI.custom[0].device.alt}
              type={MYHYUNDAI.custom[0].device.type}
            />
          </div>
        }
        subVisualImgUrl={works.imgUrl + MYHYUNDAI.subVisual}
        workContent={MYHYUNDAI.projectInfomation}
        webSiteUrl={MYHYUNDAI.websiteUrl}
        firstNextWork={works.content[9]}
        secondNextWork={works.content[10]}
        thirdNextWork={works.content[11]}
      />
    </>
  );
}
