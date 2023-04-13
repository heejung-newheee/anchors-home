import "./scss/main.scss";
import Image from 'next/image'
import Link from "next/link";
// import Header from "@/components/Header/Header";

export const metadata = {
  title: 'Anchors',
  description: 'Anchors',
}

export default function Main() {
  return (
   <>
     {/*<Header />*/}
     <Link href="guide" className="name-is-cha" style={{lineHeight: "10px"}}>guide</Link><br/>
     <Link href="pages/about">about</Link> <br/> <br/>

     <p className="text">mediaQuery type - </p> <br/> <br/>

     <Link href="guide/test/chchaa">chchaa test page</Link> <br/>
     <Link href="guide/test/jueun">jueun test page</Link> <br/>
     <Link href="guide/test/mijeong">mijeong test page</Link>

   </>
  )
}
