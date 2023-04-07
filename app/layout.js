import 'public/assets/css/common.module.scss';
import '@/public/assets/css/reset.css';
import Link from "next/link";
import {getFontDefinitions} from "@/helper/init-helper";
const {covered, pretendard, stolzl} = getFontDefinitions();

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className={stolzl.className}>
        <body>
          {children}
        </body>
    </html>
  )
}
