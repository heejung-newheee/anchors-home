import { Inter } from 'next/font/google';
import Image from 'next/image';

export const metadata = {
  title: 'Anchors',
  description: '',
};

const inter = Inter({ subsets: ['latin'] });

function Main() {
  return (
    <div>
      {/*<img src="/assets/images/ico/ico_btn_black_down.svg"/>*/}
      <p>this is main!!!!</p>
    </div>
  );
}

export default Main;
