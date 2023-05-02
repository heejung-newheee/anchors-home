import Link from 'next/link';

import variables from '@/public/assets/scss/_variables.module.scss';

import '../../guide.scss';

export default function GuideColor() {
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
          <li>
            <Link href="guide/pages/font">Font</Link>
          </li>
          <li className="active">
            <Link href="guide/pages/color">Color</Link>
          </li>
          <li>
            <Link href="guide/pages/button">Button</Link>
          </li>
        </ul>
      </header>
      <main>
        <dl>
          <dt>Color Style Guide</dt>
          <dd>
            <p>
              색상값은 모두 변수에 담겨 있으므로, scss에 하기 변수값을 확인하여
              적용한다.
            </p>
            <p>기본 폰트 색상은 $color_black이다.</p>
          </dd>

          <dt>Color Option</dt>
          <dd>
            <article>
              <strong className="title">$color_black</strong>
              <div className="box">
                <p>
                  color: $color_black;
                  <br />
                  style = &#123;&#123; color: variables.colorBlack &#125;&#125;
                </p>
              </div>
              <p style={{ color: variables.colorBlack, padding: '10px' }}>
                $color_black #1D1D1F
              </p>
            </article>

            <article>
              <strong className="title">$color_white</strong>
              <div className="box">
                <p>
                  color: $color_white;
                  <br />
                  style = &#123;&#123; color: variables.colorWhite &#125;&#125;
                </p>
              </div>
              <p
                style={{
                  color: variables.colorWhite,
                  backgroundColor: variables.colorBlack,
                  padding: '10px',
                }}
              >
                $color_white #FFFFFF
              </p>
            </article>

            <article>
              <strong className="title">$color_blue</strong>
              <div className="box">
                <p>
                  color: $color_blue;
                  <br />
                  style = &#123;&#123; color: variables.colorBlue &#125;&#125;
                </p>
              </div>
              <p style={{ color: variables.colorBlue, padding: '10px' }}>
                $color_blue #1F0AAD
              </p>
            </article>

            <article>
              <strong className="title">$color_lightblue</strong>
              <div className="box">
                <p>
                  color: $color_lightblue;
                  <br />
                  style = &#123;&#123; color: variables.colorLightblue
                  &#125;&#125;
                </p>
              </div>
              <p style={{ color: variables.colorLightblue, padding: '10px' }}>
                $color_lightblue #00BEFD
              </p>
            </article>

            <article>
              <strong className="title">$color_darkgrey</strong>
              <div className="box">
                <p>
                  color: $color_darkgrey;
                  <br />
                  style = &#123;&#123; color: variables.colorDarkgrey
                  &#125;&#125;
                </p>
              </div>
              <p style={{ color: variables.colorDarkgrey, padding: '10px' }}>
                $color_darkgrey #848484
              </p>
            </article>

            <article>
              <strong className="title">$color_grey</strong>
              <div className="box">
                <p>
                  color: $color_grey;
                  <br />
                  style = &#123;&#123; color: variables.colorGrey &#125;&#125;
                </p>
              </div>
              <p style={{ color: variables.colorGrey, padding: '10px' }}>
                $color_grey #D6D6D6
              </p>
            </article>

            <article>
              <strong className="title">$color_lightgrey</strong>
              <div className="box">
                <p>
                  color: $color_lightgrey;
                  <br />
                  style = &#123;&#123; color: variables.colorLightgrey
                  &#125;&#125;
                </p>
              </div>
              <p style={{ color: variables.colorLightgrey, padding: '10px' }}>
                $color_lightgrey #E4E4E4
              </p>
            </article>
          </dd>
        </dl>
      </main>
    </div>
  );
}
