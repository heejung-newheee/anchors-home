import React from 'react';

import HistoryPop from '@/components/HistoryPop/historyPop'
import PageTitle from '@/components/PageTitle/PageTitle';
import Tab from '@/components/Tab/Tab';
import headerFooter from '@/helper/data/json/contents/headerFooter.json';
import seo from '@/helper/data/json/contents/SEO.json';
import worksList from '@/helper/data/json/contents/works/works.json';

import './scss/works.scss';

export const metadata = {
  title: seo.title.subPage.works,
  keywords: seo.keywords.works,
  description: seo.description.works,
  alternates : {
    canonical : seo.canonical.works,
  }
};

function Works() {
  return (
    <main className="our_works_list section_div is_photo">
      <PageTitle data={headerFooter.menuList[0].name} />
      {/* S: portfolio list */}
      <Tab
        type="portfolioList"
        className="portfolio_list"
        tabList={worksList.sort}
        json={worksList}
      />
      {/* E: portfolio list */}
    </main>
  );
}

export default Works;
