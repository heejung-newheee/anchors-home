import './guide.scss';
import Link from "next/link";
import {getFontDefinitions} from "@/helper/init-helper";
const {covered, pretendard, stolzl} = getFontDefinitions();

export default function Guide() {
    return (
        <div className="guide">
            <header>
                <h1 className="fontSize-h1">Guide</h1>

                <ul>
                    <li className="active"><Link href="guide">Rule</Link></li>
                    <li><Link href="guide/pages/font">Font</Link></li>
                    <li><Link href="guide/pages/color">Color</Link></li>
                    <li><Link href="guide/pages/button">Button</Link></li>
                    <li><Link href="guide/pages/video">Video</Link></li>
                </ul>
            </header>
            <main>
                <dl>
                    <dt>Web Style Guide</dt>
                    <dd>
                        <p>react 기반 next.js의 개발환경이다.</p>
                        <p>반응형은 WIDE 1536 / PC 1280 / TAB 768 / MO 360으로 구분된다.</p>
                        <p>신규 페이지는 app/pages/ 경로에 해당 페이지명으로 폴더링하여 page.js및 페이지명.scss를 생성하여 진행한다. <br/>Ex) app/pages/페이지명/</p>
                        <p>공통 컴포넌트는 components/경로에 해당 컴포넌트명으로 폴더링하여 컴포넌트명.js 및 컴포넌트명.scss를 생성하여 진행한다. <br/>Ex) components/컴포넌트명/</p>
                        <p>공통 컴포넌트가 아닌 각 페이지 기준 1회성 컴포넌트의 경우 해당 페이지 경로에서 새로 제작될 컴포넌트를 공통 컴포넌트 생성 방식과 동일하게 폴더링하여 사용한다. <br/>Ex) app/pages/페이지명/페이지컴포넌트명/ </p>
                        <p>이미지는 ... 경로에 생성한다.</p>
                        <p>JSON파일은 ... 경로에 생성한다.</p>
                    </dd>

                    <dt>Component Rule</dt>
                    <dd>
                        <p>구현해야할 구조 및 기능이 공통 컴포넌트에 존재하는지 확인하고, 존재한다면 공통 컴포넌트를 최우선에서 사용한다.</p>
                        <p>공통 컴포넌트를 활용하지 못할 상황일 때는 각 페이지 내에서 자유롭게 작성한다.</p>
                        <p>컴포넌트 가이드 파일을 확인하여 각 컴포넌트의 규칙 및 props 조건을 확인하여 사용한다.</p>
                        <p><a href="" title="" target="_blank">컴포넌트 가이드 PDF</a></p>
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

                    <dt>Css Rule</dt>
                    <dd>
                        <p>css 파일 형식은 scss이다.</p>
                        <p>공통 css 위치 : public/assets/css/</p>
                        <p>각 페이지 css 위치 : 각 페이지의 page.js와 나란히 정렬한다.</p>
                        <p>컴포넌트 css 위치 : 각 컴포넌트.js와 나란히 정렬한다.</p>
                        <p>신규 css 생성시 common.module.scss를 import하여 사용한다.</p>
                        <div className="box">
                            @import "public/assets/css/common.module";
                        </div>
                        <p>css 미디어쿼리 작성시 믹스인으로 변수화된 미디어쿼리 방식을 사용한다.</p>
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
                        <p><a href="" title="" target="_blank">JSON 가이드 PDF</a></p>
                    </dd>

                </dl>
            </main>
        </div>
    )
}
