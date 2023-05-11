'use client';
import { useRef } from 'react';
import { Controls, PlayState, Reveal, Tween } from 'react-gsap';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import LottiePlayer from '@/components/LottiePlayer/LottiePlayer';
import lottieMainKeyVisual from '@/public/assets/images/lottie/lottieMainKeyVisual.json';

gsap.registerPlugin(ScrollTrigger);

/**
 * 로티 애니메이션 예제
 * 참고
 *  - https://bitworking.github.io/react-gsap/
 *  - https://lottiereact.com/
 * @returns
 */
function LottieTest() {
  const LottiePlayerRef = useRef();

  return (
    <>
      <p> this is chomj!!!! </p>
      <Controls playState={PlayState.stop}>
        <Tween
          to={{ x: '200px', rotation: 180 }}
          duration={2}
          ease="back.out(1.7)"
        >
          <div
            style={{ width: '100px', height: '100px', background: '#ccc' }}
          />
        </Tween>
      </Controls>
      <div style={{ height: '1000px', backgroundColor: 'lightgray' }}>!</div>
      <LottiePlayer
        ref={LottiePlayerRef}
        data={lottieMainKeyVisual}
        autoplay={false}
        loop={false}
      />
      <Tween
        to={{
          x: '200px',
          y: '100px',
          scale: 10,
          scrollTrigger: {
            trigger: '.square',
            start: '10px center',
            end: '400px center',
            scrub: 0.5,
            markers: true,
            onEnter: (d) => {
              LottiePlayerRef.current.controll('play');
            },
            onLeave: () => {
              LottiePlayerRef.current.controll('pause');
            },
            onUpdate: (d) => {
              // console.log(d);
            },
          },
        }}
      >
        <div
          className="square"
          style={{ width: '100px', height: '100px', background: '#ccc' }}
        />
      </Tween>
      <div style={{ height: '1000px', backgroundColor: 'lightgray' }}>!</div>
      <Reveal repeat>
        <Tween to={{ opacity: 1 }} duration={2}>
          <div style={{ opacity: 0 }}>This headline is fading in</div>
        </Tween>
      </Reveal>
      <div style={{ height: '1000px', backgroundColor: 'lightgray' }}>!</div>

      <div style={{ height: '1000px', backgroundColor: 'lightgray' }}>!</div>
    </>
  );
}

export default LottieTest;
