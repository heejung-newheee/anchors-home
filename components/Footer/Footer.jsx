'use client';

import { useLayoutEffect, useState, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';

import Btn from '@/components/Btn/Btn';

import Copyright from './_components/Copyright';
import Information from './_components/Information';
import Lotties from './_components/Lotties';
import Menu from './_components/Menu';
import SendMail from './_components/SendMail';
import TopButton from './_components/TopButton';

import FooterData from '@/helper/data/json/contents/headerFooter.json';
import Works from '@/helper/data/json/contents/works/works.json';

import './scss/Footer.scss';


export default function Footer() {
  const FOOTER_REF = useRef(null); // <footer> 요소 참조

  const BREAKPOINT_DESKTOP = useMediaQuery({ minWidth: 1279 }); // BREAKPOINT_DESKTOP 체크
  const [isVisible, setIsVisible] = useState(false); // SendMail 컴포넌트 사용 가능 여부 체크

  useLayoutEffect(() => {
    setIsVisible(BREAKPOINT_DESKTOP);
  }, [BREAKPOINT_DESKTOP]);

  return (
    <>
      <TopButton data={{ works : Works, footerRef: FOOTER_REF }} />
      <footer ref={FOOTER_REF} className="footer section_div is_black">
        {/* SendMail 컴포넌트는 사용하지 않음 : FooterData.footer.information && <SendMail data={FooterData.footer.information} state={{ isVisible }} /> || null */}
        <div className='footer_container'>
          <Lotties className={{wrap : "footer_container_lottie_wrap", item : ["line_lottie", "hand_lottie"]}} state={{desktop : isVisible}} />
          <Btn type="a" className={"footer_container_primary_normal_btn"} alt="send mail" url={`mailto:${FooterData.footer.information.sendEmail.href}`}>{FooterData.footer.information.sendEmail.title}</Btn>
        </div>

        <div className='footer_container'>
          {/* Menu 컴포넌트는 사용하지 않음 : <Menu data={FooterData} /> */}
          <Information data={FooterData.footer} className={{warp : "footer_container_anchors"}} />
          <Copyright data={FooterData.footer} className={{wrap : "footer_container_copyright"}} />
        </div>
      </footer>
    </>
  );
}