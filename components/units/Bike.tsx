import { Torus as DreiTorus, Cylinder as DreiCylinder, RoundedBox } from '@react-three/drei'
import { Color } from 'react-three-fiber'
import { DoubleSide } from 'three'

import { Box } from '../utils/Box'
import { Position } from '../utils/Position'

interface ToursProps {
  radius?: number;
  tube?: number;
  radialSegments?: number;
  tubularSegments?: number;
  arc?: number;
  color?: Color;
}

const Torus: React.FC<ToursProps> = ({ radius, tube, radialSegments, tubularSegments, arc, color }) => (
  <DreiTorus args={ [ radius ?? 0.25, tube ?? 0.05, radialSegments ?? 10, tubularSegments ?? 100, arc ?? Math.PI * 2] } castShadow receiveShadow>
    <meshStandardMaterial color={ color ?? 'red' } metalness={ 0.25 } roughness={ 0.75 } />
  </DreiTorus>
)

interface CylinderProps {
  radius?: number;
  length?: number;
  segments?: number;
  color?: Color;
}

const Cylinder: React.FC<CylinderProps> = ({ radius, length, segments, color }) => (
  <DreiCylinder args={ [ radius ?? 1, radius ?? 1, length ?? 1, segments ?? 50] } castShadow receiveShadow>
    <meshStandardMaterial color={ color ?? 'red' } metalness={ 0.25 } roughness={ 0.75 } />
  </DreiCylinder>
)

const Frame = () => (
  <group>
    {/* Bottom Bracket */}
    <Position x={ -0.065 } y={ -0.2 } rotate={{ x: 90 }}>
      <Cylinder radius={ 0.06 } length={ 0.1 } color={ '#b5677b' } />
    </Position>

    {/* Seat Tube */}
    <Position x={ -0.15 } y={ 0.05 } rotate={{ z: 90 - 73 }}>
      <Cylinder radius={ 0.05 } length={ 0.5 } color={ '#b5677b' } />
    </Position>

    {/* Down Tube */}
    <Position x={ 0.15 } y={ -0.015 } rotate={{ z: -50 }}>
      <Cylinder radius={ 0.05 } length={ 0.53 } color={ '#b5677b' } />
    </Position>

    {/* Head Tube */}
    <Position x={ 0.35 } y={ 0.175 } rotate={{ z: 90 - 71 }}>
      <Cylinder radius={ 0.05 } length={ 0.25 } color={ '#b5677b' } />
    </Position>

    {/* Top Tube */}
    <Position x={ 0.07 } y={ 0.2 } rotate={{ z: 90 }}>
      <Cylinder radius={ 0.05 } length={ 0.53 } color={ '#b5677b' } />
    </Position>

    {/* Right Chainstay */}
    <Position x={ -0.32 } y={ -0.22 } z={ 0.095 } rotate={{ z: 90 }}>
      <Cylinder radius={ 0.025 } length={ 0.275 } color={ '#b5677b' } />
    </Position>
    <Position x={ -0.15 } y={ -0.22 } z={ 0.05 } rotate={{ z: 90, y: 45 }}>
      <Cylinder radius={ 0.025 } length={ 0.15 } color={ '#b5677b' } />
    </Position>

    {/* Left Chainstay */}
    <Position x={ -0.32 } y={ -0.22 } z={ -0.095 } rotate={{ z: 90 }}>
      <Cylinder radius={ 0.025 } length={ 0.275 } color={ '#b5677b' } />
    </Position>
    <Position x={ -0.15 } y={ -0.22 } z={ -0.05 } rotate={{ z: 90, y: -45 }}>
      <Cylinder radius={ 0.025 } length={ 0.15 } color={ '#b5677b' } />
    </Position>

    {/* Seatstays */}
    <Position x={ -0.35 } y={ 0.4 } rotate={{ z: 60 }}>
      {/* Right */}
      <Position x={ -0.385 } y={ -0.22 } z={ 0.095 } rotate={{ z: 90 }}>
        <Cylinder radius={ 0.025 } length={ 0.4 } color={ '#b5677b' } />
      </Position>
      <Position x={ -0.15 } y={ -0.22 } z={ 0.05 } rotate={{ z: 90, y: 45 }}>
        <Cylinder radius={ 0.025 } length={ 0.15 } color={ '#b5677b' } />
      </Position>

      {/* Left */}
      <Position x={ -0.385 } y={ -0.22 } z={ -0.095 } rotate={{ z: 90 }}>
        <Cylinder radius={ 0.025 } length={ 0.4 } color={ '#b5677b' } />
      </Position>
      <Position x={ -0.15 } y={ -0.22 } z={ -0.05 } rotate={{ z: 90, y: -45 }}>
        <Cylinder radius={ 0.025 } length={ 0.15 } color={ '#b5677b' } />
      </Position>
    </Position>

    {/* Fork */}
    <Position x={ 0.125 } y={ 0.125 } rotate={{ z: 110 }}>
      {/* Right Chainstay */}
      <Position x={ -0.32 } y={ -0.22 } z={ 0.095 } rotate={{ z: 90 }}>
        <Cylinder radius={ 0.025 } length={ 0.275 } color={ '#b5677b' } />
      </Position>
      <Position x={ -0.15 } y={ -0.22 } z={ 0.05 } rotate={{ z: 90, y: 45 }}>
        <Cylinder radius={ 0.025 } length={ 0.15 } color={ '#b5677b' } />
      </Position>

      {/* Left Chainstay */}
      <Position x={ -0.32 } y={ -0.22 } z={ -0.095 } rotate={{ z: 90 }}>
        <Cylinder radius={ 0.025 } length={ 0.275 } color={ '#b5677b' } />
      </Position>
      <Position x={ -0.15 } y={ -0.22 } z={ -0.05 } rotate={{ z: 90, y: -45 }}>
        <Cylinder radius={ 0.025 } length={ 0.15 } color={ '#b5677b' } />
      </Position>
    </Position>

    {/* Seat Post */}
    <Position x={ -0.21 } y={ 0.25 } rotate={{ z: 90 - 73 }}>
      <Cylinder radius={ 0.03 } length={ 0.35 } color={ '#292929' } />
    </Position>
  </group>
)

const Handlebars = () => (
  <group>
      <Position x={ 0.085 } y={ 0 } rotate={{ x: 90 }}>
        <Cylinder radius={ 0.03 } length={ 0.25 } color={ '#292929' } />
      </Position>

      {/* Right Drop */}
      <Position z={ 0.025 }>
        <Position x={ 0.16 } z={ 0.1 } rotate={{ x: 90, z: 90 }}>
          <Torus radius={ 0.075 } tube={ 0.0305 } radialSegments={ 10 } tubularSegments={ 100 } arc={ Math.PI / 2 } color={ '#292929' } />
        </Position>
        <Position x={ 0.159 } y={ -0.076 } z={ 0.175 } rotate={{ z: -90 }}>
          <Torus radius={ 0.075 } tube={ 0.0305 } radialSegments={ 10 } tubularSegments={ 100 } arc={ Math.PI } color={ '#292929' } />
        </Position>
        <Position x={ 0.125 } y={ -0.15 } z={ 0.175 } rotate={{ z: 90 }}>
          <Cylinder radius={ 0.03 } length={ 0.075 } color={ '#292929' } />
        </Position>
        <Position x={ 0.225 } y={ 0.02 } z={ 0.175} rotate={{ z: 45 }}>
          <Box height={ 0.04 } width={ 0.05 } depth={ 0.04 } color={ '#292929' } />
        </Position>
        <Position x={ 0.275 } y={ -0.025 } z={ 0.175} rotate={{ z: 30 }}>
          <Box height={ 0.1 } width={ 0.02 } depth={ 0.025 } color={ '#4d4d4d' } />
        </Position>
      </Position>

      {/* Left Drop */}
      <Position z={ -0.025 }>
        <Position x={ 0.16 } z={ -0.1 } rotate={{ x: -90, z: 90 }}>
          <Torus radius={ 0.075 } tube={ 0.0305 } radialSegments={ 10 } tubularSegments={ 100 } arc={ Math.PI / 2 } color={ '#292929' } />
        </Position>
        <Position x={ 0.159 } y={ -0.076 } z={ -0.175 } rotate={{ z: -90 }}>
          <Torus radius={ 0.075 } tube={ 0.0305 } radialSegments={ 10 } tubularSegments={ 100 } arc={ Math.PI } color={ '#292929' } />
        </Position>
        <Position x={ 0.125 } y={ -0.15 } z={ -0.175 } rotate={{ z: 90 }}>
          <Cylinder radius={ 0.03 } length={ 0.075 } color={ '#292929' } />
        </Position>
        <Position x={ 0.225 } y={ 0.02 } z={ -0.175} rotate={{ z: 45 }}>
          <Box height={ 0.04 } width={ 0.05 } depth={ 0.04 } color={ '#292929' } />
        </Position>
        <Position x={ 0.275 } y={ -0.025 } z={ -0.175} rotate={{ z: 30 }}>
          <Box height={ 0.1 } width={ 0.02 } depth={ 0.025 } color={ '#4d4d4d' } />
        </Position>
      </Position>
  </group>
)

const Wheel: React.FC<{ rear?: boolean }> = ({ rear }) => (
  <group>
    <Torus radius={ 0.25 } tube={ 0.05 } radialSegments={ 100 } tubularSegments={ 100 } color={ '#2e2922' } />
    <Position x={ 0 } y={ 0 } rotate={{ x: 90 }}>
      <Cylinder radius={ 0.03 } length={ 0.25 } color={ '#292929' } />
    </Position>
    { rear && (
      <group>
        <Position z={ 0.0575 } rotate={{ x: 90 }}>
          <Cylinder radius={ 0.07 } length={ 0.01 } color={ '#737373' } />
        </Position>
        <Position z={ 0.045 } rotate={{ x: 90 }}>
          <Cylinder radius={ 0.08 } length={ 0.01 } color={ '#737373' } />
        </Position>
        <Position z={ 0.0325 } rotate={{ x: 90 }}>
          <Cylinder radius={ 0.09 } length={ 0.01 } color={ '#737373' } />
        </Position>
      </group>
    ) }
  </group>
)

const Drivetrain = () => (
  <group>
    <Position x={ 0 } y={ 0 } rotate={{ x: 90 }}>
      <Cylinder radius={ 0.04 } length={ 0.15 } color={ '#292929' } />
    </Position>
    <Position z={ 0.0575 } y={ 0 } rotate={{ x: 90 }}>
      <Cylinder radius={ 0.07 } length={ 0.01 } color={ '#737373' } />
    </Position>
    <Position x={ 0.05 } z={ 0.085 } y={ -0.05 } rotate={{ z: 45 }}>
      <Box height={ 0.2 } width={ 0.05 } depth={ 0.02 } color={ '#333333' } />
    </Position>
    <Position x={ 0.1 } z={ 0.135 } y={ -0.1 } rotate={{ z: 0 }}>
      <Box height={ 0.01 } width={ 0.08 } depth={ 0.08 } color={ '#292929' } />
    </Position>
    <Position x={ -0.05 } y={ 0.05 } z={ -0.085 }  rotate={{ z: 45 }}>
      <Box height={ 0.2 } width={ 0.05 } depth={ 0.02 } color={ '#333333' } />
    </Position>
    <Position x={ -0.1 } y={ 0.1 } z={ -0.135 } rotate={{ z: 0 }}>
      <Box height={ 0.01 } width={ 0.08 } depth={ 0.08 } color={ '#292929' } />
    </Position>
  </group>
)

const scale = 1.5

export const Bike = () => (
  <group scale={ [scale, scale, scale] }>
    <Position x={ -0.475 } y={ -0.22 }>
      <Wheel rear />
    </Position>
    <Position x={ 0.475 } y={ -0.22 }>
      <Wheel />
    </Position>

    <Position x={ -0.01 } y={ 0.01 }>
      <Frame />
    </Position>

    <Position x={ -0.075 } y={ -0.19 }>
      <Drivetrain />
    </Position>

    {/* Stem */}
    <Position x={ 0.36 } y={ 0.35 } rotate={{ z: 90 - 71 }}>
      <Box height={ 0.05 } width={ 0.2 } depth={ 0.05 } color={ '#292929' } />
    </Position>

    <Position x={ 0.335 } y={ 0.375 }>
      <Handlebars />
    </Position>

    <Position x={ -0.25 } y={ 0.425 }>
      <RoundedBox args={[0.25, 0.04, 0.125]} radius={0.02} smoothness={4} castShadow receiveShadow>
        <meshStandardMaterial metalness={ 0.25 } roughness={ 0.75 } color="#333333" />
      </RoundedBox>
    </Position>
  </group>
)