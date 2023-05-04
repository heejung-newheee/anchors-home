import Link from 'next/link';

import variables from '@/public/assets/scss/_variables.module.scss';
import '../../guide.scss';

export default function GuideButton() {
  return (
    <div className="guide">
      <header>
        <h1 className="fontSize_h1">Guide</h1>

        <ul>
          <li>
            <Link href="guide/pages/rule">Rule</Link>
          </li>
          <li>
            <Link href="guide/pages/layout">Layout</Link>
          </li>
          <li>
            <Link href="guide/pages/font">Font</Link>
          </li>
          <li>
            <Link href="guide/pages/color">Color</Link>
          </li>
          <li className="active">
            <Link href="guide/pages/button">Button</Link>
          </li>
        </ul>
      </header>
      <main>
        <dl>
          <dt>Button Style Guide</dt>
          <dd>
            <p>
              버튼값은 모두 변수에 담겨 있으므로, scss에 하기 변수값을 확인하여
              적용한다.
            </p>
            <p>button, a, Link 혼용하여 사용 가능하다.</p>
          </dd>

          <dt>Button Option</dt>
          <dd>
            <article>
              <strong className="title">%btn_primary_normal</strong>
              <div className="box">
                button &#123; @extend %btn_primary_normal &#125;
              </div>
              <div
                className="cta_outer"
                style={{
                  backgroundColor: variables.colorDarkgrey,
                  padding: '10px',
                }}
              >
                <button className="btn_primary_normal">
                  <span>BtnPrimaryNormal</span>
                </button>
              </div>
            </article>

            <article>
              <strong className="title">%btn_primary_ghost</strong>
              <div className="box">
                button &#123; @extend %btn_primary_ghost &#125;
              </div>
              <div
                className="cta_outer"
                style={{
                  backgroundColor: variables.colorDarkgrey,
                  padding: '10px',
                }}
              >
                <button className="btn_primary_ghost">
                  <span>BtnPrimaryGhost</span>
                </button>
              </div>
            </article>

            <article>
              <strong className="title">%btn_secondary_up</strong>
              <div className="box">
                button &#123; @extend %btn_secondary_up &#125;
              </div>
              <div
                className="cta_outer"
                style={{
                  backgroundColor: variables.colorDarkgrey,
                  padding: '10px',
                }}
              >
                <button className="btn_secondary_up">
                  <span>
                    Btn
                    <br />
                    Secondary
                    <br />
                    Up
                  </span>
                </button>
              </div>
            </article>

            <article>
              <strong className="title">%btn_secondary_down</strong>
              <div className="box">
                button &#123; @extend %btn_secondary_down &#125;
              </div>
              <div
                className="cta_outer"
                style={{
                  backgroundColor: variables.colorDarkgrey,
                  padding: '10px',
                }}
              >
                <button className="btn_secondary_down">
                  <span>
                    Btn
                    <br />
                    Secondary
                    <br />
                    Down
                  </span>
                </button>
              </div>
            </article>
          </dd>
        </dl>
      </main>
    </div>
  );
}
