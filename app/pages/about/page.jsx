import { Inter } from 'next/font/google';
import Image from 'next/image';
import './about.scss';

export const metadata = {
  title: 'Anchors',
  description: '',
};

const inter = Inter({ subsets: ['latin'] });

function About() {
  return (
    <div>
      {/*<img src="/assets/images/ico/ico_btn_black_down.svg"/>*/}
      <p>this is about!!!!</p>
    </div>
  );
}

export default About;
