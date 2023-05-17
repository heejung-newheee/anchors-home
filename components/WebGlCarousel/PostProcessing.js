import { forwardRef } from 'react';

import { MeshTransmissionMaterial } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
// import { useControls } from 'leva';
import { Color } from 'three';

const PostProcessing = forwardRef((_, ref) => {
  const { viewport } = useThree();

  const active = true;
  const ior = 0.9;

  return active ? (
    <mesh position={[0, 0, 1]}>
      <planeGeometry args={[viewport.width, viewport.height]} />{/*4625c2*/}
      <MeshTransmissionMaterial
        ref={ref}
        background={new Color('#522de1')}
        transmission={0.5}
        // anisotropy={2}
        ior={ior}
        roughness={0}
        thickness={0}
      />
    </mesh>
  ) : null;
});

export default PostProcessing;
