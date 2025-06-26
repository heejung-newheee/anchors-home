'use client';
import LottiePlayer from '@/components/LottiePlayer/LottiePlayer';

import handLottie from '@/public/assets/images/lottie/lottieFooterHand.json';
import lineLottie from '@/public/assets/images/lottie/lottieFooterLine.json';
import lineMobileLottie from '@/public/assets/images/lottie/lottieFooterLine_mobile.json';

const Lotties = ({ className, state }) => {
  const LINE_LOTTIE_STYLE = {
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
  };
  const HAND_LOTTIE_STYLE = {
    width: '100%',
    height: '100%',
  };

  return (
    <div className={className.wrap}>
      <LottiePlayer className={className.item[0]} data={state.desktop ? lineLottie : lineMobileLottie} style={LINE_LOTTIE_STYLE} />
      <LottiePlayer className={className.item[1]} data={handLottie} style={HAND_LOTTIE_STYLE} />
    </div>
  );
};

export default Lotties;