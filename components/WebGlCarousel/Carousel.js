import { useEffect, useRef, useState, useMemo } from 'react';

import { useFrame, useThree } from '@react-three/fiber';
import gsap from 'gsap';

import CarouselItem from './CarouselItem';
import PostProcessing from './PostProcessing';
import { lerp, getPiramidalIndex } from './utils';

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
    const piramidalIndex = getPiramidalIndex($items, active)[index];
    gsap.to(item.position, {
      x: (index - active) * (planeSettings.width + planeSettings.gap),
      y: $items.length * -0.1 + piramidalIndex * 0.1,
    });

    /*gsap.to(item.rotation, {
      y: (Math.PI / 45) * (active - index),
    });*/
  };

  useFrame(() => {
    const autoScrollSpeed = !isMouseOver ? 0.7 / images.length : 0;
    progress.current = Math.max(
      0,
      Math.min(progress.current + autoScrollSpeed, 100),
    );

    const active = Math.floor((progress.current / 100) * ($items.length - 1));
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
            key={item.image}
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
