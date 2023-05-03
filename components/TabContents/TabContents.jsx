'use client';

import Link from 'next/link';

function TabContents({ dataContents }) {
  return <article className="tab_content_wrap">{dataContents}</article>;
}

export default TabContents;
