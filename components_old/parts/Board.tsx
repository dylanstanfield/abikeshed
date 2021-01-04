import { Color, Euler, Vector3 } from 'react-three-fiber'
import { Box } from '@react-three/drei'

interface BoardProps {
  scale: Vector3;
  position: Vector3;
  rotation?: Euler;
  color: Color; 
  wireframe?: boolean;
  dontReceiveShadow?: boolean;
}

export const Board: React.FC<BoardProps> = ({ scale, position, rotation, color, wireframe, dontReceiveShadow }) => (
  <Box scale={scale} position={position} rotation={rotation} castShadow receiveShadow={ !dontReceiveShadow }>
    <meshPhongMaterial color={color} wireframe={wireframe} />
  </Box>
)