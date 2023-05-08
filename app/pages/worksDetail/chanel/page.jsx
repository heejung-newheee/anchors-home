import WorksTemplate from '@/components/WorksTemplate/WorksTemplate';
import works from '@/helper/data/json/contents/works/works.json';
export const metadata = {
  title: 'Our works',
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
