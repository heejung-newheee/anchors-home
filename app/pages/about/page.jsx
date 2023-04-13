"use client"
import Image from 'next/image'
import { Inter } from 'next/font/google'
import './about.scss'
import ElementTitle from '@/components/ElementTitle/ElementTitle'
import Visual from '@/components/Visual/Visual'
import SwiperArea from '@/components/SwiperArea/SwiperArea'
import LottiePlayer from '@/components/Lottie/LottiePlayer'

const inter = Inter({ subsets: ['latin'] })


export default function About() {
  return (
    <div>
      {/*<img src="/assets/images/ico/ico-btn-black-down.svg"/>*/}
      <p>this is about</p>

      {/* ElementTitle component test */}
      <ElementTitle data="Element Title"/>

      {/* Visual component test */}
      <Visual imgUrl="https://picsum.photos/1920/800" dimm="Y">
        <div>
          <p>Title</p>
          <span>Description</span>
        </div>
      </Visual>

      {/* SwiperArea component test */}
      <SwiperArea />
      <LottiePlayer src="/lottie/lottie_aboutus.json" style={{ height: '300px', width: '300px' }} />
    </div>
  )
}
