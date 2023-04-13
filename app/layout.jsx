import '@/public/assets/scss/_reset.scss';
// import Header from "@/components/Header/Header";
// import Footer from "@/components/Footer/Footer";

export default function RootLayout({ children }) {
  return (
    <html>
        <body lang="ko">
          {/*<Header />*/}
          {children}
          {/*<Footer />*/}
        </body>
    </html>
)
}
