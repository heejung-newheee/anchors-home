import { Inter } from 'next/font/google';

import './about.scss';

export const metadata = {
  title: 'Anchors',
  description: '',
};

function About() {
  return (
    <div>
      {/*<img src="/assets/images/ico/ico_btn_black_down.svg"/>*/}
      <p>this is about!!!!</p>
    </div>
  );
}

export default About;
