import DepthTitle from '@/components/DepthTitle/DepthTitle';
import Description from '@/components/Description/Description';
import ElementTitle from '@/components/ElementTitle/ElementTitle';
import Video from '@/components/Video/Video';
import WorksTemplate from '@/components/WorksTemplate/WorksTemplate';
import seo from '@/helper/data/json/contents/SEO.json';
import works from '@/helper/data/json/contents/works/works.json';

import './scss/nBrand.scss';

export const metadata = {
  title: seo.title.subPage.detail.nBrand + ' : ' + seo.title.subPage.works,
};

export default function Nbrand() {
  
  const NBRAND =works.content[10]
  
  return (
    <>
      <WorksTemplate
        custom="Y"
        visualImgUrl={works.imgUrl + NBRAND.visual}
        visualChildren={NBRAND.title}
        disclaimerChildren={NBRAND.description}
        detailTextDescEn={NBRAND.text.en}
        detailTextDescKo={NBRAND.text.ko}
        customChildren={
          <>
            <Video className="nbrand_video" videoUrl={works.videoUrl + NBRAND.custom[0].video} />
            <section className="nbrand_main_wrap">
              <DepthTitle depthLevel="1" blindOption="hidden">
                NBrand Website Introduction
              </DepthTitle>
              <div className="main_text_wrap">
                <ElementTitle className="custom_element_title" data={NBRAND.custom[1].text} />
                <Description
                  className="custom_description"
                  data={NBRAND.custom[2].text}
                />
              </div>
              <div className="main_img_wrap">
                <img className="main_img" src={works.imgUrl + NBRAND.custom[3].image} alt={NBRAND.custom[3].alt} />
                <img className="main_img" src={works.imgUrl + NBRAND.custom[4].image} alt={NBRAND.custom[4].alt} />
              </div>
              <span>
                <img className="main_detail_img" src={works.imgUrl + NBRAND.custom[5].image} alt={NBRAND.custom[5].alt} />
              </span>
            </section>
            <section className="nbrand_sub_wrap">
              <DepthTitle depthLevel="1" blindOption="hidden">
                About NBrand Website Sub Works
              </DepthTitle>
              <ElementTitle className="custom_element_title" data={NBRAND.custom[6].text} />
              <Description
                className="custom_description"
                data={NBRAND.custom[7].text}
              />
              <div className="sub_img_wrap">
                <img className="sub_img" src={works.imgUrl + NBRAND.custom[8].image} alt={NBRAND.custom[8].alt} />
                <img className="sub_img" src={works.imgUrl + NBRAND.custom[9].image} alt={NBRAND.custom[9].alt} />
                <img className="sub_img" src={works.imgUrl + NBRAND.custom[10].image} alt={NBRAND.custom[10].alt} />
              </div>
            </section>
          </>
        }
        subVisualImgUrl={works.imgUrl + NBRAND.subVisual}
        workContent={NBRAND.projectInfomation}
        webSiteUrl={NBRAND.websiteUrl}
        firstNextWork={works.content[11]}
        secondNextWork={works.content[12]}
        thirdNextWork={works.content[0]}
      />
    </>
  );
}
