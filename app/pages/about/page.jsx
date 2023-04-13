import Image from 'next/image';
import { Inter } from 'next/font/google';
import './about.scss';
import LottiePlayer from '@/components/Lottie/LottiePlayer';

export const metadata = {
  title: 'Anchors',
  description: '',
};

const inter = Inter({ subsets: ['latin'] });

function About() {
  return (
    <div>
      {/*<img src="/assets/images/ico/ico-btn-black-down.svg"/>*/}
      <p >this is about!!!!</p>
      <LottiePlayer render="svg" style={{height : '600px', width : '600px', "backgroundColor" : "#1D1D1F"}} src={"/lottie/lottie_aboutus.json"}/>
    </div>
  )
}

export  default  About;