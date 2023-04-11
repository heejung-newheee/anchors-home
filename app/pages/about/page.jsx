import Image from 'next/image'
import { Inter } from 'next/font/google'
import './about.scss'
import Link from "next/link";

export const metadata = {
  title: 'Anchors',
  description: '',
}

const inter = Inter({ subsets: ['latin'] })


export default function About() {
  return (
    <div>
      {/*<img src="/assets/images/ico/ico-btn-black-down.svg"/>*/}
      <p>this is about</p>
    </div>
  )
}
