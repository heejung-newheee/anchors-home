'use client';

import { useLayoutEffect, useState, useEffect, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import { usePathname } from 'next/navigation';

import SendMail from '@/components/Footer/_components/SendMail';
import Menu from '@/components/Footer/_components/Menu';
import Information from '@/components/Footer/_components/Information';
import Copyright from '@/components/Footer/_components/Copyright';

import FooterData from '@/helper/data/json/contents/headerFooter.json';
import Works from '@/helper/data/json/contents/works/works.json';

import './scss/Footer.scss';

export default function Footer() {
  const BREAKPOINT_DESKTOP = useMediaQuery({ minWidth: 1279 });
  const LOCATION = usePathname();
  const FOOTER_REF = useRef(null); // <footer> 요소 참조

  const [isTopVisible, setTopVisible] = useState(false); // 탑 버튼 사용 가능 여부
  const [isVisible, setIsVisible] = useState(false); // BREAKPOINT_DESKTOP 체크
  const [isFooterOffset, setIsFooterOffset] = useState({}); // footer 위치 값

  useLayoutEffect(() => {
    const workPageFilter = Works.content.filter(({ pageUrl, websiteUrl }) => pageUrl.includes(LOCATION) && websiteUrl === "").length > 0;
    const showTopButton = (
      (LOCATION.includes("works") && workPageFilter) ||
      LOCATION.includes("about") ||
      LOCATION.includes("service") ||
      LOCATION.includes("platform") ||
      LOCATION.includes("contact") ||
      LOCATION.includes("career") ||
      LOCATION.includes("esg") ||
      LOCATION.includes("privacy")
    );

    setIsVisible(BREAKPOINT_DESKTOP);
    setTopVisible(showTopButton);
  }, [BREAKPOINT_DESKTOP, LOCATION]);

  useEffect(() => {
    const updateScrollSizes = () => {
      if (FOOTER_REF.current) {
        setIsFooterOffset(FOOTER_REF.current.getBoundingClientRect());
      }
    };

    updateScrollSizes();
    window.addEventListener('scroll', updateScrollSizes);
    window.addEventListener('resize', updateScrollSizes);

    return () => {
      window.removeEventListener('scroll', updateScrollSizes);
      window.removeEventListener('resize', updateScrollSizes);
    };
  }, []);

  useEffect(() => {
    const shouldShowTopButton = window.innerHeight >= isFooterOffset.y && isFooterOffset.y > 0;
    if (LOCATION.includes("worksDetail") && !Works.content.some(({ pageUrl, websiteUrl }) => pageUrl.includes(LOCATION) && websiteUrl === "")) {
      setTopVisible(shouldShowTopButton);
    }
  }, [isFooterOffset.y, LOCATION]);

  const topBtnOffset = () => {
    const offset = window.innerHeight - isFooterOffset.y;
    if (window.innerHeight >= isFooterOffset.y) {
      return offset;
    }
    return 0;
  };

  const handleTopBtn = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <>
      {isTopVisible && <button type={"button"} className={"top_btn"} style={{ bottom: topBtnOffset() }} onClick={handleTopBtn} /> || null}
      <footer ref={FOOTER_REF} className="footer section_div is_black">
        {FooterData.footer.information && <SendMail data={FooterData.footer.information} state={{ isVisible }} /> || null}

        <div className='footer_container'>
          <Menu data={FooterData} />
          <Information data={FooterData.footer} />
          <Copyright data={FooterData.footer} />
        </div>
      </footer>
    </>
  );
}