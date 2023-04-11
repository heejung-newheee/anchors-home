"use client"
import Image from 'next/image'
import Link from "next/link";
import Btn from "@/components/Btn/Btn";
import {headerFooter} from "@/public/assets/json/header_footer";


export default function Logo() {
  console.log(headerFooter)

  return (
      <h1 className="logo">{/*header_footer.js 호출*/}
        <Btn type="link" url="/" alt="Anchors">
        {/*  로고 이미지  */}
        </Btn>
      </h1>
  )
}
