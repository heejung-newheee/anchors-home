import './scss/main.scss';

import Link from 'next/link';

import variables from '@/public/assets/scss/_variables.module.scss';

export const metadata = {
  title: 'Anchors',
  description: 'Anchors',
};

export default function Main() {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <p
        className="text"
        style={{
          backgroundColor: variables.colorGrey,
          color: variables.colorWhite,
          padding: 20,
        }}
      >
        mediaQuery type -
      </p>
      <br />
      <br />
      <br />
      <p>
        <b>가이드페이지 링크</b>
      </p>
      <br />
      <br />
      <Link href="guide">&gt; GUIDE 바로가기</Link> <br /> <br />
      <br />
      <br />
      <p>
        <b>테스트 링크</b>
      </p>
      <br />
      <Link href="guide/test/chchaa">&gt; chchaa test page 바로가기</Link>
      <br />
      <br />
      <Link href="guide/test/jueun">&gt; jueun test page 바로가기</Link> <br />
      <br />
      <Link href="guide/test/mijeong">&gt; mijeong test page 바로가기</Link>
      <br />
      <br />
      <Link href="guide/test/doi">&gt; doi test page 바로가기</Link> <br />
      <br />
      <Link href="guide/test/chaewon">&gt; chaewon test page 바로가기</Link>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
