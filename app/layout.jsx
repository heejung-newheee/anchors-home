import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import '@/public/assets/scss/_reset.scss';

export const metadata = {
  icons: {
    shortcut: '/assets/images/favicon.png',
  },
  title: {
    default: 'ANCHORS.Inc',
    template: '%s | ANCHORS.Inc',
  },
  keywords: 'ANCHORS.Inc | Anything is Possible',
  description:
    '주식회사 앵커스는 2018년에 설립되어, 사원수 60여명 규모로 매년 50% 이상 성장하고 있습니다. 사업분야는 AEM Consulting & Development, Salesforce Consulting & Development, Digital Service 구축 및 운영, System Integration 등이며, 삼성, 현대, KIA, Chanel 등 대기업 프로젝트를 주로 진행하고 있습니다.',
  openGraph: {
    locale: 'ko-KR',
    type: 'website',
    title: 'ANCHORS.Inc',
    description: 'Anything is Possible',
    siteName: 'ANCHORS.Inc',
  },
};
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
