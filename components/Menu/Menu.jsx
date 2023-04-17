'use client';
import './scss/Menu.scss';
import Image from 'next/image';
import Link from 'next/link';

import Btn from '@/components/Btn/Btn';
import headerFooter from '@/helper/data/json/contents/headerFooter.json';
export default function Menu() {
  const menuBtnClass = () => {
    document.querySelector('button').classList.toggle('close');
  };

  return (
    <article className="menu">
      <Btn type="button" className="menu-btn black" onClick={menuBtnClass}>
        메뉴버튼
      </Btn>
      {/* 햄버거 버튼 */}
      <div className="gnb-wrap">
        <ul className="gnb">
          {headerFooter.menuList.map((menuList, idx) => (
            <li key={idx}>
              <Btn type="link" url={menuList.url} alt={menuList.alt}>
                {menuList.name[0].word}
                {menuList.name[1] ? ' ' + menuList.name[1].word : ''}
              </Btn>
            </li>
          ))}
        </ul>
        <span>{headerFooter.copyright}</span>
      </div>
    </article>
  );
}
