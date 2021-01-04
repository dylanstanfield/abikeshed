import { Vector3, Euler } from 'react-three-fiber'

import { Board } from './Board'

interface WallSlatProps {
  position: Vector3;
  width: number;
  rotation?: Euler;
  small?: boolean;
  facade?: boolean;
}

export const WallSlat: React.FC<WallSlatProps> = ({ position, width, rotation, small, facade = true }) => {
  const facadePosition: Vector3 = [position[0], position[1] + 0.05, position[2] + 0.05]
  return (
    <group rotation={rotation}>
      { facade && <Board scale={ [width, small ? 0.2 : 0.4, 0.05] } position={ facadePosition } color='#635732' /> }
      <Board scale={ [width, small ? 0.2 : 0.4, 0.05] } position={ position } color='#5c512f' />
    </group>
  )
}