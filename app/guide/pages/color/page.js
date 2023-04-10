import variables from '/public/assets/css/_variables.scss';
import '../../guide.scss';
import Link from "next/link";

export default function GuideColor() {
    return (
        <div className="guide">
            <header>
                <h1 className="fontSize-h1">Guide</h1>

                <ul>
                    <li><Link href="../../guide">Rule</Link></li>
                    <li><Link href="guide/pages/layout">Layout</Link></li>
                    <li><Link href="guide/pages/font">Font</Link></li>
                    <li className="active"><Link href="guide/pages/color">Color</Link></li>
                    <li><Link href="guide/pages/button">Button</Link></li>
                    <li><Link href="guide/pages/video">Video</Link></li>
                    <li><Link href="guide/pages/component">Component</Link></li>
                </ul>
            </header>
            <main>
                <dl>
                    <dt>Color Style Guide</dt>
                    <dd>
                        <p>색상값은 모두 변수에 담겨 있으므로, scss에 하기 변수값을 확인하여 적용한다.</p>
                        <p>기본 폰트 색상은 $color-black이다.</p>
                    </dd>

                    <dt>Color Option</dt>
                    <dd>
                        <article>
                            <strong className="title">$color-black</strong>
                            <div className="box">
                                <p>
                                    color: $color-black;<br/>
                                    style = &#123;&#123; color: variables.colorBlack &#125;&#125;
                                </p>
                            </div>
                            <p style={{color: variables.colorBlack, padding: '10px'}}>$color-black #1D1D1F</p>
                        </article>

                        <article>
                            <strong className="title">$color-white</strong>
                            <div className="box">
                                <p>color: $color-white;<br/>
                                    style = &#123;&#123; color: variables.colorWhite &#125;&#125;</p>
                            </div>
                            <p style={{color: variables.colorWhite, backgroundColor: variables.colorBlack, padding: '10px'}}>$color-white #FFFFFF</p>
                        </article>

                        <article>
                            <strong className="title">$color-blue</strong>
                            <div className="box">
                                <p>color: $color-blue;<br/>
                                    style = &#123;&#123; color: variables.colorBlue &#125;&#125;</p>
                            </div>
                            <p style={{color: variables.colorBlue, padding: '10px'}}>$color-blue #1F0AAD</p>
                        </article>

                        <article>
                            <strong className="title">$color-lightblue</strong>
                            <div className="box">
                                <p>color: $color-lightblue;<br/>
                                    style = &#123;&#123; color: variables.colorLightblue &#125;&#125;</p>
                            </div>
                            <p style={{color: variables.colorLightblue, padding: '10px'}}>$color-lightblue #00BEFD</p>
                        </article>

                        <article>
                            <strong className="title">$color-darkgrey</strong>
                            <div className="box">
                                <p>color: $color-darkgrey;<br/>
                                    style = &#123;&#123; color: variables.colorDarkgrey &#125;&#125;</p>
                            </div>
                            <p style={{color: variables.colorDarkgrey, padding: '10px'}}>$color-darkgrey #848484</p>
                        </article>

                        <article>
                            <strong className="title">$color-grey</strong>
                            <div className="box">
                                <p>color: $color-grey;<br/>
                                    style = &#123;&#123; color: variables.colorGrey &#125;&#125;</p>
                            </div>
                            <p style={{color: variables.colorGrey, padding: '10px'}}>$color-grey #D6D6D6</p>
                        </article>

                        <article>
                            <strong className="title">$color-lightgrey</strong>
                            <div className="box">
                                <p>color: $color-lightgrey;<br/>
                                    style = &#123;&#123; color: variables.colorLightgrey &#125;&#125;</p>
                            </div>
                            <p style={{color: variables.colorLightgrey, padding: '10px'}}>$color-lightgrey #E4E4E4</p>
                        </article>

                    </dd>


                </dl>
            </main>
        </div>
    )
}
