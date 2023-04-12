import variables from '@/public/assets/scss/_variables.module.scss';
import './guide.scss';
import Link from "next/link";

export const metadata = {
    title: 'Anchors Guide',
    description: '',
}

export default function Guide() {
    return (
        <div className="guide">
            <header>
                <h1>Guide</h1>

                <ul>
                    <li className="active"><Link href="/guide">Rule</Link></li>
                    <li><Link href="guide/pages/layout">Layout</Link></li>
                    <li><Link href="guide/pages/font">Font</Link></li>
                    <li><Link href="guide/pages/color">Color</Link></li>
                    <li><Link href="guide/pages/button">Button</Link></li>
                    <li><Link href="guide/pages/component">Component</Link></li>
                </ul>
            </header>
            <main>
                <dl>
                    <dt>Web Style Guide</dt>
                    <dd>
                        <p>react 기반 next.js의 개발환경이다.</p>
                        <p>반응형은 WIDE 1536 / PC 1280 / TAB 768 / MO 360으로 구분된다.</p>
                        <p>신규 페이지는 app/pages/ 경로에 해당 페이지명으로 폴더링하여 page.js및 페이지명.scss를 생성하여 진행한다. <br/>Ex) app/pages/페이지명/</p>
                        <p>신규 페이지 생성시 하기 소스를 import 하여 페이지 소스내 직접 scss 변수값을 사용할 수 있다.</p>
                        <div className="box">
                            import variables from '@/public/assets/css/_variables.module.scss';
                        </div>
                        <p>공통 컴포넌트는 components/경로에 해당 컴포넌트명으로 폴더링하여 컴포넌트명.js 및 컴포넌트명.scss를 생성하여 진행한다. <br/>Ex) components/컴포넌트명/</p>
                        <p>공통 컴포넌트가 아닌 각 페이지 기준 1회성 컴포넌트의 경우 해당 페이지 경로에서 새로 제작될 컴포넌트를 공통 컴포넌트 생성 방식과 동일하게 폴더링하여 사용한다. <br/>Ex) app/pages/페이지명/페이지컴포넌트명/ </p>
                        <p>이미지는 ... 경로에 생성한다.</p>
                        <p>JSON파일은 ... 경로에 생성한다.</p>
                    </dd>

                    <dt>Component Rule</dt>
                    <dd>
                        <p>작업 전 먼저 구현해야할 구조 및 기능이 공통 컴포넌트에 존재하는지 확인하고, 존재한다면 공통 컴포넌트를 최우선에서 사용한다.</p>
                        <p>공통 컴포넌트를 활용하지 못할 상황일 때는 각 페이지 내에서 자유롭게 작성한다.</p>
                        <p>컴포넌트 가이드 파일을 확인하여 각 컴포넌트의 규칙 및 props 조건을 확인하여 사용한다.</p>
                        <p><a href="./pdf/Anchors_Homepage_Componet_Guide.pdf" title="" target="_blank" style={{textDecoration: 'underline'}}>컴포넌트 가이드 PDF 열기</a></p>
                    </dd>

                    <dt>Naming Rule</dt>
                    <dd>
                        <p>컨텐츠 내용을 암시할 수 있도록 약어가 아닌 fullname으로 작성한다.</p>
                        <p>숫자는 기본 두자리수로 작성한다.</p>
                        <p>Component : camelClass를 사용하되, 첫글자를 대문자로 표기한다. Ex) OurWorks</p>
                        <p>Class : 단어와 단어 사이에 하이픈을 사용한다. Ex) .our-works</p>
                        <p>ID : camelClass를 사용한다. Ex) ourWorks</p>
                        <p>Json : camelClass를 사용한다. Ex) ourWorks</p>
                    </dd>

                    <dt>Comment(주석) Rule</dt>
                    <dd>
                        <p>시작과 종료 부분을 함께 표시하여 작성한다.</p>
                        <p>수정날짜, 수정사항 및 이슈사항을 작성한다.</p>
                        <p>Ex) &lt;!-- S: 수정날짜 : 수정사항 &gt; &lt;!-- E: 수정날짜 : 수정사항 &gt;</p>
                        <p>페이지 마크업 시 section 별로 영역을 나타낼수 있는 주석을 표시한다.</p>
                    </dd>

                    <dt>Scss Rule</dt>
                    <dd>
                        <p>css 파일 형식은 scss이다.</p>
                        <p>공통 scss 위치 : public/assets/css/</p>
                        <p>각 페이지 scss 위치 : 각 페이지의 page.js와 나란히 정렬한다.</p>
                        <p>컴포넌트 scss 위치 : 각 컴포넌트.js와 나란히 정렬한다.</p>
                        <p>가이드에서 제공하는 변수 값은 scss 상에서는 속성값에 $변수명 을 적용하며, 페이지 상에서 직접 적용시에는 속성값에 '$'와'-'을 제외하고 camelClass를 적용하여 variables.변수값 으로 적용한다.</p>
                        <div className="box">
                            <p>
                                color : $color-black;<br/>
                                style = &#123;&#123; color : variables.colorBlack&#125;&#125; <br/>
                                (상기 web style guide에서 안내했던 import 파일의 변수값 사용)
                            </p>
                        </div>
                        <p>scss 미디어쿼리 작성시 믹스인으로 변수화된 미디어쿼리 방식을 사용한다.</p>
                        <div className="box">
                            <p>
                                .class &#123; 미디어쿼리 수정값 &#125;<br/>
                                @include desktop &#123;<br/>
                                .class &#123; 미디어쿼리 수정값 &#125;<br/>
                                &#125;<br/>
                                @include tablet &#123;<br/>
                                .class &#123; 미디어쿼리 수정값 &#125;<br/>
                                &#125;<br/>
                                @include mobile &#123;<br/>
                                .class &#123; 미디어쿼리 수정값 &#125;<br/>
                                &#125;
                            </p>
                        </div>
                    </dd>

                    <dt>Json Rule</dt>
                    <dd>
                        <p>Json 가이드 파일에서 제공하는 규칙을 토대로 작성한다.</p>
                        <p>예시의 값을 그대로 사용한다.</p>
                        <p><a href="./pdf/Anchors_Homepage_Json_Guide.pdf" title="" target="_blank" style={{textDecoration: 'underline'}}>JSON 가이드 PDF 열기</a></p>
                    </dd>

                </dl>
            </main>
        </div>
    )
}
