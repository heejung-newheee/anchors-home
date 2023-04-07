import 'public/assets/css/common.module.scss';
import 'public/assets/css/common.css';
import Link from "next/link";
import Header from "@/components/Header/Header";
import {getFontDefinitions} from "@/helper/init-helper";
const {covered, pretendard, stolzl} = getFontDefinitions();

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className={`${covered.className} ${pretendard.className} ${stolzl.className}`}>
        <body>
          {children}
        </body>
    </html>
  )
}
