'use client';

import Link from 'next/link';

import TabButton from '@/components/TabButton/TabButton';
import TabContents from '@/components/TabContents/TabContents';

function Tab({ type, tabList, contents }) {
  return (
    <article className={`tab ${type}`} data-tab-type={type}>
      <TabButton dataList={tabList} />
      <TabContents dataContents={contents} />
    </article>
  );
}

export default Tab;
