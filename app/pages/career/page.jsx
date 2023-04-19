import { Inter } from 'next/font/google';
import Image from 'next/image';

export const metadata = {
  title: 'Anchors',
  description: '',
};

const inter = Inter({ subsets: ['latin'] });

function Career() {
  return (
    <div>
      {/*<img src="/assets/images/ico/ico_btn_black_down.svg"/>*/}
      <p>this is career!!!!</p>
    </div>
  );
}

export default Career;
