'use client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useRef } from 'react';
import { Controls, PlayState, Reveal, Tween } from 'react-gsap';
import Lottie from 'lottie-react';
import lottie_main from '@/public/lottie/lottie_main_keyvisual.json';

gsap.registerPlugin(ScrollTrigger);

const FadeInLeft = ({ children }) => (
  <Tween
    from={{ opacity: 0.5, transform: 'translate3d(-100vw, 0, 0)' }}
    ease="back.out(1.4)"
  >
    {children}
  </Tween>
);

function LottieTest() {
  const lottieRef = useRef();

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
      <Lottie
        lottieRef={lottieRef}
        animationData={lottie_main}
        autoplay={false}
        loop={false}
      />
      <Tween
        to={{
          x: '100vw',
          y: '100vh',
          scale: 10,
          scrollTrigger: {
            trigger: '.square',
            start: '10px center',
            end: '400px center',
            scrub: 0.5,
            markers: true,
            onEnter: (d) => {
              console.log('📢[LottieTest.jsx:48]: onEnter: ', d);
              lottieRef.current.play();
            },
            onUpdate: (d) => {
              console.log(d);
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
        <Tween from={{ opacity: 0 }} duration={2}>
          <div>This headline is fading in</div>
        </Tween>
      </Reveal>
      <div style={{ height: '1000px', backgroundColor: 'lightgray' }}>!</div>
      <Reveal repeat trigger={<div />}>
        <FadeInLeft>
          <div style={{ backgroundColor: 'red' }}>
            This headline is coming from left
          </div>
        </FadeInLeft>
      </Reveal>
      <div style={{ height: '1000px', backgroundColor: 'lightgray' }}>!</div>
    </>
  );
}

export default LottieTest;
