'use client';
import Image from 'next/image';
import Link from 'next/link';
import Btn from '@/components/Btn/Btn';
import './scss/Footer.scss';
import { copyright } from '@/helper/data/json/contents/headerFooter.json';
// import Lottie

export default function Footer() {
  return (
    <footer className="footer">
      {/*headerFooter.json 호출*/}
      <div className="lottie-wrap">
        {/* Lottie component */}
        {/*Lottie component (Ready to talk about your works?)*/}
        {/* Lottie component */} {/*Lottie component (손가락모션)*/}
      </div>
      <div className="btn-wrap">
        <Btn
          className="btnPrimaryNormal"
          type="submit"
          alt="send mail"
          children="Send mail"
        />
      </div>
      <div className="copyright-wrap">
        <span className="copyright">{copyright}</span>
      </div>
    </footer>
  );
}
