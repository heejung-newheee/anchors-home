import WorksTemplate from '@/components/WorksTemplate/WorksTemplate';
import seo from '@/helper/data/json/contents/SEO.json';
import works from '@/helper/data/json/contents/works/works.json';

import './scss/chanel.scss';

export const metadata = {
  title: seo.title.subPage.detail.chanel + ' : ' + seo.title.subPage.works,
};

export default function Chanel() {
  return (
    <>
      <WorksTemplate
        visualImgUrl={works.imgUrl + works.content[0].visual}
        visualChildren={works.content[0].title}
        disclaimerChildren={works.content[0].description}
        detailTextDescEn={works.content[0].text.en}
        detailTextDescKo={works.content[0].text.ko}
        subVisualImgUrl={works.imgUrl + works.content[0].subVisual}
        workContent={works.content[0].projectInfomation}
        firstNextWork={works.content[1]}
        secondNextWork={works.content[2]}
        thirdNextWork={works.content[3]}
      />
    </>
  );
}
