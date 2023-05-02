import '@/public/assets/scss/_reset.scss';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
