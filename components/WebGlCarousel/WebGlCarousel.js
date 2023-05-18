'use client';
import { Suspense, useEffect, useState } from 'react';

import { Canvas } from '@react-three/fiber';

import Carousel from './Carousel';

import main from '@/helper/data/json/contents/main/main.json';
import './scss/WebGlCarousel.scss';

const images = main.aboutUs.portfolio.map((src) =>
  JSON.parse(
    JSON.stringify({
      image: main.imgUrl + src.image,
    }),
  ),
);

export default function WebGlCarousel() {
  const [isVisible, setIsVisible] = useState(true);
  const HandleScroll = () => {
    const INTRO_EN = document.querySelector('.intro_en');
    const INTRO_EN_TOP = INTRO_EN.getBoundingClientRect().top;

    INTRO_EN_TOP < -1000 ? setIsVisible(false) : setIsVisible(true);
  };

  useEffect(() => {
    const INTRO_EN = document.querySelector('.intro_en');
    const INTRO_EN_TOP = INTRO_EN.getBoundingClientRect().top;

    const CAROUSEL = document.querySelector('.main_carousel');
    const CAROUSEL_TOP = CAROUSEL.getBoundingClientRect().top;

    INTRO_EN_TOP < -1000 || CAROUSEL_TOP > 300 ? setIsVisible(false) : setIsVisible(true);

    window.addEventListener('scroll', HandleScroll);
    return () => {
      window.removeEventListener('scroll', HandleScroll); //clean up
    };
  }, []);

  return (
    <>
    {isVisible === false ? <div className="main_carousel" /> :

      <div className="main_carousel">
        <Canvas>
          <Suspense fallback={null}>
            <Carousel images={[...images, ...images]} />
          </Suspense>
        </Canvas>
      </div>
    }
    </>
  );
}
