'use client';

import { useLayoutEffect, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const Lotties = ({ data }) => {
  const LOCATION = usePathname();
  const {works, footerRef} = data;

  const [isTopVisible, setTopVisible] = useState(false); // 탑 버튼 사용 가능 여부
  const [isFooterOffset, setIsFooterOffset] = useState({}); // footer 위치 값

  useLayoutEffect(() => {
    const workPageFilter = works.content.filter(({ pageUrl, websiteUrl }) => pageUrl.includes(LOCATION) && websiteUrl === "").length > 0;
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

    setTopVisible(showTopButton);
  }, [LOCATION, works]);

  useEffect(() => {
    const updateScrollSizes = () => {
      if (footerRef.current) {
        setIsFooterOffset(footerRef.current.getBoundingClientRect());
      }
    };

    updateScrollSizes();
    window.addEventListener('scroll', updateScrollSizes);
    window.addEventListener('resize', updateScrollSizes);

    return () => {
      window.removeEventListener('scroll', updateScrollSizes);
      window.removeEventListener('resize', updateScrollSizes);
    };
  }, [footerRef]);

  useEffect(() => {
    const shouldShowTopButton = window.innerHeight >= isFooterOffset.y && isFooterOffset.y > 0;
    if (LOCATION.includes("worksDetail") && !works.content.some(({ pageUrl, websiteUrl }) => pageUrl.includes(LOCATION) && websiteUrl === "")) {
      setTopVisible(shouldShowTopButton);
    }
  }, [isFooterOffset.y, LOCATION, works]);

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
    isTopVisible && <button type={"button"} className={"top_btn"} style={{ bottom: topBtnOffset() }} onClick={handleTopBtn} /> || null
  );
};

export default Lotties;