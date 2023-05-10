'use client';
import { useRef, forwardRef, useImperativeHandle } from 'react';

import Lottie from 'lottie-react';

const DEFAULT_STYLE = { height: '100%', width: '100%' };
const LottiePlayer = forwardRef(
  (
    { className, data, loop = true, autoplay = true, style = DEFAULT_STYLE },
    ref,
  ) => {
    const LOTTIE_REF = useRef();
    const COMPONENTS_STYLE = { ...DEFAULT_STYLE, ...style };

    useImperativeHandle(ref, () => ({
      controll(value) {
        // console.log('로티 컴포넌트', value);
        switch (value) {
          case 'play':
            LOTTIE_REF.current.play();

            break;
          case 'stop':
            LOTTIE_REF.current.stop();
            break;
          case 'pause':
            LOTTIE_REF.current.pause();
            break;
        }
      },
    }));

    return (
      <div className={className}>
        <Lottie
          lottieRef={LOTTIE_REF}
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
