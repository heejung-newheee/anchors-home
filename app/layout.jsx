"use client";
import '@/public/assets/scss/_reset.scss';
import {initHelper} from "@/helper/init-helper";
const {jquery , variables, Helmet, HelmetProvider} = initHelper();
// import Header from "@/components/Header/Header";
// import Footer from "@/components/Footer/Footer";

export default function RootLayout({ children }) {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Hello World</title>
      </Helmet>
      <html>
          <body lang="ko">
            {/*<Header />*/}
            {children}
            {/*<Footer />*/}
          </body>
      </html>
    </HelmetProvider>
  )
}
