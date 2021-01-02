import { Vector3 } from 'react-three-fiber'
import { Box } from '@react-three/drei'

interface GlassProps {
  position: Vector3;
  height: number;
  width: number;
}

export const Glass: React.FC<GlassProps> = ({ position, height, width }) => (
  <Box scale={ [width, height, 0.05] } position={ position } receiveShadow>
    <meshPhysicalMaterial
      color={ '#33ccff' }
      transparent
      opacity={ 0.333 }
      premultipliedAlpha
      envMapIntensity={ 1 }
      roughness={ 0 }
      metalness={ 0.5 } />
  </Box>
)