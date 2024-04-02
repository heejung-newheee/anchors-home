'use client';

import React from 'react';

import BaseArticle from '@/components/BaseArticle/BaseArticle';
import Btn from '@/components/Btn/Btn';
import TabButton from '@/components/TabButton/TabButton';
import TabContents from '@/components/TabContents/TabContents';

const DEFAULT_INDEX = 0;
const DEFAULT_COUNT = 6;
function Tab({ type = 'article', className, json, tabList, children }) {
  const BUTTON_ARR = Array.isArray(tabList) ? tabList : [tabList];
  const [tabCurrent, setTabCurrent] = React.useState(DEFAULT_INDEX);
  const [sortFilter, setSortFilter] = React.useState(tabList[DEFAULT_INDEX]);
  const [sortContents, setSortContents] = React.useState(DEFAULT_COUNT);

  let SORT_CONTENT_LENGTH = json ? json.content.length : 0;
  function TabButtonEvent(button, index) {
    //console.log('TabButtonEvent : ', window.scrollY);
    setTabCurrent(index);
    if (type === 'portfolioList') setSortFilter(button), setSortContents(DEFAULT_COUNT), topMoving(0);
  }

  function topMoving(value) {
    //console.log('topMoving : ', window.scrollY);
    window.scrollTo({
      top: value,
      behavior: 'smooth',
    });
  }

  function moreEvent() {
    setSortContents(sortContents + DEFAULT_COUNT >= SORT_CONTENT_LENGTH ? SORT_CONTENT_LENGTH : sortContents + DEFAULT_COUNT);
  }

  function TabContentsEvent() {
    switch (type) {
      case 'portfolioList':
        const IMG_URL = json.imgUrl;
        const JSON_FILTER = json.content.filter(({ sort }) => sort.includes(sortFilter));

        //console.log(sortFilter, JSON_FILTER);

        return JSON_FILTER.map(({ sort, thumbnail, thumbnailAlt, title, description, pageUrl }, idx, array) =>
          idx < sortContents
            ? ((SORT_CONTENT_LENGTH = array.length),
              (
                <Btn key={idx} type="a" url={pageUrl}>
                  <BaseArticle
                    imgUrl={IMG_URL + thumbnail}
                    imgAlt={thumbnailAlt}
                    elementTitle={title}
                    description={description}
                    defaultID={'sortContents_' + idx} // [2022-05-11 : CHO] scrollTrigger 설정을 위합 값 이벤트를 실행 하기 위한 target 값입니다.
                  />
                </Btn>
              ))
            : '',
        );
      case 'article':
        return children[tabCurrent];
    }
  }

  return (
    <section className={'tab' + (!className || className === '' ? '' : ` ${className}`)} data-tab-type={type}>
      <article className="tab_btn_wrap">
        <ul>
          {BUTTON_ARR.map((button, idx) => (
            <TabButton current={tabCurrent} index={idx} key={idx} event={() => TabButtonEvent(button, idx)}>
              {button}
            </TabButton>
          ))}
        </ul>
      </article>
      <TabContents>{TabContentsEvent()}</TabContents>
      {type === 'portfolioList' && sortContents < SORT_CONTENT_LENGTH && sortContents !== SORT_CONTENT_LENGTH ? (
        <Btn type="button" className="view_more_btn" onClick={() => moreEvent()}>
          View more
        </Btn>
      ) : (
        ''
      )}
    </section>
  );
}

export default Tab;
