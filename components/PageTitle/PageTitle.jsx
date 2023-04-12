"use client"
import Image from 'next/image'
import Link from "next/link";

export default function PageTitle() {
    // props list = data

  return (
      <!-- headerFooter.json 호출 -->
      <h2 className="page-title">
          <span>{/*header_footer.menuList.name[]*/}</span> <!-- 띄어쓰기 단위로 span에 하나씩 적용 -->
      </h2>
  )
}
