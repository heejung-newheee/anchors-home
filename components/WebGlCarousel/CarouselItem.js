import { useEffect, useRef, useState } from 'react';

import gsap from 'gsap';

import Plane from './Plane';

const CarouselItem = ({ index, width, height, item, onHandOver }) => {
  const $root = useRef();
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const hoverScale = hover ? 1.1 : 1;
    gsap.to($root.current.scale, {
      x: hoverScale,
      y: hoverScale,
      duration: 0.5,
      ease: 'power3.out',
    });

    onHandOver?.(hover);
  }, [hover, onHandOver]);

  return (
    <group
      ref={$root}
      onClick={() => {}}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <Plane width={width} height={height} texture={item.image} />
    </group>
  );
};

export default CarouselItem;
