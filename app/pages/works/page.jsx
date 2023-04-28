import BaseArticle from '@/components/BaseArticle/BaseArticle';
import PageTitle from '@/components/PageTitle/PageTitle';
import headerFooter from '@/helper/data/json/contents/headerFooter.json';
import works from '@/helper/data/json/contents/works/works.json';
import './scss/works.scss';
import Btn from '@/components/Btn/Btn';

export const metadata = {
  title: 'Anchors',
  description: '',
};

function Works() {
  return (
    <main className="our_works_list section_div is_photo">
      <PageTitle data={headerFooter.menuList[0].name} /> {/*our works*/}
      {/* S: portfolio list */}
      <Btn type="button" className="view_more_btn">
        View more
      </Btn>
      {/* E: portfolio list */}
    </main>
  );
}

export default Works;
