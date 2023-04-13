import variables from '@/public/assets/scss/_variables.module.scss';
import '../../guide.scss';
import Link from "next/link";

export default function GuideFont() {
    return (
        <div className="guide">
            <header>
                <h1 className="fontSize-h1">Guide</h1>
                <ul>
                    <li><Link href="guide">Rule</Link></li>
                    <li><Link href="guide/pages/layout">Layout</Link></li>
                    <li className="active"><Link href="guide/pages/font">Font</Link></li>
                    <li><Link href="guide/pages/color">Color</Link></li>
                    <li><Link href="guide/pages/button">Button</Link></li>
                    <li><Link href="guide/pages/component">Component</Link></li>
                </ul>
            </header>
            <main>
                <dl>
                    <dt>Font Style Guide</dt>
                    <dd>
                        <p>1rem은 10px을 기준으로 한다.</p>
                        <p>기본 폰트 사이즈는 2rem(20px)이다.</p>
                        <p>모든 태그의 폰트사이즈는 2rem이며, 상속이 자동으로 되지 않으므로 상속받아야 할 경우 font-size: inherit;을 적용한다.</p>
                        <p>font-weight는 기본적으로 400이며, 볼드체는 700이다.</p>
                        <p>모든 영문 폰트에는 자간 -3%이다. 다만, 기본값이 없으므로 따로 scss로 적용한다.</p>
                    </dd>

                    <dt>Font Family Option</dt>
                    <dd>
                        <p>기본 세팅 폰트는 국문 Prentendard ,영문 stolzl 이다.</p>
                        <p>폰트패밀리는 모두 변수에 담겨 있으므로, scss에 하기 변수값을 확인하여 적용한다.</p>
                        <p>영문 폰트 자간은 변수에 담겨 있으므로, scss에 하기 변수값을 확인하여 적용한다.</p>

                        <article>
                            <strong className="title">$font-ko</strong>
                            <div className="box">
                                <p>
                                    font-family : $font-ko;<br/>
                                    style = &#123;&#123; font-family: variables.fontKo &#125;&#125;
                                </p>
                            </div>
                            <p style={{fontFamily : variables.fontKo}}>[Pretendard] 이 텍스트는 샘플 텍스트 입니다.</p>
                            <b style={{fontFamily : variables.fontKo}}>[Pretendard] 이 텍스트는 샘플 텍스트 입니다.</b>
                        </article>

                        <article>
                            <strong className="title">$font-en</strong>
                            <div className="box">
                                <p>font-family : $font-en;<br/>
                                    style = &#123;&#123; fontFamily: variables.fontEn &#125;&#125;</p>
                            </div>
                            <p style={{fontFamily : variables.fontEn}}>[stolzl] This is sample text.</p>
                            <b style={{fontFamily : variables.fontEn}}>[stolzl] This is sample text.</b>
                        </article>

                        <article>
                            <strong className="title">$font-en-italic</strong>
                            <div className="box">
                                <p>font-family : $font-en-italic<br/>
                                    style = &#123;&#123; fontFamily: variables.fontEnItalic &#125;&#125;</p>
                            </div>
                            <p style={{fontFamily : variables.fontEnItalic}}>[covered] This is sample text.</p>
                        </article>

                        <article>
                            <strong className="title">$en-letterSpacing</strong>
                            <div className="box">
                                <p>font-family : $en-letterSpacing<br/>
                                    style = &#123;&#123; letterSpacing : variables.enLetterSpacing &#125;&#125;</p>
                            </div>
                            <p style={{letterSpacing : variables.enLetterSpacing}}>[letter spacing -3%] This is sample text.</p>
                        </article>
                    </dd>

                    <dt>Font Size Option</dt>
                    <dd>
                        <p>폰트사이즈 옵션은 모두 @extend하여, scss에 하기 변수값을 확인하여 적용한다.</p>
                        <p>일부 해상도에서 폰트사이즈가 겹치는 경우가 있으므로, 반응형 사이즈를 확인하여 적용한다.</p>

                        <article>
                            <strong className="title">%font-h1</strong>
                            <div className="box">
                                h1 &#123; @extend %font-h1; &#125;
                            </div>
                            <p className="responsive">
                                [WIDE] - font-size: 20rem; line-height: 20rem; <br/>
                                [PC] - font-size: 16rem; line-height: 16rem; <br/>
                                [TAB] - font-size: 12rem; line-height: 12rem; <br/>
                                [MO] - font-size: 6rem; line-height: 6rem;
                            </p>
                            <p className="fontH1">%font-h1</p>
                            <b className="fontH1">%font-h1</b>
                        </article>

                        <article>
                            <strong className="title">%font-h2</strong>
                            <div className="box">
                                h1 &#123; @extend %font-h2; &#125;
                            </div>
                            <p className="responsive">
                                [WIDE] - font-size: 10.4rem; line-height: 11.4rem; <br/>
                                [PC] - font-size: 9rem; line-height: 10rem; <br/>
                                [TAB] - font-size: 8rem; line-height: 9rem; <br/>
                                [MO] - font-size: 5rem; line-height: 5.8rem;
                            </p>
                            <p className="fontH2">%font-h2</p>
                            <b className="fontH2">%font-h2</b>
                        </article>

                        <article>
                            <strong className="title">%font-h3</strong>
                            <div className="box">
                                h1 &#123; @extend %font-h3; &#125;
                            </div>
                            <p className="responsive">
                                [WIDE] - font-size: 5.6rem; line-height: 7.8rem; <br/>
                                [PC] - font-size: 4.6rem; line-height: 6.4rem; <br/>
                                [TAB] - font-size: 3.6rem; line-height: 5rem; <br/>
                                [MO] - font-size: 2.8rem; line-height: 4rem;
                            </p>
                            <p className="fontH3">%font-h3</p>
                            <b className="fontH3">%font-h3</b>
                        </article>

                        <article>
                            <strong className="title">%font-h4</strong>
                            <div className="box">
                                h1 &#123; @extend %font-h4; &#125;
                            </div>
                            <p className="responsive">
                                [WIDE] - font-size: 5rem; line-height: 7rem; <br/>
                                [PC] - font-size: 4.2rem; line-height: 5.8rem; <br/>
                                [TAB] - font-size: 3.4rem; line-height: 4.8rem; <br/>
                                [MO] - font-size: 2.2rem; line-height: 3rem;
                            </p>
                            <p className="fontH4">%font-h4</p>
                            <b className="fontH4">%font-h4</b>
                        </article>

                        <article>
                            <strong className="title">%font-h5</strong>
                            <div className="box">
                                h1 &#123; @extend %font-h5; &#125;
                            </div>
                            <p className="responsive">
                                [WIDE] - font-size: 3.8rem; line-height: 5rem; <br/>
                                [PC] - font-size: 3.2rem; line-height: 4.2rem; <br/>
                                [TAB] - font-size: 2.8rem; line-height: 3.8rem; <br/>
                                [MO] - font-size: 2.2rem; line-height: 3rem;
                            </p>
                            <p className="fontH5">%font-h5</p>
                            <b className="fontH5">%font-h5</b>
                        </article>

                        <article>
                            <strong className="title">%font-h6</strong>
                            <div className="box">
                                h1 &#123; @extend %font-h6; &#125;
                            </div>
                            <p className="responsive">
                                [WIDE] - font-size: 3.2rem; line-height: 4.5rem; <br/>
                                [PC] - font-size: 2.8rem; line-height: 4rem; <br/>
                                [TAB] - font-size: 2.3rem; line-height: 2.8rem; <br/>
                                [MO] - font-size: 1.8rem; line-height: 2.6rem;
                            </p>
                            <p className="fontH6">%font-h6</p>
                            <b className="fontH6">%font-h6</b>
                        </article>

                        <article>
                            <strong className="title">%font-h7</strong>
                            <div className="box">
                                h1 &#123; @extend %font-h7; &#125;
                            </div>
                            <p className="responsive">
                                [WIDE] - font-size: 2.8rem; line-height: 4rem; <br/>
                                [PC] - font-size: 2.4rem; line-height: 3.4rem; <br/>
                                [TAB] - font-size: 2rem; line-height: 3rem; <br/>
                                [MO] - font-size: 1.8rem; line-height: 2.6rem;
                            </p>
                            <p className="fontH7">%font-h7</p>
                            <b className="fontH7">%font-h7</b>
                        </article>

                        <article>
                            <strong className="title">%font-h8</strong>
                            <div className="box">
                                h1 &#123; @extend %font-h8; &#125;
                            </div>
                            <p className="responsive">
                                [WIDE] - font-size: 2.4rem; line-height: 3.4rem; <br/>
                                [PC] - font-size: 2.2rem; line-height: 3rem; <br/>
                                [TAB] - font-size: 1.6rem; line-height: 2.4rem; <br/>
                                [MO] - font-size: 1.4rem; line-height: 2.2rem;
                            </p>
                            <p className="fontH8">%font-h8</p>
                            <b className="fontH8">%font-h8</b>
                        </article>

                        <article>
                            <strong className="title">%font-body1</strong>
                            <div className="box">
                                h1 &#123; @extend %font-body1; &#125;
                            </div>
                            <p className="responsive">
                                [WIDE] - font-size: 2rem; line-height: 3.2rem; <br/>
                                [PC] - font-size: 1.8rem; line-height: 2.8rem; <br/>
                                [TAB] - font-size: 1.6rem; line-height: 2.6rem; <br/>
                                [MO] - font-size: 1.6rem; line-height: 2.6rem;
                            </p>
                            <p className="fontBody1">%font-body1</p>
                            <b className="fontBody1">%font-body1</b>
                        </article>

                        <article>
                            <strong className="title">%font-body2</strong>
                            <div className="box">
                                h1 &#123; @extend %font-body2; &#125;
                            </div>
                            <p className="responsive">
                                [WIDE] - font-size: 1.8rem; line-height: 2.8rem; <br/>
                                [PC] - font-size: 1.6rem; line-height: 2.4rem; <br/>
                                [TAB] - font-size: 1.4rem; line-height: 2.2rem; <br/>
                                [MO] - font-size: 1.2rem; line-height: 2rem;
                            </p>
                            <p className="fontBody2">%font-body2</p>
                            <b className="fontBody2">%font-body2</b>
                        </article>

                        <article>
                            <strong className="title">%font-body3</strong>
                            <div className="box">
                                h1 &#123; @extend %font-body3; &#125;
                            </div>
                            <p className="responsive">
                                [WIDE] - font-size: 1.8rem; line-height: 2.8rem; <br/>
                                [PC] - font-size: 1.6rem; line-height: 2.4rem; <br/>
                                [TAB] - font-size: 1.6rem; line-height: 2.4rem; <br/>
                                [MO] - font-size: 1.4rem; line-height: 2.2rem;
                            </p>
                            <p className="fontBody3">%font-body3</p>
                            <b className="fontBody3">%font-body3</b>
                        </article>

                        <article>
                            <strong className="title">%font-caption</strong>
                            <div className="box">
                                h1 &#123; @extend %font-caption; &#125;
                            </div>
                            <p className="responsive">
                                [WIDE] - font-size: 1.6rem; line-height: 2.4rem; <br/>
                                [PC] - font-size: 1.4rem; line-height: 2.2rem; <br/>
                                [TAB] - font-size: 1.6rem; line-height: 2.4rem; <br/>
                                [MO] - font-size: 1.2rem; line-height: 1.8rem;
                            </p>
                            <p className="fontCaption">%font-caption</p>
                            <b className="fontCaption">%font-caption</b>
                        </article>
                    </dd>

                </dl>
            </main>
        </div>
    )
}
