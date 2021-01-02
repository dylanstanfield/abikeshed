import { Euler } from 'react-three-fiber'

import { WallSlat } from '../parts/WallSlat'

const rotate90: Euler = [0, -Math.PI / 2, 0]

const height = (i: number) => 0.45 * i;

export const WestWall = () => (
  <group position={ [-2.8, 0.1, 0] }>
    <WallSlat position={ [0, height(0), 0] } width={ 3.2 } rotation={ rotate90 } />
    <WallSlat position={ [0, height(1), 0] } width={ 3.2 } rotation={ rotate90 } />
    <WallSlat position={ [0, height(2), 0] } width={ 3.2 } rotation={ rotate90 } />
    <WallSlat position={ [0, height(3), 0] } width={ 3.2 } rotation={ rotate90 } />
    <WallSlat position={ [0, height(4), 0] } width={ 3.2 } rotation={ rotate90 } />
    <WallSlat position={ [0, height(5), 0] } width={ 3.2 } rotation={ rotate90 } />
    <WallSlat position={ [-0.75, height(6), 0] } width={ 1.8 } rotation={ rotate90 } />
    <WallSlat position={ [0.1, height(6) - 0.1, 0] } width={ 0.5 } rotation={ rotate90 } small />
    <WallSlat position={ [-1.5, height(7) - 0.1, 0] } width={ 0.5 } rotation={ rotate90 } small />
  </group>
)