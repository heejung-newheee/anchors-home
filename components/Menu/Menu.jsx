"use client"
import Image from 'next/image'
import Link from "next/link";
// import Btn

export default function Menu() {
  return (
      <!-- header_footer.json 호출 -->
      <article className="menu">
          {/* Btn component */} <!-- 햄버거 버튼 -->
          <div className="gnb-wrap">
              <ul className="gnb">
                  <!-- header_footer.menuList 배열값으로 반복 생성 -->
                  <li>
                      {/* Btn component */} <!-- href="{header_footer.menuList.url}" title="{header_footer.menuList.alt}" -->
                     {/* header_footer.menuList.name (배열 모두 담기,배열 사이에 띄어쓰기 포함하기) */}
                      {/* // Btn component */}
                  </li>
                  <!-- // header_footer.menuList 배열값으로 반복 생성 -->
              </ul>
              <span>{/*header_footer.copyright*/}</span>
          </div>
      </article>
  )
}
