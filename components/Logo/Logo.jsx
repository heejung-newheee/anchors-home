"use client"
import Image from 'next/image'
import Link from "next/link";
import Btn from "@/components/Btn/Btn";
import headerFooter from "@/helper/data/json/headerFooter.json";


export default function Logo() {

  return (
      <h1 className="logo">{/*headerFooter.json 호출*/}
        <Btn type="link" url="/" alt="Anchors">
        {/*  로고 이미지  */}
          {JSON.stringify(headerFooter)}
          {headerFooter.copyright}
        </Btn>
      </h1>
  )
}
