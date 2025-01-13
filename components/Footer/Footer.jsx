'use client';

import { useLayoutEffect, useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { usePathname } from 'next/navigation';

import SendMail from '@/components/Footer/_components/SendMail';
import Menu from '@/components/Footer/_components/Menu';
import Information from '@/components/Footer/_components/Information';
import Copyright from '@/components/Footer/_components/Copyright';

import FooterData from '@/helper/data/json/contents/headerFooter.json';

import './scss/Footer.scss';

export default function Footer() {
  const BREAKPOINT_DESKTOP = useMediaQuery({ minWidth: 1279 });
  const LOCATION = usePathname();

  const [isTopVisible, setTopVisible] = useState(false); // 탑 버튼 사용 가능 여부
  const [isVisible, setIsVisible] = useState(false); // 마우스 이벤트 사용가능 분기 체크
  const [scrollTop, setScrollTop] = useState(0); // 스크롤 위치 

  useLayoutEffect(() => {
    if (BREAKPOINT_DESKTOP) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }

    if(LOCATION.includes("pages")) {
      setTopVisible(true);
    }else {
      setTopVisible(false);
    }
  }, [BREAKPOINT_DESKTOP, LOCATION]);


  useEffect(() => {
    const updateScrollSizes = () => {
      setScrollTop(window.scrollY || window.pageYOffset); // 스크롤 위치
    }

    updateScrollSizes();
    window.addEventListener('scroll', updateScrollSizes);
    window.addEventListener('resize', updateScrollSizes);

    return () => {
      window.removeEventListener('scroll', updateScrollSizes);
      window.removeEventListener('resize', updateScrollSizes);
    };
  }, [scrollTop]);

    // 값 테스트 하기
    console.log(isTopVisible);

  return (
    <footer className="footer section_div is_black">
      <SendMail data={FooterData.footer.information} state={{"isVisible" : isVisible}} />

      <div className='footer_container'>
        <Menu data={FooterData} />
        <Information data={FooterData.footer} />
        <Copyright data={FooterData.footer} />
      </div>
    </footer>
  );
}
