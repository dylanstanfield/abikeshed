import { Fragment, useRef } from 'react'
import { Canvas } from 'react-three-fiber'
import { Box, OrthographicCamera, OrbitControls } from '@react-three/drei'

import { Frame } from './units/Frame'
import { SouthWall } from './units/SouthWall'
import { EastWall } from './units/EastWall'
import { NorthWall } from './units/NorthWall'
import { WestWall } from './units/WestWall'
import { Floor } from './units/Floor'

const Shed = () => (
  <group position={ [0, 0, 0] }>
    <Frame />
    <Floor />
    <SouthWall />
    <EastWall />
    <NorthWall />
    <WestWall />
  </group>
)

const Scene = () => (
  <Fragment>
    <ambientLight />
    <spotLight
      intensity={0.6}
      position={[0, 100, 50]}
      penumbra={1}
      shadow-mapSize-width={2048}
      shadow-mapSize-height={2048}
      castShadow
    />
    <Box scale={ [8, 0.5, 6] } position={ [0, -0.75, 0] } castShadow receiveShadow>
      <meshLambertMaterial color='#3b752b' />
    </Box>
    <Shed />
  </Fragment>
)

export default () => {
  const cam = useRef()

  return (
    <Canvas shadowMap camera={{ position: [7, 2.5, 5] }}>
      <OrthographicCamera ref={cam} zoom={10} />
      <Scene />
      <OrbitControls />
    </Canvas>
  )
}