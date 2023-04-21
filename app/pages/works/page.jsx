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
    <div>
      {/*<img src="/assets/images/ico/ico_btn_black_down.svg"/>*/}
      <p>this is works!!!!</p>
    </div>
  );
}

export default Works;
