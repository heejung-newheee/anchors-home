import './guide.scss';
import {getFontDefinitions} from "@/helper/init-helper";
const {covered, pretendard, stolzl} = getFontDefinitions();

export default function Guide() {
    return (
        <div className="guide">
            <header>
                <h1 className={covered.className}>Guide</h1>

                <ul>
                    <li className="active"><a href="index.html" title="">Rule</a></li>
                    <li><a href="layout.html" title="">Layout</a></li>
                    <li><a href="font.html" title="">Font</a></li>
                    <li><a href="color.html" title="">Color</a></li>
                    <li><a href="button.html" title="">Button</a></li>
                    <li><a href="video.html" title="">Video</a></li>
                </ul>
            </header>
            <main>
                <dl>
                    <dt>Web Style Guide</dt>
                    <dd>
                        <p>신규페이지 생성 요령 : </p>
                        <p>인코딩 : UTF-8</p>
                        <p>유형 : PC/Tablet/Mobile 반응형</p>
                        <p>Html 작성요령 : </p>
                        <p>Javascript, css 작성 요령 : </p>
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

                    <dt>Css Rule</dt>
                    <dd>
                        <p>css 파일 형식은 scss이다.</p>
                        <p>공통 css 위치 :</p>
                        <p>컴포넌트 css 위치 :</p>
                        <p>각 페이지 css 위치 :</p>
                    </dd>

                    <dt>Js Rule</dt>
                    <dd>
                        <p>공통 js 위치 :</p>
                        <p>컴포넌트 js 위치 :</p>
                        <p>각 페이지 js 위치 :</p>
                    </dd>

                    <dt>Comment(주석) Rule</dt>
                    <dd>
                        <p>시작과 종료 부분을 함께 표시하여 작성한다. Ex) </p>
                        <p>수정날짜, 수정사항 및 이슈사항을 작성한다. Ex)
                        </p>
                        <p>페이지 마크업 시 section 별로 영역을 나타낼수 있는 주석을 표시한다.</p>
                    </dd>

                    <dt>Component Rule</dt>
                    <dd>
                        <p>구현해야할 구조 및 기능이 공통 컴포넌트에 존재하는지 확인하고, 존재한다면 공통 컴포넌트를 최우선에서 사용한다.</p>
                        <p>공통 컴포넌트를 활용하지 못할 상황일 때 컴포넌트 가이드의 규칙에 반하지 않는 선에서 자유롭게 작성한다.</p>
                        <p>컴포넌트 가이드 파일을 확인하여 각 컴포넌트의 규칙 및 props 조건을 확인하여 사용한다.</p>
                        <p>공통 컴포넌트가 아닌 1회성 컴포넌트의 경우 새로 제작하여 사용한다.</p>
                        <p><a href="" title="" target="_blank">컴포넌트 가이드 PDF</a></p>
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
