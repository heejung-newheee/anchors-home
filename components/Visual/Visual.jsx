"use client"
import Image from 'next/image'
import Link from "next/link";

export default function Visual() {
    // props list = imgUrl, dimm

  return (
      <article className="visual"> <!-- {dimm} style="background-image:url(' {imgUrl.json} || {imgUrl.string} ');"-->
        <!-- 사용자가 컴포넌트에 직접 입력한 마크업이 들어가는 영역 -->
          {}
        <!-- // 사용자가 컴포넌트에 직접 입력한 마크업이 들어가는 영역 -->
    </article>
  )
}
