'use client';

import { useLayoutEffect, useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { usePathname } from 'next/navigation';

import Description from '@/components/Description/Description';

const SendMail = ({data}) => {
  const { sendEmail } = data;

  const LOCATION = usePathname();
  const BREAKPOINT_DESKTOP = useMediaQuery({ minWidth: 1279 });

  const [isTopVisible, setTopVisible] = useState(false); // 탑 버튼 사용 가능 여부
  const [isVisible, setIsVisible] = useState(false); // 사용가능 분기 체크
  const [isHovered, setIsHovered] = useState(false); // 마우스 오버 체크
  const [scrollTop, setScrollTop] = useState(0); // 스크롤 위치 
  const [isMouseMove, setIsMouseMove] = useState({left: "0", top: "0"}); // 마우스 포인트 위치
  
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
      setScrollTop(window.scrollY || window.pageYOffset);
      setIsMouseMove({left: "0", top: scrollTop + "px"});
    }

    updateScrollSizes();
    window.addEventListener('scroll', updateScrollSizes);
    window.addEventListener('resize', updateScrollSizes);

    return () => {
      window.removeEventListener('scroll', updateScrollSizes);
      window.removeEventListener('resize', updateScrollSizes);
    };
  }, [scrollTop]);

  const handleMouseEnter = (e) => {
    setIsHovered(true);
    setIsMouseMove({left: e.clientX + "px", top: scrollTop + e.screenY + "px"})
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseMove = (e) => {
    setIsMouseMove({left: e.clientX + "px", top: scrollTop + e.screenY + "px"});
  };


  // 값 테스트 하기
  console.log(isTopVisible, LOCATION);

  // 탑 버튼 작업
  // 하단 문의하기 버튼 텍스트 애니메이션 작업
  
  return (
    <>
      <a href={`mailto:${sendEmail}`} title={"send mail"} className={"footer_sendMail_btn"} onMouseMove={(e)=> handleMouseMove(e)} onMouseEnter={(e)=> handleMouseEnter(e)} onMouseLeave={handleMouseLeave}>
        <Description innerHTMLOption="Y" data={isHovered ? "Let’s go" : "Ready to email us?"} />
      </a>

      {isVisible && <i className={isHovered ? "footer_cursor isHover" : "footer_cursor"} style={isMouseMove}>{"Send maill"}</i>}
    </>
  );
};

export default SendMail;
 