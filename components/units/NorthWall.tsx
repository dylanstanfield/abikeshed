import { Euler } from 'react-three-fiber'

import { WallSlat } from '../parts/WallSlat'

const rotate180: Euler = [0, Math.PI, 0]

const height = (i: number) => 0.45 * i;

export const NorthWall = () => (
  <group position={ [0, 0.1, -1.8] }>
    <WallSlat position={ [0, height(0), 0] } width={ 5.2 } rotation={ rotate180 } />
    <WallSlat position={ [0, height(1), 0] } width={ 5.2 } rotation={ rotate180 } />
    <WallSlat position={ [0, height(2), 0] } width={ 5.2 } rotation={ rotate180 } />
    <WallSlat position={ [0, height(3), 0] } width={ 5.2 } rotation={ rotate180 } />
    <WallSlat position={ [0, height(4), 0] } width={ 5.2 } rotation={ rotate180 } />
    <WallSlat position={ [0, height(5), 0] } width={ 5.2 } rotation={ rotate180 } />
    <WallSlat position={ [0, height(6), 0] } width={ 5.2 } rotation={ rotate180 } />
    <WallSlat position={ [0, height(7) - 0.1, 0] } width={ 5.2 } rotation={ rotate180 } small facade={ false } />
  </group>
)