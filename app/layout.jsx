import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import seo from '@/helper/data/json/contents/SEO.json';
import '@/public/assets/scss/_reset.scss';

export const metadata = {
  icons: {
    shortcut: seo.icon,
  },
  title: {
    default: seo.title.default,
    template: seo.title.template,
  },
  keywords: seo.keywords,
  description: seo.description,
  openGraph: seo.openGraph,
};
export default function RootLayout({ children }) {
  console.log(seo);
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
