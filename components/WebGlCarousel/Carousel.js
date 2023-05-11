import React, { useRef, useState, useMemo } from 'react';

import { useFrame, useThree } from '@react-three/fiber';
import gsap from 'gsap';

import CarouselItem from './CarouselItem';
import PostProcessing from './PostProcessing';
import { getPiramidalIndex, lerp } from './utils';

const planeSettings = {
  width: 1.6,
  height: 4.5,
  gap: 0.15,
};

gsap.defaults({
  duration: 1,
  ease: 'none',
});

const Carousel = ({ images = [] }) => {
  const isOver = useRef(false);
  const [$root, setRoot] = useState();
  const $post = useRef();
  const { viewport } = useThree();

  const progress = useRef(-50);
  const oldProgress = useRef(0);
  const speed = useRef(0);
  const $items = useMemo(() => {
    if ($root) {
      return $root.children;
    }
  }, [$root]);

  const displayItems = (item, index, active) => {
    const half = Math.floor($items.length / 2);
    const piramidalIndex = getPiramidalIndex($items, active + half)[index];
    //const cycles = Math.floor(active / $items.length);
    //const yPos = Math.sin((index / $items.length) * Math.PI * 2) * 0.5;

    // 약간 야매로 처리한 느낌은 있는데, 아무튼 됩니다 무한 스크롤...
    if (active - index < 1) {
      if (active - index === 0) {
        item.visible = false;
      } else {
        if (active === 0 && index === $items.length - 1) {
          item.visible = false;
        } else {
          item.visible = true;
        }
      }

      gsap.to(item.position, {
        x: (index - active - half) * (planeSettings.width + planeSettings.gap),
        y: $items.length * -0.3 + piramidalIndex * 0.3 + 1.1,
      });
    } else {
      if (active - index === 1) {
        item.visible = false;
      } else {
        item.visible = true;
      }

      gsap.to(item.position, {
        x:
          (index - active - half + $items.length) *
          (planeSettings.width + planeSettings.gap),
        y: $items.length * -0.3 + piramidalIndex * 0.3 + 1.1,
      });
    }

    /*else if (active - index === 1) {
      gsap.to(item.position, {
        x:
          (index - active + $items.length * (cycles + 1)) *
          (planeSettings.width + planeSettings.gap),
        y: 100,
      });
    } else if (active - index === 0) {
      gsap.to(item.position, {
        x:
          (index - active + $items.length * (cycles + 1)) *
          (planeSettings.width + planeSettings.gap),
        y: 100,
      });
    } */
  };

  useFrame(() => {
    const autoScrollSpeed = !isOver.current ? 1.5 / images.length : 0;
    progress.current = Math.max(-50, progress.current + autoScrollSpeed);
    console.log(isOver.current)

    const active =
      Math.floor((progress.current / 100) * ($items.length - 1)) %
      $items.length;
    $items.forEach((item, index) => displayItems(item, index, active));
    speed.current = lerp(
      speed.current,
      Math.abs(oldProgress.current - progress.current),
      0.1,
    );

    oldProgress.current = lerp(oldProgress.current, progress.current, 0.1);

    if ($post.current) {
      $post.current.thickness = speed.current;
    }

  });

  const renderPlaneEvents = () => {
    return (
      <mesh position={[0, 0, -0.01]}>
        <planeGeometry args={[viewport.width, viewport.height]} />
        <meshBasicMaterial transparent={true} opacity={0} />
      </mesh>
    );
  };

  const _setOver = (value) => {
    isOver.current = value;
  };

  const renderSlider = () => {
    return (
      <group ref={setRoot}>
        {images.map((item, i) => (
          <CarouselItem
            width={planeSettings.width}
            height={planeSettings.height}
            onHandOver={(value) => _setOver(value)}
            key={`${item.image}-${i}`}
            item={item}
            index={i}
          />
        ))}
      </group>
    );
  };

  return (
    <group>
      {renderPlaneEvents()}
      {renderSlider()}
      <PostProcessing ref={$post} />
    </group>
  );
};

export default Carousel;
