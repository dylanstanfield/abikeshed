import { Euler } from 'react-three-fiber'

import { WallSlat } from '../parts/WallSlat'
import { Board } from '../parts/Board'
import { Glass } from '../parts/Glass'
import { colors } from '../colors'

const rotate90: Euler = [0, -Math.PI / 2, 0]

const height = (i: number) => 0.45 * i;

export const WestWall = () => (
  <group position={ [-2.8, 0.1, 0] }>
    <WallSlat position={ [0, height(0), 0] } width={ 3.2 } rotation={ rotate90 } />
    <WallSlat position={ [0, height(1), 0] } width={ 3.2 } rotation={ rotate90 } />
    <WallSlat position={ [-1.2, height(2), 0] } width={ 0.8 } rotation={ rotate90 } />
    <WallSlat position={ [1.2, height(2), 0] } width={ 0.8 } rotation={ rotate90 } />
    <WallSlat position={ [-1.2, height(3), 0] } width={ 0.8 } rotation={ rotate90 } />
    <WallSlat position={ [1.2, height(3), 0] } width={ 0.8 } rotation={ rotate90 } />
    <WallSlat position={ [0, height(4), 0] } width={ 3.2 } rotation={ rotate90 } />
    <WallSlat position={ [0, height(5), 0] } width={ 3.2 } rotation={ rotate90 } />
    <WallSlat position={ [-0.75, height(6), 0] } width={ 1.8 } rotation={ rotate90 } />
    <WallSlat position={ [0.1, height(6) - 0.1, 0] } width={ 0.5 } rotation={ rotate90 } small />
    <WallSlat position={ [-1.5, height(7) - 0.1, 0] } width={ 0.5 } rotation={ rotate90 } small />

    {/* Window */}
    <group rotation={ rotate90 } position={ [1.75, -0.1, 1.4] }>
      <Board scale={ [1.7, 0.1, 0.2] } position={ [-1.42, 0.8, 1.8] } color={ colors.window.trim } />
      <Board scale={ [1.7, 0.1, 0.2] } position={ [-1.42, 1.7, 1.8] } color={ colors.window.trim } />
      <Board scale={ [0.1, 0.9, 0.2] } position={ [-2.22, 1.2, 1.8] } color={ colors.window.trim } />
      <Board scale={ [0.1, 0.9, 0.2] } position={ [-0.62, 1.2, 1.8] } color={ colors.window.trim } />
      <Glass position={ [-1.42, 1.2, 1.8] } height={ 0.9 } width={ 1.6 } />
    </group>
  </group>
)