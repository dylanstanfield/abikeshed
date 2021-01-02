import { Fragment } from "react";
import { Vector3 } from 'react-three-fiber'

import { Board } from './Board'

interface WallSlatProps {
  position: Vector3;
  width: number;
}

export const WallSlat: React.FC<WallSlatProps> = ({ position, width }) => {
  const facadePosition: Vector3 = [position[0], position[1] + 0.05, position[2] + 0.05]
  return (
    <group>
      <Board scale={ [width, 0.4, 0.05] } position={ facadePosition } color='#635732' />
      <Board scale={ [width, 0.4, 0.05] } position={ position } color='#5c512f' />
    </group>
  )
}