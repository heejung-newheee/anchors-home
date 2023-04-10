import '@/public/assets/css/_reset.scss';
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
// import {getFontDefinitions} from "@/helper/init-helper";
// const {covered, pretendard, stolzl} = getFontDefinitions();

export default function RootLayout({ children }) {
  return (
    <html>
        <body lang="ko">
          <Header />
          {children}
          <Footer />
        </body>
    </html>
  )
}
