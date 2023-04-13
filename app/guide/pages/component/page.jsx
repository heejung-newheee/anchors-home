import variables from '@/public/assets/scss/_variables.module.scss';
import '../../guide.scss';
import Link from "next/link";
import Logo from "@/components/Logo/Logo";
import Btn from "@/components/Btn/Btn";

export default function GuideComponent() {
    return (
        <div className="guide">
            <header>
                <h1 className="fontSize-h1">Guide</h1>

                <ul>
                    <li><Link href="guide">Rule</Link></li>
                    <li><Link href="guide/pages/layout">Layout</Link></li>
                    <li><Link href="guide/pages/font">Font</Link></li>
                    <li><Link href="guide/pages/color">Color</Link></li>
                    <li><Link href="guide/pages/button">Button</Link></li>
                    <li className="active"><Link href="guide/pages/component">Component</Link></li>
                </ul>
            </header>
            <main>
                <dl>
                    <dt>Component Style Guide</dt>
                    <dd>
                        <p></p>
                    </dd>

                    <dt>Component Option</dt>
                    <dd>
                        <Btn type="link" url="/" design="btnSecondaryUp">button</Btn>
                        <Logo/>
                        <Btn type="button">button</Btn>


                    </dd>

                </dl>
            </main>
        </div>
    )
}
