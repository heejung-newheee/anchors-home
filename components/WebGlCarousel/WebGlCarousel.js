'use client';
import { Suspense } from 'react';

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
  return (
    <div className="main-carousel">
      <Canvas>
        <Suspense fallback={null}>
          <Carousel images={[...images, ...images]} />
        </Suspense>
      </Canvas>
    </div>
  );
}
