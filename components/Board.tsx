import { Color, Euler, Vector3 } from 'react-three-fiber'
import { Box } from '@react-three/drei'

interface BoardProps {
  scale: Vector3;
  position: Vector3;
  rotation?: Euler;
  color: Color; 
}

export const Board: React.FC<BoardProps> = ({ scale, position, rotation, color }) => (
  <Box scale={scale} position={position} rotation={rotation} castShadow receiveShadow>
    <meshLambertMaterial color={color} />
  </Box>
)