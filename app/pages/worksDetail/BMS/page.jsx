import DepthTitle from '@/components/DepthTitle/DepthTitle';
import Description from '@/components/Description/Description';
import ElementTitle from '@/components/ElementTitle/ElementTitle';
import Video from '@/components/Video/Video';
import WorksTemplate from '@/components/WorksTemplate/WorksTemplate';
import seo from '@/helper/data/json/contents/SEO.json';
import works from '@/helper/data/json/contents/works/works.json';
import './scss/BMS.scss';
export const metadata = {
  title: seo.title.subPage.detail.BMS + ' : ' + seo.title.subPage.works,
};
export default function BMS() {

  const BMS = works.content[3]

  return (
    <>
      <WorksTemplate
        custom="Y"
        visualImgUrl={works.imgUrl + BMS.visual}
        visualChildren={BMS.title}
        disclaimerChildren={BMS.description}
        detailTextDescEn={BMS.text.en}
        detailTextDescKo={BMS.text.ko}
        customChildren={
          <>
            <Video className="bms_video" videoUrl={works.videoUrl + BMS.custom[0].video} />
            <section className="main_wrap">
              <DepthTitle depthLevel="1" blindOption="hidden">
                BMS Website Introduction
              </DepthTitle>
              <div className="main_text_wrap">
                <ElementTitle className="custom_element_title" data={BMS.custom[1].text} />
                <Description
                  className="custom_description"
                  data={BMS.custom[2].text}
                  innerHTMLOption="Y"
                />
              </div>
              <div className="main_img_wrap">
                <img className="main_img" src={works.imgUrl + BMS.custom[3].image} alt={BMS.custom[3].alt} />
              </div>
              <span>
                <img className="main_detail_img" src={works.imgUrl + BMS.custom[4].image} alt={BMS.custom[4].alt}/>
              </span>
            </section>
            <section className="brand_asset_wrap">
              <div className="brand_asset_content">
                <DepthTitle depthLevel="1" blindOption="hidden">
                  BMS Media Asset Introduction
                </DepthTitle>
                <ElementTitle className="custom_element_title" data={BMS.custom[5].text} />
                <Description
                  className="custom_description"
                  data={BMS.custom[6].text}
                  innerHTMLOption="Y"
                />
                <div className="asset_list">
                  <Description data={BMS.custom[7].text} />
                  <img src={works.imgUrl + BMS.custom[8].image} alt={BMS.custom[8].alt}/>
                </div>
                <div className="asset_list">
                  <Description data={BMS.custom[9].text} />
                  <img src={works.imgUrl + BMS.custom[10].image} alt={BMS.custom[10].alt}/>
                </div>
                <div className="asset_list">
                  <Description data={BMS.custom[11].text} />
                  <img src={works.imgUrl + BMS.custom[12].image} alt={BMS.custom[12].alt}/>
                </div>
              </div>
            </section>
            <section className="identity_system_wrap">
              <DepthTitle depthLevel="1" blindOption="hidden">
                BMS Identity System Introduction
              </DepthTitle>
              <ElementTitle className="custom_element_title" data={BMS.custom[13].text} />
              <Description
                className="custom_description"
                data={BMS.custom[14].text}
              />
              <span className="identity_img">
                  <img src={works.imgUrl + BMS.custom[15].image} alt={BMS.custom[15].alt}/>
              </span>
            </section>
          </>
        }
        subVisualImgUrl={works.imgUrl + BMS.subVisual}
        workContent={BMS.projectInfomation}
        webSiteUrl={BMS.websiteUrl}
        firstNextWork={works.content[4]}
        secondNextWork={works.content[5]}
        thirdNextWork={works.content[6]}
      />
    </>
  );
}
