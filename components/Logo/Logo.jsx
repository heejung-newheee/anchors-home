import Image from 'next/image'
import Link from "next/link";
import Btn from "@/components/Btn/Btn";
import headerFooter from "@/helper/data/json/contents/headerFooter.json";

export default function Logo() {

  return (
      <h1 className="logo">{/*headerFooter.json 호출*/}
        <Btn type="link" url="/" alt="Anchors">
        {/*  {JSON.stringify(headerFooter)}*/}
        {/*  {headerFooter.copyright}*/}
        {/*  <Image*/}
        {/*    src={headerFooter.sendEmail}*/}
        {/*    width={100}*/}
        {/*    height={100}*/}
        {/*    className="image-width"*/}
        {/*    alt="Anchors"*/}
        {/*  />*/}
          logo
        </Btn>
      </h1>
  )
}
