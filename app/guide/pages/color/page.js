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
                    <li><Link href="guide/pages/font">Font</Link></li>
                    <li className="active"><Link href="guide/pages/color">Color</Link></li>
                    <li><Link href="guide/pages/button">Button</Link></li>
                    <li><Link href="guide/pages/video">Video</Link></li>
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
                                <p>color: $color-black</p>
                            </div>
                            <p style={{color: '#000000'}}>$color-black #000000</p>
                        </article>

                        <article>
                            <strong className="title">$color-white</strong>
                            <div className="box">
                                <p>color: $color-white</p>
                            </div>
                            <p style={{color: '#FFFFFF', backgroundColor: '#000000'}}>$color-white #FFFFFF</p>
                        </article>

                        <article>
                            <strong className="title">$color-blue</strong>
                            <div className="box">
                                <p>color: $color-blue</p>
                            </div>
                            <p style={{color: '#1F0AAD'}}>$color-blue #1F0AAD</p>
                        </article>

                        <article>
                            <strong className="title">$color-lightblue</strong>
                            <div className="box">
                                <p>color: $color-lightblue</p>
                            </div>
                            <p style={{color: '#00BEFD'}}>$color-lightblue #00BEFD</p>
                        </article>

                        <article>
                            <strong className="title">$color-darkgrey</strong>
                            <div className="box">
                                <p>color: $color-darkgrey</p>
                            </div>
                            <p style={{color: '#848484'}}>$color-darkgrey #848484</p>
                        </article>

                        <article>
                            <strong className="title">$color-grey</strong>
                            <div className="box">
                                <p>color: $color-grey</p>
                            </div>
                            <p style={{color: '#D6D6D6'}}>$color-grey #D6D6D6</p>
                        </article>

                        <article>
                            <strong className="title">$color-lightgrey</strong>
                            <div className="box">
                                <p>color: $color-lightgrey</p>
                            </div>
                            <p style={{color: '#E4E4E4'}}>$color-lightgrey #E4E4E4</p>
                        </article>

                    </dd>


                </dl>
            </main>
        </div>
    )
}
