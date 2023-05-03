'use client';

import Link from 'next/link';

import TabButton from '@/components/TabButton/TabButton';
import TabContents from '@/components/TabContents/TabContents';

function TabEvent(e, type, dataContens) {
  console.log('sdkjdfshkfkhkfkj', type, e.target.innerText);

  switch (type) {
    case 'sortList':
      console.log(SORT_DATA);

      let SORT_INIT = 0;
      let SORT_COUNT = 0;
      let SORT_DATA = e.target.innerText;
      let BINDING = [];

      dataContens < 6 ? (SORT_COUNT = dataContens.length) : (SORT_COUNT = 6);

      for (let i = SORT_INIT; i < SORT_COUNT; i++) {
        if (dataContens[i].sort.includes(SORT_DATA) === true) {
          BINDING[i] = {
            url: dataContens.url + _getData.result.content[i].pageName,
            index: i,
            src: _getData.result.imgUrl + _getData.result.content[i].imgName,
            alt: _getData.result.content[i].alt,
            title: _getData.result.content[i].title,
            text: _getData.result.content[i].text,
          };
        }
      }

      break;
  }
}
function Tab({ type, className, dataList, dataContens, contents }) {
  return (
    <section className={`tab ${className}`} data-tab-type={type}>
      <TabButton
        dataList={dataList}
        className="tabButton"
        onClick={(e) => {
          TabEvent(e, type, dataContens);
        }}
      />
      <TabContents dataContents={contents} />
    </section>
  );
}

export default Tab;
