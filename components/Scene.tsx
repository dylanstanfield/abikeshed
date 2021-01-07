import { useRef } from 'react'
import { Canvas } from 'react-three-fiber'
import { OrthographicCamera, OrbitControls } from '@react-three/drei'

import { Position } from './utils/Position'
import { Base } from './units/Base'
import { Frame } from './units/Frame'
import { Walls } from './units/Walls'
import { Roof } from './units/Roof'
import { Interior } from './units/Interior'
import { Woodpile } from './units/Woodpile'
import { Lantern } from './units/Lantern'
import { Barrels } from './units/Barrels'
import { DoorAwning } from './units/DoorAwning'

export default () => {
  const cam = useRef()

  return (
    <Canvas shadowMap camera={{ position: [10, 10, 10] }}>
      <OrthographicCamera ref={ cam } zoom={ 10 } />
      <OrbitControls />
      <ambientLight />
      <spotLight
        color={ 'white' }
        intensity={ 0.6 }
        position={ [5, 10, 10] }
        shadow-mapSize-width={ 2048 }
        shadow-mapSize-height={ 2048 }
        castShadow
      />
      <group>
        <Position y={ -0.6 }>
          <Base />
        </Position>
        <Frame />
        <Walls />
        <Position x={ 3.37 } y={ 2.2 } rotate={{ z: -15 }}>
          <DoorAwning />
        </Position>
        <Position y={ 3.25 } rotate={{ x: 15 }}>
          <Roof />
        </Position>
        <Interior />
        <Position x={ -1.25 } y={ -0.1 } z={ -2.4 }>
          <Woodpile />
        </Position>
        <Position x={ -2 } y={ 0 } z={ -3.2 } rotate={{ y: 40 }}>
          <Lantern />
        </Position>
        <Position x={ -2 } y={ 0.1 } z={ 2.5 }>
          <Barrels />
        </Position>
      </group>
    </Canvas>
  )
}