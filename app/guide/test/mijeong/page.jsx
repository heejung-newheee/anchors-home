'use client';
import { useState } from 'react';

import LottiePlayer from '@/components/Lottie/LottiePlayer';
import { initHelper } from '@/helper/init-helper';
const { jquery, variables } = initHelper();

const SCROLL_CONTROLS = { autoplay: false, isplay: 'pause' };

function mijeong() {
  const [isPlay, setIsPlay] = useState('pause');

  return (
    <>
      <p> this is chomj!!!! </p>
      <LottiePlayer
        render="svg"
        style={{ height: '600px', width: '600px', backgroundColor: '#1D1D1F' }}
        src={'/lottie/lottie_aboutus.json'}
      />
      <p style={{ marginTop: '1000px' }}> 하나더 !! </p>
      <LottiePlayer
        render="svg"
        style={{ backgroundColor: '#1D1D1F', marginBottom: '1000px' }}
        src={'/lottie/lottie_goingto.json'}
        autoplay={SCROLL_CONTROLS.autoplay}
        isplay={isPlay}
      />
    </>
  );
}
export default mijeong;
