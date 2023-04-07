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
                    <li><Link href="guide/pages/color">Color</Link></li>
                    <li className="active"><Link href="guide/pages/button">Button</Link></li>
                    <li><Link href="guide/pages/video">Video</Link></li>
                </ul>
            </header>
            <main>
                <dl>
                    <dt>Button Style Guide</dt>
                    <dd>
                        <p>1rem은 10px을 기준으로 한다.</p>
                        <p>기본 폰트 사이즈는 2rem(20px)이다.</p>
                        <p>모든 태그의 폰트사이즈는 2rem이며, 상속이 자동으로 되지 않으므로 상속받아야 할 경우 font-size: inherit;을 적용한다.</p>
                        <p>font-weight는 기본적으로 400이며, 볼드체는 700이다.</p>
                    </dd>

                    <dt>Button Option</dt>
                    <dd>
                    </dd>

                </dl>
            </main>
        </div>
    )
}
