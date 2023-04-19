'use client';
import Image from 'next/image';
import Link from 'next/link';

import TabButton from '@/components/TabButton/TabButton';
import TabContents from '@/components/TabContents/TabContents';

export default function Tab() {
  // props list = type

  const handleClick = (value) => {
    console.log(value);
    // this.setState(prevState => ({
    //   // isToggleOn: !prevState.isToggleOn
    // }));
  };

  return (
    <article className="tab">
      <ul className="tab-btn-wrap">
        <TabButton onClick={() => handleClick(1)} />
      </ul>

      <section className="tab-content-wrap">{/* tabContents */}</section>
    </article>
  );
}
