'use client';

import React from 'react';

import BaseArticle from '@/components/BaseArticle/BaseArticle';
import Btn from '@/components/Btn/Btn';
import TabButton from '@/components/TabButton/TabButton';
import TabContents from '@/components/TabContents/TabContents';

const DEFAULT_INDEX = 0;
const DEFAULT_COUNT = 6;
function Tab({ type, className, json, tabList, children }) {
  const BUTTON_ARR = Array.isArray(tabList) ? tabList : [tabList];
  const [tabCurrent, setTabCurrent] = React.useState(DEFAULT_INDEX);
  const [sortFilter, setSortFilter] = React.useState(tabList[DEFAULT_INDEX]);
  const [sortContents, setSortContents] = React.useState(DEFAULT_COUNT);

  const SORT_CONTENT_LENGTH = json ? json.content.length : 0;
  function TabButtonEvent(button, index) {
    console.log();

    type === 'portfolioList'
      ? (setSortFilter(button), setSortContents(DEFAULT_COUNT))
      : setTabCurrent(index);
  }

  function moreEvent() {
    setSortContents(
      sortContents + DEFAULT_COUNT >= SORT_CONTENT_LENGTH
        ? SORT_CONTENT_LENGTH
        : sortContents + DEFAULT_COUNT,
    );
  }

  function TabContentsEvent() {
    switch (type) {
      case 'portfolioList':
        const IMG_URL = json.imgUrl;

        return json.content.map(
          ({ sort, thumbnail, thumbnailAlt, title, description }, idx, array) =>
            sort.includes(sortFilter) ? (
              idx < sortContents ? (
                <BaseArticle
                  key={idx}
                  imgUrl={IMG_URL + thumbnail}
                  imgAlt={thumbnailAlt}
                  elementTitle={title}
                  description={description}
                  defaultID={'sort_' + idx}
                />
              ) : (
                ''
              )
            ) : (
              ''
            ),
        );

      case 'article':
        return children[tabCurrent];
    }
  }

  return (
    <section className={`tab ${className}`} data-tab-type={type}>
      <ul className="tab_btn_wrap">
        {BUTTON_ARR.map((button, idx) => (
          <TabButton
            current={tabCurrent}
            index={idx}
            key={idx}
            event={() => TabButtonEvent(button, idx)}
          >
            {button}
          </TabButton>
        ))}
      </ul>
      <TabContents dataContents={TabContentsEvent()} />
      {type === 'portfolioList' && sortContents !== SORT_CONTENT_LENGTH ? (
        <Btn
          type="button"
          className="view_more_btn"
          onClick={() => moreEvent()}
        >
          View more
        </Btn>
      ) : (
        ''
      )}
    </section>
  );
}

export default Tab;
