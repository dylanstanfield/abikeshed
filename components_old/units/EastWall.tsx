import { Euler } from 'react-three-fiber'

import { WallSlat } from '../parts/WallSlat'

const rotate90: Euler = [0, Math.PI / 2, 0]

export const EastWall = () => (
  <group position={ [2.8, 0.1, 0] }>
    <WallSlat position={ [-1.1, 0, 0] } width={ 1 } rotation={ rotate90 } />
    <WallSlat position={ [-1.1, 0.45, 0] } width={ 1 } rotation={ rotate90 } />
    <WallSlat position={ [-1.1, 0.9, 0] } width={ 1 } rotation={ rotate90 } />
    <WallSlat position={ [-1.1, 1.35, 0] } width={ 1 } rotation={ rotate90 } />

    <WallSlat position={ [1.1, 0, 0] } width={ 1 } rotation={ rotate90 } />
    <WallSlat position={ [1.1, 0.45, 0] } width={ 1 } rotation={ rotate90 } />
    <WallSlat position={ [1.1, 0.9, 0] } width={ 1 } rotation={ rotate90 } />
    <WallSlat position={ [1.1, 1.35, 0] } width={ 1 } rotation={ rotate90 } />

    <WallSlat position={ [0, 1.8, 0] } width={ 3.2 } rotation={ rotate90 } />
    <WallSlat position={ [0, 2.25, 0] } width={ 3.2 } rotation={ rotate90 } />
    <WallSlat position={ [0.75, 2.7, 0] } width={ 1.8 } rotation={ rotate90 } />
    <WallSlat position={ [-0.1, 2.6, 0] } width={ 0.5 } rotation={ rotate90 } small />
    <WallSlat position={ [1.5, 3.05, 0] } width={ 0.5 } rotation={ rotate90 } small />
  </group>
)