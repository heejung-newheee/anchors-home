'use client';

import SendMail from '@/components/Footer/_components/SendMail';
import Menu from '@/components/Footer/_components/Menu';
import Information from '@/components/Footer/_components/Information';
import Copyright from '@/components/Footer/_components/Copyright';

import FooterData from '@/helper/data/json/contents/headerFooter.json';

import './scss/Footer.scss';

export default function Footer() {

  return (
    <footer className="footer section_div is_black">
      <SendMail data={FooterData} />

      <div className='footer_container'>
        <Menu data={FooterData} />
        <Information data={FooterData} />
        <Copyright data={FooterData} />
      </div>
    </footer>
  );
}
