import Image from 'next/image'
import { Inter } from 'next/font/google'
// import Header from "@/components/Header/Header";
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
     {/*<Header />*/}
     <Link href="guide">guide</Link><br/>
     <Link href="pages/about">about</Link>
   </>
  )
}
