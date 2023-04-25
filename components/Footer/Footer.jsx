'use client';

import Link from 'next/link';

import Btn from '@/components/Btn/Btn';
import './scss/Footer.scss';
import LottiePlayer from '@/components/LottiePlayer/LottiePlayer';
import copyright from '@/helper/data/json/contents/headerFooter.json';
import handLottie from '@/public/assets/images/lottie/lottieFooterHand.json';
import lineLottie from '@/public/assets/images/lottie/lottieFooterLine.json';
// import LottiePlayer

export default function Footer() {
  const LINE_LOTTIE_STYLE = {
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
  };
  const HAND_LOTTIE_STYLE = {
    width: '100%',
    height: '100%',
  };

  return (
    <footer className="footer section_div is_black">
      {/*headerFooter.json 호출*/}
      <div className="lottie_wrap">
        <LottiePlayer
          className="line_lottie"
          data={lineLottie}
          style={LINE_LOTTIE_STYLE}
        />
        <LottiePlayer
          className="hand_lottie"
          data={handLottie}
          style={HAND_LOTTIE_STYLE}
        />
      </div>
      <div className="btn_wrap">
        <Btn type="submit" alt="send mail">
          Send mail
        </Btn>
      </div>
      <div className="copyright_wrap">
        <span className="copyright">{copyright.copyright}</span>
      </div>
    </footer>
  );
}
