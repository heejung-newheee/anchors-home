import React from 'react';

import Description from '@/components/Description/Description';
import ElementTitle from '@/components/ElementTitle/ElementTitle';
import Video from '@/components/Video/Video';
import WorksTemplate from '@/components/WorksTemplate/WorksTemplate';
import works from '@/helper/data/json/contents/works/works.json';
import './scss/bms.scss';
export default function BMS() {
  return (
    <>
      <WorksTemplate
        custom="Y"
        visualImgUrl={works.imgUrl + works.content[3].visual}
        visualChildren={works.content[3].title}
        disclaimerChildren={works.content[3].description}
        detailTextDescEn={works.content[3].text.en}
        detailTextDescKo={works.content[3].text.ko}
        customChildren={
          <>
            <Video videoUrl="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" />
            <div className="main_wrap">
              <div className="main_text_wrap">
                <ElementTitle className="custom_element_title" data="Main" />
                <Description
                  className="custom_description"
                  data={
                    <>
                      기존 사용자의 니즈를 파악하여 이를 효과적으로
                      녹여내었습니다. 사용자들이 익숙한 오토웨이 사이트와의
                      연동을 통해 임직원 관리를 실시하여 접근 편의성을
                      개선하였습니다. 자주 확인하는 메뉴를 메인에 배치하고, 최근
                      업데이트 되는 콘텐츠를 한눈에 파악할 수 있도록 하여
                      고객들의 만족도를 높였습니다.
                    </>
                  }
                />
              </div>
              <div className="main_img_wrap">
                <img
                  className="main_img"
                  src="/assets/images/contents/works/img_web_bms.jpg"
                  alt="BMS website 이미지"
                />
              </div>
              <img
                className="main_detail_img"
                src="/assets/images/contents/works/img_full_bms.jpg"
                alt="BMS website 상세페이지 관련 이미지"
              />
            </div>
            <div className="brand_asset_wrap">
              <ElementTitle
                className="custom_element_title"
                data="Brand Asset"
              />
              <Description
                className="custom_description"
                data={
                  <>
                    기존 사용자의 니즈를 파악하여 이를 효과적으로
                    녹여내었습니다. 사용자들이 익숙한 오토웨이 사이트와의 연동을
                    통해 임직원 관리를 실시하여 접근 편의성을 개선하였습니다.
                    자주 확인하는 메뉴를 메인에 배치하고, 최근 업데이트 되는
                    콘텐츠를 한눈에 파악할 수 있도록 하여 고객들의 만족도를
                    높였습니다.
                  </>
                }
              />
              <div className="asset_list">
                <Description data="Brand library" />
                <img
                  src="/assets/images/contents/works/img_web_brandasset1_bms.jpg"
                  alt="BMS website brand library 이미지"
                />
              </div>
              <div className="asset_list">
                <Description data="Brand asset" />
                <img
                  src="/assets/images/contents/works/img_web_brandasset2_bms.jpg"
                  alt="BMS website brand asset 이미지"
                />
              </div>
              <div className="asset_list">
                <Description data="Brand book" />
                <img
                  src="/assets/images/contents/works/img_web_brandasset3_bms.jpg"
                  alt="BMS website brand book 이미지"
                />
              </div>
            </div>
            <div className="identity_system_wrap">
              <ElementTitle
                className="custom_element_title"
                data="Identity system"
              />
              <Description
                className="custom_description"
                data={
                  <>
                    현대의 주컬러를 활용하여 아이덴티티를 명확히 보여주고,
                    아이콘을 활용한 일관성 있는 UI를 제공합니다.
                  </>
                }
              />
              <div>
                <img
                  src="/assets/images/contents/works/img_color_bms_mo.jpg"
                  alt="BMS website Indentity system 관련 이미지"
                />
              </div>
            </div>
          </>
        }
        subVisualImgUrl={works.imgUrl + works.content[3].subVisual}
        workContent={works.content[3].projectInfomation}
        firstNextWork={works.content[4]}
        secondNextWork={works.content[5]}
        thirdNextWork={works.content[6]}
      />
    </>
  );
}
