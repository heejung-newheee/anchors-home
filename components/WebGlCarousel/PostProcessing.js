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
      <planeGeometry args={[viewport.width, viewport.height]} />
      <MeshTransmissionMaterial
        ref={ref}
        background={new Color('#4625C2')}
        transmission={0.7}
        roughness={0}
        thickness={0}
        chromaticAberration={0.08}
        anisotropy={4}
        ior={ior}
      />
    </mesh>
  ) : null;
});

export default PostProcessing;
