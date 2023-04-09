import variables from '/public/assets/css/_variables.module.scss';
import '../../guide.scss';
import Link from "next/link";

export default function GuideButton() {
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
                    <li><Link href="guide/pages/component">Component</Link></li>
                </ul>
            </header>
            <main>
                <dl>
                    <dt>Button Style Guide</dt>
                    <dd>
                        <p>1rem은 10px을 기준으로 한다.</p>
                    </dd>

                    <dt>Button Option</dt>
                    <dd>

                        <article>
                            <strong className="title">button type</strong>
                            <div className="box">
                                <p>&lt;button className="fontSize-h3"&gt;&lt;/button&gt;</p>
                                <p>&lt;a className="fontSize-h3"&gt;&lt;/a&gt;</p>
                            </div>
                            <div className="cta-outer" style={{backgroundColor :'#000'}}>
                                <button className="btn-primary">BtnPrimary</button>
                            </div>
                        </article>

                    </dd>

                </dl>
            </main>
        </div>
    )
}
