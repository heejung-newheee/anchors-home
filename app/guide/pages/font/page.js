import '../../guide.scss';
import {getFontDefinitions} from "@/helper/init-helper";
import Link from "next/link";
const {covered, pretendard, stolzl} = getFontDefinitions();

export default function Guide() {
    return (
        <div className="guide">
            <header>
                <h1 className="fontSize-h1">Guide</h1>

                <ul>
                    <li><Link href="../../guide">Rule</Link></li>
                    <li className="active"><Link href="guide/pages/font">Font</Link></li>
                    <li><Link href="guide/pages/color">Color</Link></li>
                    <li><Link href="guide/pages/button">Button</Link></li>
                    <li><Link href="guide/pages/video">Video</Link></li>
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
                    </dd>

                    <dt>Font Family Option</dt>
                    <dd>
                        <p>기본 세팅 폰트는 stolzl 이다.</p>
                        <p>영문은 stolzl, 국문은 pretendard, 일부 특수 영문은 covered를 적용한다.</p>
                        <p>하기 소스를 항상 페이지 최상단에 import 한 후에 작업을 진행한다.</p>
                        <p>폰트패밀리는 태그에 직접 클래스네임으로 선언하여 적용한다.</p>
                        <div className="box">
                            <p>
                                import Link from "next/link"; <br/>
                                const &#123;covered, pretendard, stolzl&#125; = getFontDefinitions();
                            </p>
                        </div>

                        <article>
                            <strong className="title">stolzl</strong>
                            <div className="box">
                                <p>&lt;tag className=&#123;stolzl.className&#125;&gt; &lt;/tag&gt;</p>
                            </div>
                            <p className={stolzl.className}>This is sample text.</p>
                            <b className={stolzl.className}>This is sample text.</b>
                        </article>

                        <article>
                            <strong className="title">pretendard</strong>
                            <div className="box">
                                <p>&lt;tag className=&#123;pretendard.className&#125;&gt; &lt;/tag&gt;</p>
                            </div>
                            <p className={pretendard.className}>이 텍스트는 샘플 텍스트 입니다.</p>
                            <b className={pretendard.className}>이 텍스트는 샘플 텍스트 입니다.</b>
                        </article>

                        <article>
                            <strong className="title">covered</strong>
                            <div className="box">
                                <p>&lt;tag className=&#123;covered.className&#125;&gt; &lt;/tag&gt;</p>
                            </div>
                            <p className={covered.className}>This is sample text.</p>
                        </article>
                    </dd>

                    <dt>Font Size Option</dt>
                    <dd>
                        <p>폰트사이즈는 지정된 클래스네임을 적용한다.</p>
                        <p>일부 해상도에서 폰트사이즈가 겹치는 경우가 있으므로, 반응형 사이즈를 확인하여 적용한다.</p>

                        <article>
                            <strong className="title">.fontSize-h1</strong>
                            <div className="box">
                                <p>&lt;tag className="fontSize-h1"&gt;&lt;/tag&gt;</p>
                            </div>
                            <p className="responsive">
                                [WIDE] - font-size: 20rem; line-height: 20rem; <br/>
                                [PC] - font-size: 16rem; line-height: 16rem; <br/>
                                [TAB] - font-size: 12rem; line-height: 12rem; <br/>
                                [MO] - font-size: 6rem; line-height: 6rem;
                            </p>
                            <p className="fontSize-h1">$fontSize-h1</p>
                            <b className="fontSize-h1">$fontSize-h1</b>
                        </article>

                        <article>
                            <strong className="title">.fontSize-h2</strong>
                            <div className="box">
                                <p>&lt;tag className="fontSize-h2"&gt;&lt;/tag&gt;</p>
                            </div>
                            <p className="responsive">
                                [WIDE] - font-size: 10.4rem; line-height: 11.4rem; <br/>
                                [PC] - font-size: 9rem; line-height: 10rem; <br/>
                                [TAB] - font-size: 8rem; line-height: 9rem; <br/>
                                [MO] - font-size: 5rem; line-height: 5.8rem;
                            </p>
                            <p className="fontSize-h2">$fontSize-h2</p>
                            <b className="fontSize-h2">$fontSize-h2</b>
                        </article>

                        <article>
                            <strong className="title">.fontSize-h3</strong>
                            <div className="box">
                                <p>&lt;tag className="fontSize-h3"&gt;&lt;/tag&gt;</p>
                            </div>
                            <p className="responsive">
                                [WIDE] - font-size: 5.6rem; line-height: 7.8rem; <br/>
                                [PC] - font-size: 4.6rem; line-height: 6.4rem; <br/>
                                [TAB] - font-size: 3.6rem; line-height: 5rem; <br/>
                                [MO] - font-size: 2.8rem; line-height: 4rem;
                            </p>
                            <p className="fontSize-h3">$fontSize-h3</p>
                            <b className="fontSize-h3">$fontSize-h3</b>
                        </article>

                        <article>
                            <strong className="title">.fontSize-h4</strong>
                            <div className="box">
                                <p>&lt;tag className="fontSize-h4"&gt;&lt;/tag&gt;</p>
                            </div>
                            <p className="responsive">
                                [WIDE] - font-size: 5rem; line-height: 7rem; <br/>
                                [PC] - font-size: 4.2rem; line-height: 5.8rem; <br/>
                                [TAB] - font-size: 3.4rem; line-height: 4.8rem; <br/>
                                [MO] - font-size: 2.2rem; line-height: 3rem;
                            </p>
                            <p className="fontSize-h4">$fontSize-h4</p>
                            <b className="fontSize-h4">$fontSize-h4</b>
                        </article>

                        <article>
                            <strong className="title">.fontSize-h5</strong>
                            <div className="box">
                                <p>&lt;tag className="fontSize-h5"&gt;&lt;/tag&gt;</p>
                            </div>
                            <p className="responsive">
                                [WIDE] - font-size: 3.8rem; line-height: 5rem; <br/>
                                [PC] - font-size: 3.2rem; line-height: 4.2rem; <br/>
                                [TAB] - font-size: 2.8rem; line-height: 3.8rem; <br/>
                                [MO] - font-size: 2.2rem; line-height: 3rem;
                            </p>
                            <p className="fontSize-h5">$fontSize-h5</p>
                            <b className="fontSize-h5">$fontSize-h5</b>
                        </article>

                        <article>
                            <strong className="title">.fontSize-h6</strong>
                            <div className="box">
                                <p>&lt;tag className="fontSize-h6"&gt;&lt;/tag&gt;</p>
                            </div>
                            <p className="responsive">
                                [WIDE] - font-size: 3.2rem; line-height: 4.5rem; <br/>
                                [PC] - font-size: 2.8rem; line-height: 4rem; <br/>
                                [TAB] - font-size: 2.3rem; line-height: 2.8rem; <br/>
                                [MO] - font-size: 1.8rem; line-height: 2.6rem;
                            </p>
                            <p className="fontSize-h6">$fontSize-h6</p>
                            <b className="fontSize-h6">$fontSize-h6</b>
                        </article>

                        <article>
                            <strong className="title">.fontSize-h7</strong>
                            <div className="box">
                                <p>&lt;tag className="fontSize-h7"&gt;&lt;/tag&gt;</p>
                            </div>
                            <p className="responsive">
                                [WIDE] - font-size: 2.8rem; line-height: 4rem; <br/>
                                [PC] - font-size: 2.4rem; line-height: 3.4rem; <br/>
                                [TAB] - font-size: 2rem; line-height: 3rem; <br/>
                                [MO] - font-size: 1.8rem; line-height: 2.6rem;
                            </p>
                            <p className="fontSize-h7">$fontSize-h7</p>
                            <b className="fontSize-h7">$fontSize-h7</b>
                        </article>

                        <article>
                            <strong className="title">.fontSize-h8</strong>
                            <div className="box">
                                <p>&lt;tag className="fontSize-h8"&gt;&lt;/tag&gt;</p>
                            </div>
                            <p className="responsive">
                                [WIDE] - font-size: 2.4rem; line-height: 3.4rem; <br/>
                                [PC] - font-size: 2.2rem; line-height: 3rem; <br/>
                                [TAB] - font-size: 1.6rem; line-height: 2.4rem; <br/>
                                [MO] - font-size: 1.4rem; line-height: 2.2rem;
                            </p>
                            <p className="fontSize-h8">$fontSize-h8</p>
                            <b className="fontSize-h8">$fontSize-h8</b>
                        </article>

                        <article>
                            <strong className="title">.fontSize-body1</strong>
                            <div className="box">
                                <p>&lt;tag className="fontSize-body1"&gt;&lt;/tag&gt;</p>
                            </div>
                            <p className="responsive">
                                [WIDE] - font-size: 2rem; line-height: 3.2rem; <br/>
                                [PC] - font-size: 1.8rem; line-height: 2.8rem; <br/>
                                [TAB] - font-size: 1.6rem; line-height: 2.6rem; <br/>
                                [MO] - font-size: 1.6rem; line-height: 2.6rem;
                            </p>
                            <p className="fontSize-body1">$fontSize-body1</p>
                            <b className="fontSize-body1">$fontSize-body1</b>
                        </article>

                        <article>
                            <strong className="title">.fontSize-body2</strong>
                            <div className="box">
                                <p>&lt;tag className="fontSize-body2"&gt;&lt;/tag&gt;</p>
                            </div>
                            <p className="responsive">
                                [WIDE] - font-size: 1.8rem; line-height: 2.8rem; <br/>
                                [PC] - font-size: 1.6rem; line-height: 2.4rem; <br/>
                                [TAB] - font-size: 1.4rem; line-height: 2.2rem; <br/>
                                [MO] - font-size: 1.2rem; line-height: 2rem;
                            </p>
                            <p className="fontSize-body2">$fontSize-body2</p>
                            <b className="fontSize-body2">$fontSize-body2</b>
                        </article>

                        <article>
                            <strong className="title">.fontSize-body3</strong>
                            <div className="box">
                                <p>&lt;tag className="fontSize-body3"&gt;&lt;/tag&gt;</p>
                            </div>
                            <p className="responsive">
                                [WIDE] - font-size: 1.8rem; line-height: 2.8rem; <br/>
                                [PC] - font-size: 1.6rem; line-height: 2.4rem; <br/>
                                [TAB] - font-size: 1.6rem; line-height: 2.4rem; <br/>
                                [MO] - font-size: 1.4rem; line-height: 2.2rem;
                            </p>
                            <p className="fontSize-body3">$fontSize-body3</p>
                            <b className="fontSize-body3">$fontSize-body3</b>
                        </article>

                        <article>
                            <strong className="title">.fontSize-caption</strong>
                            <div className="box">
                                <p>&lt;tag className="fontSize-caption"&gt;&lt;/tag&gt;</p>
                            </div>
                            <p className="responsive">
                                [WIDE] - font-size: 1.6rem; line-height: 2.4rem; <br/>
                                [PC] - font-size: 1.4rem; line-height: 2.2rem; <br/>
                                [TAB] - font-size: 1.6rem; line-height: 2.4rem; <br/>
                                [MO] - font-size: 1.2rem; line-height: 1.8rem;
                            </p>
                            <p className="fontSize-caption">$fontSize-caption</p>
                            <b className="fontSize-caption">$fontSize-caption</b>
                        </article>
                    </dd>

                </dl>
            </main>
        </div>
    )
}
