import variables from '@/public/assets/scss/_variables.module.scss';
import '../../guide.scss';
import Link from "next/link";

export default function GuideLayout() {
    return (
        <div className="guide">
            <header>
                <h1 className="fontSize-h1">Guide</h1>

                <ul>
                    <li><Link href="guide">Rule</Link></li>
                    <li className="active"><Link href="guide/pages/layout">Layout</Link></li>
                    <li><Link href="guide/pages/font">Font</Link></li>
                    <li><Link href="guide/pages/color">Color</Link></li>
                    <li><Link href="guide/pages/button">Button</Link></li>
                    <li><Link href="guide/pages/component">Component</Link></li>
                </ul>
            </header>
            <main>
                <dl>
                    <dt>Layout Style Guide</dt>
                    <dd>
                        <p>레이아웃은 자유형, 고정형 두가지가 있다.</p>
                        <p>레이아웃 기본 세팅은 자유형으로, 가로 너비 100% ( 100vw )이다. (따로 세팅값 없음)</p>
                        <p>고정형은 최대 가로값 1536px 이며, @extend하여, scss에 하기 변수값을 확인하여 적용한다.</p>
                        <p>단, 고정형을 적용한 영역의 내부에는 자유형을 적용할 수 없으므로, 적용 영역을 꼭 분리하여 사용한다.</p>
                    </dd>

                    <dt>Layout Option</dt>
                    <dd>

                        <article>
                            <strong className="title">%layout-fix</strong>
                            <div className="box">
                                div &#123; @extend %layout-fix; &#125;
                            </div>
                            <div className="cta-outer" style={{backgroundColor :variables.colorDarkgrey, padding: '10px'}}>
                            </div>
                        </article>

                    </dd>

                </dl>
            </main>
        </div>
    )
}
