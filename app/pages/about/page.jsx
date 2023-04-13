import Image from 'next/image'
import { Inter } from 'next/font/google'
// import './about.scss'
import LottiePlayer from '@/components/Lottie/LottiePlayer'

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
      <LottiePlayer src="/lottie/lottie_aboutus.json" style={{ height: '300px', width: '300px' }} />
    </div>
  )
}
