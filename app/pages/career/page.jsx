import Description from '@/components/Description/Description';
import PageTitle from '@/components/PageTitle/PageTitle';
import Visual from '@/components/Visual/Visual';
import Welfare from '@/components/Welfare/Welfare';

import Members from './_components/Members';
import Comment from './_components/Comment';
import Employment from './_components/Employment';

import careerComment from '@/helper/data/json/contents/career/careerComment.json';
import careerEmployment from '@/helper/data/json/contents/career/careerEmployment.json';
import careerMembers from '@/helper/data/json/contents/career/careerMembers.json';
import career from '@/helper/data/json/contents/career/career.json';
import careerWelfare from '@/helper/data/json/contents/career/careerWelfare.json';
import headerFooter from '@/helper/data/json/contents/headerFooter.json';
import seo from '@/helper/data/json/contents/SEO.json';

import './scss/ career.scss';


export const metadata = {
  title: seo.title.subPage.career,
  keywords: seo.keywords.career,
  description: seo.description.career,
  alternates : {
    canonical : seo.canonical.career,
  }
};

function Career() {
  return (
    <main className="career section_div is_photo">
      <PageTitle data={headerFooter.menuList[5].name} />

      {/* S: key_visual 영역 */}
      <Visual defaultId="scroll_main_visual" imgUrl="/assets/images/contents/career/img_keyvisual_members.jpg" />

      {/* S: 비주얼 이미지 아래 텍스트 */}
      <div className="career_text">
        <Description innerHTMLOption="Y" data={career.textList.textEn} />
        <Description data={career.textList.textKo} />
      </div>
      {/* E: 비주얼 이미지 아래 텍스트 */}

      {/* S: swiper_members 영역 */}
      <Members data={careerMembers.members} imgUrl={career.imgUrl} />
      {/* E: swiper_members 영역 */}

      {/* S: swiper_comment 영역 */}
      <Comment data={careerComment} imgUrl={career.imgUrl} />
      {/* E: swiper_comment 영역 */}

      {/* S: welfare 영역 */}
      <Welfare data={careerWelfare} imgUrl={career.imgUrl} />
      {/* E: welfare 영역 */}

      {/*S: sub_visual 영역 */}
      <div className="sub_visual">
        <Visual defaultId="scroll_sub_visual" imgUrl="/assets/images/contents/career/img_visual_lights.jpg" alt="사무실 조명 이미지" />
      </div>
      {/* E: sub_visual 영역 */}
      <Employment data={careerEmployment} />
      {/* S: 채용 tab 영역 */}
      
      {/* E: 채용 tab 영역*/}
    </main>
  );
}

export default Career;
