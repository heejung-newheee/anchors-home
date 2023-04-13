import Image from 'next/image';
import { Inter } from 'next/font/google';
import './about.scss';

export const metadata = {
  title: 'Anchors',
  description: '',
};

const inter = Inter({ subsets: ['latin'] });

function About() {
  return (
    <div>
      {/*<img src="/assets/images/ico/ico-btn-black-down.svg"/>*/}
      this is about!!!!
    </div>
  )
}

export  default  About;