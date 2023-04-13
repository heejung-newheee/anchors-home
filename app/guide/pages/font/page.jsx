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

                    <dt style={{padding: 0}}>Font Size Option</dt>
                    <dt style={{backgroundColor: variables.colorBlack, color: variables.colorWhite, padding: "5px 0 10px", marginBottom : '10px'}}>Common</dt>
                    <dd>
                        <p>폰트사이즈 옵션은 모두 @extend하여, scss에 하기 변수값을 확인하여 적용한다.</p>
                        <p>일부 해상도에서 폰트사이즈가 겹치는 경우가 있으므로, 반응형 사이즈를 확인하여 적용한다.</p>
                        <p>Common은 page font guide이며, Component는 component font guide이다. 단, 변수명은 필요에 따라 어느곳에건 활용 가능하다.</p>

                        <article>
                            <strong className="title">%font-primary</strong>
                            <div className="box">
                                .primary &#123; @extend %font-primary; &#125;
                            </div>
                            <p className="responsive">
                                [WIDE] - font-size: 20px; line-height: 32px; <br/>
                                [PC] - font-size: 18px; line-height: 28px; <br/>
                                [TAB] - font-size: 16px; line-height: 26px; <br/>
                                [MO] - font-size: 16px; line-height: 26px;
                            </p>
                            <p className="fontPrimary">%font-primary</p>
                            <b className="fontPrimary">%font-primary</b>
                        </article>

                        <article>
                            <strong className="title">%font-sectionTitle</strong>
                            <div className="box">
                                .sectionTitle &#123; @extend %font-sectionTitle; &#125;
                            </div>
                            <p className="responsive">
                                [WIDE] - font-size: 56px; line-height: 78px; <br/>
                                [PC] - font-size: 46px; line-height: 64px; <br/>
                                [TAB] - font-size: 36px; line-height: 50px; <br/>
                                [MO] - font-size: 28px; line-height: 40px;
                            </p>
                            <p className="fontSectionTitle">%font-sectionTitle</p>
                            <b className="fontSectionTitle">%font-sectionTitle</b>
                        </article>

                        <article>
                            <strong className="title">%font-contentsTitle</strong>
                            <div className="box">
                                .contentsTitle &#123; @extend %font-contentsTitle; &#125;
                            </div>
                            <p className="responsive">
                                [WIDE] - font-size: 38px; line-height: 5px; <br/>
                                [PC] - font-size: 32px; line-height: 42px; <br/>
                                [TAB] - font-size: 28px; line-height: 38px; <br/>
                                [MO] - font-size: 22px; line-height: 3px;
                            </p>
                            <p className="fontContentsTitle">%font-contentsTitle</p>
                            <b className="fontContentsTitle">%font-contentsTitle</b>
                        </article>

                        <article>
                            <strong className="title">%font-listTitle</strong>
                            <div className="box">
                                .listTItle &#123; @extend %font-listTitle; &#125;
                            </div>
                            <p className="responsive">
                                [WIDE] - font-size: 32px; line-height: 45px; <br/>
                                [PC] - font-size: 28px; line-height: 40px; <br/>
                                [TAB] - font-size: 20px; line-height: 28px; <br/>
                                [MO] - font-size: 18px; line-height: 26px;
                            </p>
                            <p className="fontListTitle">%font-listTitle</p>
                            <b className="fontListTitle">%font-listTitle</b>
                        </article>

                        <article>
                            <strong className="title">%font-disclaimer</strong>
                            <div className="box">
                                .disclaimer &#123; @extend %font-disclaimer; &#125;
                            </div>
                            <p className="responsive">
                                [WIDE] - font-size: 18px; line-height: 28px; <br/>
                                [PC] - font-size: 16px; line-height: 24px; <br/>
                                [TAB] - font-size: 14px; line-height: 22px; <br/>
                                [MO] - font-size: 12px; line-height: 20px;
                            </p>
                            <p className="fontDisclaimer">%font-disclaimer</p>
                            <b className="fontDisclaimer">%font-disclaimer</b>
                        </article>

                        <article>
                            <strong className="title">%font-enIntro</strong>
                            <div className="box">
                                .enIntro &#123; @extend %font-enIntro; &#125;
                            </div>
                            <p className="responsive">
                                [WIDE] - font-size: 50px; line-height: 70px; <br/>
                                [PC] - font-size: 42px; line-height: 58px; <br/>
                                [TAB] - font-size: 34px; line-height: 48px; <br/>
                                [MO] - font-size: 22px; line-height: 30px;
                            </p>
                            <p className="fontEnIntro">%font-enIntro</p>
                            <b className="fontEnIntro">%font-enIntro</b>
                        </article>
                    </dd>

                    <dt style={{backgroundColor: variables.colorBlack, color: variables.colorWhite, padding: "5px 0 10px", marginBottom : '10px'}}>Component</dt>
                    <dd>
                        <article>
                            <strong className="title">%font-pageTitle</strong>
                            <div className="box">
                                .pageTitle &#123; @extend %font-pageTitle; &#125;
                            </div>
                            <p className="responsive">
                                [WIDE] - font-size: 200px; line-height: 200px; <br/>
                                [PC] - font-size: 160px; line-height: 160px; <br/>
                                [TAB] - font-size: 120px; line-height: 120px; <br/>
                                [MO] - font-size: 60px; line-height: 60px;
                            </p>
                            <p className="fontPageTitle">%font-pageTitle</p>
                            <b className="fontPageTitle">%font-pageTitle</b>
                        </article>

                        <article>
                            <strong className="title">%font-visualTitle</strong>
                            <div className="box">
                                .visualTitle &#123; @extend %font-visualTitle; &#125;
                            </div>
                            <p className="responsive">
                                [WIDE] - font-size: 104px; line-height: 114px; <br/>
                                [PC] - font-size: 90px; line-height: 100px; <br/>
                                [TAB] - font-size: 80px; line-height: 90px; <br/>
                                [MO] - font-size: 50px; line-height: 58px;
                            </p>
                            <p className="fontVisualTitle">%font-visualTitle</p>
                            <b className="fontVisualTitle">%font-visualTitle</b>
                        </article>

                        <article>
                            <strong className="title">%font-baseArticle</strong>
                            <div className="box">
                                .baseArticle &#123; @extend %font-baseArticle; &#125;
                            </div>
                            <p className="responsive">
                                [WIDE] - font-size: 28px; line-height: 40px; <br/>
                                [PC] - font-size: 24px; line-height: 34px; <br/>
                                [TAB] - font-size: 22px; line-height: 30px; <br/>
                                [MO] - font-size: 18px; line-height: 26px;
                            </p>
                            <p className="fontBaseArticle">%font-baseArticle</p>
                            <b className="fontBaseArticle">%font-baseArticle</b>
                        </article>

                        <article>
                            <strong className="title">%font-visualDescription</strong>
                            <div className="box">
                                .visualDescription &#123; @extend %font-visualDescription; &#125;
                            </div>
                            <p className="responsive">
                                [WIDE] - font-size: 24px; line-height: 34px; <br/>
                                [PC] - font-size: 22px; line-height: 30px; <br/>
                                [TAB] - font-size: 18px; line-height: 28px; <br/>
                                [MO] - font-size: 16px; line-height: 26px;
                            </p>
                            <p className="fontVisualDescription">%font-visualDescription</p>
                            <b className="fontVisualDescription">%font-visualDescription</b>
                        </article>

                        <article>
                            <strong className="title">%font-tabAccContents</strong>
                            <div className="box">
                                .tabAccContents &#123; @extend %font-tabAccContents; &#125;
                            </div>
                            <p className="responsive">
                                [WIDE] - font-size: 18px; line-height: 28px; <br/>
                                [PC] - font-size: 16px; line-height: 26px; <br/>
                                [TAB] - font-size: 16px; line-height: 26px; <br/>
                                [MO] - font-size: 16x; line-height: 26px;
                            </p>
                            <p className="fontTabAccContents">%font-tabAccContents</p>
                            <b className="fontTabAccContents">%font-tabAccContents</b>
                        </article>

                        <article>
                            <strong className="title">%font-device</strong>
                            <div className="box">
                                .device &#123; @extend %font-device; &#125;
                            </div>
                            <p className="responsive">
                                [WIDE] - font-size: 16px; line-height: 24px; <br/>
                                [PC] - font-size: 14px; line-height: 22px; <br/>
                                [TAB] - font-size: 11px; line-height: 18px; <br/>
                                [MO] - font-size: 12px; line-height: 18px;
                            </p>
                            <p className="fontDevice">%font-device</p>
                            <b className="fontDevice">%font-device</b>
                        </article>
                    </dd>

                </dl>
            </main>
        </div>
    )
}
