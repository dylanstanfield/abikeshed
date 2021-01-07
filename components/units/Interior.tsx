import { Box } from '../utils/Box'
import { Position } from '../utils/Position'
import { useTexture } from '@react-three/drei'
import { Suspense } from 'react'
import { Texture } from 'three'

import { Bike, Handlebars } from './Bike'
import { Cylinder } from '../utils/Cylinder'

const Workbench = () => (
  <group>
    <Position x={ -2 } y={ 0.75 }>
      <Box height={ 0.15 } depth={ 2.75 } color={ '#947746' } />
    </Position>
    <Position x={ -2 }>
      <Box height={ 0.12 } depth={ 2.75 } color={ '#876d40' } />
    </Position>
    <Position x={ -1.65 } y={ 0.25 } z={ 1.2 }>
      <Box height={ 1.2 } width={ 0.25 } depth={ 0.25 } color={ '#755f38' } />
    </Position>
    <Position x={ -1.65 } y={ 0.25 } z={ -1.2 }>
      <Box height={ 1.2 } width={ 0.25 } depth={ 0.25 } color={ '#755f38' } />
    </Position>
    <Position x={ -2.325 } y={ 0.25 } z={ 1.2 }>
      <Box height={ 1.2 } width={ 0.25 } depth={ 0.25 } color={ '#755f38' } />
    </Position>
    <Position x={ -2.325 } y={ 0.25 } z={ -1.2 }>
      <Box height={ 1.2 } width={ 0.25 } depth={ 0.25 } color={ '#755f38' } />
    </Position>
  </group>
)

const Pump = () => (
  <group>
    <Box height={ 0.05 } width={ 0.15 } depth={ 0.5 } color={ '#292929' } />
    <Position y={ 0.4 }>
      <Cylinder radius={ 0.08 } length={ 0.75 } color={ '#8c941b' } />
    </Position>
    <Position y={ 0.6 }>
      <Cylinder radius={ 0.04 } length={ 0.75 } color={ '#292929' } />
    </Position>
    <Position y={ 1 } rotate={{ x: 90 }}>
      <Cylinder radius={ 0.04 } length={ 0.5 } color={ '#292929' } />
    </Position>
  </group>
)

const Maynard = () => {
  const texture = useTexture('/maynard.jpg') as Texture

  return (
    <group>
      <Box width={ 0.75 } depth={ 0.05 } material={(
        <meshBasicMaterial attach="material" map={texture} />
      )} />
      <Position x={ -0.4 } >
        <Box height={ 1.05 } width={ 0.05 } depth={ 0.1 } color={ '#292929' } />
      </Position>
      <Position y={ 0.5 } >
        <Box height={ 0.05 } width={ 0.8 } depth={ 0.1 } color={ '#292929' } />
      </Position>
      <Position x={ 0.4 } >
        <Box height={ 1.05 } width={ 0.05 } depth={ 0.1 } color={ '#292929' } />
      </Position>
      <Position y={ -0.5 } >
        <Box height={ 0.05 } width={ 0.8 } depth={ 0.1 } color={ '#292929' } />
      </Position>
    </group>
  )
}

export const Interior = () => {

  return (
    <group>
      <Position x={ 1.5 } y={ 0.35 } z={ 2.25 } rotate={{ x: -12 }}>
        <Bike color={ '#9c6581' } />
      </Position>
      <Position x={ 1.75 } y={ 1.25 } z={ -1 } rotate={{ x: 90, y: 90 }}>
        <Bike color={ '#359686' } />
      </Position>
      <Position x={ 0.75 } y={ 1.25 } z={ -1 } rotate={{ x: 90, y: 90 }}>
        <Bike color={ '#5a5c5b' } />
      </Position>
      <Position x={ -0.25 } y={ 1.25 } z={ -1 } rotate={{ x: 90, y: 90 }}>
        <Bike color={ '#ad561c' } />
      </Position>
  
      <Workbench />
  
      {/* Boxes */}
  
      <Position x={ -1.9 } y={ 0.3 } z={ 0.35 } rotate={{ y: 5 }}>
        <Box height={ 0.5 } width={ 0.5 } color={ '#9e4331' } />
      </Position>
      <Position x={ -1.9 } y={ 0.25 } z={ -0.7 } rotate={{ y: -12 }}>
        <Box height={ 0.4 } width={ 0.25 } depth={ 0.5 } color={ '#ebd9b5' } />
      </Position>
  
      <Position x={ -2.1 } y={ 1.2 } z={ -0.6 } rotate={{ y: -20, z: -40 }}>
        <group scale={ [1.4, 1.4, 1.4] }>
          <Handlebars />
        </group>
      </Position>
  
      {/* Tools */}
  
      <Position x={ -2 } y={ 0.85 } z={ 0.7 } rotate={{ y: 10, }}>
        <Box height={ 0.05 } width={ 0.5 } depth={ 0.15 } color={ '#25263b' } />
      </Position>
      <Position x={ -2 } y={ 0.85 } z={ 0.5 } rotate={{ y: 3 }}>
        <Box height={ 0.05 } width={ 0.3 } depth={ 0.1 } color={ '#2d4a45' } />
      </Position>
  
      <Position x={ 2.1 } y={ -0.225 } z={ 1.2 } rotate={{ y: -60 }}>
        <Pump />
      </Position>
  
      {/* Mat */}
  
      <Position x={ 2 } y={ -0.24 }>
        <Box height={ 0.025 } width={ 0.8 } depth={ 1.3 } color={ '#40403f' } />
      </Position>
  
      {/* Maynard */}
  
      <Position x={ -1.5 } y={ 1.7 } z={ -1.65 }>
        <Suspense fallback={<Box width={ 0.75 } depth={ 0.05 } color={ '#292929' } />}>
          <Maynard />
        </Suspense>
      </Position>
    </group>
  )
}