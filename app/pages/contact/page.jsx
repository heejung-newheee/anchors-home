import { Inter } from 'next/font/google';

export const metadata = {
  title: 'Anchors',
  description: '',
};

const inter = Inter({ subsets: ['latin'] });

function Contact() {
  return (
    <div>
      {/*<img src="/assets/images/ico/ico_btn_black_down.svg"/>*/}
      <p>this is contact!!!!</p>
    </div>
  );
}

export default Contact;
