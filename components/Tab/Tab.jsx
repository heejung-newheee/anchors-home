'use client';

import React from 'react';

import Link from 'next/link';

import Btn from '@/components/Btn/Btn';
import TabButton from '@/components/TabButton/TabButton';
import TabContents from '@/components/TabContents/TabContents';

function TabContentsEvent(type, index, children, data) {
  switch (type) {
    case 'article':
      return children[index];
    case 'sortList':
      // const CHILDREN_ARR = Array.isArray(children) ? children : [children];
      console.log(data);
  }
}

function Tab({ type, className, data, tabList, children }) {
  const BUTTON_ARR = Array.isArray(tabList) ? tabList : [tabList];
  const [tabCurrent, setTabCurrent] = React.useState(0);

  return (
    <section className={`tab ${className}`} data-tab-type={type}>
      <ul className="tab_btn_wrap">
        {BUTTON_ARR.map((button, idx) => (
          <TabButton
            current={tabCurrent}
            index={idx}
            key={idx}
            event={() => setTabCurrent(idx)}
          >
            {button}
          </TabButton>
        ))}
      </ul>
      <TabContents
        dataContents={TabContentsEvent(type, tabCurrent, children, data)}
      />
    </section>
  );
}

export default Tab;
