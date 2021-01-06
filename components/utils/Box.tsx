import { Box as DreiBox } from '@react-three/drei'
import { Color } from 'react-three-fiber'

interface BoxProps {
  height?: number;
  width?: number;
  depth?: number;
  color?: Color;
  material?: JSX.Element;
  cancelShadow?: boolean;
}

export const Box: React.FC<BoxProps> = ({ height, width, depth, color, material, cancelShadow }) => (
  <DreiBox scale={ [width ?? 1, height ?? 1, depth ?? 1] } castShadow={ !cancelShadow } receiveShadow={ !cancelShadow }>
    { material ?? <meshStandardMaterial color={ color ?? 'red' } metalness={ 0.25 } roughness={ 0.75 } /> }
  </DreiBox>
)