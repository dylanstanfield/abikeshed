import { Fragment, useRef } from 'react'
import { Canvas } from 'react-three-fiber'
import { Box, OrthographicCamera, OrbitControls } from '@react-three/drei'

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
      <meshLambertMaterial color='green' wireframe={false} />
    </Box>
    {/* Reference Cube */}
    {/* <Box scale={ [1, 1, 1] } castShadow receiveShadow>
      <meshLambertMaterial color='orange' wireframe={false} />
    </Box> */}

    {/* Frame */}
    <group position={ [1, 0, 0] }>
      {/* Floor North */}
      <Box scale={ [6, 0.4, 0.4] } position={ [-1, -0.3, -1.8] } castShadow receiveShadow>
        <meshLambertMaterial color='peru' />
      </Box>
      {/* Floor South */}
      <Box scale={ [6, 0.4, 0.4] } position={ [-1, -0.3, 1.8] } castShadow receiveShadow>
        <meshLambertMaterial color='peru' />
      </Box>
      {/* Floor West */}
      <Box scale={ [0.4, 0.4, 4] } position={ [-3.8, -0.3, 0] } castShadow receiveShadow>
        <meshLambertMaterial color='peru' />
      </Box>
      {/* Floor East */}
      <Box scale={ [0.4, 0.4, 4] } position={ [1.8, -0.3, 0] } castShadow receiveShadow>
        <meshLambertMaterial color='peru' />
      </Box>

      {/* Post Southeast */}
      <Box scale={ [0.4, 3, 0.4] } position={ [1.8, 1, 1.8] } castShadow receiveShadow>
        <meshLambertMaterial color='peru' />
      </Box>
      {/* Post Southwest */}
      <Box scale={ [0.4, 3, 0.4] } position={ [-3.8, 1, 1.8] } castShadow receiveShadow>
        <meshLambertMaterial color='peru' />
      </Box>
      {/* Post Northeast */}
      <Box scale={ [0.4, 4, 0.4] } position={ [1.8, 1.5, -1.8] } castShadow receiveShadow>
        <meshLambertMaterial color='peru' />
      </Box>
      {/* Post Northwest */}
      <Box scale={ [0.4, 4, 0.4] } position={ [-3.8, 1.5, -1.8] } castShadow receiveShadow>
        <meshLambertMaterial color='peru' />
      </Box>

      {/* Ceiling North */}
      <Box scale={ [6, 0.4, 0.4] } position={ [-1, 3.3, -1.8] } castShadow receiveShadow>
        <meshLambertMaterial color='peru' />
      </Box>
      {/* Ceiling South */}
      <Box scale={ [6, 0.4, 0.4] } position={ [-1, 2.3, 1.8] } castShadow receiveShadow>
        <meshLambertMaterial color='peru' />
      </Box>
      {/* Ceiling West */}
      <Box scale={ [0.4, 0.4, 5] } position={ [-3.8, 2.9, 0] } rotation={ [0.27, 0, 0] } castShadow receiveShadow>
        <meshLambertMaterial color='peru' />
      </Box>
      {/* Ceiling East */}
      <Box scale={ [0.4, 0.4, 5] } position={ [1.8, 2.9, 0] } rotation={ [0.27, 0, 0] } castShadow receiveShadow>
        <meshLambertMaterial color='peru' />
      </Box>
    </group>


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