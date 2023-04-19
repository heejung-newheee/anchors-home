'use client';
import { useRef, forwardRef, useImperativeHandle } from 'react';

import Lottie from 'lottie-react';

const DEFAULT_STYLE = { height: '100%', width: '100%' };
const LottiePlayer = forwardRef(
  (
    { className, data, loop = true, autoplay = true, style = DEFAULT_STYLE },
    ref,
  ) => {
    const lottieRef = useRef();
    const COMPONENTS_STYLE = { ...DEFAULT_STYLE, ...style };

    useImperativeHandle(ref, () => ({
      controll(value) {
        switch (value) {
          case 'play':
            lottieRef.current.play();
            console.log('LottiePlayer', lottieRef);
            break;
          case 'stop':
            lottieRef.current.stop();
            break;
          case 'pause':
            lottieRef.current.pause();
            break;
        }
      },
    }));

    return (
      <div className={className}>
        <Lottie
          lottieRef={lottieRef}
          loop={loop}
          autoplay={autoplay}
          animationData={data}
          style={COMPONENTS_STYLE}
        />
      </div>
    );
  },
);
export default LottiePlayer;
