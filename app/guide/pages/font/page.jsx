import Link from 'next/link';

import variables from '@/public/assets/scss/_variables.module.scss';

import '../../guide.scss';

export default function GuideFont() {
  return (
    <div className="guide">
      <header>
        <h1 className="fontSize_h1">Guide</h1>
        <ul>
          <li>
            <Link href="guide">Rule</Link>
          </li>
          <li>
            <Link href="guide/pages/layout">Layout</Link>
          </li>
          <li className="active">
            <Link href="guide/pages/font">Font</Link>
          </li>
          <li>
            <Link href="guide/pages/color">Color</Link>
          </li>
          <li>
            <Link href="guide/pages/button">Button</Link>
          </li>
        </ul>
      </header>
      <main>
        <dl>
          <dt>Font Style Guide</dt>
          <dd>
            <p>1rem은 10px을 기준으로 한다.</p>
            <p>기본 폰트 사이즈는 2rem(20px)이다.</p>
            <p>
              모든 태그의 폰트사이즈는 2rem이며, 상속이 자동으로 되지 않으므로
              상속받아야 할 경우 font-size: inherit;을 적용한다.
            </p>
            <p>font-weight는 기본적으로 400이며, 볼드체는 700이다.</p>
            <p>
              모든 영문 폰트에는 자간 _3%이다. 다만, 기본값이 없으므로 따로
              scss로 적용한다.
            </p>
          </dd>

          <dt>Font Family Option</dt>
          <dd>
            <p>기본 세팅 폰트는 국문 Prentendard ,영문 stolzl 이다.</p>
            <p>
              폰트패밀리는 모두 변수에 담겨 있으므로, scss에 하기 변수값을
              확인하여 적용한다.
            </p>
            <p>
              영문 폰트 자간은 변수에 담겨 있으므로, scss에 하기 변수값을
              확인하여 적용한다.
            </p>

            <article>
              <strong className="title">$font_ko</strong>
              <div className="box">
                <p>
                  font-family : $font_ko;
                  <br />
                  style = &#123;&#123; font-family: variables.fontKo
                  &#125;&#125;
                </p>
              </div>
              <p style={{ fontFamily: variables.fontKo }}>
                [Pretendard] 이 텍스트는 샘플 텍스트 입니다.
              </p>
              <b style={{ fontFamily: variables.fontKo }}>
                [Pretendard] 이 텍스트는 샘플 텍스트 입니다.
              </b>
            </article>

            <article>
              <strong className="title">$font_en</strong>
              <div className="box">
                <p>
                  font-family : $font_en;
                  <br />
                  style = &#123;&#123; fontFamily: variables.fontEn &#125;&#125;
                </p>
              </div>
              <p style={{ fontFamily: variables.fontEn }}>
                [stolzl] This is sample text.
              </p>
              <b style={{ fontFamily: variables.fontEn }}>
                [stolzl] This is sample text.
              </b>
            </article>

            <article>
              <strong className="title">$font_en_italic</strong>
              <div className="box">
                <p>
                  font-family : $font_en_italic
                  <br />
                  style = &#123;&#123; fontFamily: variables.fontEnItalic
                  &#125;&#125;
                </p>
              </div>
              <p style={{ fontFamily: variables.fontEnItalic }}>
                [covered] This is sample text.
              </p>
            </article>

            <article>
              <strong className="title">$en_letterSpacing</strong>
              <div className="box">
                <p>
                  font-family : $en_letterSpacing
                  <br />
                  style = &#123;&#123; letterSpacing : variables.enLetterSpacing
                  &#125;&#125;
                </p>
              </div>
              <p style={{ letterSpacing: variables.enLetterSpacing }}>
                [letter spacing _3%] This is sample text.
              </p>
            </article>
          </dd>

          <dt style={{ padding: 0 }}>Font Size Option</dt>
          <dt
            style={{
              backgroundColor: variables.colorBlack,
              color: variables.colorWhite,
              padding: '5px 0 10px',
              marginBottom: '10px',
            }}
          >
            Common
          </dt>
          <dd>
            <p>
              폰트사이즈 옵션은 모두 @extend하여, scss에 하기 변수값을 확인하여
              적용한다.
            </p>
            <p>
              일부 해상도에서 폰트사이즈가 겹치는 경우가 있으므로, 반응형
              사이즈를 확인하여 적용한다.
            </p>
            <p>
              Common은 page font guide이며, Component는 component font
              guide이다. 단, 변수명은 필요에 따라 어느곳에건 활용 가능하다.
            </p>

            <article>
              <strong className="title">%font_primary</strong>
              <div className="box">
                .primary &#123; @extend %font_primary; &#125;
              </div>
              <p className="responsive">
                [WIDE] _ font-size: 20px; line-height: 32px; <br />
                [PC] _ font-size: 18px; line-height: 28px; <br />
                [TAB] _ font-size: 16px; line-height: 26px; <br />
                [MO] _ font-size: 16px; line-height: 26px;
              </p>
              <p className="fontPrimary">%font_primary</p>
              <b className="fontPrimary">%font_primary</b>
            </article>

            <article>
              <strong className="title">%font_sectionTitle</strong>
              <div className="box">
                .sectionTitle &#123; @extend %font_sectionTitle; &#125;
              </div>
              <p className="responsive">
                [WIDE] _ font-size: 56px; line-height: 78px; <br />
                [PC] _ font-size: 46px; line-height: 64px; <br />
                [TAB] _ font-size: 36px; line-height: 50px; <br />
                [MO] _ font-size: 28px; line-height: 40px;
              </p>
              <p className="fontSectionTitle">%font_sectionTitle</p>
              <b className="fontSectionTitle">%font_sectionTitle</b>
            </article>

            <article>
              <strong className="title">%font_contentsTitle</strong>
              <div className="box">
                .contentsTitle &#123; @extend %font_contentsTitle; &#125;
              </div>
              <p className="responsive">
                [WIDE] _ font-size: 38px; line-height: 5px; <br />
                [PC] _ font-size: 32px; line-height: 42px; <br />
                [TAB] _ font-size: 28px; line-height: 38px; <br />
                [MO] _ font-size: 22px; line-height: 3px;
              </p>
              <p className="fontContentsTitle">%font_contentsTitle</p>
              <b className="fontContentsTitle">%font_contentsTitle</b>
            </article>

            <article>
              <strong className="title">%font_listTitle</strong>
              <div className="box">
                .listTItle &#123; @extend %font_listTitle; &#125;
              </div>
              <p className="responsive">
                [WIDE] _ font-size: 32px; line-height: 45px; <br />
                [PC] _ font-size: 28px; line-height: 40px; <br />
                [TAB] _ font-size: 20px; line-height: 28px; <br />
                [MO] _ font-size: 18px; line-height: 26px;
              </p>
              <p className="fontListTitle">%font_listTitle</p>
              <b className="fontListTitle">%font_listTitle</b>
            </article>

            <article>
              <strong className="title">%font_disclaimer</strong>
              <div className="box">
                .disclaimer &#123; @extend %font_disclaimer; &#125;
              </div>
              <p className="responsive">
                [WIDE] _ font-size: 18px; line-height: 28px; <br />
                [PC] _ font-size: 16px; line-height: 24px; <br />
                [TAB] _ font-size: 14px; line-height: 22px; <br />
                [MO] _ font-size: 12px; line-height: 20px;
              </p>
              <p className="fontDisclaimer">%font_disclaimer</p>
              <b className="fontDisclaimer">%font_disclaimer</b>
            </article>

            <article>
              <strong className="title">%font_enIntro</strong>
              <div className="box">
                .enIntro &#123; @extend %font_enIntro; &#125;
              </div>
              <p className="responsive">
                [WIDE] _ font-size: 50px; line-height: 70px; <br />
                [PC] _ font-size: 42px; line-height: 58px; <br />
                [TAB] _ font-size: 34px; line-height: 48px; <br />
                [MO] _ font-size: 22px; line-height: 30px;
              </p>
              <p className="fontEnIntro">%font_enIntro</p>
              <b className="fontEnIntro">%font_enIntro</b>
            </article>
          </dd>

          <dt
            style={{
              backgroundColor: variables.colorBlack,
              color: variables.colorWhite,
              padding: '5px 0 10px',
              marginBottom: '10px',
            }}
          >
            Component
          </dt>
          <dd>
            <article>
              <strong className="title">%font_pageTitle</strong>
              <div className="box">
                .pageTitle &#123; @extend %font_pageTitle; &#125;
              </div>
              <p className="responsive">
                [WIDE] _ font-size: 200px; line-height: 200px; <br />
                [PC] _ font-size: 160px; line-height: 160px; <br />
                [TAB] _ font-size: 120px; line-height: 120px; <br />
                [MO] _ font-size: 60px; line-height: 60px;
              </p>
              <p className="fontPageTitle">%font_pageTitle</p>
              <b className="fontPageTitle">%font_pageTitle</b>
            </article>

            <article>
              <strong className="title">%font_visualTitle</strong>
              <div className="box">
                .visualTitle &#123; @extend %font_visualTitle; &#125;
              </div>
              <p className="responsive">
                [WIDE] _ font-size: 104px; line-height: 114px; <br />
                [PC] _ font-size: 90px; line-height: 100px; <br />
                [TAB] _ font-size: 80px; line-height: 90px; <br />
                [MO] _ font-size: 50px; line-height: 58px;
              </p>
              <p className="fontVisualTitle">%font_visualTitle</p>
              <b className="fontVisualTitle">%font_visualTitle</b>
            </article>

            <article>
              <strong className="title">%font_baseArticle</strong>
              <div className="box">
                .baseArticle &#123; @extend %font_baseArticle; &#125;
              </div>
              <p className="responsive">
                [WIDE] _ font-size: 28px; line-height: 40px; <br />
                [PC] _ font-size: 24px; line-height: 34px; <br />
                [TAB] _ font-size: 22px; line-height: 30px; <br />
                [MO] _ font-size: 18px; line-height: 26px;
              </p>
              <p className="fontBaseArticle">%font_baseArticle</p>
              <b className="fontBaseArticle">%font_baseArticle</b>
            </article>

            <article>
              <strong className="title">%font_visualDescription</strong>
              <div className="box">
                .visualDescription &#123; @extend %font_visualDescription;
                &#125;
              </div>
              <p className="responsive">
                [WIDE] _ font-size: 24px; line-height: 34px; <br />
                [PC] _ font-size: 22px; line-height: 30px; <br />
                [TAB] _ font-size: 18px; line-height: 28px; <br />
                [MO] _ font-size: 16px; line-height: 26px;
              </p>
              <p className="fontVisualDescription">%font_visualDescription</p>
              <b className="fontVisualDescription">%font_visualDescription</b>
            </article>

            <article>
              <strong className="title">%font_tabAccContents</strong>
              <div className="box">
                .tabAccContents &#123; @extend %font_tabAccContents; &#125;
              </div>
              <p className="responsive">
                [WIDE] _ font-size: 18px; line-height: 28px; <br />
                [PC] _ font-size: 16px; line-height: 26px; <br />
                [TAB] _ font-size: 16px; line-height: 26px; <br />
                [MO] _ font-size: 16x; line-height: 26px;
              </p>
              <p className="fontTabAccContents">%font_tabAccContents</p>
              <b className="fontTabAccContents">%font_tabAccContents</b>
            </article>

            <article>
              <strong className="title">%font_device</strong>
              <div className="box">
                .device &#123; @extend %font_device; &#125;
              </div>
              <p className="responsive">
                [WIDE] _ font-size: 16px; line-height: 24px; <br />
                [PC] _ font-size: 14px; line-height: 22px; <br />
                [TAB] _ font-size: 11px; line-height: 18px; <br />
                [MO] _ font-size: 12px; line-height: 18px;
              </p>
              <p className="fontDevice">%font_device</p>
              <b className="fontDevice">%font_device</b>
            </article>
          </dd>
        </dl>
      </main>
    </div>
  );
}
