import { Box as DreiBox } from '@react-three/drei'
import { Color } from 'react-three-fiber'

interface BoxProps {
  height?: number;
  width?: number;
  depth?: number;
  color?: Color;
}

export const Box: React.FC<BoxProps> = ({ height, width, depth, color }) => (
  <DreiBox scale={ [width ?? 1, height ?? 1, depth ?? 1] } castShadow receiveShadow>
    <meshPhongMaterial color={ color ?? 'red' } />
  </DreiBox>
)