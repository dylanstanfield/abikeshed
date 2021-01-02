import { Fragment, useRef } from 'react'
import { Canvas } from 'react-three-fiber'
import { Box, OrthographicCamera, OrbitControls } from '@react-three/drei'

import { Board } from './Board'
import { WallSlat } from './WallSlat'
import { colors } from './colors';

const Shed = () => (
  <group position={ [0, 0, 0] }>
    {/* Floor North */}
    <Board scale={ [6, 0.4, 0.4] } position={ [0, -0.3, -1.8] } color={ colors.frame } />
    {/* Floor South */}
    <Board scale={ [6, 0.4, 0.4] } position={ [0, -0.3, 1.8] } color={ colors.frame } />
    {/* Floor West */}
    <Board scale={ [0.4, 0.4, 4] } position={ [-2.8, -0.3, 0] } color={ colors.frame } />
    {/* Floor East */}
    <Board scale={ [0.4, 0.4, 4] } position={ [2.8, -0.3, 0] } color={ colors.frame } />

    {/* Post Southeast */}
    <Board scale={ [0.4, 3, 0.4] } position={ [2.8, 1, 1.8] } color={ colors.frame } />
    {/* Post Southwest */}
    <Board scale={ [0.4, 3, 0.4] } position={ [-2.8, 1, 1.8] } color={ colors.frame } />
    {/* Post Northeast */}
    <Board scale={ [0.4, 4, 0.4] } position={ [2.8, 1.5, -1.8] } color={ colors.frame } />
    {/* Post Northwest */}
    <Board scale={ [0.4, 4, 0.4] } position={ [-2.8, 1.5, -1.8] } color={ colors.frame } />

    {/* Ceiling North */}
    <Board scale={ [6, 0.4, 0.4] } position={ [-0, 3.3, -1.8] } color={ colors.frame } />
    {/* Ceiling South */}
    <Board scale={ [6, 0.4, 0.4] } position={ [-0, 2.3, 1.8] } color={ colors.frame } />
    {/* Ceiling West */}
    <Board scale={ [0.4, 0.4, 5] } position={ [-2.8, 2.9, 0] } rotation={ [0.27, 0, 0] } color={ colors.frame } />
    {/* Ceiling East */}
    <Board scale={ [0.4, 0.4, 5] } position={ [2.8, 2.9, 0] } rotation={ [0.27, 0, 0] } color={ colors.frame } />

    {/* South Wall */}
    <WallSlat position={ [0, 0.1, 1.75] } width={ 5.2 } />
    <WallSlat position={ [0, 0.55, 1.75] } width={ 5.2 } />
    <group>
      <WallSlat position={ [0, 1, 1.75] } width={ 1.2 } />
      <WallSlat position={ [2.5, 1, 1.75] } width={ 0.5 } />
      <WallSlat position={ [-2.5, 1, 1.75] } width={ 0.5 } />
    </group>
    <group>
      <WallSlat position={ [0, 1.45, 1.75] } width={ 1.2 } />
      <WallSlat position={ [2.5, 1.45, 1.75] } width={ 0.5 } />
      <WallSlat position={ [-2.5, 1.45, 1.75] } width={ 0.5 } />
    </group>
    <WallSlat position={ [0, 1.9, 1.75] } width={ 5.2 } />

    {/* Window Southwest */}
    <Board scale={ [1.7, 0.1, 0.2] } position={ [-1.42, 0.8, 1.8] } color={ colors.window.trim } />
    <Board scale={ [1.7, 0.1, 0.2] } position={ [-1.42, 1.7, 1.8] } color={ colors.window.trim } />
    <Board scale={ [0.1, 0.9, 0.2] } position={ [-2.22, 1.2, 1.8] } color={ colors.window.trim } />
    <Board scale={ [0.1, 0.9, 0.2] } position={ [-0.62, 1.2, 1.8] } color={ colors.window.trim } />
    <Box scale={ [1.6, 0.9, 0.05] } position={ [-1.42, 1.2, 1.8] } castShadow receiveShadow>
      <meshPhysicalMaterial
        color={ '#33ccff' }
        transparent
        opacity={ 0.333 }
        premultipliedAlpha
        envMapIntensity={ 1 }
        roughness={ 0 }
        metalness={ 0.5 } />
    </Box>

    {/* Window Southeast */}
    <Board scale={ [1.7, 0.1, 0.2] } position={ [1.42, 0.8, 1.8] } color={ colors.window.trim } />
    <Board scale={ [1.7, 0.1, 0.2] } position={ [1.42, 1.7, 1.8] } color={ colors.window.trim } />
    <Board scale={ [0.1, 0.9, 0.2] } position={ [2.22, 1.2, 1.8] } color={ colors.window.trim } />
    <Board scale={ [0.1, 0.9, 0.2] } position={ [0.62, 1.2, 1.8] } color={ colors.window.trim } />
    <Box scale={ [1.6, 0.9, 0.05] } position={ [1.42, 1.2, 1.8] } castShadow receiveShadow>
      <meshPhysicalMaterial
        color={ '#33ccff' }
        transparent
        opacity={ 0.333 }
        premultipliedAlpha
        envMapIntensity={ 1 }
        roughness={ 0 }
        metalness={ 0.5 } />
    </Box>
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
      <meshLambertMaterial color='#3b752b' wireframe={false} />
    </Box>
    {/* <Box scale={ [1, 1, 1] } castShadow receiveShadow>
      <meshLambertMaterial color='orange' wireframe={false} />
    </Box> */}

    <Shed />
    
  </Fragment>
)

export default () => {
  const cam = useRef()

  return (
    <Canvas shadowMap camera={{ position: [5, 5, 5] }}>
      <OrthographicCamera ref={cam} zoom={10} />
      <Scene />
      <OrbitControls />
    </Canvas>
  )
}