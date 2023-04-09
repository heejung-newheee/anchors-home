import '@/public/assets/css/common.scss';
// import {getFontDefinitions} from "@/helper/init-helper";
// const {covered, pretendard, stolzl} = getFontDefinitions();

export default function RootLayout({ children }) {
  return (
    <html>
        <body lang="ko">
          {children}
        </body>
    </html>
  )
}
