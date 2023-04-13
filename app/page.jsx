import Image from 'next/image'
// import Header from "@/components/Header/Header";
import Link from "next/link";
import "./scss/main.scss";
// import {initHelper} from "@/helper/init-helper";
// const {jquery , variables} = initHelper();
// import dynamic from 'next/dynamic'
// const jquery= dynamic(() => import("@/public/lib/jquery_loader"), { ssr: false });
// import "@/public/lib/jquery_loader";

export const metadata = {
  title: 'Anchors',
  description: '',
}

export default function Home() {
  return (
   <>
     {/*<Header />*/}
     <Link href="guide" className="name-is-cha" style={{lineHeight: "10px"}}>guide</Link><br/>
     <Link href="pages/about">about</Link>

     <p className="text">mediaQuery type - </p>
   </>
  )
}
