import Image from 'next/image'
// import Header from "@/components/Header/Header";
import Link from "next/link";

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
   </>
  )
}
