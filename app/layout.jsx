import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import seo from '@/helper/data/json/contents/SEO.json';
import '@/public/assets/scss/_reset.scss';
import Script from 'next/script'

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
      <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-1GDTKDYGKN" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1GDTKDYGKN');
          `}
        </Script>
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
