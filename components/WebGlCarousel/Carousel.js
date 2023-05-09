import { useRef, useState, useMemo } from 'react';

import { useFrame, useThree } from '@react-three/fiber';
import gsap from 'gsap';

import CarouselItem from './CarouselItem';
import PostProcessing from './PostProcessing';
import { lerp } from './utils';

const planeSettings = {
  width: 1.4,
  height: 3.6,
  gap: 0.1,
};

gsap.defaults({
  duration: 2.5,
  ease: 'power3.out',
});

const Carousel = ({ images = [] }) => {
  const [$root, setRoot] = useState();
  const $post = useRef();
  const { viewport } = useThree();

  const [isMouseOver, setIsMouseOver] = useState(false);

  const progress = useRef(0);
  const oldProgress = useRef(0);
  const speed = useRef(0);
  const $items = useMemo(() => {
    if ($root) {
      return $root.children;
    }
  }, [$root]);

  const displayItems = (item, index, active) => {
    const cycles = Math.floor(active / $items.length);
    const half = Math.floor($items.length / 2);
    const yPos = Math.sin((index / $items.length) * Math.PI * 2) * 0.5;

    // 약간 야매로 처리한 느낌은 있는데, 아무튼 됩니다 무한 스크롤...
    if (active - index < 1) {
      gsap.to(item.position, {
        x: (index - active - half) * (planeSettings.width + planeSettings.gap),
        y: yPos,
      });
    } else if (active - index === 1) {
      gsap.to(item.position, {
        x:
          (index - active - half + $items.length * (cycles + 1)) *
          (planeSettings.width + planeSettings.gap),
        y: 100,
      });
    } else if (active - index === 0) {
      gsap.to(item.position, {
        x:
          (index - active - half + $items.length * (cycles + 1)) *
          (planeSettings.width + planeSettings.gap),
        y: 100,
      });
    } else {
      gsap.to(item.position, {
        x:
          (index - active - half + $items.length * (cycles + 1)) *
          (planeSettings.width + planeSettings.gap),
        y: yPos,
      });
    }
  };

  useFrame(() => {
    const autoScrollSpeed = !isMouseOver ? 0.7 / images.length : 0;
    progress.current = Math.max(0, progress.current + autoScrollSpeed);

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

  const renderSlider = () => {
    return (
      <group ref={setRoot}>
        {images.map((item, i) => (
          <CarouselItem
            width={planeSettings.width}
            height={planeSettings.height}
            onHandOver={(value) => setIsMouseOver(value)}
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
