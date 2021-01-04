import { useRef } from 'react'
import { Canvas } from 'react-three-fiber'
import { OrthographicCamera, OrbitControls } from '@react-three/drei'

import { Position } from './utils/Position'
import { Base } from './units/Base'
import { Frame } from './units/Frame'
import { Walls } from './units/Walls'

export default () => {
  const cam = useRef()

  return (
    <Canvas shadowMap camera={{ position: [10, 10, 10] }}>
      <OrthographicCamera ref={ cam } zoom={ 10 } />
      <OrbitControls />
      <ambientLight />
      <spotLight
        intensity={ 0.6 }
        position={ [25, 100, 50] }
        penumbra={ 1 }
        shadow-mapSize-width={ 2048 }
        shadow-mapSize-height={ 2048 }
        castShadow
      />
      <group>
        <Position y={ -0.5 }>
          <Base />
        </Position>
        <Position>
          <Frame />
        </Position>
        <Position>
          <Walls />
        </Position>
      </group>
    </Canvas>
  )
}