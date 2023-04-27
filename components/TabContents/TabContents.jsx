'use client';

import Link from 'next/link';

export default function TabContents() {
  // props list = firstActiveOption

  return (
    <section className="tab_content_wrap">
      <article className="tab_content">{/*작업자가 전달할 컴포넌트*/}</article>
    </section>
  );
}
