import BaseArticle from '@/components/BaseArticle/BaseArticle';
import Btn from '@/components/Btn/Btn';
import PageTitle from '@/components/PageTitle/PageTitle';
import Tab from '@/components/Tab/Tab';
import headerFooter from '@/helper/data/json/contents/headerFooter.json';
import worksList from '@/helper/data/json/contents/works/works.json';

import './scss/works.scss';
export const metadata = {
  title: 'Our works',
};

function Works() {
  return (
    <main className="our_works_list section_div is_photo">
      <PageTitle data={headerFooter.menuList[0].name} /> {/*our works*/}
      {/* S: portfolio list */}
      <Tab
        type="sortList"
        className="portfolio_list"
        dataList={worksList.sort}
        dataContens={worksList.content}
        contents={worksList.content.map((data, index) => (
          <BaseArticle
            key={index}
            imgUrl={worksList.imgUrl + data.thumbnail}
            imgAlt={data.thumbnailAlt}
            elementTitle={data.title}
            disclaimer={data.description}
          />
        ))}
      />
      <Btn type="button" className="view_more_btn">
        View more
      </Btn>
      {/* E: portfolio list */}
    </main>
  );
}

export default Works;
