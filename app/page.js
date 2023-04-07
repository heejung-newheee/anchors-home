import Image from 'next/image'
import {getFontDefinitions} from "@/helper/init-helper";
const {covered, pretendard, stolzl} = getFontDefinitions();
// import Header from "@/components/Header/Header";
import Link from "next/link";

export default function Home() {
  return (
   <>
     {/*<Header />*/}
     <Link href="guide">guide</Link><br/>
     <Link href="pages/about">about</Link>
   </>
  )
}
