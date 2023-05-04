'use client';
import { Suspense } from 'react';

import { Canvas } from '@react-three/fiber';

import Carousel from './Carousel';
import './scss/WebGlCarousel.scss';

const images = [
  {
    image: 'assets/images/contents/main/carousel/1.jpg',
  },
  {
    image: 'assets/images/contents/main/carousel/2.jpg',
  },
  {
    image: 'assets/images/contents/main/carousel/3.jpg',
  },
  {
    image: 'assets/images/contents/main/carousel/4.jpg',
  },
  {
    image: 'assets/images/contents/main/carousel/5.jpg',
  },
  {
    image: 'assets/images/contents/main/carousel/6.jpg',
  },
  {
    image: 'assets/images/contents/main/carousel/7.jpg',
  },
  {
    image: 'assets/images/contents/main/carousel/8.jpg',
  },
  {
    image: 'assets/images/contents/main/carousel/9.jpg',
  },
  {
    image: 'assets/images/contents/main/carousel/10.jpg',
  },
  {
    image: 'assets/images/contents/main/carousel/11.jpg',
  },
  {
    image: 'assets/images/contents/main/carousel/12.jpg',
  },
];

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
