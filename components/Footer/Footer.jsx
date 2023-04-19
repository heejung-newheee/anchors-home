'use client';

import Link from 'next/link';

import Btn from '@/components/Btn/Btn';
import './scss/Footer.scss';
import { copyright } from '@/helper/data/json/contents/headerFooter.json';
// import LottiePlayer

export default function Footer() {
  return (
    <footer className="footer">
      {/*headerFooter.json 호출*/}
      <div className="lottie_wrap">
        {/* Lottie component */}
        {/*Lottie component (Ready to talk about your works?)*/}
        {/* Lottie component */} {/*Lottie component (손가락모션)*/}
      </div>
      <div className="btn_wrap">
        <Btn className="btnPrimaryNormal" type="submit" alt="send mail">
          Send mail
        </Btn>
      </div>
      <div className="copyright_wrap">
        <span className="copyright">{copyright}</span>
      </div>
    </footer>
  );
}
